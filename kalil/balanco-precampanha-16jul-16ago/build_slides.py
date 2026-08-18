#!/usr/bin/env python3
"""
Monta slides.html (horizontal 1280x720) e slides-vertical.html (retrato 720x1280)
a partir de um unico conteudo, para as duas versoes nunca divergirem.

Rodar:  python3 build_slides.py   e depois  python3 make_pdf.py
"""
import re
from pathlib import Path

BASE = Path(__file__).parent

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&'
         'family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@500&'
         'family=Playfair+Display:ital,wght@1,400..600&display=swap" rel="stylesheet">')

# ---------------------------------------------------------------- CSS comum
CSS_BASE = """
:root{
  --black:#0A0A0A; --white:#F5F0E8; --accent:#FF6A00; --accent-ink:#A64500; --purple:#7B2FBE;
  --g200:rgba(245,240,232,.72); --g400:rgba(245,240,232,.48); --g600:rgba(245,240,232,.24);
  --ink200:rgba(10,10,10,.62); --ink400:rgba(10,10,10,.58); --ink500:rgba(10,10,10,.45);
  --ink600:rgba(10,10,10,.10);
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;background:#111;-webkit-font-smoothing:antialiased}
.slide{position:relative;overflow:hidden;background:var(--black);color:var(--white);
       margin:0 auto 22px;print-color-adjust:exact;-webkit-print-color-adjust:exact}
.slide.light{background:var(--white);color:var(--black)}
.slide-in{position:absolute;inset:0;display:flex;flex-direction:column;z-index:2}
.bg{position:absolute;inset:0;z-index:0}
.bg1{background:radial-gradient(circle at 18% 12%,rgba(255,106,0,.20),transparent 55%),radial-gradient(circle at 85% 88%,rgba(123,47,190,.16),transparent 50%),var(--black)}
.bg2{background:radial-gradient(circle at 82% 18%,rgba(255,106,0,.22),transparent 55%),radial-gradient(circle at 15% 85%,rgba(123,47,190,.14),transparent 50%),var(--black)}
.bg3{background:radial-gradient(circle at 50% 0%,rgba(255,106,0,.18),transparent 60%),var(--black)}

.kicker{font-family:'JetBrains Mono',monospace;font-weight:500;letter-spacing:.14em;
        text-transform:uppercase;color:var(--accent)}
.slide.light .kicker{color:var(--purple)}
.num{font-family:'JetBrains Mono',monospace;color:var(--g400)}
.slide.light .num{color:var(--ink400)}
.h1{font-family:'Bebas Neue',sans-serif;line-height:.96;letter-spacing:.005em}
.h2{font-family:'Bebas Neue',sans-serif;line-height:1.02}
.sub{color:var(--g200);line-height:1.62}
.slide.light .sub{color:var(--ink200)}
.note{font-family:'JetBrains Mono',monospace;color:var(--g400);line-height:1.6}
.slide.light .note{color:var(--ink400)}
.wt{color:var(--white)}
.spacer{flex:1}

/* capa */
.statement{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:400;
           text-transform:lowercase;color:var(--g200);line-height:1.3}
.statement em{color:var(--accent)}
.ficha{display:flex;gap:26px;flex-wrap:wrap}
.ficha>div{flex:1 1 130px;border-top:1px solid var(--g600);padding-top:12px}
.ficha b{display:block;font-family:'Bebas Neue',sans-serif;line-height:1;color:var(--accent)}
.ficha span{display:block;font-weight:700;text-transform:uppercase;letter-spacing:.14em;
            color:var(--g400);margin-top:6px}
.meta-tl,.meta-tr{position:absolute;font-family:'JetBrains Mono',monospace;font-weight:500;
                  letter-spacing:.2em;text-transform:uppercase;z-index:5}
.meta-tl{color:var(--accent)} .meta-tr{color:var(--g400)}

/* kpis */
.kpis{display:grid;gap:1px;background:rgba(10,10,10,.13);border:1px solid rgba(10,10,10,.13)}
.kpi{background:var(--white);display:flex;flex-direction:column;justify-content:center}
.kpi.dark{background:var(--black)}
.kpi b{display:block;font-family:'Bebas Neue',sans-serif;line-height:1;color:var(--black)}
.kpi.dark b{color:var(--white)}
.kpi span{display:block;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--ink400)}
.kpi.dark span{color:var(--g400)}

/* stats grandes */
.statgrid{display:grid;gap:26px}
.stat-big{font-family:'Bebas Neue',sans-serif;color:var(--accent);line-height:1}
.stat-l{font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--g400)}
.stat-d{font-family:'JetBrains Mono',monospace;color:var(--g200)}

/* rankings */
.rank{display:grid;align-items:center;border-bottom:1px solid var(--ink600)}
.rank:last-of-type{border-bottom:none}
.rank .pos{font-family:'Bebas Neue',sans-serif;line-height:1;color:var(--ink500)}
.rank .nome b{display:block;font-weight:800;letter-spacing:-.3px;line-height:1.2}
.rank .nome span{display:block;font-family:'JetBrains Mono',monospace;color:var(--ink400)}
.rank .custo b{display:block;font-family:'Bebas Neue',sans-serif;line-height:1}
.rank .custo span{color:var(--ink400)}
.rank .det{color:var(--ink400);font-variant-numeric:tabular-nums}
.rank .det b{color:var(--black);font-weight:700}
.rank.vence .pos,.rank.vence .custo b{color:var(--accent-ink)}
.comum{background:rgba(255,106,0,.07);border-left:3px solid var(--accent);border-radius:0 12px 12px 0}
.comum .rot{font-family:'JetBrains Mono',monospace;font-weight:500;letter-spacing:.13em;
            text-transform:uppercase;color:var(--accent-ink)}
.comum p{color:var(--ink200);line-height:1.6}
.comum p b{color:var(--black);font-weight:700}

/* clusters */
.cab{display:flex;flex-wrap:wrap;border-bottom:1px solid var(--ink600)}
.cab div b{font-family:'Bebas Neue',sans-serif;display:block;line-height:1}
.cab div span{display:block;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--ink400)}
.tri{display:grid}
.eixo{background:#fff;border:1px solid var(--ink600);border-radius:14px;display:flex;flex-direction:column}
.eixo h3{font-family:'Bebas Neue',sans-serif;line-height:1}
.badge{display:inline-block;font-weight:800;letter-spacing:.05em;text-transform:uppercase;
       border-radius:20px;align-self:flex-start}
.badge.boa{background:rgba(255,106,0,.12);color:var(--accent-ink)}
.badge.neutra{background:rgba(10,10,10,.06);color:var(--ink400)}
.pill{display:flex;justify-content:space-between;align-items:baseline;background:rgba(10,10,10,.04);
      border-radius:8px;font-weight:600;gap:10px}
.pill.boa{background:rgba(255,106,0,.10)}
.pill>span{font-variant-numeric:tabular-nums;font-weight:800;white-space:nowrap}
.pill small{display:block;font-weight:500;color:var(--ink400);font-family:'JetBrains Mono',monospace}
.vazio{color:var(--ink400);line-height:1.55;font-style:italic}
.fecho{color:var(--ink200);line-height:1.6}
.fecho b{color:var(--black);font-weight:700}

/* paineis */
.paineis{display:grid}
.painel h3{font-family:'JetBrains Mono',monospace;font-weight:500;letter-spacing:.16em;
           text-transform:uppercase;color:var(--ink400)}
.linha{display:flex;align-items:baseline;justify-content:space-between;gap:14px;
       background:rgba(10,10,10,.045);border-radius:8px}
.linha.boa{background:rgba(255,106,0,.12)}
.linha .nm{font-weight:800;letter-spacing:-.1px}
.linha .nm small{font-family:'JetBrains Mono',monospace;font-weight:500;color:var(--ink400)}
.linha .val{font-weight:800;font-variant-numeric:tabular-nums;white-space:nowrap}
.linha.boa .val{color:var(--accent-ink)}

/* tabelas */
.tab{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.tab th{font-family:'JetBrains Mono',monospace;font-weight:500;letter-spacing:.09em;
        text-transform:uppercase;color:var(--g400);text-align:right;border-bottom:1px solid var(--g600)}
.tab th:first-child{text-align:left}
.tab td{border-bottom:1px solid rgba(245,240,232,.08);text-align:right;color:var(--g200)}
.tab td:first-child{text-align:left;font-weight:700;color:var(--white)}
.tab tr.hi td{color:var(--accent)}

/* pecas */
.pecas{display:grid;gap:18px}
.peca img{width:100%;aspect-ratio:3/4;object-fit:cover;object-position:50% 35%;display:block;border-radius:12px}
.peca b{display:block;font-weight:800;letter-spacing:-.2px;line-height:1.25;margin-top:11px}
.peca .papel{display:block;color:var(--g200);margin-top:5px}
.peca .marca{display:block;font-family:'JetBrains Mono',monospace;color:var(--accent);margin-top:7px}

/* direcoes */
.arow{display:grid;border-bottom:1px solid var(--g600);align-items:start}
.arow:last-child{border-bottom:none}
.arow .n{font-family:'Bebas Neue',sans-serif;line-height:.9;color:var(--accent)}
.arow b{display:block;font-weight:800;letter-spacing:-.2px;line-height:1.35}
.arow p{color:var(--g200);line-height:1.6}
.metodo{color:var(--g400);line-height:1.7}
.tags{display:flex;gap:9px;flex-wrap:wrap}
.tag{font-weight:700;border-radius:20px;background:rgba(255,106,0,.14);color:var(--accent);
     border:1px solid rgba(255,106,0,.3)}
.rodape{position:absolute;font-family:'JetBrains Mono',monospace;letter-spacing:.16em;
        text-transform:uppercase;color:var(--g400);z-index:5}
.slide.light .rodape{color:var(--ink400)}
"""

# ------------------------------------------------- geometria por formato
CSS_H = """
.slide{width:1280px;height:720px}
.slide-in{padding:46px 68px}
.meta-tl,.meta-tr{top:40px;font-size:11.5px} .meta-tl{left:68px} .meta-tr{right:68px}
.rodape{bottom:26px;right:68px;font-size:9.5px}
.kicker{font-size:11.5px} .num{font-size:11px;margin-bottom:2px}
.h1{font-size:96px} .h2{font-size:52px;margin-top:8px}
.sub{font-size:15px;margin-top:14px;max-width:96ch}
.note{font-size:11px}
.statement{font-size:34px;margin-top:16px}
.ficha{margin-top:44px} .ficha b{font-size:32px} .ficha span{font-size:10px}
.kpis{grid-template-columns:repeat(4,1fr);margin-top:22px;height:250px}
.kpi{padding:0 24px} .kpi b{font-size:40px} .kpi span{font-size:10.5px;margin-top:9px}
.statgrid{grid-template-columns:repeat(3,1fr);margin-top:34px}
.stat-big{font-size:78px} .stat-l{font-size:11.5px;margin-top:8px} .stat-d{font-size:12.5px;margin-top:6px}
.rank{grid-template-columns:60px 1fr 180px 240px;gap:16px;padding:15px 0}
.rank .pos{font-size:44px} .rank .nome b{font-size:19px} .rank .nome span{font-size:11px;margin-top:4px}
.rank .custo b{font-size:36px} .rank .custo span{font-size:11.5px} .rank .det{font-size:13.5px;text-align:right}
.rows{margin-top:16px}
.comum{margin-top:18px;padding:15px 20px} .comum .rot{font-size:10.5px;margin-bottom:5px} .comum p{font-size:14px}
.cab{gap:26px;margin-top:14px;padding-bottom:14px} .cab div b{font-size:26px} .cab div span{font-size:10px}
.tri{grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px}
.eixo{padding:18px} .eixo h3{font-size:26px;margin-bottom:8px}
.badge{font-size:10px;padding:5px 10px;margin-bottom:11px}
.pill{padding:8px 11px;margin-bottom:5px;font-size:12.5px} .pill small{font-size:10.5px;margin-top:2px}
.vazio{font-size:12.5px} .fecho{font-size:14.5px;margin-top:16px;max-width:120ch}
.paineis{grid-template-columns:repeat(2,1fr);gap:20px 34px;margin-top:18px}
.painel h3{font-size:10.5px;margin-bottom:9px}
.linha{padding:10px 15px;margin-bottom:5px} .linha .nm{font-size:13.5px}
.linha .nm small{font-size:10.5px;margin-left:9px} .linha .val{font-size:15px}
.tab{margin-top:18px} .tab th{font-size:10.5px;padding:0 0 9px} .tab td{font-size:14.5px;padding:9px 0}
.pecas{grid-template-columns:repeat(4,1fr)}
.peca b{font-size:15px} .peca .papel{font-size:12.5px;line-height:1.5} .peca .marca{font-size:10.5px}
.arow{grid-template-columns:52px 1fr;gap:14px;padding:14px 0}
.arow .n{font-size:38px} .arow b{font-size:17px} .arow p{font-size:14px;margin-top:4px;max-width:100ch}
.metodo{font-size:11.5px;margin-top:16px}
.tags{margin-top:20px} .tag{font-size:11.5px;padding:7px 14px}
"""

CSS_V = """
.slide{width:720px;height:1280px}
.slide-in{padding:56px 44px}
.meta-tl,.meta-tr{top:44px;font-size:10.5px} .meta-tl{left:44px} .meta-tr{right:44px}
.rodape{bottom:30px;right:44px;font-size:9px}
.kicker{font-size:11px} .num{font-size:10.5px;margin-bottom:2px}
.h1{font-size:76px} .h2{font-size:46px;margin-top:8px}
.sub{font-size:15.5px;margin-top:16px}
.note{font-size:11.5px}
.statement{font-size:30px;margin-top:18px}
.ficha{margin-top:54px;gap:20px} .ficha>div{flex:1 1 44%} .ficha b{font-size:34px} .ficha span{font-size:10px}
.kpis{grid-template-columns:repeat(2,1fr);margin-top:26px;height:520px}
.kpi{padding:0 24px} .kpi b{font-size:42px} .kpi span{font-size:11px;margin-top:9px}
.statgrid{grid-template-columns:1fr;margin-top:40px;gap:38px}
.stat-big{font-size:82px} .stat-l{font-size:12px;margin-top:6px} .stat-d{font-size:13px;margin-top:5px}
.rank{grid-template-columns:46px 1fr;grid-template-rows:auto auto auto;gap:4px 14px;padding:18px 0}
.rank .pos{font-size:38px;grid-row:1/3} .rank .nome b{font-size:19px}
.rank .nome span{font-size:11px;margin-top:4px}
.rank .custo{grid-column:2} .rank .custo b{display:inline-block;font-size:32px}
.rank .custo span{font-size:12px;margin-left:7px}
.rank .det{grid-column:1/3;text-align:left;font-size:13.5px;margin-top:2px}
.rows{margin-top:20px}
.comum{margin-top:22px;padding:18px 20px} .comum .rot{font-size:10.5px;margin-bottom:6px} .comum p{font-size:15px}
.cab{gap:22px;margin-top:18px;padding-bottom:16px} .cab div{flex:1 1 44%}
.cab div b{font-size:26px} .cab div span{font-size:10px}
.tri{grid-template-columns:1fr;gap:14px;margin-top:18px}
.eixo{padding:18px} .eixo h3{font-size:26px;margin-bottom:8px}
.badge{font-size:10px;padding:5px 10px;margin-bottom:10px}
.pill{padding:9px 12px;margin-bottom:5px;font-size:13px} .pill small{font-size:10.5px;margin-top:2px}
.vazio{font-size:13px} .fecho{font-size:15px;margin-top:20px}
.paineis{grid-template-columns:1fr;gap:20px;margin-top:22px}
.painel h3{font-size:10.5px;margin-bottom:9px}
.linha{padding:11px 15px;margin-bottom:5px} .linha .nm{font-size:13.5px}
.linha .nm small{display:block;font-size:10.5px;margin-top:2px} .linha .val{font-size:15.5px}
.tab{margin-top:22px} .tab th{font-size:10.5px;padding:0 0 10px} .tab td{font-size:15px;padding:12px 0}
.pecas{grid-template-columns:repeat(2,1fr);gap:16px}
.peca img{aspect-ratio:1/1}   /* no retrato o 3:4 nao cabe em duas fileiras */
.peca b{font-size:15.5px} .peca .papel{font-size:13px;line-height:1.5} .peca .marca{font-size:11px}
.arow{grid-template-columns:44px 1fr;gap:12px;padding:18px 0}
.arow .n{font-size:36px} .arow b{font-size:17.5px} .arow p{font-size:14.5px;margin-top:5px}
.metodo{font-size:12px;margin-top:20px}
.tags{margin-top:24px} .tag{font-size:11.5px;padding:7px 14px}
"""

RODAPE = '<div class="rodape">Alexandre Kalil &middot; 16/07 a 16/08/2026</div>'


def slide(inner, light=False, bg="", rodape=True):
    cls = "slide light" if light else "slide"
    bgdiv = f'<div class="bg {bg}"></div>' if bg else ""
    pe = RODAPE if rodape else ""
    return f'<section class="{cls}">{bgdiv}<div class="slide-in">{inner}</div>{pe}</section>'


def head(num, kicker, h2, sub=""):
    s = f'<p class="sub">{sub}</p>' if sub else ""
    return (f'<div class="num">{num}</div><div class="kicker">{kicker}</div>'
            f'<h2 class="h2">{h2}</h2>{s}')


def rank_slide(num, h2, media, rows, rot, texto):
    r = ""
    for i, (nome, camp, custo, unid, det) in enumerate(rows):
        vence = " vence" if i == 0 else ""
        r += (f'<div class="rank{vence}"><div class="pos">{i+1}</div>'
              f'<div class="nome"><b>{nome}</b><span>{camp}</span></div>'
              f'<div class="custo"><b>{custo}</b><span>{unid}</span></div>'
              f'<div class="det">{det}</div></div>')
    return slide(head(num, "Anúncios", h2)
                 + f'<p class="note" style="margin-top:9px">{media}</p>'
                 + f'<div class="rows">{r}</div>'
                 + f'<div class="comum"><div class="rot">{rot}</div><p>{texto}</p></div>',
                 light=True)


def cluster_slide(num, h2, cab, eixos, fecho):
    c = "".join(f'<div><b>{b}</b><span>{s}</span></div>' for b, s in cab)
    e = ""
    for titulo, badge_cls, badge_txt, pills, vazio in eixos:
        p = ""
        for boa, nome, small, val in pills:
            cls = "pill boa" if boa else "pill"
            p += f'<div class="{cls}"><div>{nome}<small>{small}</small></div><span>{val}</span></div>'
        v = f'<div class="vazio">{vazio}</div>' if vazio else ""
        e += (f'<div class="eixo"><h3>{titulo}</h3>'
              f'<span class="badge {badge_cls}">{badge_txt}</span>{p}{v}</div>')
    return slide(head(num, "Clusters", h2)
                 + f'<div class="cab">{c}</div><div class="tri">{e}</div>'
                 + f'<p class="fecho">{fecho}</p>', light=True)


SLIDES = []

# 01 CAPA -------------------------------------------------------------------
SLIDES.append(slide(
    '<div class="spacer"></div>'
    '<h1 class="h1">ALEXANDRE KALIL</h1>'
    '<p class="statement">o que funcionou na <em>pré-campanha</em></p>'
    '<p class="sub">Os melhores anúncios em view, seguidor e compartilhamento; o raio-x de cada '
    'cluster; e onde cada resultado sai mais barato.</p>'
    '<div class="ficha">'
    '<div><b>R$ 3.514,01</b><span>Investidos</span></div>'
    '<div><b>15</b><span>Campanhas</span></div>'
    '<div><b>17</b><span>Anúncios</span></div>'
    '<div><b>32 dias</b><span>16/07 a 16/08</span></div>'
    '</div><div class="spacer"></div>'
    '<div class="meta-tl">Mídia paga &nbsp;|&nbsp; Alexandre Kalil</div>'
    '<div class="meta-tr">16/07 a 16/08/2026</div>', bg="bg1", rodape=False))

# 02 O GERAL ----------------------------------------------------------------
SLIDES.append(slide(
    head("01", "O Geral", "O período em números.",
         "Conta Alexandre Kalil no Meta Ads, de 16 de julho a 16 de agosto de 2026. "
         "Trinta e dois dias, 15 campanhas, 17 anúncios no ar.")
    + '<div class="kpis">'
      '<div class="kpi dark"><b>R$ 3.514,01</b><span>Investimento</span></div>'
      '<div class="kpi dark"><b>442.591</b><span>Pessoas alcançadas</span></div>'
      '<div class="kpi dark"><b>699.643</b><span>Impressões</span></div>'
      '<div class="kpi dark"><b>R$ 5,02</b><span>CPM</span></div>'
      '<div class="kpi"><b>1,58</b><span>Frequência</span></div>'
      '<div class="kpi"><b>180</b><span>Compartilhamentos</span></div>'
      '<div class="kpi"><b>551</b><span>Comentários</span></div>'
      '<div class="kpi"><b>109.724</b><span>Visualizações (ThruPlay)</span></div>'
      '</div>'
    + '<p class="sub">O CPM de R$ 5,02 fica entre um quarto e dois terços do que o mercado '
      'eleitoral pratica. As páginas a seguir mostram onde, dentro dessa entrega, cada '
      'resultado saiu mais barato.</p>'
    + '<div class="spacer"></div>'
      '<p class="note">Pessoas alcançadas: número deduplicado, apurado em consulta única no '
      'Gerenciador.</p>', light=True))

# 03 CRESCIMENTO ------------------------------------------------------------
SLIDES.append(slide(
    head("02", "Crescimento da Conta", "5.601 seguidores novos no período.",
         "Crescimento total dos perfis, orgânico e pago somados, de 16 de julho a 16 de "
         "agosto de 2026.")
    + '<div class="statgrid">'
      '<div><div class="stat-big">4.700</div><div class="stat-l">Novos seguidores &middot; Instagram</div>'
      '<div class="stat-d">&uarr; 78,2% vs. período anterior</div></div>'
      '<div><div class="stat-big">901</div><div class="stat-l">Novos seguidores &middot; Facebook</div>'
      '<div class="stat-d">&uarr; 54,3% vs. período anterior</div></div>'
      '<div><div class="stat-big">5.601</div><div class="stat-l">Total no período</div>'
      '<div class="stat-d">Somando as duas plataformas</div></div>'
      '</div><div class="spacer"></div>'
      '<p class="note">Os R$ 3.514,01 investidos divididos pelos 5.601 seguidores do período '
      'dão R$ 0,63. Esse número mede o investimento contra todo o crescimento da conta, pago e '
      'orgânico, não é custo de aquisição por mídia. O custo por seguidor atribuído à mídia '
      'paga, usado nos rankings a seguir, é R$ 10,65.</p>', bg="bg2"))

# 04 a 07 RANKINGS ----------------------------------------------------------
SLIDES.append(rank_slide(
    "03", "Eficiência em views.", "Média da conta: R$ 0,032 por view",
    [("Eu não faço promessa", "Estado de Minas · vídeo", "R$ 0,014", "por view",
      "<b>R$ 178,91</b> &middot; 12.640 views"),
     ("Eu não faço promessa", "Estado de Minas · engajamento", "R$ 0,016", "por view",
      "<b>R$ 250,21</b> &middot; 15.583 views"),
     ("Eu não faço promessa V2", "Público Cleitinho · reconhecimento", "R$ 0,017",
      "por view", "<b>R$ 257,05</b> &middot; 15.128 views")],
    "O que os três têm em comum",
    "<b>É o mesmo filme nas três posições.</b> \"Eu não faço promessa\" ocupa o pódio inteiro "
    "rodando em três objetivos diferentes, ThruPlay, Engajamento e Reconhecimento, e em dois "
    "públicos que não se conversam, o Estado de MG e o Público Cleitinho. Todos entregam o view "
    "pela metade da média da conta ou menos. O criativo carrega o resultado independentemente "
    "de onde é colocado."))

SLIDES.append(rank_slide(
    "04", "Eficiência em seguidores.", "Média da conta: R$ 10,65 por seguidor",
    [("Aftermovie Convenção", "Região Metropolitana de Belo Horizonte · visitas ao perfil", "R$ 1,47", "por seguidor",
      "<b>R$ 99,83</b> &middot; 68 seguidores"),
     ("Eu não faço promessa V2", "Público Cleitinho · visitas ao perfil", "R$ 2,18",
      "por seguidor", "<b>R$ 329,58</b> &middot; 151 seguidores"),
     ("Não resolveu", "Conta geral · visitas ao perfil", "R$ 3,03", "por seguidor",
      "<b>R$ 133,24</b> &middot; 44 seguidores")],
    "O achado mais importante do período",
    "<b>As cinco primeiras posições do ranking são campanhas de Visitas ao Perfil</b>, todas bem "
    "abaixo da média da conta, de R$ 1,47 a R$ 13,33 por seguidor. Quando o destino do anúncio é "
    "o perfil, o seguidor sai na casa de um a três reais. É a receita mais eficiente que o "
    "período revelou, e ela já está pronta para escalar na campanha oficial."))

SLIDES.append(rank_slide(
    "05", "Eficiência em compartilhamentos.", "Média da conta: R$ 19,52 por envio",
    [("Eu não faço promessa", "Estado de Minas · engajamento", "R$ 5,82", "por envio",
      "<b>R$ 250,21</b> &middot; 43 envios"),
     ("Eu não faço promessa", "Estado de Minas · vídeo", "R$ 6,88", "por envio",
      "<b>R$ 178,91</b> &middot; 26 envios"),
     ("Aftermovie Convenção", "Região Metropolitana de Belo Horizonte · engajamento", "R$ 10,87", "por envio",
      "<b>R$ 249,90</b> &middot; 23 envios")],
    "O que os três têm em comum",
    "<b>\"Eu não faço promessa\" repete as duas primeiras posições numa métrica completamente "
    "diferente do view.</b> E o envio tem endereço: o Estado de MG concentrou 75 dos 180 "
    "compartilhamentos do período, 42% do total, a R$ 7,98 cada, 59% abaixo da média da conta. Os "
    "dois primeiros colocados vêm de objetivos distintos, o que indica que o compartilhamento "
    "está no conteúdo e na praça, não na configuração da campanha."))

SLIDES.append(rank_slide(
    "06", "Eficiência em visitas ao perfil.",
    "Média da conta: R$ 0,82 por visita &middot; 4.281 visitas no período",
    [("Eu não faço promessa V2", "Público Cleitinho · visitas ao perfil", "R$ 0,12",
      "por visita", "<b>R$ 329,58</b> &middot; 2.814 visitas"),
     ("Aftermovie Convenção", "Região Metropolitana de Belo Horizonte · visitas ao perfil", "R$ 0,23", "por visita",
      "<b>R$ 99,83</b> &middot; 438 visitas"),
     ("Com independência", "Conta geral · visitas ao perfil", "R$ 0,24", "por visita",
      "<b>R$ 96,55</b> &middot; 403 visitas")],
    "O que salta",
    "<b>Um único anúncio gerou 66% de todas as visitas ao perfil do período.</b> \"Eu não faço "
    "promessa V2\", rodando no Público Cleitinho, trouxe 2.814 das 4.281 visitas, a R$ 0,12 cada, "
    "quase sete vezes mais barato que a média da conta. É também o segundo colocado em custo por "
    "seguidor: as duas métricas andam juntas, e é o mesmo anúncio que puxa as duas."))

# 08 a 12 CLUSTERS ----------------------------------------------------------
SLIDES.append(cluster_slide(
    "07", "Cluster Público Cleitinho.",
    [("R$ 838,45", "Investido &middot; 23,9% da conta"), ("157.660", "Impressões"),
     ("R$ 5,32", "CPM"), ("Eu não faço promessa V2", "Criativo único no ar")],
    [("Seguidor", "boa", "51% abaixo da média",
      [(True, "Visitas ao perfil", "R$ 329,58 &middot; 151 seguidores", "R$ 2,18")],
      "As outras duas campanhas do cluster rodaram em objetivos de vídeo, que não levam ao "
      "perfil. O seguidor aqui vem todo da campanha de Visitas ao Perfil."),
     ("Compartilhamento", "neutra", "levemente acima da média",
      [(True, "Engajamento em vídeo", "R$ 251,82 &middot; 18 envios", "R$ 13,99"),
       (False, "Reconhecimento em vídeo", "R$ 257,05 &middot; 13", "R$ 19,77")], ""),
     ("View", "boa", "15% abaixo da média",
      [(True, "Reconhecimento em vídeo", "R$ 257,05 &middot; 15.128 views", "R$ 0,017"),
       (False, "Engajamento em vídeo", "R$ 251,82 &middot; 12.677", "R$ 0,020"),
       (False, "Visitas ao perfil", "R$ 329,58 &middot; 3.159", "R$ 0,104")], "")],
    "<b>O cluster que mais rendeu por real investido.</b> Seguidor 51% abaixo da média, view 15% "
    "abaixo e visita ao perfil 64% abaixo, a R$ 0,30 contra R$ 0,82 da conta. E tudo isso com um "
    "único criativo no ar, \"Eu não faço promessa V2\", sustentando o cluster inteiro, o que "
    "significa que ainda há muita margem: mais verba e novas peças aqui têm alta chance de "
    "repetir o resultado."))

SLIDES.append(cluster_slide(
    "08", "Cluster Região Metropolitana.",
    [("R$ 499,44", "Investido &middot; 15,9% da conta"), ("95.993", "Impressões"),
     ("R$ 5,20", "CPM"), ("Aftermovie Convenção", "Criativo único no ar")],
    [("Seguidor", "boa", "39% abaixo da média",
      [(True, "Visitas ao perfil", "R$ 99,83 &middot; 68 seguidores", "R$ 1,47")],
      "O melhor custo por seguidor de toda a conta no período, com menos de R$ 100 investidos."),
     ("Compartilhamento", "neutra", "praticamente na média",
      [(True, "Engajamento", "R$ 249,90 &middot; 23 envios", "R$ 10,87")],
      "Terceiro melhor compartilhamento da conta, atrás só das duas peças do Estado de MG."),
     ("View", "neutra", "praticamente na média",
      [(True, "Vídeo", "R$ 149,71 &middot; 6.773 views", "R$ 0,022"),
       (False, "Engajamento", "R$ 249,90 &middot; 7.731", "R$ 0,032")], "")],
    "<b>O Aftermovie da Convenção é o criativo mais versátil da conta</b>: sozinho, entrega o "
    "seguidor mais barato do período inteiro (R$ 1,47), o terceiro melhor compartilhamento e um "
    "view em linha com a média, três resultados diferentes com a mesma peça. A RMBH também "
    "confirma a receita do relatório: foi na campanha de Visitas ao Perfil que esse filme rendeu "
    "o seguidor a R$ 1,47. <b>Criativo forte no objetivo certo é o que produz o melhor número da "
    "conta.</b>"))

SLIDES.append(cluster_slide(
    "09", "Cluster Estado de Minas.",
    [("R$ 598,39", "Investido &middot; 19,0% da conta"), ("134.862", "Impressões"),
     ("R$ 4,44", "CPM"), ("2 criativos", "Eu não faço promessa e VT Mulheres")],
    [("Seguidor", "neutra", "objetivo testado uma vez",
      [(True, "Eu não faço promessa · UPSCALE", "Visitas ao perfil &middot; R$ 120,00 &middot; 9",
        "R$ 13,33")],
      "O Estado concentrou a verba em vídeo e engajamento, onde é o cluster mais forte da conta. "
      "Visitas ao Perfil rodou uma única vez aqui, com R$ 120."),
     ("Compartilhamento", "boa", "59% abaixo da média",
      [(True, "Eu não faço promessa", "Engajamento &middot; R$ 250,21 &middot; 43 envios", "R$ 5,82"),
       (False, "Eu não faço promessa", "Vídeo &middot; R$ 178,91 &middot; 26", "R$ 6,88")], ""),
     ("View", "boa", "38% abaixo da média",
      [(True, "Eu não faço promessa", "Vídeo &middot; R$ 178,91 &middot; 12.640 views", "R$ 0,014"),
       (False, "Eu não faço promessa", "Engajamento &middot; R$ 250,21 &middot; 15.583", "R$ 0,016")], "")],
    "<b>O cluster do view e do compartilhamento</b>, os dois mais baratos da conta inteira, e por "
    "margem larga. O Estado de MG é onde \"Eu não faço promessa\" alcança o seu melhor "
    "desempenho: R$ 0,014 por view e R$ 5,82 por envio, ambos primeiros lugares no ranking geral. "
    "É a praça que faz o conteúdo circular. O próximo ganho aqui é somar uma campanha de Visitas "
    "ao Perfil ao que já funciona: no único teste com esse objetivo, o seguidor saiu a R$ 13,33."))

SLIDES.append(cluster_slide(
    "10", "Cluster Mulheres.",
    [("R$ 335,24", "Investido &middot; 10,7% da conta"), ("54.914", "Impressões"),
     ("R$ 6,10", "CPM"), ("VT Mulheres", "Criativo único, uma campanha")],
    [("Seguidor", "neutra", "objetivo ainda não testado", [],
      "O recorte rodou uma campanha de ThruPlay. Como Visitas ao Perfil ainda não foi ao ar aqui, "
      "este eixo fica em aberto para o próximo ciclo."),
     ("Compartilhamento", "neutra", "praticamente na média",
      [(True, "VT Mulheres", "Vídeo, lance elevado para mulheres &middot; R$ 335,24 &middot; 17 envios", "R$ 19,72")],
      "Eixo em que o recorte competiu em condições comparáveis ao resto da conta, e ficou junto "
      "da média."),
     ("View", "neutra", "levemente acima da média",
      [(False, "VT Mulheres", "Vídeo, lance elevado para mulheres &middot; R$ 335,24 &middot; 9.154 views", "R$ 0,037")],
      "O mesmo criativo entregou o view a R$ 0,037 também no Estado de MG: o custo vem do "
      "conteúdo, e não do recorte de público.")],
    "<b>O recorte com a maior oportunidade em aberto.</b> Com 10,7% da verba e uma única campanha "
    "de ThruPlay, o VT Mulheres entregou compartilhamento e view em linha com a média da conta, "
    "desempenho sólido para um teste inicial de um só criativo. O que ainda não foi ao ar aqui é "
    "a campanha de Visitas ao Perfil, justamente a estrutura que produziu os melhores seguidores "
    "do período. <b>É o teste mais promissor para o próximo ciclo</b>: o público responde, e a "
    "receita que funciona no resto da conta ainda não foi aplicada nele."))

SLIDES.append(cluster_slide(
    "11", "Cluster Triângulo Mineiro.",
    [("R$ 299,56", "Investido &middot; 9,5% da conta"), ("117.478", "Impressões"),
     ("R$ 2,55", "CPM &middot; o mais barato da conta"),
     ("Kalil Faz &middot; carrossel", "Criativo único, formato estático")],
    [("Seguidor", "neutra", "objetivo ainda não testado", [],
      "A praça rodou em Alcance e Engajamento. Visitas ao Perfil, o objetivo que converte "
      "seguidor, ainda não foi ao ar aqui."),
     ("Alcance", "boa", "CPM 63% abaixo da média",
      [(True, "Kalil Faz · carrossel", "Alcance &middot; R$ 199,98 &middot; 107.537 impressões",
        "R$ 1,86")],
      "O CPM mais barato de toda a conta. Presença construída a um custo que nenhuma outra praça "
      "alcançou."),
     ("View", "neutra", "formato estático", [],
      "A peça no ar foi o carrossel \"Kalil Faz\". Sem vídeo na praça, o eixo de view fica em "
      "aberto, e é uma frente natural de teste.")],
    "<b>A praça mais barata da conta para construir presença.</b> Com R$ 2,55 de CPM no cluster e "
    "R$ 1,86 na campanha de Alcance, o Triângulo entregou 117 mil impressões por menos de R$ 300, "
    "comprar atenção ali custa menos do que em qualquer outro lugar da conta. O período serviu "
    "para abrir a praça e provar esse custo. <b>Agora que o CPM está comprovado, é a base ideal "
    "para receber as estruturas que já funcionam no resto da conta</b>: vídeo e Visitas ao "
    "Perfil, ainda não testados aqui."))

# 13 PUBLICO IDADE ----------------------------------------------------------
SLIDES.append(slide(
    head("12", "Público", "Quem respondeu, por faixa de idade.",
         "A curva por idade é limpa e vale como direção.")
    + '<table class="tab"><thead><tr><th>Faixa etária</th><th>Investido</th>'
      '<th>Por seguidor</th><th>Por envio</th><th>Por view</th></tr></thead><tbody>'
      '<tr class="hi"><td>18 a 24</td><td>R$ 199,09</td><td>R$ 5,24</td><td>R$ 49,77</td><td>R$ 0,074</td></tr>'
      '<tr><td>25 a 34</td><td>R$ 520,00</td><td>R$ 6,34</td><td>R$ 43,33</td><td>R$ 0,050</td></tr>'
      '<tr><td>35 a 44</td><td>R$ 553,07</td><td>R$ 5,53</td><td>R$ 27,65</td><td>R$ 0,034</td></tr>'
      '<tr><td>45 a 54</td><td>R$ 861,92</td><td>R$ 11,49</td><td>R$ 14,61</td><td>R$ 0,026</td></tr>'
      '<tr class="hi"><td>55 a 64</td><td>R$ 910,31</td><td>R$ 33,72</td><td>R$ 12,30</td><td>R$ 0,028</td></tr>'
      '<tr><td>65+</td><td>R$ 469,58</td><td>R$ 58,70</td><td>R$ 42,69</td><td>R$ 0,032</td></tr>'
      '</tbody></table>'
    + '<p class="sub"><b class="wt">A curva se inverte no meio da tabela.</b> Abaixo dos 45 anos '
      'o seguidor sai entre R$ 5 e R$ 6; acima dos 55, passa de R$ 33. No compartilhamento '
      'acontece o oposto: a faixa 55 a 64 envia a R$ 12,30, o mais barato da conta, contra '
      'R$ 49,77 dos 18 a 24. <b class="wt">Jovem vira seguidor; mais velho espalha a mensagem.</b> '
      'São dois papéis diferentes, e nenhum dos dois substitui o outro.</p>'
    + '<div class="spacer"></div>', bg="bg3"))

# 14 PUBLICO GENERO ---------------------------------------------------------
SLIDES.append(slide(
    head("12", "Público", "Quem respondeu, por gênero.",
         "As campanhas rodaram abertas, então o que a tabela mostra é onde a entrega caiu, "
         "não como a verba foi dirigida.")
    + '<table class="tab"><thead><tr><th>Gênero</th><th>Entrega da verba</th><th>Por seguidor</th>'
      '<th>Por visita</th><th>Por view</th></tr></thead><tbody>'
      '<tr><td>Masculino</td><td>R$ 2.476,18 &middot; 70%</td><td>R$ 9,63</td><td>R$ 0,65</td><td>R$ 0,029</td></tr>'
      '<tr><td>Feminino</td><td>R$ 1.032,62 &middot; 29%</td><td>R$ 14,15</td><td>R$ 2,37</td><td>R$ 0,042</td></tr>'
      '</tbody></table>'
    + '<p class="sub"><b class="wt">Como ler a tabela:</b> nenhuma campanha foi comprada para um '
      'gênero. Todas rodaram abertas, para homens e mulheres, e em uma única campanha o lance foi '
      'elevado para o público feminino. Os 70% que aparecem no masculino, portanto, não são '
      'direcionamento de verba: são onde o algoritmo escolheu entregar, porque ali o resultado '
      'saía mais barato. O custo mais alto no feminino é a outra face da mesma escolha, o leilão '
      'foi menos disputado do lado que recebeu mais entrega.</p>'
    + '<p class="sub"><b class="wt">O que isso abre:</b> como as campanhas abertas se acomodaram '
      'no público masculino, o desempenho real das mulheres nunca foi testado no objetivo que '
      'gera seguidor. Uma campanha de Visitas ao Perfil dirigida a elas, com o criativo que já '
      'funciona, é um teste barato e ainda inédito na conta.</p>'
    + '<div class="spacer"></div>', bg="bg3"))

# 15 ONDE SAI MAIS BARATO ---------------------------------------------------
def painel(titulo, linhas):
    l = ""
    for boa, nome, obj, val in linhas:
        cls = "linha boa" if boa else "linha"
        l += (f'<div class="{cls}"><span class="nm">{nome} <small>{obj}</small></span>'
              f'<span class="val">{val}</span></div>')
    return f'<div class="painel"><h3>{titulo}</h3>{l}</div>'


SLIDES.append(slide(
    head("13", "Campanhas", "Onde cada resultado sai mais barato.")
    + '<p class="note" style="margin-top:9px">Campanhas de objetivos diferentes lado a lado '
      '&middot; leitura de onde comprar cada resultado</p>'
    + '<div class="paineis">'
    + painel("Seguidor", [
        (True, "Região Metropolitana de Belo Horizonte · visitas ao perfil", "visitas ao perfil", "R$ 1,47"),
        (False, "Público Cleitinho · visitas ao perfil", "visitas ao perfil", "R$ 2,18"),
        (False, "Conta geral · visitas ao perfil", "visitas ao perfil", "R$ 3,11")])
    + painel("Compartilhamento", [
        (True, "Estado de Minas · engajamento", "engajamento", "R$ 5,91"),
        (False, "Estado de Minas · vídeo", "vídeo", "R$ 7,69"),
        (False, "Região Metropolitana de Belo Horizonte · engajamento", "engajamento", "R$ 10,87")])
    + painel("View", [
        (True, "Estado de Minas · vídeo", "vídeo", "R$ 0,015"),
        (False, "Público Cleitinho · reconhecimento", "reconhecimento", "R$ 0,017"),
        (False, "Estado de Minas · engajamento", "engajamento", "R$ 0,017")])
    + painel("Engajamento", [
        (True, "Estado de Minas · engajamento", "engajamento", "R$ 0,006"),
        (False, "Região Metropolitana de Belo Horizonte · engajamento", "engajamento", "R$ 0,008"),
        (False, "Triângulo Mineiro · engajamento", "engajamento", "R$ 0,14")])
    + '</div>'
    + '<p class="fecho"><b>Cada resultado tem um endereço, e eles não se sobrepõem.</b> Seguidor '
      'e visita ao perfil só saem baratos em campanhas de Visitas ao Perfil. Compartilhamento e '
      'engajamento moram no Estado de MG. View se compra em ThruPlay, no Estado de MG e no '
      'Cleitinho.</p>', light=True))

# 16 FECHO ------------------------------------------------------------------
SLIDES.append(slide(
    head("14", "O Que o Período Diz", "Três direções para a campanha.")
    + '<div style="margin-top:14px">'
      '<div class="arow"><div class="n">1</div><div>'
      '<b>"Eu não faço promessa" é o criativo do período, e não deu sinal de fadiga.</b>'
      '<p>Ocupa o pódio inteiro do view, as duas primeiras posições do compartilhamento e, na '
      'versão V2, gerou 66% de todas as visitas ao perfil da conta. Rodou em seis campanhas, '
      'quatro objetivos e dois públicos sem perder eficiência. Vale sustentar e produzir '
      'variações antes que canse.</p></div></div>'
      '<div class="arow"><div class="n">2</div><div>'
      '<b>O Público Cleitinho rendeu mais que qualquer recorte geográfico, com um criativo só.</b>'
      '<p>24% do investimento, seguidor 51% abaixo da média, view 15% abaixo e visita ao perfil '
      '64% abaixo. Todo esse resultado saiu de uma única peça. É o território com maior retorno '
      'por real e o mais carente de variedade criativa: merece mais verba e mais conceitos.</p>'
      '</div></div>'
      '<div class="arow"><div class="n">3</div><div>'
      '<b>Mulheres e Triângulo Mineiro são as duas oportunidades prontas para o próximo ciclo.</b>'
      '<p>Os dois recortes já provaram o que foram testados a fazer: o VT Mulheres entregou '
      'compartilhamento e view na média da conta, e o Triângulo entregou o CPM mais barato de '
      'todos. Falta aplicar neles a estrutura de Visitas ao Perfil, que é o que gerou os melhores '
      'seguidores do período. São dois testes baratos, com alta chance de repetir o resultado das '
      'outras praças.</p></div></div>'
      '</div><div class="spacer"></div>'
      '<div class="tags"><span class="tag">Meta Ads</span>'
      '<span class="tag">Estado de Minas Gerais</span><span class="tag">RMBH</span>'
      '<span class="tag">Triângulo Mineiro</span><span class="tag">Público Cleitinho</span></div>',
    bg="bg2"))

# 17 METODO -----------------------------------------------------------------
_MET = [
    ("Fonte", "Gerenciador de Anúncios da conta Alexandre Kalil, período de 16 de julho a 16 de agosto "
              "de 2026. Export com quebra por idade e gênero: 478 linhas, 15 campanhas, 17 anúncios, sem "
              "duplicidade de investimento entre linhas. Nomes de campanhas e anúncios reproduzidos como "
              "estão na conta."),
    ("Cálculo", "Custo por resultado calculado como investimento total do agrupamento dividido pelo "
                "número de eventos, no mesmo padrão do Gerenciador. ThruPlays, seguidores e "
                "compartilhamentos derivados do custo por evento, que é a forma como este export "
                "disponibiliza esses volumes."),
    ("Pisos do ranking", "Piso de R$ 20 investidos e volume mínimo por métrica, 300 views, 5 seguidores, "
                         "5 envios e 20 visitas, para evitar distorção de amostra pequena. Os anúncios "
                         "abaixo do piso estão fora dos pódios."),
    ("Alcance e seguidores", "Alcance apurado em consulta única e deduplicada no Gerenciador, nunca "
                             "somado entre campanhas. Crescimento de seguidores apurado no painel de "
                             "Insights do Instagram e do Facebook, que soma orgânico e pago, número "
                             "distinto dos 330 seguidores atribuídos à mídia paga no export, que são a "
                             "base dos rankings de custo."),
]
SLIDES.append(slide(
    head("16", "Método", "Fonte e método.")
    + "".join(f'<p class="metodo"><b class="wt">{k}.</b> {v}</p>' for k, v in _MET)
    + '<div class="spacer"></div>'
      '<p class="note">Balanço da Pré-Campanha &middot; Alexandre Kalil, Pré-Campanha 2026 '
      '&middot; Produzido por Algorítmica, Performance &amp; Dados</p>', bg="bg1"))

# PECAS ---------------------------------------------------------------------
PECAS = [
    ("f-promessa.jpg", "Frame do vídeo Eu não faço promessa, com Alexandre Kalil ao microfone",
     "Eu não faço promessa",
     "O criativo do período. Pódio inteiro do view, duas primeiras posições do compartilhamento e, "
     "na versão V2, 66% das visitas ao perfil da conta.",
     "R$ 0,014 por view · R$ 0,12 por visita"),
    ("f-aftermovie.jpg", "Frame do Aftermovie da Convenção, com Kalil discursando no palanque",
     "Aftermovie Convenção",
     "O mais versátil. Com menos de R$ 100 investidos entregou o seguidor mais barato de toda a conta.",
     "R$ 1,47 por seguidor · R$ 0,23 por visita"),
    ("f-vtmulheres.jpg", "Frame do VT Mulheres, com uma eleitora falando à câmera",
     "VT Mulheres",
     "Único criativo do recorte, numa campanha só de vídeo. Compartilhamento e view em linha com a "
     "média da conta.",
     "R$ 19,72 por envio · R$ 0,037 por view"),
    ("f-carrossel.jpg", "Primeiro card do carrossel Kalil Faz",
     "Kalil Faz · carrossel",
     "Único formato estático do período, e o mais eficiente para construir presença: 117 mil impressões "
     "por menos de R$ 300.",
     "R$ 1,86 de CPM em Alcance"),
]
_cards = "".join(
    f'<div class="peca"><img src="assets/{img}" alt="{alt}">'
    f'<b>{nome}</b><span class="papel">{papel}</span><span class="marca">{marca}</span></div>'
    for img, alt, nome, papel, marca in PECAS)
SLIDE_PECAS = slide(
    head("08", "Criativos", "As peças por trás dos números.",
         "Quatro dos criativos que sustentam os rankings deste relatório, com o papel que cada um "
         "cumpriu no período.")
    + f'<div class="pecas">{_cards}</div>', bg="bg2")

# Ordem final: as tres direcoes abrem o documento, o metodo fecha.
# 0 capa · 15 direcoes · 1 geral · 2 crescimento · 3-6 rankings · pecas ·
# 7-11 clusters · 12-13 publico · 14 onde sai mais barato · 16 metodo
ORDEM = ([SLIDES[0]] + SLIDES[1:7] + [SLIDE_PECAS] + SLIDES[7:15]
         + [SLIDES[15], SLIDES[16]])

# Kicker so na abertura de cada familia, para nao repetir andaime em toda secao.
KEEP_KICKER = {3, 7, 8, 13, 16}


def _arruma(i, html):
    if i and i not in KEEP_KICKER:
        html = re.sub(r'<div class="kicker">[^<]*</div>', "", html)
    return re.sub(r'<div class="num">\d+</div>',
                  f'<div class="num">{i:02d}</div>', html) if i else html


def build(path, geometry):
    corpo = "".join(_arruma(i, s) for i, s in enumerate(ORDEM))
    html = ('<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">'
            '<title>Balanço da Pré-Campanha · Alexandre Kalil</title>' + FONTS
            + "<style>" + CSS_BASE + geometry + "</style></head><body>"
            + corpo + "</body></html>")
    (BASE / path).write_text(html, encoding="utf-8")
    print(f"{path}: {len(ORDEM)} slides")


build("slides.html", CSS_H)
build("slides-vertical.html", CSS_V)
