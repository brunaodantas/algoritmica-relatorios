// Painel de leitura da conta do Kalil, alimentado pela Graph API em tempo real.
// Reproduz a lógica do painel da Algorítmica, que era atualizado à mão, com duas
// diferenças a favor: compartilhamento e seguidor saem da API por anúncio, sem digitação.
// Rota: /api/painel-kalil?janela=plano|flight|7d|ontem|hoje
// Token em variável de ambiente (META_TOKEN_KALIL), nunca no HTML.

const CONTA = "497414229054067";
const API = "https://graph.facebook.com/v21.0";

const FLIGHT_INI = "2026-08-27";
const FLIGHT_FIM = "2026-10-01";
const PLANO_INI = "2026-09-02";          // malha vigente
const META_TOTAL = 390000;
const GEO_SHARE = 0.70, CLU_SHARE = 0.30;

const SEMANAS = [
  { n: "Sem. 1 · boost inicial", s: "2026-08-27", e: "2026-09-03", meta: 55550 },
  { n: "Sem. 2 · retomada",      s: "2026-09-04", e: "2026-09-10", meta: 62200 },
  { n: "Sem. 3 · escadinha",     s: "2026-09-11", e: "2026-09-17", meta: 70000 },
  { n: "Sem. 4 · escadinha",     s: "2026-09-18", e: "2026-09-24", meta: 77800 },
  { n: "Sem. 5 · boost final",   s: "2026-09-25", e: "2026-10-01", meta: 124450 },
];
// as duas semanas com curva própria dentro da semana
const SEM1_DIA = { "2026-08-27": 6667, "2026-08-28": 6667, "2026-08-29": 6667, "2026-08-30": 6667,
  "2026-08-31": 6667, "2026-09-01": 6667, "2026-09-02": 8000, "2026-09-03": 8000 };
const SEM5_DIA = { "2026-09-25": 12000, "2026-09-26": 12000, "2026-09-27": 12000, "2026-09-28": 16000,
  "2026-09-29": 16000, "2026-09-30": 26000, "2026-10-01": 34000 };

const OBJ = {
  perfil:         { n: "Tráfego ao perfil", p: 0.40 },
  thruplay:       { n: "Thruplays",         p: 0.25 },
  engajamento:    { n: "Engajamento",       p: 0.25 },
  reconhecimento: { n: "Reconhecimento",    p: 0.10 },
};
const REGIOES = {
  rmbh:      { n: "Região Metropolitana de BH",    p: 0.25 },
  norte:     { n: "Norte, Jequitinhonha e Mucuri", p: 0.20 },
  triangulo: { n: "Triângulo e Alto Paranaíba",    p: 0.20 },
  sul:       { n: "Sul de Minas",                  p: 0.175 },
  vale:      { n: "Vale do Rio Doce e Zona da Mata", p: 0.175 },
  estadual:  { n: "Estado de MG (fora da malha)",  p: 0 },
  outra:     { n: "Outras",                        p: 0 },
};
const CLUSTERS = {
  cleitinho:   { n: "Eleitorado Cleitinho",    w: 1.5 },
  mulheres:    { n: "Mulheres periferia RMBH", w: 1.5 },
  servidor:    { n: "Servidor estadual",       w: 1 },
  seguranca:   { n: "Segurança pública",       w: 1 },
  classemedia: { n: "Classe média BH",         w: 1 },
  saude:       { n: "Tema saúde",              w: 1 },
  agro:        { n: "Agro / Triângulo (fora do plano)", w: 0 },
  whatsapp:    { n: "Grupo WhatsApp (fora do plano)",   w: 0 },
  outro:       { n: "Outros clusters",         w: 0 },
};
const CLU_W = 7;   // 1,5+1,5+1+1+1+1 — dá os 21,4% e 14,3% do painel

// régua do índice, igual à do painel
const REGUA = { horas: 12, gasto: 50, impr: 5000, shares: 10, follows: 10, thru: 1000, eng: 1000,
  minMetricas: 2, consolidadoDias: 3, consolidadoGasto: 300 };
const PESOS = { shares: 0.30, follows: 0.25, thru: 0.15, eng: 0.15, cpm: 0.15 };

// ---------------------------------------------------------------- utilidades

const hojeSP = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }))
    .toISOString().slice(0, 10);
const horaSP = () =>
  Number(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo", hour: "2-digit", hour12: false }));
const menos = (d, n) => { const x = new Date(`${d}T12:00:00Z`); x.setUTCDate(x.getUTCDate() - n); return x.toISOString().slice(0, 10); };
const dif = (a, b) => Math.round((new Date(`${b}T12:00:00Z`) - new Date(`${a}T12:00:00Z`)) / 86400000);
const semAcento = (s) => (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

async function meta(caminho, params, token) {
  const r = await fetch(`${API}/${caminho}?${new URLSearchParams({ ...params, access_token: token })}`);
  if (!r.ok) throw new Error(`Meta ${r.status}: ${(await r.text()).slice(0, 200)}`);
  return r.json();
}
async function metaTudo(caminho, params, token, maxPag = 20) {
  let url = `${API}/${caminho}?${new URLSearchParams({ ...params, access_token: token })}`;
  const out = [];
  for (let i = 0; i < maxPag && url; i++) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(`Meta ${r.status}: ${(await r.text()).slice(0, 200)}`);
    const j = await r.json();
    out.push(...(j.data || []));
    url = j.paging?.next || null;
  }
  return out;
}
const acao = (row, t) => { const a = (row.actions || []).find((x) => x.action_type === t); return a ? parseFloat(a.value) : 0; };
const somaV = (l) => (l || []).reduce((t, x) => t + parseFloat(x.value || 0), 0);
const mediana = (l) => {
  const v = l.filter((x) => x != null && isFinite(x) && x > 0).sort((a, b) => a - b);
  if (!v.length) return null;
  const m = Math.floor(v.length / 2);
  return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
};

// ---------------------------------------------------------------- curva do plano

const PLANO_DIA = (() => {
  const P = {};
  for (const w of SEMANAS) {
    const dias = dif(w.s, w.e) + 1;
    const det = w.s === "2026-08-27" ? SEM1_DIA : w.s === "2026-09-25" ? SEM5_DIA : null;
    const escala = det ? w.meta / Object.values(det).reduce((a, b) => a + b, 0) : 1;
    for (let i = 0; i < dias; i++) {
      const d = menos(w.s, -i);
      P[d] = det ? det[d] * escala : w.meta / dias;
    }
  }
  return P;
})();
const planoAcum = (de, ate) => {
  let t = 0;
  for (const [d, v] of Object.entries(PLANO_DIA)) if (d >= de && d <= ate) t += v;
  return t;
};

// ---------------------------------------------------------------- classificação

const objetivoDe = (campanha) => {
  const c = (campanha || "").toUpperCase();
  if (c.includes("VISITAS AO PERFIL") || c.includes("VISITA AO PERFIL")) return "perfil";
  if (c.includes("VISUALIZA") || c.includes("THRUPLAY") || c.includes("CPV")) return "thruplay";
  if (c.includes("ENGAJAMENTO")) return "engajamento";
  if (c.includes("RECONHECIMENTO") || c.includes("IMPRESS") || c.includes("ALCANCE")) return "reconhecimento";
  return "outro";
};
const CHAVES_CLUSTER = ["cluster -", "cleitinho", "mulheres", "servidor", "seguranca",
  "incidencia criminal", "classe media", "saude", "agro", "whatsapp", "pet e animais", "ofensiva", "base propria", "esquerda", "independente", "progressista", "torcedor", "seguidores"];
const blocoDe = (conjunto, campanha) => {
  if ((campanha || "").toUpperCase().includes("CLUSTERS")) return "cluster";
  const n = semAcento(conjunto);
  return CHAVES_CLUSTER.some((k) => n.includes(k)) ? "cluster" : "geo";
};
const regiaoDe = (conjunto) => {
  const n = semAcento(conjunto);
  if (n.includes("metropolitana") || n.includes("rmbh") || n.includes("barreiro") || n.includes("venda nova")) return "rmbh";
  if (n.includes("norte de minas") || n.includes("jequitinhonha") || n.includes("monte claros") || n.includes("montes claros") || n.includes("mucuri")) return "norte";
  if (n.includes("triangulo") || n.includes("uberl") || n.includes("uberaba") || n.includes("paranaiba")) return "triangulo";
  if (n.includes("sul de minas")) return "sul";
  if (n.includes("rio doce") || n.includes("zona da mata") || n.includes("juiz de fora")) return "vale";
  if (n.includes("estado de minas") || n.includes("estado mg") || n.includes("semelhantes")) return "estadual";
  return "outra";
};
const clusterDe = (conjunto) => {
  const n = semAcento(conjunto);
  if (n.includes("cleitinho")) return "cleitinho";
  if (n.includes("mulheres")) return "mulheres";
  if (n.includes("servidor")) return "servidor";
  if (n.includes("seguranca") || n.includes("incidencia criminal")) return "seguranca";
  if (n.includes("classe m")) return "classemedia";
  if (n.includes("saude")) return "saude";
  if (n.includes("agro")) return "agro";
  if (n.includes("whatsapp")) return "whatsapp";
  return "outro";
};

// ---------------------------------------------------------------- handler

export default async function handler(req, res) {
  const token = process.env.META_TOKEN_KALIL;
  if (!token) { res.status(500).json({ erro: "META_TOKEN_KALIL não configurado no projeto" }); return; }

  const hoje = hojeSP(), ontem = menos(hoje, 1);
  const janela = String(req.query.janela || "plano");
  const JAN = {
    plano:  { ini: PLANO_INI,      fim: hoje,  rotulo: "Plano vigente · desde 02/09" },
    flight: { ini: FLIGHT_INI,     fim: hoje,  rotulo: "Flight · desde 27/08" },
    "7d":   { ini: menos(ontem, 6), fim: ontem, rotulo: "Últimos 7 dias" },
    ontem:  { ini: ontem,          fim: ontem, rotulo: "Ontem" },
    hoje:   { ini: hoje,           fim: hoje,  rotulo: "Hoje · parcial" },
  }[janela];
  if (!JAN) { res.status(400).json({ erro: "janela inválida" }); return; }

  const tr = (a, b) => JSON.stringify({ since: a, until: b });
  const F_AD = "ad_id,adset_id,spend,impressions,reach,frequency,actions," +
    "video_thruplay_watched_actions,video_p25_watched_actions,video_p75_watched_actions," +
    "video_p100_watched_actions,instagram_profile_follow";
  const F_SET = "adset_id,spend,impressions,reach,frequency,actions,video_thruplay_watched_actions,instagram_profile_follow";

  try {
    const [conjuntos, anuncios, diario, insSetJ, insSetF, insAdJ, insAdF] = await Promise.all([
      metaTudo(`act_${CONTA}/adsets`, { fields: "id,name,effective_status,optimization_goal,lifetime_budget,budget_remaining,end_time,campaign{name}", limit: "200" }, token),
      metaTudo(`act_${CONTA}/ads`, { fields: "id,name,adset_id,effective_status,created_time", limit: "300" }, token),
      meta(`act_${CONTA}/insights`, { fields: "spend,impressions,reach,frequency,cpm", time_range: tr(FLIGHT_INI, hoje), time_increment: "1", limit: "60" }, token),
      metaTudo(`act_${CONTA}/insights`, { level: "adset", fields: F_SET, time_range: tr(JAN.ini, JAN.fim), limit: "200" }, token),
      metaTudo(`act_${CONTA}/insights`, { level: "adset", fields: F_SET, time_range: tr(FLIGHT_INI, hoje), limit: "200" }, token),
      metaTudo(`act_${CONTA}/insights`, { level: "ad", fields: F_AD, time_range: tr(JAN.ini, JAN.fim), limit: "300" }, token),
      metaTudo(`act_${CONTA}/insights`, { level: "ad", fields: F_AD, time_range: tr(FLIGHT_INI, hoje), limit: "300" }, token),
    ]);

    // -------- dicionários
    const cj = {};
    for (const s of conjuntos) {
      if ((s.name || "").includes("eletar")) continue;
      const campanha = s.campaign?.name || "";
      const bloco = blocoDe(s.name, campanha);
      cj[s.id] = {
        nome: s.name, campanha, objetivo: objetivoDe(campanha), bloco,
        regiao: bloco === "geo" ? regiaoDe(s.name) : null,
        cluster: bloco === "cluster" ? clusterDe(s.name) : null,
        ativo: ["ACTIVE", "IN_PROCESS"].includes(s.effective_status),
        verba: parseInt(s.lifetime_budget || 0, 10) / 100,
        saldo: parseInt(s.budget_remaining || 0, 10) / 100,
        fim: (s.end_time || "").slice(0, 10),
      };
    }
    const ad = {};
    for (const a of anuncios) {
      if ((a.name || "").includes("eletar")) continue;
      ad[a.id] = { nome: a.name, conjunto: a.adset_id, criado: (a.created_time || "").slice(0, 10),
        ativo: ["ACTIVE", "IN_PROCESS", "PENDING_REVIEW"].includes(a.effective_status) };
    }

    // -------- topo e curva
    const dias = (diario.data || []).map((d) => ({ dia: d.date_start, real: parseFloat(d.spend), plano: PLANO_DIA[d.date_start] || 0,
      cpm: parseFloat(d.cpm || 0), freq: parseFloat(d.frequency || 0) }));
    const doDia = (d) => (dias.find((x) => x.dia === d) || {}).real || 0;
    const total = dias.reduce((t, d) => t + d.real, 0);
    const totalOntem = total - doDia(hoje);
    const ult7 = dias.filter((d) => d.dia >= menos(ontem, 6) && d.dia <= ontem);
    const semAtual = SEMANAS.find((w) => hoje >= w.s && hoje <= w.e) || null;
    const planoAteOntem = planoAcum(FLIGHT_INI, ontem);
    const ativos = Object.values(cj).filter((c) => c.ativo);

    const topo = {
      total, bruto: total * 1.1215, totalOntem, planoAteOntem,
      desvio: planoAteOntem ? (totalOntem - planoAteOntem) / planoAteOntem : 0,
      hoje: doDia(hoje), planoHoje: PLANO_DIA[hoje] || 0,
      ontem: doDia(ontem), planoOntem: PLANO_DIA[ontem] || 0,
      media7: ult7.length ? ult7.reduce((t, d) => t + d.real, 0) / ult7.length : 0, n7: ult7.length,
      saldo: META_TOTAL - total, metaTotal: META_TOTAL,
      diasRestantes: Math.max(0, dif(hoje, FLIGHT_FIM) + 1),
      saldoConjuntos: ativos.reduce((t, c) => t + c.saldo, 0),
      semana: semAtual && (() => {
        const fech = dias.filter((d) => d.dia >= semAtual.s && d.dia < hoje && d.dia <= semAtual.e);
        const real = fech.reduce((t, d) => t + d.real, 0);
        const plano = fech.reduce((t, d) => t + d.plano, 0);
        return { nome: semAtual.n, meta: semAtual.meta, real, plano, dias: fech.length,
          gastoTotal: dias.filter((d) => d.dia >= semAtual.s && d.dia <= semAtual.e).reduce((t, d) => t + d.real, 0) };
      })(),
    };
    const semanas = SEMANAS.map((w) => {
      const dd = dias.filter((d) => d.dia >= w.s && d.dia <= w.e);
      const fech = dd.filter((d) => d.dia < hoje);
      return { nome: w.n, ini: w.s, fim: w.e, meta: w.meta,
        real: dd.reduce((t, d) => t + d.real, 0),
        realFechado: fech.reduce((t, d) => t + d.real, 0),
        planoAte: fech.reduce((t, d) => t + d.plano, 0),
        estado: w.e < hoje ? "fechada" : w.s > hoje ? "futura" : "corrente" };
    });

    // -------- malha, na janela escolhida
    const planoAte = janela === "plano"
      ? planoAcum(PLANO_INI, ontem) + (PLANO_DIA[hoje] || 0) * Math.min(1, horaSP() / 24)
      : planoAcum(JAN.ini, JAN.fim);

    const zer = () => ({ real: 0, impr: 0, alc: 0, visitas: 0, compart: 0, thru: 0, seg: 0, eng: 0 });
    const objAg = {}, regAg = {}, cluAg = {};
    let totGeo = 0, totClu = 0, totJan = 0;
    const setJ = {};
    for (const r of insSetJ) setJ[r.adset_id] = r;

    for (const r of insSetJ) {
      const c = cj[r.adset_id]; if (!c) continue;
      const g = parseFloat(r.spend); totJan += g;
      const põe = (o, k) => { const d = (o[k] ||= zer());
        d.real += g; d.impr += +r.impressions || 0; d.alc += +r.reach || 0;
        d.compart += acao(r, "post"); d.thru += somaV(r.video_thruplay_watched_actions);
        d.eng += acao(r, "post_interaction_gross"); d.seg += +r.instagram_profile_follow || 0;
        d.visitas += acao(r, "link_click"); };
      põe(objAg, c.objetivo);
      if (c.bloco === "cluster") { põe(cluAg, c.cluster); totClu += g; }
      else { põe(regAg, c.regiao); totGeo += g; }
    }

    const fatia = (ag, def, base, pctDe) => Object.entries(def).map(([k, d]) => {
      const x = ag[k] || zer();
      const pctPlano = pctDe(d) * 100;
      const plano = planoAte * pctDe(d);
      return { chave: k, nome: d.n, real: x.real, plano, pctPlano,
        pctReal: base ? (x.real / base) * 100 : 0,
        desvio: plano ? (x.real - plano) / plano : null,
        impr: x.impr, cpm: x.impr ? (x.real / x.impr) * 1000 : null,
        freq: x.alc ? x.impr / x.alc : null,
        custoVisita: x.visitas ? x.real / x.visitas : null,
        custoSeguidor: x.seg ? x.real / x.seg : null,
        custoCompart: x.compart ? x.real / x.compart : null,
        seg: x.seg, compart: x.compart, foraDoPlano: !pctDe(d) };
    }).filter((r) => r.real > 0 || r.plano > 0).sort((a, b) => b.real - a.real);

    const porObjetivo = fatia(objAg, OBJ, totJan, (d) => d.p);
    const porRegiao = fatia(regAg, REGIOES, totGeo, (d) => GEO_SHARE * d.p);
    const porCluster = fatia(cluAg, CLUSTERS, totClu, (d) => CLU_SHARE * (d.w / CLU_W));

    // -------- índice de criativo, sobre o flight inteiro
    const peca = {};
    for (const r of insAdF) {
      const a = ad[r.ad_id]; if (!a) continue;
      const c = cj[a.conjunto]; if (!c) continue;
      const p = (peca[a.nome] ||= { nome: a.nome, spend: 0, impr: 0, alc: 0, shares: 0, follows: 0,
        eng: 0, thru: 0, vv: 0, p25: 0, p75: 0, p100: 0, salv: 0, coment: 0, criado: a.criado,
        ativos: 0, conjuntos: new Set(), porObj: {}, linhas: [] });
      const g = parseFloat(r.spend), im = +r.impressions || 0;
      const sh = acao(r, "post"), fo = +r.instagram_profile_follow || 0;
      const en = acao(r, "post_interaction_gross"), th = somaV(r.video_thruplay_watched_actions);
      p.spend += g; p.impr += im; p.alc += +r.reach || 0;
      p.shares += sh; p.follows += fo; p.eng += en; p.thru += th;
      p.vv += acao(r, "video_view"); p.p25 += somaV(r.video_p25_watched_actions);
      p.p75 += somaV(r.video_p75_watched_actions); p.p100 += somaV(r.video_p100_watched_actions);
      p.salv += acao(r, "onsite_conversion.post_save"); p.coment += acao(r, "comment");
      if (a.criado && a.criado < p.criado) p.criado = a.criado;
      if (a.ativo && c.ativo) { p.ativos++; p.conjuntos.add(c.nome); }
      const o = (p.porObj[c.objetivo] ||= { spend: 0, follows: 0, eng: 0, thru: 0 });
      o.spend += g; o.follows += fo; o.eng += en; o.thru += th;
      p.linhas.push({ conjunto: c.nome, objetivo: c.objetivo, bloco: c.bloco, gasto: g, impr: im,
        eng: en, thru: th, seg: fo, compart: sh, ativo: a.ativo && c.ativo });
    }

    // custo por métrica: primeiro no objetivo que compra aquilo; senão, no total, como bônus
    const custoDe = (p, chave, objChave, minimo) => {
      const o = p.porObj[objChave];
      if (o && o[chave] >= minimo && o.spend > 0) return { n: o[chave], custo: o.spend / o[chave], modo: "direto" };
      if (p[chave] >= minimo && p[chave] > 0) return { n: p[chave], custo: p.spend / p[chave], modo: "bonus" };
      return { n: p[chave] || 0, custo: null, modo: "direto" };
    };

    const lista = Object.values(peca).map((p) => {
      const idade = p.criado ? dif(p.criado, hoje) : 0;
      const m = {
        shares:  { n: p.shares, custo: p.shares >= REGUA.shares ? p.spend / p.shares : null, modo: "direto" },
        follows: custoDe(p, "follows", "perfil", REGUA.follows),
        thru:    custoDe(p, "thru", "thruplay", REGUA.thru),
        eng:     custoDe(p, "eng", "engajamento", REGUA.eng),
        cpm:     { n: p.impr, custo: p.impr ? (p.spend / p.impr) * 1000 : null, modo: "direto" },
      };
      return { ...p, conjuntos: [...p.conjuntos], m, dias: idade, horas: idade * 24,
        video: p.vv > 0,
        elegivel: idade * 24 >= REGUA.horas && p.spend >= REGUA.gasto && p.impr >= REGUA.impr,
        consolidado: idade >= REGUA.consolidadoDias && p.spend >= REGUA.consolidadoGasto,
        falta: [
          idade * 24 < REGUA.horas ? `faltam ${Math.max(0, REGUA.horas - idade * 24)} h` : null,
          p.spend < REGUA.gasto ? `faltam R$ ${(REGUA.gasto - p.spend).toFixed(0)}` : null,
          p.impr < REGUA.impr ? `faltam ${(REGUA.impr - p.impr).toLocaleString("pt-BR")} impr.` : null,
        ].filter(Boolean),
        vtr: p.impr ? (p.vv / p.impr) * 100 : null,
        vtrThru: p.impr ? (p.thru / p.impr) * 100 : null,
        vtr75: p.impr ? (p.p75 / p.impr) * 100 : null,
        vtr100: p.impr ? (p.p100 / p.impr) * 100 : null,
        enganche: p.vv ? (p.thru / p.vv) * 100 : null,
        terminou: p.p25 ? (p.p100 / p.p25) * 100 : null,
      };
    });

    const eleg = lista.filter((p) => p.elegivel);
    const med = {};
    for (const k of Object.keys(PESOS)) med[k] = mediana(eleg.map((p) => p.m[k].custo));

    const LABEL = { shares: "compart.", follows: "seguidor", thru: "ThruPlay", eng: "engaj.", cpm: "CPM" };
    for (const p of lista) {
      let acc = 0, wsum = 0, leituras = 0;
      p.scores = {};
      for (const k of Object.keys(PESOS)) {
        const c = p.m[k].custo;
        if (c == null || !med[k]) continue;
        const razao = med[k] / c;
        const sc = Math.max(-2, Math.min(2, Math.log2(razao)));
        // métrica de bônus só conta quando é melhor que a mediana
        if (p.m[k].modo === "bonus" && sc < 0) { p.scores[k] = { sc: null, razao, ignorado: true }; continue; }
        p.scores[k] = { sc, razao, modo: p.m[k].modo };
        acc += PESOS[k] * sc; wsum += PESOS[k]; leituras++;
      }
      p.indice = p.elegivel && leituras >= REGUA.minMetricas && wsum > 0
        ? Math.round(100 * Math.pow(2, acc / wsum)) : null;
      p.sugestao = p.indice == null ? null
        : p.indice >= 140 ? "escalar" : p.indice >= 100 ? "manter" : p.indice >= 70 ? "revisar" : "pausar";
      p.leitura = !p.elegivel ? "em observação" : p.consolidado ? "consolidada" : "inicial";
      p.motivos = Object.entries(p.scores)
        .filter(([, v]) => v.sc != null && Math.abs(v.sc) >= 0.45)
        .sort((a, b) => Math.abs(b[1].sc) - Math.abs(a[1].sc))
        .map(([k, v]) => ({ chave: k, label: LABEL[k], razao: v.razao, bom: v.razao >= 1 }));
      p.semLeitura = Object.keys(PESOS).filter((k) => p.m[k].custo == null).map((k) => LABEL[k]);
      delete p.porObj;
    }
    const ranking = lista.filter((p) => p.indice != null).sort((a, b) => b.indice - a.indice);
    const observacao = lista.filter((p) => p.indice == null && p.spend > 0).sort((a, b) => b.spend - a.spend);

    // -------- conjuntos que pedem atenção, sobre o flight
    const setF = {};
    for (const r of insSetF) {
      const c = cj[r.adset_id]; if (!c || !c.ativo) continue;
      const g = parseFloat(r.spend), im = +r.impressions || 0;
      const resultado = c.objetivo === "perfil" ? acao(r, "link_click")
        : c.objetivo === "thruplay" ? somaV(r.video_thruplay_watched_actions)
        : c.objetivo === "reconhecimento" ? (+r.reach || 0) : acao(r, "post_interaction_gross");
      setF[r.adset_id] = { id: r.adset_id, nome: c.nome, objetivo: c.objetivo, gasto: g, impr: im,
        alc: +r.reach || 0, freq: parseFloat(r.frequency || 0),
        cpm: im ? (g / im) * 1000 : null, res: resultado, cpr: resultado ? g / resultado : null,
        saldo: c.saldo, fim: c.fim };
    }
    const porObjArr = {};
    for (const x of Object.values(setF)) if (x.gasto >= 50) (porObjArr[x.objetivo] ||= []).push(x);
    const medCpm = {}, medCpr = {};
    for (const [o, arr] of Object.entries(porObjArr)) {
      medCpm[o] = mediana(arr.map((x) => x.cpm));
      medCpr[o] = mediana(arr.map((x) => x.cpr));
    }
    const alertas = [];
    for (const x of Object.values(setF)) {
      if (x.gasto >= 50 && x.freq > 2.5)
        alertas.push({ ...x, tipo: "frequência", sev: x.freq > 3.5 ? "bad" : "warn", w: x.freq * 10,
          texto: `frequência ${x.freq.toFixed(2).replace(".", ",")}, público saturando: trocar criativo ou ampliar o público` });
      if (x.gasto >= 50 && x.cpm && medCpm[x.objetivo] && x.cpm > medCpm[x.objetivo] * 1.4)
        alertas.push({ ...x, tipo: "CPM", sev: x.cpm > medCpm[x.objetivo] * 2 ? "bad" : "warn", w: (x.cpm / medCpm[x.objetivo]) * 10,
          texto: `CPM R$ ${x.cpm.toFixed(2).replace(".", ",")}, ${Math.round((x.cpm / medCpm[x.objetivo] - 1) * 100)}% acima da mediana do objetivo` });
      if (x.gasto >= 50 && x.cpr && medCpr[x.objetivo] && x.cpr > medCpr[x.objetivo] * 1.5)
        alertas.push({ ...x, tipo: "custo por resultado", sev: x.cpr > medCpr[x.objetivo] * 2.5 ? "bad" : "warn", w: (x.cpr / medCpr[x.objetivo]) * 8,
          texto: `custo por resultado R$ ${x.cpr.toFixed(3).replace(".", ",")}, ${Math.round((x.cpr / medCpr[x.objetivo] - 1) * 100)}% acima da mediana do objetivo` });
      if (x.gasto === 0)
        alertas.push({ ...x, tipo: "sem entrega", sev: "warn", w: 5, texto: "conjunto ativo sem gasto no flight" });
      if (x.fim) { const d = dif(hoje, x.fim);
        if (d >= 0 && d <= 4) alertas.push({ ...x, tipo: "término", sev: d <= 2 ? "bad" : "warn", w: 200 - d,
          texto: `veiculação termina em ${x.fim.slice(8, 10)}/${x.fim.slice(5, 7)}` }); }
    }
    alertas.sort((a, b) => b.w - a.w);

    // conjunto ativo sem peça no ar é dinheiro parado
    const comPeca = new Set(Object.values(ad).filter((a) => a.ativo).map((a) => a.conjunto));
    const vazios = Object.entries(cj).filter(([id, c]) => c.ativo && !comPeca.has(id))
      .map(([, c]) => ({ nome: c.nome, objetivo: c.objetivo, saldo: c.saldo }));

    res.setHeader("Cache-Control", "s-maxage=120, stale-while-revalidate=600");
    res.status(200).json({
      atualizado: new Date().toISOString(), hoje, ontem,
      janela: { ...JAN, chave: janela }, planoAte,
      topo, dias, semanas,
      malha: {
        geo: { real: totGeo, pct: totJan ? (totGeo / totJan) * 100 : 0, plano: GEO_SHARE * 100 },
        cluster: { real: totClu, pct: totJan ? (totClu / totJan) * 100 : 0, plano: CLU_SHARE * 100 },
      },
      objetivo: porObjetivo, regiao: porRegiao, cluster: porCluster,
      ranking, observacao, medianas: med,
      alertas: alertas.slice(0, 14), nAtivos: ativos.length, nAlertas: alertas.length,
      vazios,
      regua: REGUA, pesos: PESOS,
    });
  } catch (e) {
    res.status(502).json({ erro: String(e.message || e) });
  }
}
