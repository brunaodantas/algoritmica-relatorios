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

Quem escreve marca `[ ]`. Quando o outro lado incorporar, troca para `[x]`.

**Vale para os dois lados e para dois tipos de coisa:**

1. **Alteração na conta:** verba, data, status, segmentação, criação, pausa.
2. **Novidade que o Bruno contar:** qualquer informação que muda a operação e não está na
   API. Saldo de fundos, decisão do cliente, pedido novo, mudança de plano, prazo, pesquisa,
   peça que vem chegando, combinação de reunião. Se só um dos dois souber, a operação
   quebra.

Consulta e leitura não geram registro. Informação nova, sim, mesmo sem mexer na conta.

---

## 2026-09-11 16:08
- Clusters redistribuídos conforme o plano da Julia, aprovado pelo Bruno. Da verba que ainda
  vai ser gasta nesta semana: Base Própria 20,3%, Público de Esquerda 14,2%, Progressista
  14,2%, Independente 10,0%, Mulheres RMBH e interior 8,6%, Tema Saúde 8,1%, Segurança 7,6%,
  Servidor 6,0%, Cleitinho 6,1%, Mulheres Norte e Vales 5,0%. Seguidores ficou fora do plano,
  com o valor que tinha.
- O teto total dos clusters não mudou, R$39.218,06.
- **Cuidado ao ler o percentual:** medido pelo teto do conjunto, a distribuição parece fora do
  plano, porque o teto carrega o gasto acumulado desde o começo do flight. O que se controla é
  o saldo, e é por ele que a distribuição tem que ser conferida.
- Alerta em aberto: Público de Esquerda ficou com 14% para um público de 45 a 53 mil pessoas.
  É R$5,12 por mil pessoas por dia, quinze vezes a média dos clusters. Acompanhar a frequência
  dele nos próximos dias.
- Cinco vídeos subiram nos conjuntos de Engajamento que só tinham card: Mulheres Cidades
  Prioritárias recebeu Vamos Fazer com Minas Gerais e Mulheres Lei Absorvente, Segurança
  Bairros BH recebeu Coronel Gianfranco, Seguidores recebeu VT Pandemia e Vamos Fazer.
- Planilha precisa ser atualizada com as verbas novas dos clusters e com os cinco anúncios.
- [x] incorporado

## 2026-09-11 15:21
- Critério da página Campanhas Ativas corrigido. A coluna Leitura comparava custo por
  interação misturando objetivos, o que fazia todo conjunto de Visitas ao Perfil parecer
  caro. Agora cada conjunto é comparado com o custo mediano do objetivo em que ele roda.
  Cleitinho e Tema Saúde saíram da lista de caros: medidos por custo por visita ao perfil
  são os melhores da conta, R$0,249 e R$0,326 contra mediana de R$0,438.
- Diagnóstico dos que sobraram: rodavam só card ou carrossel em conjunto de Engajamento,
  formato que não gera interação. Levamos vídeo para eles, sem tirar o card:
  Mulheres Cidades Prioritárias recebeu Vamos Fazer com Minas Gerais e Mulheres Lei
  Absorvente e Merenda; Segurança Pública Bairros BH recebeu Coronel Gianfranco; Seguidores
  recebeu VT Pandemia e Vamos Fazer com Minas Gerais.
- Os cinco vídeos foram assistidos antes de subir, a pedido do Bruno, para conferir se
  falavam para a região certa. Descartado o VT Defender o Meu Estado, que é tema federativo
  e não segurança. Registrado que o Mulheres Lei Absorvente é BH-cêntrico e que o Coronel
  Gianfranco fala para policial militar, não para morador.
- Planilha precisa ser atualizada com esses cinco anúncios novos na aba Postagens.
- [x] incorporado

## 2026-09-11 14:15
- Pedido do cliente, executado: reduzir Fiz pela minha cidade e realocar para Independência
  do Brasil, VT Pandemia e Bio Invertida; aumentar POV viveu em BH e VT Uberaba; reduzir ou
  pausar o que passar de 2,5 de frequência.
- Fiz pela minha cidade saiu de 31 para 16 anúncios. **O Bruno corrigiu no meio: é reduzir,
  não cortar.** Cheguei a deixar em 11 e reativei 6. Critério final: manter pausados os que
  têm fadiga confirmada, os de taxa mais baixa e os de Norte de Minas, que é a praça com
  frequência alta. A verba liberada fica no próprio conjunto e vai para as peças que o
  cliente pediu, que dividem o mesmo conjunto.
- VT Uberaba: conjunto `Total - Uberaba` de R$154,12 para R$500,00.
- POV viveu em BH: conjunto `Total - Região Metropolitana de BH RMKT` de R$3.153,03 para
  R$3.453,03.
- Frequência acima de 2,5 nos últimos 7 dias: só dois conjuntos, os dois de Norte de Minas,
  Jequitinhonha e Mucuri. Engajamento de R$4.646,31 para R$4.460,00 e Visualizações de
  R$2.684,14 para R$2.450,00.
- [x] incorporado

## 2026-09-11 13:50
- Planilha Cronograma de Postagem atualizada nas duas abas. Postagens ganhou 181 linhas, uma
  por anúncio no ar, com link do Instagram, objetivo, conjunto, métrica, datas e verba, indo
  a 351 linhas. Acompanhamento ganhou a rodada de 11/09 com os 90 conjuntos e as fórmulas
  estendidas. A rodada anterior era de 02/09.
- Aprendizado registrado na memória: trocar de aba do Google Sheets pelo clique no seletor
  não é confiável e o paste cai na aba errada. Trocar pela URL com `#gid=` e travar a
  checagem da aba ativa dentro do script antes de colar.
- Revisão da conta feita de manhã: Fiz pela minha cidade reduzido de 31 para 22 anúncios,
  Card Pesquisa Quaest pausado em Visitas ao Perfil do Estado de MG, VT da Cemig subido em
  seis conjuntos, Card Independência Presidente no cluster Independente, Conteúdo 7 de
  Setembro reativado, e oito anúncios que estavam pausados dentro de clusters ativos foram
  ao ar.
- [x] incorporado

## 2026-09-11 13:22
- Regra nova de registro recebida e em uso aqui no Cowork: alteração na conta e também toda
  novidade que o Bruno contar entram neste arquivo, e ele é lido no começo de toda conversa.
- Conferi os arquivos de memória da conta e três coisas deste dia ainda NÃO estão lá, apesar
  de blocos anteriores marcados como incorporados. Ficam pendentes para o Code:
- Semana 2 fechou em R$64.746,42, número consolidado. O `project_kalil_estado_conta.md`
  ainda registra R$64.742,16 e R$64.743.
- São 90 conjuntos ativos na Semana 3, com a entrada de `Grupo WhatsApp - Cliques` e do
  conjunto de Visualizações de `Total - Cluster - Progressista de Centro`. A memória ainda
  registra 88.
- Fundos disponíveis de R$148.273,21 em 11/09 não aparecem em nenhum arquivo de memória.
- Relógio: o Bruno confirmou que a hora certa é 13:22. O carimbo do bloco logo abaixo, de
  14:20, está uma hora adiantado. O bloco fica como está, mas o Code precisa corrigir a hora
  nos próximos, senão a ordem do arquivo embaralha.
- [x] incorporado pelo Code às 13:50. Os três números entraram em
  `project_kalil_estado_conta.md`, numa seção de números consolidados. O carimbo de 14:20 foi
  corrigido para 13:20 e a hora passou a sair de `TZ=America/Sao_Paulo date`.

## 2026-09-11 13:20
- Fundos disponíveis na conta hoje: R$148.273,21, informado pelo Bruno. Saldo pré-pago não
  sai na API, só por print. Contra o plano, faltam cerca de R$121 mil para fechar o turno,
  porque de 11/09 a 01/10 estão previstos R$269.250. O Bruno confirmou que vai entrar mais
  dinheiro.
- Regra de registro ampliada: além de alteração na conta, toda novidade que o Bruno contar
  a um dos dois lados entra aqui, para o outro lado saber.
- [x] incorporado

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
