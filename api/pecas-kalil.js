// Função da Vercel que lê as peças da conta do Kalil no Meta, peça a peça dentro de cada
// conjunto, e devolve os números de desempenho já comparados com a mediana do objetivo.
// O token fica em variável de ambiente (META_TOKEN_KALIL), nunca no HTML.
// Rota: /api/pecas-kalil?dias=7

const CONTA = "497414229054067";
const API = "https://graph.facebook.com/v21.0";

const hojeSP = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }))
    .toISOString()
    .slice(0, 10);

const menos = (data, n) => {
  const d = new Date(`${data}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
};

async function meta(caminho, params, token) {
  const qs = new URLSearchParams({ ...params, access_token: token });
  const r = await fetch(`${API}/${caminho}?${qs}`);
  if (!r.ok) throw new Error(`Meta ${r.status}: ${(await r.text()).slice(0, 200)}`);
  return r.json();
}

// Clique é sempre clique no link, nunca cliques totais.
// Interação é post_interaction_gross, que não conta autoplay de 3s.
const acao = (row, tipo) => {
  const a = (row.actions || []).find((x) => x.action_type === tipo);
  return a ? parseFloat(a.value) : 0;
};

const objetivoDe = (campanha) => {
  if (campanha.includes("VISITAS AO PERFIL")) return "Visitas ao Perfil";
  if (campanha.includes("VISUALIZAÇÕES")) return "Visualizações";
  if (campanha.includes("ENGAJAMENTO")) return "Engajamento";
  if (campanha.includes("RECONHECIMENTO")) return "Reconhecimento";
  if (campanha.includes("CLIQUES NO LINK")) return "Cliques no Link";
  return "Outros";
};

// Custo da métrica que cada objetivo existe para comprar.
const custoDoObjetivo = (objetivo, p) => {
  if (objetivo === "Visualizações") return p.thruplays ? p.gasto / p.thruplays : null;
  if (objetivo === "Reconhecimento") return p.impr ? (p.gasto / p.impr) * 1000 : null;
  if (objetivo === "Cliques no Link") return p.cliques ? p.gasto / p.cliques : null;
  return p.interacoes ? p.gasto / p.interacoes : null;
};

const mediana = (lista) => {
  const v = lista.filter((x) => x != null && isFinite(x)).sort((a, b) => a - b);
  if (!v.length) return null;
  const m = Math.floor(v.length / 2);
  return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
};

// Régua de elegibilidade, a mesma do boletim: 20 mil impressões para entrar no ranking.
const REGUA_IMPR = 20000;

export default async function handler(req, res) {
  const token = process.env.META_TOKEN_KALIL;
  if (!token) {
    res.status(500).json({ erro: "META_TOKEN_KALIL não configurado no projeto" });
    return;
  }

  // O período termina sempre em ontem: dia corrente é entrega parcial e infla o número.
  const ontem = menos(hojeSP(), 1);
  const valida = (s) => (/^\d{4}-\d{2}-\d{2}$/.test(s || "") ? s : null);

  let ini = valida(req.query.ini);
  let fim = valida(req.query.fim);
  if (!ini || !fim) {
    const dias = Math.max(3, Math.min(365, parseInt(req.query.dias ?? "7", 10) || 7));
    fim = ontem;
    ini = menos(fim, dias - 1);
  }
  if (fim > ontem) fim = ontem;
  if (ini > fim) ini = fim;
  const dias = Math.round((new Date(`${fim}T12:00:00Z`) - new Date(`${ini}T12:00:00Z`)) / 86400000) + 1;
  const janela = JSON.stringify({ since: ini, until: fim });

  try {
    const [setsR, adsR, insAd] = await Promise.all([
      meta(`act_${CONTA}/adsets`, {
        fields: "id,name,effective_status,campaign{name}",
        limit: "300",
      }, token),
      meta(`act_${CONTA}/ads`, {
        fields: "id,name,adset_id,effective_status",
        limit: "600",
      }, token),
      meta(`act_${CONTA}/insights`, {
        level: "ad",
        fields: "ad_id,adset_id,spend,impressions,frequency,actions,video_thruplay_watched_actions",
        time_range: janela,
        limit: "700",
      }, token),
    ]);

    const sinfo = {};
    for (const s of setsR.data) {
      const camp = s.campaign.name.split("| ").pop().trim();
      sinfo[s.id] = {
        nome: s.name,
        campanha: camp,
        objetivo: objetivoDe(camp),
        ativo: s.effective_status === "ACTIVE",
      };
    }
    const ainfo = {};
    for (const a of adsR.data) {
      ainfo[a.id] = {
        nome: a.name,
        adset: a.adset_id,
        ativo: a.effective_status === "ACTIVE",
        status: a.effective_status,
      };
    }

    const pecas = [];
    for (const row of insAd.data || []) {
      const a = ainfo[row.ad_id];
      const s = a && sinfo[a.adset];
      if (!s || s.nome.includes("eletar") || a.nome.includes("eletar")) continue;

      const thru = (row.video_thruplay_watched_actions || [])
        .reduce((t, x) => t + parseFloat(x.value || 0), 0);

      const p = {
        id: row.ad_id,
        peca: a.nome,
        conjunto: s.nome,
        campanha: s.campanha,
        objetivo: s.objetivo,
        ativo: a.ativo,
        status: a.status,
        conjuntoAtivo: s.ativo,
        gasto: parseFloat(row.spend || 0),
        impr: parseInt(row.impressions || 0, 10),
        freq: parseFloat(row.frequency || 0),
        cliques: acao(row, "link_click"),
        interacoes: acao(row, "post_interaction_gross"),
        compart: acao(row, "post"),
        thruplays: thru,
      };
      p.ctr = p.impr ? (p.cliques / p.impr) * 100 : 0;
      p.custo = custoDoObjetivo(s.objetivo, p);
      p.elegivel = p.impr >= REGUA_IMPR;
      pecas.push(p);
    }

    // Mediana de custo por objetivo, só entre as peças que passam da régua.
    const medianas = {};
    for (const obj of [...new Set(pecas.map((p) => p.objetivo))]) {
      medianas[obj] = mediana(
        pecas.filter((p) => p.objetivo === obj && p.elegivel).map((p) => p.custo)
      );
    }
    // Frequência mediana serve de referência de fadiga dentro do objetivo.
    const freqMed = {};
    for (const obj of [...new Set(pecas.map((p) => p.objetivo))]) {
      freqMed[obj] = mediana(
        pecas.filter((p) => p.objetivo === obj && p.elegivel).map((p) => p.freq)
      );
    }

    for (const p of pecas) {
      const med = medianas[p.objetivo];
      // Índice 100 = mediana do objetivo. Custo menor que a mediana passa de 100.
      p.indice = med && p.custo ? Math.round((med / p.custo) * 100) : null;
      const fm = freqMed[p.objetivo];
      p.fadiga = fm && p.freq ? Math.round((p.freq / fm) * 100) : null;

      if (!p.elegivel) p.selo = "Pouca entrega";
      else if (p.indice == null) p.selo = "Sem base";
      else if (p.indice >= 130) p.selo = "Escalar";
      else if (p.indice >= 90) p.selo = "Manter";
      else if (p.indice >= 70) p.selo = "Observar";
      else p.selo = "Pausar";

      if (p.selo === "Manter" && p.fadiga != null && p.fadiga >= 140) p.selo = "Observar";
    }

    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=1800");
    res.status(200).json({
      periodo: { ini, fim, dias },
      atualizado: new Date().toISOString(),
      regua: { impressoes: REGUA_IMPR },
      medianas,
      freqMediana: freqMed,
      pecas,
    });
  } catch (e) {
    res.status(502).json({ erro: String(e.message || e) });
  }
}
