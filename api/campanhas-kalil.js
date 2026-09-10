// Função da Vercel que lê a conta do Kalil no Meta e devolve os números agregados.
// O token fica em variável de ambiente (META_TOKEN_KALIL), nunca no HTML.
// Rota: /api/campanhas-kalil?semana=0..4

const CONTA = "497414229054067";
const API = "https://graph.facebook.com/v21.0";

const SEMANAS = [
  { nome: "Semana 1", ini: "2026-08-27", fim: "2026-09-03" },
  { nome: "Semana 2", ini: "2026-09-04", fim: "2026-09-10" },
  { nome: "Semana 3", ini: "2026-09-11", fim: "2026-09-17" },
  { nome: "Semana 4", ini: "2026-09-18", fim: "2026-09-24" },
  { nome: "Semana 5", ini: "2026-09-25", fim: "2026-10-01" },
];

const hojeSP = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }))
    .toISOString()
    .slice(0, 10);

async function meta(caminho, params, token) {
  const qs = new URLSearchParams({ ...params, access_token: token });
  const r = await fetch(`${API}/${caminho}?${qs}`);
  if (!r.ok) throw new Error(`Meta ${r.status}: ${(await r.text()).slice(0, 200)}`);
  return r.json();
}

const engDe = (row) => {
  const a = (row.actions || []).find((x) => x.action_type === "post_engagement");
  return a ? Math.round(parseFloat(a.value)) : 0;
};

const abaDe = (c) =>
  c.includes("CLUSTERS") || c.includes("CLIQUES NO LINK")
    ? "clusters"
    : c.includes("REGIONAIS")
    ? "regionais"
    : null;

const rotulo = (c) =>
  c
    .replace("REGIONAIS - ", "")
    .replace("CLUSTERS - ", "")
    .replace("VISITAS AO PERFIL INSTAGRAM", "Visitas ao Perfil")
    .replace("VISUALIZAÇÕES REMARKETING", "Visualizações RMKT")
    .toLowerCase()
    .replace(/(^|\s)\S/g, (t) => t.toUpperCase())
    .replace("Rmkt", "RMKT");

export default async function handler(req, res) {
  const token = process.env.META_TOKEN_KALIL;
  if (!token) {
    res.status(500).json({ erro: "META_TOKEN_KALIL não configurado no projeto" });
    return;
  }

  const i = Math.max(0, Math.min(4, parseInt(req.query.semana ?? "1", 10) || 0));
  const sem = SEMANAS[i];
  const hoje = hojeSP();
  const estado = sem.ini > hoje ? "futura" : sem.fim >= hoje ? "corrente" : "fechada";

  try {
    const [setsR, adsR] = await Promise.all([
      meta(`act_${CONTA}/adsets`, {
        fields: "id,name,effective_status,lifetime_budget,budget_remaining,campaign{name}",
        limit: "300",
      }, token),
      meta(`act_${CONTA}/ads`, {
        fields: "id,name,adset_id,effective_status",
        limit: "500",
      }, token),
    ]);

    const sinfo = {};
    for (const s of setsR.data) {
      const camp = s.campaign.name.split("| ").pop().trim();
      sinfo[s.id] = {
        nome: s.name,
        campanha: camp,
        aba: abaDe(camp),
        ativo: s.effective_status === "ACTIVE",
        verba: parseInt(s.lifetime_budget || 0, 10) / 100,
      };
    }
    const ainfo = {};
    for (const a of adsR.data) {
      ainfo[a.id] = { nome: a.name, adset: a.adset_id, ativo: a.effective_status === "ACTIVE" };
    }

    const dados = { clusters: {}, regionais: {} };
    const grupo = (aba, nome) =>
      (dados[aba][nome] ||= { onde: [], verba: 0, gasto: 0, eng: 0, ativo: false, ads: {} });
    let gastoTotal = 0;

    if (estado !== "futura") {
      const janela = JSON.stringify({ since: sem.ini, until: sem.fim < hoje ? sem.fim : hoje });
      const [insSet, insAd] = await Promise.all([
        meta(`act_${CONTA}/insights`, {
          level: "adset", fields: "adset_id,spend,impressions,actions",
          time_range: janela, limit: "500",
        }, token),
        meta(`act_${CONTA}/insights`, {
          level: "ad", fields: "ad_id,spend,impressions,actions",
          time_range: janela, limit: "500",
        }, token),
      ]);

      for (const row of insSet.data || []) {
        const s = sinfo[row.adset_id];
        if (!s || !s.aba || s.nome.includes("eletar")) continue;
        const g = grupo(s.aba, s.nome);
        g.gasto += parseFloat(row.spend);
        g.eng += engDe(row);
        if (!g.onde.includes(rotulo(s.campanha))) g.onde.push(rotulo(s.campanha));
        g.ativo ||= s.ativo;
        gastoTotal += parseFloat(row.spend);
      }
      for (const row of insAd.data || []) {
        const a = ainfo[row.ad_id];
        const s = a && sinfo[a.adset];
        if (!s || !s.aba || s.nome.includes("eletar")) continue;
        const g = grupo(s.aba, s.nome);
        const d = (g.ads[a.nome] ||= { gasto: 0, eng: 0, impr: 0, ativo: false });
        d.gasto += parseFloat(row.spend);
        d.eng += engDe(row);
        d.impr += parseInt(row.impressions, 10);
        d.ativo ||= a.ativo;
      }
    }

    if (estado === "corrente") {
      for (const s of Object.values(sinfo)) {
        if (!s.aba || !s.ativo || s.nome.includes("eletar")) continue;
        const g = grupo(s.aba, s.nome);
        g.verba += s.verba;
        g.ativo = true;
        if (!g.onde.includes(rotulo(s.campanha))) g.onde.push(rotulo(s.campanha));
      }
      for (const a of Object.values(ainfo)) {
        const s = sinfo[a.adset];
        if (!s || !s.aba || !s.ativo || !a.ativo || s.nome.includes("eletar")) continue;
        const g = grupo(s.aba, s.nome);
        (g.ads[a.nome] ||= { gasto: 0, eng: 0, impr: 0, ativo: false }).ativo = true;
      }
    }

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=900");
    res.status(200).json({
      semana: { ...sem, indice: i, estado },
      atualizado: new Date().toISOString(),
      gastoTotal,
      dados,
    });
  } catch (e) {
    res.status(502).json({ erro: String(e.message || e) });
  }
}
