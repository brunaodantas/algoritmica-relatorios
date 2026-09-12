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

## 2026-09-12 13:03
- Fechada a execução dos cinco direcionamentos do Lucas, na correção pedida pelo Bruno de
  seguir o pedido do cliente ao máximo.
- **Saúde:** `Saúde - Portas Abertas` foi reativado no `Total - Cluster - Tema Saúde` em
  Visitas ao Perfil. Pausar a peça não era o pedido. A redução do Lucas foi aplicada no teto
  do conjunto, de R$2.151,88 para R$1.991,69, 35% do saldo. A peça segue no ar nos dois
  conjuntos onde já rodava.
- **Aceleração, 38 edições de verba:** R$921,69 movidos dentro dos clusters e R$3.581,85
  dentro da malha geo, sempre para conjuntos onde o Jingle e o Independência do Brasil rodam.
  A divisão 70/30 e a divisão interna dos clusters foram preservadas.
- **Servidor Público:** o cluster tinha o `VT Servidor Público` fora do conjunto de
  Engajamento, só o VT da Cemig rodava ali. Criado o anúncio 120250057863460061 com o mesmo
  creative da peça, ativo. Agora a peça está nos quatro objetivos do cluster.
- **Jingle:** medido o gasto de hoje por conjunto, continuava sufocado em três lugares.
  Pausado o `Vamos Fazer com Minas Gerais` 120250035560490061 no `Total - Estado de Minas
  Gerais 35+ RMKT`, que levava 61% do conjunto, o que abre espaço para o Jingle e para o
  Independência ao mesmo tempo. Pausado um dos dois `VT da Cemig` na `Total - Cluster - Base
  Própria`, o 120250043962650061, que levava R$87,41 dos R$215,75 da peça num conjunto de
  R$288,82. Em `Mulheres Norte e Vales` nada foi mexido: quem divide ali é o `Carrossel Só
  quem fez - Mulheres`, que o cliente pediu para manter.
- Conferências: 88 conjuntos ativos, nenhum conjunto ativo sem anúncio ativo, bloco em 30,01%
  cluster e 69,99% regional sobre saldo de R$63.796,77.
- **Desvio a reportar:** a divisão por objetivo saiu do alvo por causa da aceleração. Alvo
  41 tráfego, 25 thruplays, 25 engajamento, 8 reconhecimento, 1 cliques no link. Hoje, sobre
  saldo: tráfego 41,4%, engajamento 28,9%, visualizações 22,5%, reconhecimento 7,2%. Cliques
  no link está em zero desde a suspensão do grupo de WhatsApp. O engajamento subiu porque as
  duas peças que o cliente mandou acelerar são card, e card roda em engajamento. Não refiz o
  percentual por conta própria, a decisão é do Bruno.
- Página Campanhas Ativas gerada e publicada.
  https://algoritmica-relatorios.vercel.app/kalil/campanhas-ativas/
- Planilha, o que precisa: aba Postagens marcar `Vamos Fazer com Minas Gerais` como pausado
  no `Estado de Minas Gerais 35+ RMKT` e `VT da Cemig` como pausado em uma das duas linhas da
  `Base Própria`, e incluir o `VT Servidor Público` no conjunto de Engajamento do cluster
  Servidor Público. Abas Verba e Acompanhamento precisam dos tetos novos dos 38 conjuntos
  editados.
- [ ] ainda não incorporado na memória

## 2026-09-12 12:48
- Fechada a parte que estava parada, na decisão do Code confirmada pelo Bruno.
- Movidos R$572,45 do `Total - Cluster - Eleitorado Cleitinho` para o
  `Total - Cluster - Servidor Público`, repartidos dentro de cada cluster na proporção do
  saldo de cada conjunto, para não mexer na divisão por objetivo.

| Conjunto | Objetivo | Teto antes | Teto agora |
|---|---|---|---|
| Servidor Público | Reconhecimento | R$393,31 | R$536,60 |
| Servidor Público | Engajamento | R$240,35 | R$335,62 |
| Servidor Público | Visualizações | R$670,30 | R$790,73 |
| Servidor Público | Visitas ao Perfil | R$889,55 | R$1.103,01 |
| Eleitorado Cleitinho | Reconhecimento | R$573,77 | R$317,72 |
| Eleitorado Cleitinho | Engajamento | R$1.651,51 | R$1.535,07 |
| Eleitorado Cleitinho | Visitas ao Perfil | R$3.980,24 | R$3.780,28 |

- Saldo dos dois clusters depois da troca: Servidor Público de R$1.144,89 para R$1.716,44,
  Eleitorado Cleitinho de R$1.165,61 para R$591,89. O Cleitinho segue no ar, menor, como o
  cliente pediu.
- `Vamos Fazer com Minas Gerais` pausado em `Total - Estado de Minas Gerais Semelhantes 35+`,
  Engajamento, anúncio 120249997768990061. Levava R$198,69 e dominava o conjunto, que agora
  ficou com Card Pesquisa Quaest, Clipe do Jingle e Comercial Kalil Fez. Era o que faltava
  para o Jingle ter espaço ali, o Bio Invertida sozinho não abria.
- A edição derrubou um conjunto, `Total - Cluster - Eleitorado Cleitinho` em Visitas ao
  Perfil, reativado na sequência. Os outros seis não caíram.
- Conferências finais: 88 conjuntos ativos, nenhum conjunto ativo sem anúncio ativo, bloco em
  70,0% regional e 30,0% cluster, com saldo de R$44.727,90 e R$19.180,25. Semana 3
  dimensionada em R$79.627,01 contra meta de R$80.000.
- Página Campanhas Ativas gerada e publicada, commit e0c8096.
  https://algoritmica-relatorios.vercel.app/kalil/campanhas-ativas/
- `clusters_kalil_notas.json` atualizado: as duas notas do Grupo WhatsApp diziam que o teste
  estava rodando. Agora dizem que foi suspenso a pedido do cliente em 12/09.
- Ponto para conferir: o gerador leu a Semana 2 em R$64.747,81. O número consolidado que está
  na memória é R$64.746,42, diferença de R$1,39. Pode ser processamento do Meta que ainda
  moveu depois. Vale reconferir antes de usar em relatório.
- Planilha, o que precisa: aba Postagens marcar como pausados o `Saúde - Portas Abertas` no
  Tema Saúde Visitas ao Perfil, o `VT Bio Invertida` nos dois conjuntos do Estado de Minas
  Gerais Semelhantes e o `Vamos Fazer com Minas Gerais` no Semelhantes em Engajamento. Aba
  Verba e aba Acompanhamento precisam dos tetos novos dos sete conjuntos da tabela acima.
- [ ] ainda não incorporado na memória

## 2026-09-12 12:40
- Decisão do Bruno sobre os pedidos do cliente de hoje, executada em parte. Três anúncios
  pausados, nenhuma verba alterada.
- `Saúde - Portas Abertas` pausado em `Total - Cluster - Tema Saúde`, Visitas ao Perfil,
  anúncio 120249934241790061. Levava 91,9% do conjunto. Segue no ar no de Engajamento, a peça
  não saiu da conta. O conjunto ficou com VT Propósito Reedit e Coragem Direcionado.
- `Só quem fez vai fazer - Saúde` mantido como está, por decisão do Bruno. Já está fora na
  prática, R$0,40 e 19 impressões em 11 e 12/09.
- Para abrir espaço ao `Clipe do Jingle`, pausado o `VT Bio Invertida` nos dois conjuntos de
  `Total - Estado de Minas Gerais Semelhantes 35+`: em Visitas ao Perfil, anúncio
  120249997849750061, que levava 71,2% do conjunto, e em Engajamento, anúncio
  120249997841570061, que levava 2,1%.
- Nos outros três conjuntos que o Bruno citou, Progressista de Centro, Base Própria e
  Mulheres Norte e Vales, **não havia nada para pausar**: nem `Fiz pela minha cidade` nem
  `VT Bio Invertida` rodam ali. Quem divide espaço com o Jingle nesses conjuntos é VT
  Propósito Reedit, VT Internet Vilas e Favelas, VT da Cemig, VT Pandemia, Coronel
  Gianfranco, Carrossel Só quem fez Mulheres, Vídeo Montes Claros e VT InterTV Vales, e
  nenhum deles estava na ordem.
- Observação para a próxima leitura: no `Estado de Minas Gerais Semelhantes 35+` em
  Engajamento o Jingle estava com zero gasto e quem domina é o `Vamos Fazer com Minas
  Gerais`, com R$198,69. Pausar o Bio Invertida ali libera pouco, e o Jingle pode continuar
  sem entrega nesse conjunto.
- `Conteúdo 7 de Setembro, Independência do Brasil` não recebeu nada, por decisão do Bruno,
  para não tirar espaço de peça regional antes dos vídeos novos.
- **PARADO, aguardando decisão:** dobrar o cluster Servidor Público tirando do Eleitorado
  Cleitinho zera o Cleitinho. Saldos de hoje: Servidor Público R$1.144,89 em quatro conjuntos,
  Eleitorado Cleitinho R$1.165,61 em três. Dobrar o Servidor consome R$1.144,89 e deixa o
  Cleitinho com R$20,72 até 17/09, ou seja fora do ar. O cliente pediu em 10/09 para manter o
  Cleitinho menor, não para desligar. Nada foi alterado.
- Conferências depois das pausas: 88 conjuntos ativos, nenhum conjunto ativo sem anúncio
  ativo, nenhum conjunto derrubado pela edição, e o bloco segue em 70,0% regional e 30,0%
  cluster, com saldo de R$44.932,62 e R$19.257,04.
- Planilha: aba Postagens precisa marcar os três anúncios como pausados. A aba Acompanhamento
  não muda, é por conjunto e nenhuma verba foi alterada.
- [ ] ainda não incorporado na memória

## 2026-09-12 12:18
- Mensagem do cliente na manhã de hoje, repassada pelo Bruno. Cinco direcionamentos, ainda
  NÃO executados, aguardando decisão de verba do Bruno.
- Reduzir `SÓ QUEM FEZ SAÚDE`, pela divisão de público. Existem duas peças com nome parecido
  e a leitura da API não resolve qual é: `Só quem fez vai fazer - Saúde` gastou R$0,40 em 19
  impressões em 11 e 12/09, ou seja já está fora na prática, e `Saúde - Portas Abertas`
  gastou R$114,38 e leva 91,9% do conjunto `Total - Cluster - Tema Saúde` em Visitas ao
  Perfil. Confirmar com o cliente antes de mexer.
- Carrossel `SUL DE MINAS` o cliente quer observar. Ele já está pausado desde 09/09, com zero
  gasto na Semana 3, substituído pelo `VT Falar pro Sul de Minas - 09.09`, que gastou R$770,96
  em cinco conjuntos em 11 e 12/09. O cliente não sabe disso, vale devolver a informação.
- `Obrigado pelo Apoio AP Junqueira` fica mais dois dias em observação, revisar em 14/09.
  Situação hoje: R$99,87 e 13.726 impressões em `Total - Triângulo Mineiro - Uberlândia e
  Uberaba` em Visitas ao Perfil, mais dois anúncios sem entrega.
- `Carrossel Só quem fez - Mulheres` mantido a pedido do cliente, que citou curtida e
  comentário. Roda em quatro conjuntos com R$428,86 e 106.581 impressões. Contraria o índice
  baixo que a nossa leitura deu à peça, e a palavra do cliente vale.
- Acelerar `SERVIDOR PÚBLICO`, `JINGLE` e `INDEPENDÊNCIA DO BRASIL`. Situação medida em 11 e
  12/09: VT Servidor Público R$330,66, sendo 100% dos conjuntos de Reconhecimento e de Visitas
  ao Perfil do cluster e 37,9% do de Visualizações, onde divide com o VT da Cemig. Clipe do
  Jingle R$126,70, e está sufocado em quase todo conjunto onde roda: 29,4% no Progressista em
  Visitas ao Perfil, 9,0% no Estado de Minas Gerais Semelhantes, 7,0% em Mulheres Norte e
  Vales, 1,4% na Base Própria, 0,2% no Progressista em Engajamento. Conteúdo 7 de Setembro,
  Independência do Brasil, R$1.291,97 em 18 conjuntos, já é a segunda peça que mais gasta.
- Ponto técnico para a decisão: verba é do conjunto, não da peça. Onde a peça divide conjunto,
  acelerar é subir o conjunto inteiro, o que sobe a concorrente junto, ou reduzir a
  concorrente. Subir Servidor Público e Progressista mexe na divisão interna dos clusters
  aprovada com a Julia em 11/09 e na proporção 70/30 fechada hoje de manhã.
- Vídeos regionalizados novos gravados com o Kalil chegam entre hoje e amanhã. O cliente pediu
  para ajustar os criativos regionalizados junto, para não competir público. Casa com a regra
  de não repetir a mesma peça no mesmo público em conjuntos diferentes.
- Leitura da conta neste momento, para referência: 88 conjuntos ativos, nenhum conjunto ativo
  sem anúncio ativo, nenhum conjunto ativo sem gastar. Semana 3 dimensionada em R$79.626,76
  contra meta de R$80.000, faltando R$373,24 de teto.
- [ ] ainda não incorporado na memória

## 2026-09-12 10:21
- **Grupo de WhatsApp suspenso pelo cliente.** Pausados os dois anúncios Card Grupo WhatsApp,
  os dois conjuntos, `Grupo WhatsApp - Cliques` e `Grupo WhatsApp - Conversas`, e a campanha
  `REGIONAIS - CLIQUES NO LINK` inteira, que era a única onde a peça rodava.
- Com o WhatsApp fora, a verba foi redistribuída e **a conta fechou exatamente em 70% malha
  regional e 30% clusters**, que era o que o plano pedia e não fechava desde o começo do
  flight. Saldo da semana: R$65.029,59, sendo R$45.522,83 em regionais e R$19.506,76 em
  clusters.
- A divisão interna dos clusters foi preservada e continua no plano: Base Própria 19,8%,
  Público de Esquerda 14,3%, Progressista 14,1%, Independente 10,1%, Mulheres RMBH e interior
  8,6%, Tema Saúde 8,1%, Segurança 7,6%, Cleitinho 6,2%, Servidor 6,1%, Mulheres Norte e
  Vales 5,1%. Seguidores segue fora do plano com R$406.
- 88 conjuntos ativos, nenhum pausado por engano.
- Planilha precisa ser atualizada: a campanha de Cliques no Link saiu do ar e todas as verbas
  mudaram.
- [x] incorporado

## 2026-09-11 18:47
- Painéis do relatório semanal atualizados pelo Bruno. Interno:
  https://claude.ai/code/artifact/7977952f-303c-44c8-b95c-7e2f63897496 · Cliente:
  https://claude.ai/code/artifact/806d3466-a1c8-4b6e-9839-79783d5dce89
- [x] incorporado

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
