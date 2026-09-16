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

## 2026-09-16 16:55

**Peças novas do cliente**

- **VT Pandemia Pulso Firme** (`DdWJXj2yDO2`), continuação do VT Pandemia, subiu em **22
  conjuntos de cluster**: 7 em Engajamento, 6 em Visitas ao Perfil, 4 em Visualizações e 5 em
  Reconhecimento. Base Própria, Tema Saúde, Progressista de Centro, Eleitorado Cleitinho,
  Independente e os três de Mulheres. O público que o cliente chamou de "quem recebeu bem o
  primeiro VT Pandemia" **já é o cluster Tema Saúde**, montado com `Visualizou 50% VT Pandemia`
  mais o semelhante de 10%. Não precisou criar nada.
- **PGM Vamos Ter Que Decidir** (`DdWmR6UOBEo`) subiu em 6 conjuntos: Base Própria,
  Independente e Progressista de Centro, em Engajamento e Visitas ao Perfil.

**Campanha de WhatsApp reativada**

- O conjunto `Grupo WhatsApp - Cliques` voltou ao ar com **RMBH nas 29 cidades** e público só de
  base própria: Seguidores Kalil no Instagram, Seguidores no Facebook e Engajou no Instagram 30
  dias. Verba baixa, R$380 de teto. O conjunto `Grupo WhatsApp - Conversas` segue pausado,
  nunca gastou um centavo.
- **A REGRA DO BOTÃO DE WHATSAPP MUDOU.** Não é mais "nenhum anúncio". Agora o botão entra
  **só nos anúncios de base própria e RMBH**. O campo técnico é
  `asset_feed_spec.message_extensions` no creative, e **não dá para ligar por API**: creative é
  imutável e criar creative novo é recusado. É sempre o Bruno pelo Gerenciador.

**Pedido do Lucas de 16/09, executado**

- VT Spot Fazedor saiu do Norte de Minas em Visualizações, o maior gasto dele.
- VT Falar pro Sul de Minas saiu de Sul de Minas em Visitas ao Perfil.
- Saúde Portas Abertas saiu de Visitas ao Perfil, fica só em Engajamento.
- Coragem reduzido em três lugares, incluindo o Vale do Rio Doce onde levava 94,7% do conjunto
  sufocando o VT Bio Invertida.
- VT Bio Invertida concentrado onde ganha, saiu dos três conjuntos onde rendia 0,45x, 0,61x e
  0,79x da mediana.
- Montes Claros reduzido nos três objetivos, R$60, com a verba indo para Base Própria.
- InterTV Vales, Vale do Rio Doce e Zona da Mata mantidos como estavam.

**Duplicados achados e resolvidos**

- `VT Full Triângulo (JOB695)` tinha dois anúncios em Uberlândia e Uberaba, Visitas ao Perfil.
  Ficou o `120249949358460061`.
- `VT Servidor Público` tinha dois em Visualizações do cluster, mesmo post. Ficou o
  `120250000750760061`.

**Semana 3 fecha em R$80.004,23**, 97 conjuntos, 325 anúncios, nenhum sem peça, todos com
término 17/09 23h59.

- [ ] ainda não incorporado na memória

---

## 2026-09-15 11:57

**Perguntas do Bruno sobre o painel do cliente, com as respostas apuradas**

- **Pico de interações em 11/09:** foi a virada da semana 3. O gasto pulou de R$8.750,24 no dia
  10 para R$11.486,67 no dia 11, e no mesmo dia estreou o `VT da Cemig`, que sozinho fez 38.809
  interações a 423,2 por mil. Não foi post viralizando, foi verba nova mais criativo forte. O
  dia 12 manteve o patamar, 321.360 interações.
- **Regiões e clusters, o acumulado engana.** O teto hoje está em 69/31, que é o plano. Mas o
  **realizado do flight inteiro está em 83,2% regional e 16,8% cluster**, porque os clusters só
  entraram em 10/09, com o flight já correndo há duas semanas. Se o cliente olhar o acumulado
  vai achar que não cumprimos o plano. Resposta pronta: a divisão está certa desde 10/09 e o
  acumulado se corrige até o fim do flight.
- **Segurança pública:** o cluster estadual é o pior da conta, 4,6 interações por mil no flight.
  O de Bairros BH vai bem, 208,0. A causa era o `Só Quem Fez - Segurança`, com 1,2 por mil, já
  pausado hoje e substituído pelo `Coronel Gianfranco`, que faz 326,1. **O tema funciona, o
  criativo é que não funcionava.**

**Faixa etária, análise que gerou ação**

| Idade | Verba do flight | Interações por mil |
|---|---|---|
| 18-24 | 5,6% | 125,7 |
| 25-34 | 13,3% | 211,6 |
| 35-44 | 20,4% | 206,2 |
| 45-54 | 19,6% | 275,3 |
| 55-64 | 19,6% | 323,0 |
| 65+ | 21,5% | 349,8 |

- **CORREÇÃO IMPORTANTE, gravar:** eu havia sugerido "incluir 65+" nos clusters. **Errado.** O
  Meta trata `age_max: 65` como **65 ou mais**, não como "até 65". A faixa 65+ já recebe 21,5%
  da verba e tem a melhor taxa da conta. Não há nada a ajustar ali.
- **Ação executada:** `age_min` de 18 para **25** nos 6 conjuntos de `Progressista de Centro` e
  `Público de Esquerda`. São clusters de prospecção por interesse, onde o 18-24 entra mais e
  devolve menos.
- **Não cortar em `Base Própria`:** é quem já segue o Kalil, então jovem ali é gente engajada,
  não prospecção fria. **Nem no `Torcedor Atleticano`:** nasceu em 14/09 e mexer agora estraga
  a leitura do teste.

**Cleitinho e Mulheres Cidades Prioritárias, os dois piores do painel**
- **Os números ruins são herança, não o presente.** Cleitinho aparece com 55,3 por mil e
  Mulheres Cidades com 34,6 no acumulado do flight, porque rodaram muito tempo com card e com o
  `Carrossel Só quem fez - Mulheres`.
- Hoje o Cleitinho roda `VT Defender o Meu Estado` a 403,1 por mil em Engajamento,
  `VT Bio Invertida` a 295,2 em Reconhecimento e `VC Povo Fala` a 276,7. Pausado o
  `Card Independente`, que era resto, R$0,59.
- O Mulheres Cidades já estava resolvido: o carrossel saiu hoje cedo e entrou o
  `Mulheres Lei Absorvente e Merenda`, que faz 401,5 por mil em Engajamento.
- **Regra que fica: antes de propor mexer num cluster por causa do número do painel, conferir o
  que está rodando nele AGORA.** O acumulado do flight carrega criativo que já saiu.
- Pendência resolvida pelo Bruno: subiu `PGM` e `VC Povo Fala` no Cleitinho em Visitas ao
  Perfil, onde só havia o `VT Defender o Meu Estado` com 36,7 por mil. Sobrou uma cópia
  duplicada do VC Povo Fala, marcada como `- Deletar`.
- **Atenção para a virada:** o conjunto do Cleitinho em Visitas ao Perfil tem teto de R$3.768,22
  mas só R$265 de saldo. As peças novas vão entregar pouco até quinta. Medir na semana 4.

- Conferências: 95 conjuntos ativos, nenhum sem anúncio ativo, 30,84% cluster e 69,16% regional
  sobre saldo de R$29.783,91.
- Página Campanhas Ativas publicada.
  https://algoritmica-relatorios.vercel.app/kalil/campanhas-ativas/
- **Painel do cliente:** está em `Claude - Kalil/relatorio_kalil_cliente.html`, salvo pelo
  Bruno. O artifact em https://claude.ai/code/artifact/806d3466-a1c8-4b6e-9839-79783d5dce89
  **não pode ser lido por mim**, nem como link público nem pelo Chrome, a página trava no
  carregamento. Usar o arquivo local.
- [ ] ainda não incorporado na memória

## 2026-09-15 11:15

**Peça nova do cliente: `Empatia - Saúde`** (https://www.instagram.com/p/DdTjLw5yjXc/)
- Pedido: três clusters principais mais o Tema Saúde, em engajamento e seguidor.
- Subida em 7 lugares: 4 em Engajamento (Base Própria, Progressista de Centro, Público de
  Esquerda, Tema Saúde) e 3 em Visitas ao Perfil (Base Própria, Progressista, Tema Saúde).
- O Público de Esquerda não tem conjunto de Visitas ao Perfil, por isso entrou só em um.
- **"Seguidor" não existe como objetivo no Meta.** O que gera seguidor é a campanha de Visitas
  ao Perfil. Resposta a dar ao cliente sempre que ele pedir esse objetivo.

**Correção importante sobre o `POV: você viveu em BH`**
- Eu tinha lido como peça fadigada. Estava errado. Ele subiu em 05/09 em Engajamento na RMBH e
  na RMBH RMKT, rodou três dias fazendo **200 a 320 por mil**, e aí o algoritmo parou de
  entregar: de 08 a 13/09 somou 66 impressões nos dois conjuntos.
- Os 23,7 por mil que pareciam fadiga vieram do conjunto de **Visitas ao Perfil**, onde ele foi
  subido em 14/09. Card não leva ao perfil, é o mesmo padrão do Card Independente e do
  Card Independência Presidente.
- **Regra que fica: não julgar fadiga por média de peça.** Separar por objetivo antes, porque a
  mesma peça em objetivo errado derruba a média inteira e esconde o que está funcionando.
- Ações: pausado em Visitas ao Perfil. Para abrir espaço nos dois de Engajamento, pausados o
  `Conteúdo 7 de Setembro` (levava R$681,59 e R$679,70) e o `VT Pandemia` (R$155,82 e R$2,03).
  Liberados cerca de R$1.519 nos dois conjuntos. **Conferir quarta:** se o POV não pegar mesmo
  com esse espaço, o algoritmo já o descartou e o caminho é recriar o anúncio do zero, para
  zerar o histórico.

**Varredura de peças antigas, primeira leva**
- Critério: conjunto com 6 ou mais anúncios ativos, e dentro dele peça antiga gastando menos de
  R$5 em quatro dias. Deu 53 candidatos; executada só a parte mais clara.
- `VT Bio Invertida` pausado em 10 lugares, fica em 12. É a peça mais antiga da conta, de
  27/08, estava em 22 conjuntos gastando R$404,71 na semana inteira, ou seja, ocupando espaço
  sem entregar.
- `VT Pandemia` pausado em 2, os de Visitas ao Perfil do Sul de Minas (151,4 por mil) e do
  Norte de Minas (137,4), ambos abaixo da mediana de 176,1 do objetivo. Fica em 17.
- **Não mexer no VT Pandemia nos outros:** ele ainda é a segunda peça que mais gasta e entrega
  entre 360 e 460 por mil em seis conjuntos. Velho não é o mesmo que morto.
- **Não tirar o VT Pandemia do Tema Saúde em Reconhecimento por enquanto.** Ele faz 33,9 por
  mil ali, contra mediana de 23,0 do objetivo, e o único outro anúncio do conjunto é o
  `VC Povo Fala`, que subiu ontem e faz 22,7. Trocar agora seria pôr a peça pior no lugar da
  melhor. Reavaliar quarta.
- **Segunda leva, pendente:** 32 anúncios parados de Vamos Fazer, Coronel Gianfranco, Fiz pela
  minha cidade, Coragem e VT Spot Fazedor. Deixados para quarta, depois de ver se as peças
  novas ocuparam o espaço da primeira leva.

**Gasto diário, observação da Julia**
- Ela apontou que 14/09 gastou acima. Confere: R$12.216,27 contra régua de R$11.428,57, 6,9%
  acima. Causa: entraram três peças novas no mesmo dia (PGM em 40 conjuntos, VC Povo Fala em 17,
  VT Regionalizado em 13), e peça nova puxa entrega nas primeiras horas. Só o PGM gastou R$2.111.
- Os quatro dias fechados somam R$46.991,76 contra R$45.714,29 do plano, R$1.277,47 adiantados.
- CPM subiu de R$7,91 em 11/09 para R$8,38 em 14/09, concorrência maior no leilão.

**Ajuste de teto para fechar a semana em 80 mil**
- O teto estava dimensionado para fechar em R$79.560,81, abaixo da meta. **O Bruno foi
  explícito: não pode fechar abaixo.**
- Somados R$919,19 de teto: R$439,19 para fechar o buraco e R$480 de margem de 0,6%, porque
  historicamente nem todo conjunto gasta o teto (semana 1 fechou 0% abaixo, semana 2 fechou 1%).
- **A pedido do Bruno, a verba foi para os conjuntos com peça nova**, não distribuída
  proporcionalmente: 70% nos 13 conjuntos do Triângulo onde o `VT Regionalizado Triângulo`
  entrou, e 30% nos 3 do `Total - Cluster - Torcedor Atleticano`, onde está o `Kalil fez no
  Galo`. As duas peças subiram ontem e ainda não tiveram chance de provar nada.
- De quebra atende o que o Lucas falou na reunião, que o Triângulo está com desempenho ruim mas
  é estratégico: agora tem criativo novo e verba nova lá.
- Semana passa a fechar em R$80.480,01. Clusters 30,91%, regionais 69,09%.

**Método que vale registrar:** com verba total, reduzir o ritmo de um dia não reduz o total da
semana, só empurra para os dias seguintes. O que controla o fechamento é o teto do conjunto.
Quando o Bruno pedir para "reduzir o gasto de hoje", a pergunta certa é se ele quer mudar o
total da semana ou só o ritmo do dia.

- Conferências: 95 conjuntos ativos, nenhum sem anúncio ativo.
- Página Campanhas Ativas publicada.
  https://algoritmica-relatorios.vercel.app/kalil/campanhas-ativas/
- **Planilha pendente:** ainda não entraram o `VT Regionalizado Triângulo` (13 linhas), os 6
  conjuntos `Incremental`, o `Empatia - Saúde` (7 linhas) e os 15 anúncios pausados hoje.
- [ ] ainda não incorporado na memória

## 2026-09-14 22:13
- Fim do dia. Complemento do bloco das 19:14 com o que veio depois.

**Vídeos regionalizados, seis chegaram**
- Estão em `IA/templates/Claude - Kalil/video/vídeos segmentados/`, um JOB por região: 789
  Triângulo, 791 Sul, 792 Vale do Rio Doce, 793 Norte/Jequi/Mucuri, 797 Belo Horizonte, 811
  Zona da Mata. As legendas de todos estão no documento
  https://docs.google.com/document/d/1nBeK7EASmYLMXkHg-oxLKaGEaQTFY2GwbT05BCVM4t4
- O cliente liberou **só o do Triângulo e Alto Paranaíba**. Os outros cinco ele revisa até o
  fim da semana.
- **`VT Regionalizado Triângulo (JOB789)` subido em 13 lugares:** 4 em Engajamento (Triângulo
  Mineiro, Triângulo + Alto Paranaíba, Uberlândia e Uberaba, Uberaba), 3 em Visitas ao Perfil,
  2 em Visualizações e 4 no remarketing. Mesma cobertura do `VT Full Triângulo`, com o
  remarketing a mais.
- **Limitação nova, gravar:** `ads_creative_upload_video` responde "gradually rolled out" nesta
  conta, então **não dá para subir vídeo por API**. A API só aceita vídeo por URL pública, e o
  arquivo é local. O primeiro anúncio de cada vídeo novo tem que ser feito pelo gerenciador;
  depois eu replico pelo `creative_id`.

**Campanha de alcance incremental montada, a pedido do Bruno**
- Seis conjuntos novos dentro da campanha `ELEIÇÕES 2026 ALEXANDRE KALIL | IMPRESSÕES`, que
  estava parada desde 05/09. Nomes com prefixo `Incremental - `, um por região, com a mesma
  geografia dos conjuntos antigos: RMBH, Sul de Minas, Norte/Jequi/Mucuri, Vale do Rio Doce e
  Zona da Mata, Triângulo Mineiro, e Uberlândia e Uberaba.
- **`optimization_goal: AD_RECALL_LIFT`**, que é o objetivo de incrementalidade de verdade:
  entrega para quem tem mais chance de lembrar da peça, não para quem sai mais barato.
  Confirmado que funciona nesta conta política.
- **Exclusão de `Engajou IG Kalil - 30d` e `Visualizou 25% Kalil - 30d`** em todos. É isso que
  torna o alcance incremental, sem pagar de novo por quem a malha atual já cobre.
- **Não deu para usar `frequency_control_specs`:** o Meta só aceita limite de frequência com
  `optimization_goal: REACH` (subcode 1815211). Ficou sem cap, a exclusão faz esse papel.
- Início 18/09, término 01/10, verba mínima de R$143,36 cada, R$860,16 no total, tudo pausado.
  Nenhuma verba saiu de conjunto que está rodando.
- Os seis conjuntos antigos de IMPRESSÕES seguem pausados. São `REACH` e o `optimization_goal`
  não pode ser alterado depois de criado, por isso foram recriados em vez de reaproveitados.
  Marcar para deletar quando os novos entrarem no ar.
- O `VT Regionalizado Triângulo` já está pausado dentro dos dois conjuntos incrementais do
  Triângulo. Os outros quatro estão sem anúncio, esperando os vídeos das demais regiões.
- **Decisão do Bruno:** os cinco vídeos que faltam entram direto em impressões na virada da
  semana 4. O do Triângulo, que o Lucas liberou, segue rodando nos objetivos normais.

**Planilha atualizada**, estava parada em 11/09.
- Aba Postagens: 80 linhas novas com data 14/09, e **65 linhas com status corrigido** de ATIVO
  para PAUSADO em peças que já tinham saído do ar há dias (Carrossel Bio, Carrossel Teve Um
  Cara Que, VT Pandemia em Visualizações, Fiz pela minha cidade). Fechou em 336 ativas e 124
  pausadas, batendo com a conta.
- Aba Acompanhamento: bloco de 14/09 com os 95 conjuntos ativos e as 23 colunas.
- **Aba Verba NÃO foi mexida, de propósito.** Ela ainda está no flight de 27/08 a 05/09, com
  R$70.000 e 38 conjuntos, e é toda por fórmula puxando do total no topo. Hoje são 95
  conjuntos. Refazer quebra as fórmulas e muda a estrutura. Precisa de decisão do Bruno:
  refazer no formato novo ou criar uma aba por flight.
- **Método que funciona para colar no Sheets:** o alvo do `ClipboardEvent` tem que ser
  `#waffle-rich-text-editor`. Em `.cell-input` ou `.grid-scrollable-wrapper` o evento é
  ignorado. O retorno `disparado=false` é esperado, significa que o Sheets processou e chamou
  `preventDefault`. Conferir sempre pelo `export?format=csv`, não pelo `gviz`, que vem em cache.
- `System Events` não tem permissão de acessibilidade nesta máquina, então `keystroke` com
  Cmd+V não funciona. Só o paste sintético.

**Erro do dia, já corrigido:** ao ceder verba ao conjunto novo do Progressista, digitei `841790`
em vez de `84179` no conjunto de Visualizações, dez vezes o valor. O bloco foi a 41,77% cluster
por alguns minutos. Peguei na conferência de rotina. Regra que fica: **sempre reconferir o 70/30
depois de mexer em verba**, porque erro de um zero não aparece em nenhum outro lugar.

- Conferências finais: **95 conjuntos ativos, nenhum sem anúncio ativo**, 30,62% cluster e
  69,38% regional sobre saldo de R$39.561,62. Mais 6 conjuntos Incremental criados e pausados.
- Página Campanhas Ativas publicada.
  https://algoritmica-relatorios.vercel.app/kalil/campanhas-ativas/
- **Pendente na planilha:** as 13 linhas do `VT Regionalizado Triângulo` e os 6 conjuntos
  Incremental ainda não entraram, porque subiram depois da atualização.
- [ ] ainda não incorporado na memória

## 2026-09-14 19:14
- Dia cheio. Reunião com o cliente de manhã, cinco pedidos dele ao longo da tarde, e três peças
  novas subidas. Tudo abaixo já está no ar e conferido.

**Reunião de 14/09, o que foi executado**
- Vídeo do Triângulo: `VT Uberaba (JOB694)` subido em 6 conjuntos do Triângulo e do Uberlândia
  e Uberaba, nos três objetivos. O de Visitas ao Perfil foi por duplicação no gerenciador, e o
  Meta recriou o post com outro código (`DdReyW4g_od`), mesmo arquivo e mesma legenda.
- Saturados do Triângulo pausados para abrir espaço: `VT Pandemia` no Alto Paranaíba (143,0 por
  mil, frequência 1,84), `Fiz pela minha cidade`, `Obrigado pelo Apoio AP Junqueira` e uma
  cópia repetida do Independência no mesmo conjunto.
- RMBH reforçada com R$768,35, tirados do Sul de Minas e do Norte de Minas. Vale do Rio Doce e
  Triângulo poupados, como o cliente pediu.
- `POV: você viveu em BH quando Kalil foi prefeito` subido em Visitas ao Perfil na RMBH.

**Peças novas do cliente**
- `Só Quem Fez Finanças`, 6 lugares. Para atender por inteiro foram criados dois conjuntos que
  não existiam: Base Própria em Visitas ao Perfil e Independente em Engajamento.
- `PGM Sou o Seu Candidato`, 40 lugares: 13 praças em Engajamento, 7 em Engajamento RMKT, 6 em
  Visualizações RMKT, 13 em Visitas ao Perfil e 1 em Visitas ao Perfil RMKT.
- `VC Povo Fala Kalil Serra`, prova social, 17 lugares: 9 em Reconhecimento e 8 em Visitas ao
  Perfil dos clusters.

**Cluster novo: Total - Cluster - Torcedor Atleticano**
- Interesse `Clube Atlético Mineiro`, MG inteiro, 18 a 65, **sem excluir seguidores**, expansão
  desligada. Público de 1 a 1,2 milhão.
- Três conjuntos, sem Reconhecimento por decisão do Bruno: Engajamento R$605,52, Visitas ao
  Perfil R$363,31, Visualizações R$242,21. Divisão 50/30/20, diferente do plano padrão porque a
  peça é narrativa.
- Verba veio de corte de 10% no saldo de cada um dos 32 conjuntos de cluster.
- Roda só com `Kalil fez no Galo`, a pedido do Bruno, para não sujar a leitura do cluster novo.
- **Régua própria:** medir por engajamento por mil, não por custo por visita. Acima de 300,
  funcionou. Detalhe em `project_kalil_cluster_torcedor_atleticano.md`.

**Conjuntos de Reconhecimento criados**
- `Total - Cluster - Base Própria`, R$174,72, e `Total - Cluster - Progressista de Centro`,
  R$137,11. Os dois maiores clusters da conta não tinham esse objetivo. Verba tirada de dentro
  do próprio cluster, o total de cada um não mudou.
- O do Progressista falhou na primeira tentativa porque usei um interesse que não existe mais
  (`6003353161577`). Refeito copiando o `targeting` exato do conjunto de Visitas ao Perfil dele.

**Remarketing de Visitas ao Perfil reforçado**
- É a melhor campanha da conta em taxa: 39,43 cliques por mil contra 28,03 da aberta, com custo
  por clique quase igual, R$0,48 contra R$0,47. Frequência 1,49, ainda com espaço.
- Movidos R$700 para ele, de R$1.293,66 para R$1.993,66 de saldo. Verba veio dos conjuntos
  abertos do mesmo objetivo, poupando RMBH e Triângulo.

**WhatsApp nos anúncios**
- Varridos os 140 criativos dos anúncios ativos e os 90 conjuntos. **Nenhum com WhatsApp.** O
  campo `smart_pse_enabled` está falso em todos.
- Virou regra fixa: complemento para navegador sempre em **Nenhum**. Gravado em
  `feedback_kalil_sem_botao_whatsapp.md`.

**Erro que cometi e corrigi na conferência:** ao ceder verba ao novo conjunto do Progressista,
digitei `841790` em vez de `84179` no conjunto de Visualizações, dez vezes o valor. O bloco foi
a 41,77% cluster por alguns minutos. Peguei na conferência e voltei. Fica o alerta: sempre
reconferir o 70/30 depois de mexer em verba, o erro de um zero não aparece em lugar nenhum além
do percentual.

- Conferências finais: **95 conjuntos ativos, nenhum sem anúncio ativo**, bloco em 30,62%
  cluster e 69,38% regional sobre saldo de R$39.561,62.
- Por objetivo, contra o plano 41/25/25/8: tráfego 42,25%, engajamento 29,05%, thruplays 21,36%,
  reconhecimento 7,34%. Engajamento segue acima porque as peças que o cliente manda acelerar são
  card e vídeo curto. Cliques no link segue zerado desde a suspensão do grupo de WhatsApp.
- Página Campanhas Ativas publicada.
  https://algoritmica-relatorios.vercel.app/kalil/campanhas-ativas/
- **Planilha, o que precisa:** aba Postagens incluir `VT Uberaba` nos 6 novos lugares,
  `Só Quem Fez Finanças` nos 6, `PGM Sou o Seu Candidato` nos 40 e `VC Povo Fala Kalil Serra`
  nos 17; marcar como pausados `VT Pandemia` no Alto Paranaíba, `Fiz pela minha cidade` no
  Triângulo, `AP Junqueira` e a cópia do Independência. Aba Verba e aba Acompanhamento precisam
  dos conjuntos novos: 3 do Torcedor Atleticano, 2 de Reconhecimento e os 2 criados de manhã.
- [ ] ainda não incorporado na memória

## 2026-09-14 10:20
- Complemento da rodada de fadiga, com as decisões do Bruno.
- Os quatro anúncios novos saíram da análise e estão ACTIVE. As três peças antigas que ficaram
  de reserva foram pausadas: 120250035695890061, 120250035695010061 e 120249848192620061.
- `Obrigado pelo Apoio AP Junqueira` pausado no `Total - Triângulo Mineiro - Uberlândia e
  Uberaba` em Visitas ao Perfil, anúncio 120249944357870061, que levava R$227,30 a 27,7 por
  mil. Não precisou subir peça nova: o conjunto já tem `VT Full Triângulo`, `Vamos Fazer com
  Minas Gerais`, `VT Bio Invertida` e `VT Pandemia` ativos e mudos, todos sufocados pelo
  Junqueira. O VT Full Triângulo faz 399,2 por mil no conjunto de Visualizações da mesma
  região, então é a aposta natural para assumir.
- `VT Pandemia` pausado no `Total - Triângulo Mineiro + Alto Paranaíba` em Visitas ao Perfil,
  anúncio 120249909168750061. Era o único ponto de fadiga real da peça: 143,0 por mil contra
  mediana 157,2 e frequência 1,84, a maior dela. O conjunto já tem `Conteúdo 7 de Setembro` e
  `Carrossel Triângulo Mineiro + Alto Paranaíba` ativos e mudos. O Independência faz 347,6 por
  mil no conjunto de Engajamento da mesma região, então deve assumir. Nos outros onze conjuntos
  o VT Pandemia continua entre 350 e 460 por mil e não foi tocado.
- **Método que passou a valer:** antes de subir peça nova num conjunto sufocado, olhar o que já
  está ativo e mudo lá dentro. Quase sempre a peça genérica já está no conjunto e só precisa
  que a dominante saia. Isso evita criar anúncio, evita o bloqueio de Visitas ao Perfil e não
  mexe em verba nenhuma.
- 88 conjuntos ativos, nenhum sem anúncio ativo.
- **Pendente no gerenciador, não dá por API** (subcode 2016153, Visitas ao Perfil):
  `Total - Cluster - Mulheres Cidades Prioritárias` em Visitas ao Perfil, conjunto
  120249933530190061, tem como único anúncio o `Carrossel Só quem fez - Mulheres` a 18,2 por
  mil. Subir `Mulheres Lei Absorvente e Merenda` e pausar o carrossel.
  `Total - Incidência Criminal` em Visitas ao Perfil, conjunto 120249848148870061, tem como
  único anúncio o `Só Quem Fez - Segurança` a 21,3 por mil. Subir `Coronel Gianfranco` e pausar.
- **Peça nova do cliente, 14/09:** `SÓ QUEM FEZ FINANÇAS`,
  https://www.instagram.com/p/DdQ-xGij6wy/ , para base própria, público independente e
  Triângulo com Alto Paranaíba, em Engajamento e Tráfego. Levantado que o cluster Base Própria
  não tem conjunto de Visitas ao Perfil e o cluster Independente não tem conjunto de
  Engajamento, então a peça cobre os dois objetivos pelo conjunto que cada cluster tem.
- [ ] ainda não incorporado na memória

## 2026-09-14 10:01
- Realocação de verba por fadiga de criativo, a pedido do Bruno. Nada de verba de conjunto foi
  movido: a troca foi feita **dentro dos conjuntos**, pausando a peça gasta para a verba ir
  para as peças boas que já rodavam ali. Por isso o 70/30 e a divisão dos clusters ficaram
  intactos, em 30,35% cluster e 69,65% regional sobre saldo de R$42.118,31.
- Critério: taxa de engajamento por mil comparada com a **mediana do próprio objetivo** na
  Semana 3, não com a média geral. Medianas medidas: Engajamento 376,0, Visualizações 390,4,
  Visitas ao Perfil 157,2, Reconhecimento 11,3.
- Pausados 12 anúncios abaixo de 40% da mediana do próprio objetivo:
  `Card Independente` e `Card Independência Presidente` no Cluster Independente, em Visitas ao
  Perfil e em Reconhecimento; `Card Independente` no Eleitorado Cleitinho;
  `Carrossel Só quem fez - Mulheres` em Mulheres Norte e Vales e em Mulheres Cidades
  Prioritárias Engajamento; `Só Quem Fez - Segurança` em Incidência Criminal Engajamento,
  Segurança Bairros BH e Triângulo + Alto Paranaíba.
- Peças novas subidas no lugar, nos conjuntos que tinham só a peça fadigada:
  `Coronel Gianfranco` no Cluster Segurança Pública Reconhecimento e em Incidência Criminal
  Engajamento, `Mulheres Lei Absorvente e Merenda` no Mulheres Cidades Prioritárias
  Reconhecimento, `Comercial Kalil Fez` no Cluster Independente Reconhecimento.
- **Visitas ao Perfil segue bloqueado para criar anúncio por API**, subcode 2016153. Quatro
  substituições não puderam ser feitas: Mulheres Cidades Prioritárias VP, Incidência Criminal
  VP, Cluster Independente VP e Eleitorado Cleitinho VP. Nesses, só pausei onde já havia outra
  peça ativa. `Carrossel Só quem fez - Mulheres` em Mulheres Cidades VP e
  `Só Quem Fez - Segurança` em Incidência Criminal VP continuam no ar porque são o único
  anúncio do conjunto. Precisam ser subidos pelo gerenciador.
- Os quatro anúncios novos entraram em PENDING_REVIEW. Para não abrir buraco de entrega, as
  três peças antigas que eram únicas no conjunto foram reativadas e ficam no ar até a análise
  sair. Conferir e pausar depois: 120250035695890061, 120250035695010061 e 120249848192620061.
- **Correção de leitura:** o `VT Pandemia` não morreu no Cluster Tema Saúde. A taxa de
  34,3 por mil que parecia baixa está em Reconhecimento, onde a mediana é 11,3, ou seja ele
  está três vezes acima. A queda de 42% da peça na média geral vem de mistura de objetivos, não
  de fadiga. Único ponto real é o Triângulo + Alto Paranaíba em Visitas ao Perfil, 143,0 contra
  mediana 157,2 e frequência 1,84, a maior da peça. Não foi mexido porque é o único anúncio que
  entrega naquele conjunto.
- `Obrigado pelo Apoio AP Junqueira` revisado: já roda num único conjunto, o
  `Total - Triângulo Mineiro - Uberlândia e Uberaba`, e não está em mais lugar nenhum. As duas
  cópias sem entrega estão no mesmo conjunto, é o algoritmo concentrando numa só. Frequência
  1,33, então não é saturação, é a peça. 27,7 por mil contra mediana 157,2.
- Ritmo da Semana 3: 11/09 R$11.486,67, 12/09 R$11.533,77, 13/09 R$11.748,02, contra régua de
  R$11.428,57. Acumulado R$34.768,46 de R$80.000, faltam R$11.307,89 por dia até 17/09. CPM
  R$8,18 e frequência 1,87 na semana.
- 88 conjuntos ativos. Página Campanhas Ativas publicada.
  https://algoritmica-relatorios.vercel.app/kalil/campanhas-ativas/
- Planilha, o que precisa: aba Postagens marcar os 12 anúncios pausados e incluir os 4 novos.
  Aba Acompanhamento não muda, nenhuma verba de conjunto foi alterada.
- [ ] ainda não incorporado na memória

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
