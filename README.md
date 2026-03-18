# Democrata Barbearia & Pub

Site estatico da Democrata com foco em tres frentes da marca: barbearia, pub e gastronomia. A base atual trabalha com HTML, CSS e JavaScript vanilla, com deploy simples e fluxo leve para evolucao continua.

## Estado atual

- Pagina principal em `index.html`
- Camada visual dividida entre estilos base e camada premium
- Scripts de interacao em JavaScript puro
- Estrutura de imagens organizada em `assets/`
- Workflow de deploy para GitHub Pages em `.github/workflows/deploy.yml`
- Validacao local de referencias com `npm run check`

## Direcao criativa

A direcao recomendada para a marca hoje e `Noite urbana premium`:

- preto grafite, dourado queimado, cobre e vermelho vinho
- tipografia forte e atmosfera noturna
- fotos reais com mais protagonismo do que efeitos genericos
- dois fluxos comerciais claros: `Agendar corte` e `Pedir no iFood`

## Stack

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts
- GitHub Pages para deploy

## Estrutura principal

```text
.
|-- .github/
|   `-- workflows/
|-- assets/
|   |-- gallery/
|   |-- hero/
|   |-- logo/
|   `-- menu/
|-- scripts/
|   `-- validate-site.ps1
|-- index.html
|-- style.css
|-- cardapio-styles.css
|-- logo-styles.css
|-- premium-styles.css
|-- script.js
|-- premium-script.js
|-- package.json
|-- WORKFLOW-ESCALAVEL.md
`-- README.md
```

## Como rodar localmente

Requisitos:

- Python instalado para preview local
- Node.js apenas para executar os scripts do `package.json`

Comandos:

```bash
npm run dev
```

Isso sobe um servidor local em `http://localhost:3000`.

## Validacao

Antes de publicar, rode:

```bash
npm run check
```

Esse comando verifica:

- referencias locais quebradas em HTML e CSS
- sinais evidentes de inconsistencias de codificacao

## Fluxo de trabalho recomendado

1. Ver o estado do repositorio com `git status --short`
2. Rodar o site com `npm run dev`
3. Fazer uma alteracao pequena por vez
4. Validar com `npm run check`
5. Revisar no desktop e no mobile
6. Commitar em blocos curtos e descritivos

O fluxo completo e as prioridades do projeto estao em `WORKFLOW-ESCALAVEL.md`.

## Prioridades da proxima sprint

1. Consolidar a camada visual entre `style.css` e `premium-styles.css`
2. Consolidar a camada de interacao entre `script.js` e `premium-script.js`
3. Reescrever o hero com proposta mais clara em poucos segundos
4. Reduzir ruido visual e trocar excesso de emoji por linguagem mais consistente
5. Destacar endereco, horarios e prova social com mais peso comercial

## Deploy

O repositorio ja possui workflow de GitHub Pages:

- arquivo: `.github/workflows/deploy.yml`
- gatilho: push na branch `main`
- publicacao: artifact da raiz do projeto

Se o repositorio estiver configurado com GitHub Pages usando GitHub Actions, o deploy acontece automaticamente a cada push na `main`.

## Arquivos mais importantes

- `index.html`: estrutura principal da pagina
- `premium-styles.css`: camada visual premium
- `premium-script.js`: interacoes premium e animacoes
- `style.css`: estilos base
- `script.js`: interacoes base
- `scripts/validate-site.ps1`: validacao local

## Observacoes

- O projeto pode ter alteracoes locais em andamento; evite sobrescrever arquivos sem revisar `git status`
- O ideal e manter a evolucao em sprints curtas: estabilidade, conversao, identidade visual e refinamento

