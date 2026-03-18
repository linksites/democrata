# Democrata

Landing page premium da Democrata com foco em tres frentes da marca:

- burger artesanal
- pub com clima noturno
- barbearia com identidade forte

Hoje o projeto esta enxuto e roda com apenas:

- `index.html`
- `style.css`
- `script.js`
- `assets/` organizados por uso real da pagina

## Rodar localmente

Requisitos:

- Python para subir preview local
- Node.js apenas para executar os scripts do `package.json`

Comando:

```bash
npm run dev
```

Servidor local:

```text
http://localhost:3000
```

## Validacao

Antes de publicar:

```bash
npm run check
```

Esse comando valida referencias locais quebradas e detecta sinais basicos de inconsistencias de codificacao.

## Deploy

O deploy acontece por GitHub Pages via GitHub Actions:

- workflow: `.github/workflows/deploy.yml`
- branch: `main`
- url publica: `https://linksites.github.io/democrata/`

Basta fazer push na `main`.

## Estrutura atual

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
|-- script.js
|-- package.json
|-- MANUAL-PROJETO.md
`-- README.md
```

## Arquivos principais

- `index.html`: estrutura e conteudo da landing
- `style.css`: layout, identidade visual e responsividade
- `script.js`: scroll suave, animacoes de entrada, nav ativa e lightbox
- `assets/`: imagens usadas pela pagina
- `MANUAL-PROJETO.md`: manual pratico de manutencao

## Observacao

Arquivos antigos e camadas que nao eram mais usadas foram removidos para deixar o projeto menor, mais consistente e mais facil de manter.
