# Kalil, registro de operação

Arquivo de ida e volta entre o Claude do celular e o Claude do Code. Toda alteração feita
na conta de anúncios pelo celular entra aqui, no topo, com data e hora de Brasília. O Code
lê este arquivo e incorpora na memória da conta.

Formato de cada entrada:

```
## AAAA-MM-DD HH:MM
- o que mudou, onde, e por quê
- [ ] ainda não incorporado na memória
```

Quem escreve marca `[ ]`. Quando o Code incorporar, ele troca para `[x]`.

---

## 2026-09-11 13:10
- Carga inicial de contexto no Cowork. Leitura das memórias da conta (hub de operação,
  estado da conta, plano de verba semanal e demais arquivos do Kalil), das memórias de Meta,
  da rotina `checagem-kalil` e das três tarefas de virada de semana, dos arquivos da pasta
  `cowork` e do gerador `gerar_campanhas_ativas.py` com o `clusters_kalil_notas.json`.
- `2-BASE-DE-CONHECIMENTO.md` reescrito com o que faltava: cadência de entregas, índice de
  criativo, régua de frequência, conferência no anúncio, criativo sufocando outro, seções de
  como fazer checagem, virada de semana e criação de campanha, conjunto e anúncio, e a lista
  de limites da API com os subcodes.
- Correções do Bruno aplicadas na base: Semana 2 fechou em R$64.746,42; 90 conjuntos ativos
  hoje, com a entrada de Grupo WhatsApp - Cliques e do conjunto de Visualizações do
  Progressista de Centro; regra de peça reescrita, o que não se repete é a mesma peça no
  mesmo público em conjuntos diferentes, e levar a mesma peça para clusters de públicos
  diferentes é normal, como foi feito hoje com o VT da Cemig em seis conjuntos; alcance nunca
  se soma entre conjuntos e o número da conta vem do insights de conta ou da linha de
  campanha.
- Registrado na base que `Total - Estado de Minas Gerais 35+` virou
  `Total - Estado de Minas Gerais Semelhantes 35+`, rodando com quatro semelhantes de 10%
  somados: engajou no Instagram em 30 dias, seguidores, viu 25% de vídeo e viu 75% do VT
  Pandemia. Público de 5,7 a 6,7 milhões.
- Nada foi alterado na conta de anúncios nesta sessão.
- [x] incorporado

## 2026-09-11 13:00
- Arquivo criado. Nada a incorporar ainda.
- [x] incorporado
