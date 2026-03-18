# Workflow Escalavel do Projeto

## Objetivo

Dar ritmo ao projeto sem transformar um site estatico em um caos de arquivos soltos. A ideia e manter uma rotina simples, repetivel e segura para evoluir design, conteudo e performance.

## Diagnostico Atual

- A base mistura camadas antigas e novas em [index.html](/c:/Projeto/democrata/index.html), com `style.css` + `premium-styles.css` e `script.js` + `premium-script.js`.
- Existem referencias de imagens que nao batem com o que esta hoje em `assets/`.
- O HTML e parte da documentacao exibem sinais de codificacao inconsistente.
- O projeto ja tem boa intencao visual, mas ainda nao tem uma hierarquia de experiencia clara para conversao.

## Fluxo de Trabalho

### 1. Ciclo padrao de edicao

1. Rodar `git status --short` para entender o que ja mudou.
2. Subir preview local com `npm run dev`.
3. Fazer uma alteracao pequena por vez: estrutura, conteudo, visual ou interacao.
4. Rodar `npm run check` antes de considerar a tarefa pronta.
5. Validar no navegador desktop e mobile.
6. Commitar em blocos curtos e descritivos.

### 2. Ordem de prioridade para qualquer melhoria

1. Corrigir base quebrada.
2. Organizar conteudo e proposta comercial.
3. Melhorar conversao.
4. Refinar visual e animacoes.
5. Otimizar SEO, performance e deploy.

### 3. Regra de escalabilidade

- Uma pagina principal forte primeiro.
- Componentes repetiveis depois.
- Automacao leve antes de complexidade.
- Menos efeitos por efeito; mais identidade com funcao comercial.

## Backlog por Fases

### Fase 1. Estabilidade da base

- Unificar caminhos reais de imagem.
- Corrigir textos quebrados por codificacao.
- Escolher uma camada principal de CSS e uma de JS para evitar duplicidade.
- Garantir que cada secao tenha conteudo real e nao placeholder.

### Fase 2. Clareza comercial

- Definir o que o hero vende primeiro: corte, pub, hamburguer ou a combinacao dos tres.
- Inserir endereco, bairro e prova social visivel acima da dobra.
- Destacar agendamento e pedido como dois fluxos diferentes.
- Criar uma secao curta de diferenciais reais do lugar.

### Fase 3. Conversao

- CTA fixo com `Agendar corte` e `Pedir no iFood`.
- Horarios com leitura imediata.
- Botao de rota no Google Maps.
- Bloco de Instagram com fotos reais e clima do ambiente.

### Fase 4. Refinamento premium

- Melhorar ritmo visual entre secoes.
- Trocar icones emoji por icones consistentes ou tipografia forte.
- Reduzir animacoes concorrentes para valorizar as que realmente importam.
- Dar mais peso a fotografia real e menos a efeitos genericos.

## Como vamos trabalhar bem juntos

- Cada tarefa entra com escopo pequeno e saida concreta.
- Se eu encontrar risco estrutural, eu priorizo consertar a base antes do enfeite.
- Quando houver duas boas direcoes visuais, eu te trago opcoes objetivas com impacto e trade-off.
- O ideal e manter uma sequencia de sprints curtas:

Sprint 1: base confiavel.
Sprint 2: hero e secoes de conversao.
Sprint 3: identidade visual forte.
Sprint 4: performance, SEO e deploy.

## Direcoes Visuais que combinam com a marca

### Direcao 1. Noite urbana premium

- Preto grafite, dourado queimado, cobre e vermelho vinho.
- Textura de metal escovado, luz quente e fotos com contraste alto.
- Sensacao: barbearia de personalidade com clima de bar noturno.

### Direcao 2. Industrial gastronomico

- Carvao, ferrugem, creme e vermelho de neon discreto.
- Menos luxo classico, mais energia de pub e chapa quente.
- Sensacao: lugar vivo, masculino e social.

### Direcao 3. Clube contemporaneo

- Fundo escuro elegante, tipografia larga, detalhes em off-white e dourado seco.
- Menos elementos na tela, mais espacamento e fotografia dominante.
- Sensacao: marca mais madura e memoravel.

## Melhorias que eu recomendo primeiro

1. Reescrever o hero para deixar a proposta cristalina em 5 segundos.
2. Corrigir imagens quebradas e padronizar a pasta `assets`.
3. Tirar texto com caracteres corrompidos.
4. Separar claramente `Barbearia`, `Pub` e `Food Truck`, mas com uma narrativa unica.
5. Criar uma secao de prova social com fotos reais, ambiente e destaque de servicos.

## Comando novo do projeto

- `npm run check`: valida referencias locais quebradas e sinaliza possiveis problemas de codificacao.
