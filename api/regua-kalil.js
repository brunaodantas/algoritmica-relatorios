// Função da Vercel que aplica a régua de corte do Kalil anúncio por anúncio, dentro de cada
// conjunto, nas campanhas regionais e na de reconhecimento. Compara cada anúncio ativo com a
// média ponderada dos anúncios ativos do próprio conjunto (soma do gasto ÷ soma do resultado),
// na campanha inteira e na semana do plano. O token fica em META_TOKEN_KALIL, nunca no HTML.
// Rota: /api/regua-kalil

const CONTA = "497414229054067";
const API = "https://graph.facebook.com/v21.0";
const INICIO = "2026-08-27";

const SEMANAS = [
  { nome: "Semana 1", ini: "2026-08-27", fim: "2026-09-03" },
  { nome: "Semana 2", ini: "2026-09-04", fim: "2026-09-10" },
  { nome: "Semana 3", ini: "2026-09-11", fim: "2026-09-17" },
  { nome: "Semana 4", ini: "2026-09-18", fim: "2026-09-24" },
  { nome: "Semana 5", ini: "2026-09-25", fim: "2026-10-01" },
];

// Campanha, rótulo e a métrica que ela existe para comprar.
const CAMPANHAS = [
  { id: "120249818950820061", chave: "VP", nome: "Visitas ao Perfil", principal: "seg" },
  { id: "120249818953380061", chave: "ENG", nome: "Engajamento", principal: "int" },
  { id: "120249818952010061", chave: "VIS", nome: "Visualizações", principal: "thru" },
  { id: "120249933470270061", chave: "REC", nome: "Reconhecimento", principal: "cpm" },
  { id: "120249949501920061", chave: "CLI", nome: "Cliques no link", principal: "cpc" },
];

// A principal de cada objetivo vale como secundária nos outros.
const SECUNDARIAS = {
  VP: ["int", "thru", "cpm"],
  ENG: ["seg", "eng", "thru", "cpm"],
  VIS: ["seg", "int", "cpm"],
  REC: ["seg", "int", "thru"],
  CLI: ["cpm"],
};

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

async function todas(caminho, params, token) {
  let out = [];
  let after = null;
  for (let i = 0; i < 20; i++) {
    const p = { ...params };
    if (after) p.after = after;
    const r = await meta(caminho, p, token);
    out = out.concat(r.data || []);
    if (!r.paging || !r.paging.next) break;
    after = r.paging.cursors.after;
  }
  return out;
}

// Clique é sempre clique no link. Interação é post_interaction_gross, sem autoplay de 3s.
const acao = (row, tipo) => {
  const a = (row.actions || []).find((x) => x.action_type === tipo);
  return a ? parseFloat(a.value) : 0;
};
const vid = (row, campo) => {
  const v = row[campo];
  return Array.isArray(v) && v[0] ? parseFloat(v[0].value) : 0;
};

const base = (r) => ({
  gasto: parseFloat(r.spend || 0),
  impr: parseFloat(r.impressions || 0),
  freq: parseFloat(r.frequency || 0),
  seg: parseFloat(r.instagram_profile_follow || 0),
  eng: acao(r, "post_engagement"),
  int: acao(r, "post_interaction_gross"),
  v3: acao(r, "video_view"),
  cliques: acao(r, "link_click"),
  plays: vid(r, "video_play_actions"),
  thru: vid(r, "video_thruplay_watched_actions"),
  p100: vid(r, "video_p100_watched_actions"),
});

const soma = (lista) => {
  const o = { gasto: 0, impr: 0, seg: 0, eng: 0, int: 0, v3: 0, cliques: 0, plays: 0, thru: 0, p100: 0 };
  for (const x of lista) for (const k in o) o[k] += x[k] || 0;
  return o;
};

const custo = (x, m) => {
  if (!x) return null;
  if (m === "cpm") return x.impr ? (x.gasto / x.impr) * 1000 : null;
  const den = { seg: x.seg, int: x.int, eng: x.eng, thru: x.thru, cpc: x.cliques, v3: x.v3, plays: x.plays, p100: x.p100 }[m];
  return den ? x.gasto / den : null;
};

const indice = (x, media, m) => {
  const c = custo(x, m);
  const cm = custo(media, m);
  return c && cm ? Math.round((cm / c) * 100) : null;
};

// Régua: abaixo de 70 na semana e abaixo de 90 na campanha sai; 70 a 89 observa;
// secundária em 110 ou mais salva se a principal estiver em 60 ou mais;
// menos de 3.000 impressões fica fora da conta; peça única nunca sai.
// Também seguram: conjunto v2 com menos de 3 dias e anúncio de visitas com menos de 5 seguidores.
function decide(a, nAtivos, principal, v2Novo) {
  if (nAtivos === 1) return { d: "unica", porque: "Única peça do conjunto" };
  if (a.W.impr < 3000 && a.F.impr < 3000) return { d: "pouco", porque: "Menos de 3.000 impressões" };
  const pW = a.W.impr >= 3000 ? a.idx.W : null;
  const pF = a.idx.F;
  const salva = Object.entries(a.sec).filter(([, v]) => v != null && v >= 110).map(([k]) => k);
  if (pW != null && pW < 70 && (pF == null || pF < 90)) {
    if (salva.length && pW >= 60) return { d: "observar", porque: `Salvo pela secundária: ${salva.join(", ")}` };
    if (v2Novo) return { d: "observar", porque: "Conjunto v2 com menos de 3 dias" };
    if (principal === "seg" && a.F.seg < 5) return { d: "observar", porque: "Menos de 5 seguidores, pouco dado" };
    return { d: "pausar", porque: "Caro na semana e na campanha" };
  }
  if (pW != null && pW < 90) return { d: "observar", porque: "Entre 70 e 89 na semana" };
  if (pW == null && pF != null && pF < 70) return { d: "observar", porque: "Caro na campanha, pouco dado na semana" };
  return { d: "manter", porque: "" };
}

export default async function handler(req, res) {
  const token = process.env.META_TOKEN_KALIL;
  if (!token) return res.status(500).json({ erro: "META_TOKEN_KALIL ausente" });

  const hoje = hojeSP();
  const semana = SEMANAS.find((s) => hoje >= s.ini && hoje <= s.fim) || SEMANAS[SEMANAS.length - 1];
  const P = {
    F: { ini: INICIO, fim: hoje, rotulo: "Campanha" },
    W: { ini: semana.ini, fim: hoje < semana.fim ? hoje : semana.fim, rotulo: semana.nome },
  };

  const campos = [
    "ad_id", "ad_name", "adset_id", "adset_name", "campaign_id", "spend", "impressions", "frequency",
    "actions", "instagram_profile_follow", "video_play_actions", "video_thruplay_watched_actions",
    "video_p100_watched_actions",
  ].join(",");
  const filtro = JSON.stringify([{ field: "campaign.id", operator: "IN", value: CAMPANHAS.map((c) => c.id) }]);

  try {
    const [ativos, conjuntosInfo, F, W] = await Promise.all([
      todas(`act_${CONTA}/ads`, {
        fields: "id",
        limit: "500",
        effective_status: JSON.stringify(["ACTIVE"]),
        filtering: JSON.stringify([{ field: "campaign.id", operator: "IN", value: CAMPANHAS.map((c) => c.id) }]),
      }, token),
      todas(`act_${CONTA}/adsets`, {
        fields: "id,created_time",
        limit: "500",
        filtering: JSON.stringify([{ field: "campaign.id", operator: "IN", value: CAMPANHAS.map((c) => c.id) }]),
      }, token),
      ...["F", "W"].map((k) =>
        todas(`act_${CONTA}/insights`, {
          level: "ad", fields: campos, limit: "500", filtering: filtro,
          time_range: JSON.stringify({ since: P[k].ini, until: P[k].fim }),
        }, token)
      ),
    ]);
    const ativo = new Set(ativos.map((a) => a.id));
    const criado = Object.fromEntries(conjuntosInfo.map((s) => [s.id, s.created_time]));
    const agora = Date.now();
    const porId = (rows) => Object.fromEntries(rows.map((r) => [r.ad_id, r]));
    const mF = porId(F);
    const mW = porId(W);

    // Onde mais cada peça ativa roda, para nunca deixar vídeo sem conjunto.
    const ondeRoda = {};
    for (const r of F) {
      if (!ativo.has(r.ad_id)) continue;
      const k = r.ad_name.trim().toLowerCase();
      (ondeRoda[k] = ondeRoda[k] || []).push({ camp: r.campaign_id, conjunto: r.adset_name });
    }

    const campanhas = CAMPANHAS.map((c) => {
      const conjuntos = {};
      for (const r of F) {
        if (r.campaign_id !== c.id || !ativo.has(r.ad_id)) continue;
        (conjuntos[r.adset_id] = conjuntos[r.adset_id] || { id: r.adset_id, nome: r.adset_name, ids: [] }).ids.push(r.ad_id);
      }
      const lista = Object.values(conjuntos).map((s) => {
        const aF = s.ids.map((i) => base(mF[i]));
        const aW = s.ids.map((i) => (mW[i] ? base(mW[i]) : base({})));
        const media = { F: soma(aF), W: soma(aW) };
        const anuncios = s.ids.map((i, n) => {
          const f = aF[n];
          const w = aW[n];
          const a = {
            id: i,
            nome: mF[i].ad_name,
            F: f,
            W: w,
            custo: { F: custo(f, c.principal), W: custo(w, c.principal) },
            idx: { F: indice(f, media.F, c.principal), W: w.impr ? indice(w, media.W, c.principal) : null },
            sec: Object.fromEntries(SECUNDARIAS[c.chave].map((m) => [m, w.impr ? indice(w, media.W, m) : null])),
            outros: (ondeRoda[mF[i].ad_name.trim().toLowerCase()] || [])
              .filter((o) => !(o.camp === c.id && o.conjunto === s.nome))
              .map((o) => `${CAMPANHAS.find((x) => x.id === o.camp)?.nome || "Clusters"} · ${o.conjunto}`),
          };
          if (c.chave === "VIS") {
            a.video = {
              gancho: w.impr ? w.v3 / w.impr : null,
              comecou: w.impr ? w.plays / w.impr : null,
              vtrThru: w.impr ? w.thru / w.impr : null,
              vtr100: w.plays ? w.p100 / w.plays : null,
              custo3s: custo(w, "v3"),
              custoPlay: custo(w, "plays"),
              custo100: custo(w, "p100"),
            };
          }
          const v2Novo = /v2/i.test(s.nome) && criado[s.id] && agora - new Date(criado[s.id]).getTime() < 3 * 864e5;
          Object.assign(a, decide(a, s.ids.length, c.principal, v2Novo));
          return a;
        });
        anuncios.sort((x, y) => y.W.gasto - x.W.gasto);
        return {
          id: s.id,
          nome: s.nome,
          media: { F: custo(media.F, c.principal), W: custo(media.W, c.principal) },
          anuncios,
        };
      });
      lista.sort((x, y) => x.nome.localeCompare(y.nome, "pt-BR"));
      return { chave: c.chave, nome: c.nome, principal: c.principal, conjuntos: lista };
    });

    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=1200");
    res.status(200).json({ lidoEm: new Date().toISOString(), periodos: P, campanhas });
  } catch (e) {
    res.status(502).json({ erro: String(e.message || e) });
  }
}
