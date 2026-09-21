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

## 2026-09-19 11:59
- Informação do Bruno, nada alterado na conta. **As peças novas são todas dark post.**
- Consequência que vale registrar: a rotina `checagem-kalil` manda ler comentário no post
  orgânico do Instagram pelo Chrome logado. Em dark post não existe post no perfil, então
  esse bloco da checagem não roda nessas peças. Pela API sai só o contador de comentário.
- Na planilha Cronograma de Postagem, aba Postagens, essas linhas entram com Tipo de
  postagem igual a dark post, a coluna Legenda precisa ser preenchida à mão e a coluna Link
  fica sem link público.
- Lembrete para a ofensiva final: dark post não aparece no perfil, mas continua sendo
  anúncio de categoria política e entra na Biblioteca de Anúncios do Meta, com valor e
  alcance. Não é peça invisível.
- Leitura da conta hoje, para contexto: `Kalil fez no Galo` está em seis anúncios ativos,
  R$2.007,20 e 272.832 impressões em 7 dias, rodando em `Total - Cluster - Torcedor
  Atleticano`, que leva 73% do investimento da peça, mais RMBH e Base Própria.
- **O cluster `Total - Cluster - Torcedor Atleticano` é novo e não está na base de
  conhecimento nem em bloco anterior deste arquivo.** Entrou depois de 12/09. Falta saber
  quem subiu e com que público, para entrar na base e no `clusters_kalil_notas.json`.
- A conta tem 60 peças ativas hoje. Entraram desde 12/09, entre outras, PGM Sou o Seu
  Candidato, que é a que mais gasta com R$5.425,13 em 7 dias, VT Pandemia Pulso Firme,
  VT Valorizar Polícias, Só Quem Fez Finanças, Empatia Saúde, Card Pesquisa Cleitinho,
  VT Discurso Mulher, PGM Vamos Ter Que Decidir e a série VT Nossa Gente por praça.
- [ ] ainda não incorporado na memória

## 2026-09-20 19:35
- Reativado o conjunto `Total - Região Metropolitana de BH` em REGIONAIS - VISITAS AO PERFIL
  INSTAGRAM (`120249819319890061`), de PAUSED para ACTIVE, por ordem do Bruno em 20/09.
  A Julia não liberou: o Bruno foi avisado de que a pausa era dela e mandou reativar mesmo
  assim. A pausa original era de 19/09 às 04h14.
- Conferência no anúncio: 10 anúncios ficaram ACTIVE, entre eles o VT Prometedor Mentiroso
  (`120250184621500061`), que saiu de ADSET_PAUSED para ACTIVE, sem PENDING_REVIEW e sem erro
  de entrega. Seguem pausados no nível do anúncio, como já estavam, `Fiz pela minha cidade` e
  `Carrossel Teve Um Cara Que`.

## 2026-09-20 20:10
- TETO DIÁRIO DE CONJUNTO CONFIRMADO POR MEDIÇÃO: R$1.462,65. O RMBH de Visitas ao Perfil
  bateu exatamente esse valor em 18/09 e nunca passou disso em nenhum dia do voo. Com saldo de
  R$6.628,22 e 4 dias cheios até 24/09, ele ia travar e deixar de gastar uns R$480,00.
- A REATIVAÇÃO ESTOUROU O ALVO DA SEMANA. Com o conjunto pausado a projeção era R$62.032,34,
  ou seja, no alvo. Reativando, a semana ia para R$68.660,56, R$6.660,56 acima dos R$62.000.
  Base do cálculo: gasto de 18 a 20/09 R$28.255,52 mais saldo de R$40.405,04 em 85 conjuntos
  ativos.
- Mix da semana antes do ajuste: 41,9% cluster e 58,1% regional, contra o plano de 30/70.
  Por isso o corte saiu todo do cluster, que estava pesado, e nenhuma praça regional foi tocada.

REAJUSTE EXECUTADO, 42 conjuntos:
- `Total - Região Metropolitana de BH` VISITAS (`120249819319890061`): orçamento total de
  R$20.918,18 para R$20.389,96. Tirou R$528,22 que ia travar de qualquer jeito. Saldo conferido
  depois da edição: R$6.077,85.
- 41 conjuntos de CLUSTER: corte de 39,45% sobre o saldo de cada um, somando R$6.132,29.
  Fator aplicado igual para todos: saldo_novo = saldo_antigo menos 39,45%.
- POUPADOS DO CORTE, de propósito: `Total - Cluster - Pet e Animais` (`120250184437220061`) e
  `Total - Cluster - Mulheres Base e Esquerda` (`120250184438130061`). Nasceram em 20/09 com
  R$1.100,00 cada, são teste do Lucas e um corte de 39% no primeiro dia mataria a leitura.
  Foi por isso que o corte nos outros 41 subiu de 34,6% para 39,45%.
- Corte geral: R$6.660,51, contra o excesso de R$6.660,56. Diferença de 5 centavos, arredondamento.
- Salvar verba pausa o conjunto, então foram 42 edições mais 42 reativações. TODAS AS 42
  REATIVAÇÕES FORAM FEITAS E CONFERIDAS: leitura final da conta mostra os 85 conjuntos com
  effective_status ACTIVE, nenhum sobrou pausado.

FECHADO PELO CODE em 20/09 22:10:
- [x] Projeção recontada com leitura nova: gasto de 18 a 20/09 R$28.908,39 mais saldo de
      R$33.063,70 nos 85 conjuntos ativos, total de **R$61.972,09**. Faltam R$27,91 para os
      R$62.000, diferença de arredondamento do corte. O reajuste está certo, nada a corrigir.
- [x] Conferência no nível do anúncio, nos 85 conjuntos ativos e não só nos 41 de cluster:
      **nenhum conjunto ficou sem anúncio no ar.**
- [x] Bloco subido no GitHub pelo Code.

RECOMENDAÇÕES FEITAS AO BRUNO E AINDA NÃO EXECUTADAS, esperando ordem:
- Pausar `VT Internet Vilas e Favelas` nos dois conjuntos de `Total - Cluster - Público de
  Esquerda`, Engajamento e Reconhecimento. Ele leva 81% do gasto do conjunto de Engajamento a
  R$1,33 por interação, enquanto o `VT Vacina` ao lado está a R$0,09 e só pegou R$42,26.
  É sufocamento de criativo clássico.
- Pausar `PGM Sou o Seu Candidato` nas praças do interior, mantendo em RMBH e nos Semelhantes 35+.
  Índices do período 14 a 19/09: RMBH 135, Uberaba 35, Sul de Minas 44 em Engajamento e 46 em
  Visitas, Jequitinhonha 51, Norte de Minas 52. Peça estadual perde pra regional dentro da praça.
- NÃO pausar `VT Nossa Gente Sul de Minas (JOB791)` junto com o PGM: o conjunto ficaria só com
  `VT Pandemia`, índice 62 e R$148,72, ou seja sem peça com entrega.
- [ ] ainda não incorporado na memória

## 2026-09-21 13:40
- **MIX FICA EM 70/30.** O 60/40 chegou a ser decidido no começo da tarde e o Bruno voltou
  atrás no mesmo dia: "volte pro 70/30". **Vale o plano original, 70% malha geográfica e 30%
  cluster, e não se reabre isso sem ordem dele.** Como o cluster está em 42% do gasto da
  semana e 44,9% entre os conjuntos no ar, **o desvio tem de ser corrigido na virada da
  Semana 5**, trazendo cluster para 30%.
- **Como medir o mix sem errar:** a soma do `spend` por conjunto **não bate** com o `spend` da
  conta. Em 21/09 a soma por adset deu R$34.563,25 contra R$34.475,16 da conta, R$88,09 a mais,
  que é gasto não atribuído a conjunto mais arredondamento. **A base de verba é sempre o spend
  da conta; a quebra por conjunto serve só para proporção.**
- **RELATÓRIO NOVO, pedido do Lucas:** leitura das peças regionalizadas, a série VT Nossa
  Gente. Publicado em https://algoritmica-relatorios.vercel.app/kalil/regionalizados/ com o
  PDF ao lado, em `kalil/regionalizados/`. **Feito no layout do boletim diário da Julia**, que
  o Bruno mandou como referência: página A4 retrato, Archivo mais IBM Plex Mono, faixa de seis
  KPIs, tabela com barra de investimento, cartões de comparação e dois próximos passos. O
  fonte do boletim dela não está no repositório, então o layout foi reconstruído a partir do
  PDF; **daqui em diante essa página é o molde para relatórios avulsos do Kalil.**
- **Números da série, 17 a 20/09, quatro dias:** R$4.835,83 investidos, 485,6 mil impressões,
  5.157 interações a R$0,94, 63.922 visualizações completas a R$0,076, 79 compartilhamentos e
  439 comentários. **O ponto forte é vídeo:** R$0,076 por ThruPlay contra R$0,117 do resto da
  conta, 35% mais barato. Interação está em empate técnico, R$0,94 contra R$0,93, e o CPM é 43%
  mais caro, R$9,96 contra R$6,98, que é o preço esperado de comprar praça a praça.
- **Por praça:** Belo Horizonte é a melhor em interação, R$0,39, quatro vezes melhor que o
  Triângulo; Vale do Rio Doce tem o vídeo e o compartilhamento mais baratos, R$0,064 e R$33,83;
  Sul de Minas e Norte de Minas concentram 56% do investimento e o volume de impressão;
  **Triângulo é o ponto de atenção, R$2,30 por interação**, mas roda reduzido a pedido do
  cliente e recebeu pouco volume, então a recomendação é esperar mais três dias antes de mexer.
- [ ] ainda não incorporado na memória

## 2026-09-21 12:10
- **Peças novas do Lucas, subidas hoje:** `Mix Mulheres` (`DdjAcVXyjJr`) e reforço do
  `Card Patrus Kalil` (`Ddh1Co6uw9c`).
- **CONJUNTO NOVO `Total - Cluster - Ofensiva`** (`120250194109100061`), em CLUSTERS -
  ENGAJAMENTO, Minas inteira, base própria mais os interesses de esquerda e de
  independentes, R$1.501,84. **Nome escolhido pelo Bruno: é a casa das peças de ataque na
  reta final.** Nasceu porque o Card Patrus estava travado: dividia conjunto com peças
  maduras e o Meta concentrava nelas. Em 21/09 de manhã ele tinha gastado só R$12,16 nos
  quatro conjuntos somados. **Aprendizado: peça nova que precisa rodar rápido não sobrevive
  ao lado de peça madura, tem que ter conjunto próprio.**
- **CONJUNTO NOVO `Total - Cluster - Mulheres BH e RMBH`** (`120250194149780061`), em
  CLUSTERS - ENGAJAMENTO, R$1.100, só mulheres de 18 a 65, Belo Horizonte com raio de 25 km,
  que cobre a região metropolitana. Interesses copiados do Mães de Periferia. Foi criado
  porque o Lucas pediu foco em mulheres de BH e RMBH e **não existia cluster com esse
  recorte**: o Mães de Periferia é a RMBH sem a capital e o Cidades Prioritárias mistura BH
  com mais vinte cidades.
- **Mix Mulheres replicado** em Mulheres BH e RMBH, Mães de Periferia, Cidades Prioritárias,
  Norte e Vales e Mulheres Base e Esquerda.
- **Card Patrus** está nos quatro clusters de base e esquerda mais o Ofensiva.
- **Pausado `Mulheres Lei Absorvente e Merenda`** no Mulheres Norte e Vales de engajamento:
  R$2,65 por interação contra R$0,87 do VT Pandemia Pulso Firme no mesmo conjunto.
- **O `VT Discurso Mulher` com índice 30 fica como está.** Está em Visitas ao Perfil, onde a
  API não deixa pausar, e o gasto não justifica pedir ao Bruno para mexer no Gerenciador.
- **Semana fechada em R$62.000,00 exatos**, 86 conjuntos no ar, nenhum sem peça. A verba dos
  dois conjuntos novos saiu dos regionais de Visitas ao Perfil.
- **O custo NÃO subiu nesta semana, ao contrário do que parecia.** Medição por semana do
  flight: CPM R$7,76, R$8,16, R$8,25 e agora **R$6,90**; custo por interação R$0,95, R$0,93,
  R$1,10 e agora **R$0,92**; CPC no link R$0,98, R$0,95, R$1,01 e **R$1,06**, o único que
  subiu. A frequência caiu de 2,80 para 1,82, ou seja, está alcançando gente nova.
- [ ] ainda não incorporado na memória

## 2026-09-20 21:40
- **A automação de virada de semana foi desligada de vez**, a pedido da Julia via Bruno. A
  tarefa `kalil-virada-semana5-25set`, que rodaria 25/09 às 00h05, está desativada e **não
  pode ser reativada**. Virada de semana é manual. A checagem diária das 9h continua, mas só
  lê e reporta: **não ativa, não pausa e não mexe em verba**.
- **Antes de ativar qualquer conjunto ou anúncio pausado, conferir quem pausou**, em
  `GET act_497414229054067/activities` com `fields=event_type,event_time,actor_name,extra_data,object_id`.
  O filtro que funciona é por `object_id` do conjunto, porque vários conjuntos têm o mesmo
  nome. **Se o autor for a Julia Spadari, não ativar: avisar o Bruno.** Ela pausa de
  propósito e já perdeu trabalho duas vezes com religamento por conta própria.
- **PENDÊNCIA ABERTA, esperando a Julia liberar:** o conjunto `Total - Região Metropolitana
  de BH` em **REGIONAIS - VISITAS AO PERFIL INSTAGRAM** (`120249819319890061`) está pausado
  desde 19/09 às 04h14, pausado por ela. O **VT Prometedor Mentiroso** foi publicado dentro
  dele e **não entrega enquanto o conjunto estiver parado**. Quando ela liberar, é só ativar
  o conjunto e conferir que o anúncio saiu de PENDING_REVIEW. Se precisar de verba, ela sai
  de outro conjunto, porque a semana está fechada no alvo.
- **Alvo de gasto da Semana 4 mudou para R$62.000**, ordem do Bruno em 20/09. O plano
  registrado segue R$70.280 líquido; o corte de 10% é **correção de erro**, não folga: nas
  três primeiras semanas o cálculo não contabilizou o percentual cobrado pelo Meta e a
  campanha gastou 13 a 14% acima. A conta foi fechada cortando R$1.110,71 proporcionalmente
  nos 20 conjuntos com mais saldo, e depois realocando as sobras.
- **Conjunto ativo sem anúncio no ar se pausa e a verba vai para outro.** O
  `Total - Jequitinhonha e Mucuri` de Visualizações ficou só com o Guiado pelo Coração, que
  o Lucas mandou tirar, então foi pausado e os R$225,83 dele foram para o Norte de Minas de
  Visualizações. Se chegar peça da região, religa o conjunto e devolve a verba tirando de
  outro. O Meta tem piso de orçamento por conjunto, então não dá para zerar um: pausar é o
  único jeito de liberar tudo.
- **Peças novas de 20/09**, enviadas pelo Lucas: **Carrossel Só Quem Fez Animais**
  (`DdhSyzSml5F`) em Seguidores e no conjunto novo Pet e Animais; **Dark Motion Só Quem Fez
  Saúde** (JOB866) em Tema Saúde e Seguidores; **Dark Motion Mulheres** (JOB867) em sete
  conjuntos femininos e de base; **VT Prometedor Mentiroso** (`DdhjGkBPSM6`) em RMBH e base,
  em engajamento e visitas ao perfil.
- **Dois conjuntos novos, R$1.100 cada**, com verba tirada dos quatro maiores de Visitas ao
  Perfil: `Total - Cluster - Pet e Animais` (Minas inteira, interesses Petshop, Gatos,
  Cachorro, Animal Rescue, Comida para gatos e Veterinário) e `Total - Cluster - Mulheres
  Base e Esquerda` (Minas inteira, só mulheres, base própria mais os interesses de esquerda).
- **Não existe conjunto de "cidades com hospital regional" para criar:** o
  `Total - Cluster - Tema Saúde` **já é** Sete Lagoas, Governador Valadares, Divinópolis,
  Conselheiro Lafaiete, Juiz de Fora e Teófilo Otoni, com 17 km de raio em cada uma.
- **Upload de arquivo local está bloqueado nessa conta.** `ads_creative_upload_media` com
  `LOCAL_FILE` é recusado e só aceita URL pública. Vídeo novo tem que ser subido pelo
  Gerenciador; depois disso é só pegar o `creative_id` e replicar por API.
- **PÁGINA NOVA: desempenho das peças**, em
  https://algoritmica-relatorios.vercel.app/kalil/pecas/ — lê a conta ao abrir, traz as 10
  piores e abre peça a peça dentro de cada conjunto, com índice 100 na mediana do próprio
  objetivo, fadiga por frequência e selo de Escalar, Manter, Observar ou Pausar. Seletor de
  período igual ao do Pulse. Código em `api/pecas-kalil.js`. Foi feita porque o Lucas pediu
  a lista de criativos saturando e ninguém abre o Pulse.
- [ ] ainda não incorporado na memória

## 2026-09-19 14:30
- **A CONTA NÃO ESTÁ HABILITADA PARA ANÚNCIOS DE VISITA AO PERFIL.** Não é irregularidade,
  é acesso a recurso que a Meta libera conta a conta, e o painel não mostra nada. Erro 100,
  subcode **2016153**. Em 18/09, ao corrigir `location_types` de 91 conjuntos, os anúncios
  foram revalidados e **todos os de Visita ao Perfil pararam às 13h**, de R$256,35 na hora
  das 12h para R$17,87 às 14h. Os três conjuntos desse objetivo que não foram tocados
  continuaram entregando, o que provou a causa. Religados manualmente pelo Gerenciador, 162
  anúncios. Perda de cerca de cinco horas de entrega.
- **Duas regras novas:** anúncio de Visita ao Perfil **se cria duplicando outro, nunca do
  zero** (foi o suporte da Meta que explicou: criado do zero, a plataforma não verifica a
  vinculação e o anúncio cai em erro), e **não editar targeting de conjunto de Visita ao
  Perfil**. Chamado aberto pedindo a habilitação.
- **A correção de localização de 18/09 teve de ser revertida.** A Meta descontinuou a opção
  de escolher o tipo de localização, e o Gerenciador passou a travar com o erro **#1870194**
  em qualquer publicação. A Julia não conseguia editar orçamento de nenhuma campanha. **66
  conjuntos voltaram para `["home","recent"]`**, mais 7 já revertidos antes. Os **27 de
  Visita ao Perfil ficaram em `["home"]` de propósito**, porque mexer neles derruba os
  anúncios. Se precisar editar um desses, só pela API.
- **O painel comparava valor bruto com líquido.** A Julia descobriu em 19/09: a campanha
  gastou **13 a 14% acima do planejado** nas três primeiras semanas. Ela e o Alan decidiram
  não alertar o cliente por ora e compensar gastando **10% a menos** nesta semana. Alvo da
  Semana 4 passa a ser **R$71.814,77**, que é a Semana 3 menos 10%. **O corte de R$14.263,34
  ficou suspenso** a pedido dela, esperando a decisão sobre o vídeo de ataque.
- **A Julia desativou o remarketing** na madrugada de 19/09, porque estava caro, e também o
  RMBH de Visitas ao Perfil. **Eu religuei os 12 conjuntos de remarketing por engano** na
  noite de 18/09, achando que tinham caído sozinhos, e ela desligou de novo. Desligados em
  definitivo em 19/09. **Regra: conjunto pausado que eu não pausei, perguntar antes de
  religar.** O histórico da conta em `act_.../activities` mostra autor e horário de cada
  mudança e resolve esse tipo de dúvida.
- **Peças novas de 19/09:** VT Preparado (`DdcWOw0SkPj`) em RMBH engajamento e RMKT; VT Vacina
  (`Ddcq4PWxH1f`) nos quatro clusters de engajamento de esquerda, base e Tema Saúde; Card
  Pesquisa Cleitinho ampliado para mais quatro conjuntos; VT Porta Hospital do Barreiro
  (`DdeVwfHOq0a`) em conjunto novo.
- **Conjunto novo `Total - Barreiro e Região`**, em REGIONAIS - ENGAJAMENTO, com ponto no
  Barreiro e raio de 8 km, R$400 tirados do RMBH. **Conjunto novo de engajamento precisa de
  `destination_type: ON_POST`**, senão o Gerenciador recusa o anúncio com o erro #1885154,
  "é necessário um conjunto de anúncios com objeto promovido".
- **Guiado pelo Coração reduzido**, saiu dos quatro conjuntos de visualizações a pedido do
  Lucas, e segue em visitas ao perfil e engajamento.
- **ESTUDO DO VÍDEO DE ATAQUE**, em `IA/templates/Claude - Kalil/documentos/estudo-video-ataque-19set.md`.
  Público de esquerda em Minas medido pelo delivery estimate: **7,3 a 8,6 milhões** de 18 a 65
  anos, não é recorte estreito. CPM por objetivo nos últimos 7 dias: Reconhecimento de cluster
  R$2,39, Engajamento de cluster R$7,71, Visitas ao Perfil regional R$12,90. Custo por
  compartilhamento: Visualizações de cluster R$19,18, Engajamento de cluster R$22,51,
  Reconhecimento R$534,46. **Plano aprovado para a ofensiva final:** criar 15 conjuntos novos,
  cinco praças cruzadas com os interesses de esquerda em três objetivos, somando aos quatro
  que já existem, com **60% em Engajamento e 40% em Reconhecimento**, sem Visitas ao Perfil.
  O teto de gasto diário de um conjunto na conta é R$1.462,56, por isso não fecha em poucos
  conjuntos. Falta o valor, a data de início e a confirmação de que é só Meta.
- Planilha na aba Postagens em **593 linhas**, 362 ativos e 229 pausados.
- [ ] ainda não incorporado na memória

## 2026-09-18 19:30
- **Sobras das três primeiras semanas realocadas, R$1.078,11**, antecipando a decisão que
  era de sexta. Entrou nas cinco praças com VT Nossa Gente, metade em visitas ao perfil e
  metade em engajamento: RMBH R$340,00, Vale do Rio Doce e Zona da Mata R$250,00, Norte
  R$170,00, Sul R$170,00, Triângulo R$148,11. **A Semana 4 passou a valer R$86.078,11.**
- **VT Maior Orçamento Saúde** (`DdbRvP3ymWj`, id de mídia `17989766835051500`), pedido do
  Lucas: "impulsionar pra BH e região metropolitana, dar um gás nessa região principal.
  Engajamento e seguidor." Subiu nos três conjuntos de RMBH. **Em visitas ao perfil o banner
  de WhatsApp aparece bloqueado no Gerenciador**, então esse ficou sem o botão.
- **Motion Só Quem Fez Mulheres**, dark post, subiu em 7 conjuntos dos clusters de mulher,
  em visitas ao perfil, visualizações e engajamento. Legenda da Rede Protege, dez cidades da
  RMBH pedidas pelo Lucas já cobertas pelo Mulheres Cidades Prioritárias.
- **VAZAMENTO GEOGRÁFICO CORRIGIDO EM TODA A CONTA.** O Lucas viu o Master Zona da Mata
  rodando em BH. A segmentação estava certa, mas **91 dos 101 conjuntos ativos estavam com
  `location_types: ["home","recent"]`**, e o de WhatsApp com `frequently_in` também. Todos
  foram para **`["home"]`, só quem mora ali**. O Bruno decidiu assim mesmo perdendo alcance:
  "não tem problema diminuir o alcance, o importante é eficiência e assertividade".
  **Regra nova: todo conjunto novo nasce com `location_types: ["home"]`.**
- **Expansão de público desligada** no único conjunto que a tinha, Total - Triângulo Mineiro
  de engajamento, que estava com `targeting_optimization: expansion_all`.
- **Checagem crítica da conta depois da virada.** Fadiga medida comparando 15 a 17/09 com 11
  a 14/09, em interação por mil: Coronel Gianfranco -82%, Bio Invertida -78%, Comercial Kalil
  Fez -78%, VC Povo Fala Kalil Serra -70%, Nossa Gente Triângulo -68%, PGM Sou o Seu Candidato
  -36%. Melhores da conta por custo por interação: Empatia Saúde R$0,30 e 39,7 por mil, VT
  Cemig R$0,31 e 26,3 por mil, Kalil fez no Galo R$0,44 e 17,5 por mil, todos com pouca verba.
- **Sufocamento de criativo**, achado novo: o Master Zona da Mata levava 99%, 98%, 87% e 77%
  da verba dos conjuntos de Vale do Rio Doce e Zona da Mata, onde dividia espaço com até 11
  peças, e travava os dois VT Nossa Gente da praça. Foi pausado só ali e mantido em Juiz de
  Fora e Ubá. Mesmo caso do VT Internet Vilas e Favelas, com 92% do Público de Esquerda.
- **Pausados hoje:** Spot Fazedor em 5 conjuntos, Falar pro Sul de Minas em 4, Bio Invertida
  nos 6 regionais (mantido nos 3 de cluster), Coronel Gianfranco em 12, Comercial Kalil Fez
  em 5, VC Povo Fala Kalil Serra em 17, Master Zona da Mata em 3. **O Coragem não foi
  reduzido**, contra o pedido do Lucas, porque é o segundo melhor da lista.
- **Espalhadas as três peças boas:** VT Cemig para mais 6 conjuntos, Empatia Saúde para 4,
  Kalil fez no Galo para 3, incluindo RMBH, onde nunca tinha rodado.
- **R$3.000,00 movidos** do Sul de Minas e do Triângulo para RMBH, Base Própria + Esquerda,
  Servidor Público Mulheres, Progressista de Centro, Independente e Base Própria. Mais
  **R$1.200,00** das visualizações de remarketing para Montes Claros, Jequitinhonha, Oeste e
  Central e Juiz de Fora, que iam parar antes do fim da semana.
- **Cluster Eleitorado Cleitinho de Reconhecimento estava parado** com R$243,57 de saldo. A
  causa é de objetivo, não de criativo: em Alcance o Meta para quando já cobriu o público.
  Resolvido somando a segunda audiência do cluster.
- **Frequência da conta está folgada**, pior caso 2,22 no Torcedor Atleticano. Dá para subir
  verba sem risco de repetição.
- Planilha na aba Postagens em **582 linhas**, 357 ativos e 223 pausados. Página Campanhas
  Ativas republicada.
- [ ] ainda não incorporado na memória

## 2026-09-18 00:40

**VIRADA DA SEMANA 4 FEITA NA MÃO, com o Bruno acordado**

A tarefa agendada `kalil-virada-semana4-18set` foi **desativada** antes, para não atropelar.

**Semana 3 fechou em R$79.768,92** contra meta de R$80.000. Faltaram R$231,08. Somando com
as sobras da Sem. 1 (R$394,84) e da Sem. 2 (R$452,19), são **R$1.078,11 acumulados que
nunca entraram na conta**. O Bruno decidiu em 17/09 **não realocar ainda: na sexta a gente
soma as três semanas e joga na reta final.**

**Semana 4 carregada com R$84.996,70**, 18 a 24/09, término 24/09 23h59 em **101 conjuntos**,
348 anúncios ativos, nenhum conjunto sem anúncio além dos dois novos de Visitas ao Perfil.

Divisão por objetivo, exatamente o plano:

| Objetivo | Verba | % |
|---|---|---|
| Tráfego ao perfil | R$34.848,24 | 41% |
| Thruplays | R$21.249,39 | 25% |
| Engajamento | R$21.249,25 | 25% |
| Reconhecimento | R$6.799,89 | 8% |
| Cliques no link | R$849,93 | 1% |

**Clusters 30%, malha geográfica 70%.**

**MÉTODO DA ALOCAÇÃO, o mesmo da Semana 3 mais um reforço novo.** Dentro de cada objetivo, a
verba foi distribuída proporcional ao gasto da semana anterior. Depois, por decisão do Bruno
("esses regionais devem ter mais verba, os vídeos são destaque dessa semana"), as **cinco
praças que têm vídeo Nossa Gente receberam 20% de reforço**, tirado dos outros conjuntos geo,
sem furar o 70/30 nem a divisão por objetivo:

- RMBH R$15.999
- Vale do Rio Doce e Zona da Mata R$10.540
- Sul de Minas R$8.730
- Norte de Minas R$8.166
- Triângulo R$6.856
- Outros geo R$9.209

**Os 45 anúncios VT Nossa Gente foram ativados** nas cinco praças, em Engajamento,
Visualizações, Visitas ao Perfil e nos dois RMKT, mais os verticais.

**APRENDIZADO TÉCNICO QUE VALE PARA AS PRÓXIMAS VIRADAS: virada de 100 conjuntos não dá para
fazer por script.** O POST por curl na Graph API é recusado com erro de autorização política
em adset, então cada conjunto precisa de uma chamada do MCP `ads_update_entity`, e depois de
outra do `ads_activate_entity` porque editar verba pausa o conjunto. Foram 101 edições mais 44
reativações. Levou quase uma hora. **Planejar isso com antecedência, não começar 23h30.**

**Conjuntos Incremental de IMPRESSÕES seguem pausados**, decisão mantida.


**Planilha e página atualizadas na madrugada de 18/09:** aba Postagens fechou em **558
linhas**, com 50 linhas novas (os 5 VT Nossa Gente como **dark post**, VT Servidor Público
16.09, Card Pesquisa Cleitinho e VT Discurso Mulher), 402 ativos e 155 pausados. A página
Campanhas Ativas foi republicada. **Aba Acompanhamento ainda não recebeu a rodada da Semana 4.**

- [ ] ainda não incorporado na memória

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
