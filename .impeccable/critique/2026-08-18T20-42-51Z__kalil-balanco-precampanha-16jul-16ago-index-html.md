---
target: relatorio balanco pre-campanha Kalil 16jul-16ago
total_score: 22
p0_count: 2
p1_count: 4
timestamp: 2026-08-18T20-42-51Z
slug: kalil-balanco-precampanha-16jul-16ago-index-html
---
Method: dual-agent (A: design review · B: detector + browser evidence)

Alvo: `kalil/balanco-precampanha-16jul-16ago/index.html` · registro brand · 15 seções · medido em 1440×900, 768×1024, 390×844, 375×812, 360×740.

## Design Health Score

| # | Heurística | Nota | Problema-chave |
|---|-----------|-------|-----------|
| 1 | Visibilidade do status | 3 | `.dotnav` desaparece abaixo de 820px: 15 seções sem indicador de posição no celular |
| 2 | Linguagem do mundo real | 2 | Jargão sem tradução: ThruPlay, view, por envio, cluster, eixo, piso de R$ 20, UPSCALE |
| 3 | Controle e liberdade | 2 | Só scroll, sem sumário, sem voltar ao topo, sem salto de seção no mobile |
| 4 | Consistência e padrões | 2 | Mesmo par praça+objetivo com dois valores em seções diferentes, sem rótulo de granularidade; `.comum` com quatro contratos semânticos no mesmo slot; badge neutra cobrindo "na média" e "não testado" |
| 5 | Prevenção de erro | 2 | Tabela rola no mobile sem afordância e o parágrafo cita colunas fora da tela; zero `prefers-reduced-motion` |
| 6 | Reconhecer em vez de lembrar | 2 | Quatro médias de conta a memorizar; clusters citados antes de definidos |
| 7 | Flexibilidade | 2 | Dois PDFs é ponto a favor; sem sumário, sem resumo executivo, direções na seção 14 de 15 |
| 8 | Estética e minimalismo | 2 | 14 seções com o mesmo compasso; andaime duplo número + kicker; glows genéricos |
| 9 | Diagnosticar e recuperar | 3 | Estados vazios exemplares; peça depende de JS e abre em branco no desktop sem ele |
| 10 | Ajuda e documentação | 2 | Metodologia é parágrafo único de 7 linhas, 12px, opacidade 48%, ~190 caracteres por linha |
| **Total** | | **22/40** | **Aceitável, precisa de melhoria antes de virar padrão da casa** |

## Anti-Patterns Verdict

Reprova no teste de AI slop. Não por falta de refino tipográfico, que é real, mas porque a gramática de seção se repete idêntica 14 vezes usando exatamente os andaimes mais saturados.

Bans presentes: eyebrow em caixa alta tracked em 14/14 seções, marcadores numerados 01 a 14 como scaffolding em 14/14, empilhados acima do kicker; grid de cards idênticos (15 `.eixo` + 4 `.painel`); side-stripe border (`.comum{border-left:3px}`, ban literal e também contra a regra de CSS da casa); template hero-metric em quatro variantes com função igual.

Limpos: gradient text, glassmorphism, texto transbordando container.

Detector determinístico: exit 2, 7 achados. `side-tab` linha 150, `overused-font` ×3, `layout-transition` (`.progress` animando width), `em-dash-overuse` 16 no corpo, `numbered-section-markers` 01 a 06. Falsos positivos aceitos: `layout-transition` numa barra fixa de 3px sem irmãos no fluxo, `overused-font` num sistema de quatro famílias com subset embutido, e `numbered-section-markers` num deck que também vira PDF paginado.

## Overall Impression

O craft de detalhe é bom de verdade, e em três pontos é melhor que a média do mercado: tabular-nums nas colunas de valor, hairlines desenhadas por gap de 1px, e estados vazios que explicam a ausência com causa e consequência. O problema é estrutural, não de acabamento: a peça tem uma gramática só, repetida 14 vezes, e a informação que o cliente precisa para decidir verba chega na posição 14 de 15, depois de 17.500px de rolagem no celular. A maior oportunidade é editorial, não visual: promover as três direções para a frente e deixar os rankings como consulta.

## What's Working

1. Estados vazios melhores que os cheios. `.vazio` não mostra zero nem esconde a célula, explica por que o eixo está em branco e transforma buraco de dado em pauta de trabalho.
2. O parágrafo "Como ler a tabela de gênero". Antecipa uma leitura errada politicamente perigosa e a desarma explicando o mecanismo, sem esconder o número.
3. Detalhe tipográfico de dado: `tabular-nums` nas tabelas e pills, `gap:1px` desenhando as hairlines do grid de KPI, `min-width:520px` na tabela em vez de esconder coluna. Decisões de quem já apanhou de layout de relatório.

## Priority Issues

**[P0] Colisão de texto na capa nos celulares mais comuns.** Os dois `.capa-meta` são absolutos em bordas opostas e se encontram: 1px de sobreposição em 390, 16px em 375, 31px em 360. Renderiza "ALEXANDRE KALIL16/07 A 16/08/2026" na primeira linha da primeira tela. Fix: abaixo de 600px sair do absolute e virar uma linha só de metadado no fluxo. Comando: `/impeccable adapt`.

**[P0] Sem JavaScript o deck abre em branco no desktop.** `.reveal{opacity:0}` só vira visível por IntersectionObserver: com JS desligado, 100 de 100 caixas ficam invisíveis em 1440, 16.840 caracteres ocultos, a segunda seção sai em branco no screenshot. A proteção existe só abaixo de 480px. Fix: inverter o default, `.reveal` nasce visível e a animação entra por classe posta pelo próprio script. Comando: `/impeccable harden`.

**[P1] Contraste de dado abaixo de AA em 130 elementos.** Causa única: `--ink400` a 45% de opacidade, 3,09:1 contra 4,5 exigido, usado em 13 seletores que são conteúdo e não decoração ("12.640 views", "R$ 329,58 · 151 seguidores", "Investido · 23,9% da conta", `.vazio`, `.painel h3`). Fix: `--ink400` sobe para `rgba(10,10,10,.58)` (4,58:1) e cria-se um token separado só para o que é decorativo. Registro: `.sub`, `.fecho`, `.metodo` e `.stat-l` passam, a suspeita inicial sobre eles não se confirmou. Comando: `/impeccable audit`.

**[P1] Travessão em 25 lugares, contra a regra da casa.** 18 em-dash (16 em copy de cliente) e 7 en-dash nas faixas de idade, que é exatamente o caso "intervalo" da regra, deveria ser "18 a 24". Fix: varredura e substituição por vírgula, dois-pontos ou "a". Comando: `/impeccable clarify`.

**[P1] Relatório sobre criativo sem nenhum criativo.** "Eu não faço promessa" é citado 14 vezes como herói do período e o leitor termina sem ver o filme. Zero imagem no documento. Contraria o padrão da casa de embedar o post na web e usar print no PDF. Fix: frame estático ao lado de cada pódio, embed do post onde houver. Resolve de uma vez o ritmo, a ausência de imagem e o "por que esse criativo ganhou".

**[P1] Andaime duplo em 14 seções.** `.eyebrow-num` mais `.kicker` são os dois tells mais saturados sobrepostos no mesmo canto, e o kicker é redundante onde o h2 já diz a família ("Clusters" acima de "Cluster Público Cleitinho"). Fix: um sistema só, ou régua de capítulo aparecendo uma vez por família. Comando: `/impeccable typeset`.

## Persona Red Flags

**Equipe de campanha, no celular, decidindo verba.** Não existe a tela que essa pessoa precisa: as opções estão na seção 13 (12 linhas sem recomendação) e a recomendação na 14 (sem valor de verba ao lado). 17.553px de rolagem até lá. Sem navegação nenhuma no mobile, o dotnav desaparece. Jargão sem tradução vira pergunta no WhatsApp. O primeiro contato é a colisão de texto na capa.

**Acessibilidade.** Zero regras de `:focus` ou `:focus-visible` no arquivo, o indicador é o padrão do navegador sobre alvos de 6px. Os 14 primeiros tab stops são dots de 6×6px. Sem `<main>`, sem skip link. Tabelas sem `<caption>` e com `scope` em 0 dos 5 `th`. Zero `prefers-reduced-motion` com 9 transições e animação letra por letra a 22ms. Botões de PDF com 41px de altura, 3px abaixo do mínimo de toque.

**Diretor de arte cético.** A gramática repetida 14 vezes é o veredito imediato. Quatro famílias em base64 para usar o Playfair em uma única linha. Os três `bg-glow` são preenchimento, não art direction.

## Minor Observations

CSS morto: `.kv.acc`, `.kpigrid`, `.kpi .kv/.kl/.ks`, `.pend`, `.slide.light .stat-big`. `.fecho{max-width:105ch}` e `.metodo` sem max-width chegando a 190ch, contra o teto de 65 a 75ch. `text-wrap:balance` ausente em todos os headings. `.tabela tr.hi` pinta linha inteira de laranja em duas faixas por motivos opostos. `.progress` animando width em vez de `transform:scaleX`. `download` junto de `target="_blank"` nos botões, um anula o outro. `slides.html` e `slides-vertical.html` publicados ao lado do index, são artefato intermediário. Sem `meta description`. Estrutura de heading íntegra, 1 h1 e 14 h2 sem salto de nível, e nenhuma âncora morta.

## Questions to Consider

1. Se a equipe só pudesse ver uma tela, qual seria? Nenhuma das 15 é candidata: a 14 tem recomendação sem número, a 13 tem número sem recomendação.
2. Por que "cluster" em seis títulos, quando "praça" é a palavra que a campanha usa e já aparece no corpo do texto?
3. A média da conta é o eixo de leitura de todas as seções e muda de valor quatro vezes. Por que ela não é elemento persistente em vez de nota de 11px?
4. A seção 02 celebra 5.601 seguidores e a nota de rodapé explica que 330 vieram da mídia. Por que a métrica que a agência pode reivindicar está na letra miúda e a que não pode está em 78px?
