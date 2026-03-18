# Manual do Projeto Democrata

## Objetivo

Este manual serve para manter o site no ar com o minimo de atrito. A ideia e concentrar a operacao do projeto em poucos arquivos, poucas regras e um fluxo repetivel.

## Base atual

O site hoje usa somente:

- `index.html`
- `style.css`
- `script.js`
- `assets/hero/`
- `assets/logo/`
- `assets/menu/`
- `assets/gallery/`

Se um arquivo estiver fora desse fluxo e nao for usado pela pagina, ele provavelmente e sobra antiga.

## Onde editar cada coisa

### Textos e links

Arquivo:

- `index.html`

Aqui voce altera:

- slogan principal
- textos das secoes
- precos
- botoes
- links de iFood, WhatsApp, telefone e Instagram
- horarios

### Aparencia

Arquivo:

- `style.css`

Aqui voce altera:

- cores
- espacamentos
- tipografia
- layout
- responsividade
- estados de hover
- animacoes

### Interacoes

Arquivo:

- `script.js`

Aqui voce altera:

- animacoes de entrada
- nav ativa no scroll
- smooth scroll
- tilt do card principal
- lightbox da galeria

## Pastas de imagem usadas

### Hero

- `assets/hero/hero-bg.jpg`

### Logo

- `assets/logo/logo-perfil.jpg`
- `assets/logo/nome-democrata.png`

### Menu

- `assets/menu/burger-destaque.jpg`
- `assets/menu/burger-artesanal.jpg`
- `assets/menu/food-truck-horarios.jpg`

### Galeria

- `assets/gallery/edisonlima.jpg`
- `assets/gallery/barbearia-interior.jpg`

## Fluxo recomendado de trabalho

1. Rodar `git status --short`
2. Subir preview com `npm run dev`
3. Fazer uma alteracao pequena por vez
4. Validar com `npm run check`
5. Revisar no desktop e no mobile
6. Commitar
7. Fazer push para `main`

## Como publicar

O projeto usa GitHub Pages com GitHub Actions.

Passos:

1. Confirmar que tudo passou em `npm run check`
2. Commitar as alteracoes
3. Fazer `git push origin main`
4. Aguardar o workflow terminar
5. Conferir `https://linksites.github.io/democrata/`

## Regras para manter consistencia

- Nao recriar camadas paralelas de CSS ou JS
- Nao adicionar arquivos de imagem soltos fora da estrutura atual
- Nao espalhar documentacao em varios arquivos pequenos quando o manual resolver
- Nao deixar links comerciais duplicados com textos conflitantes
- Sempre validar antes de publicar

## Checklist rapido antes de deploy

- slogan correto
- botoes levando para o destino certo
- imagens carregando
- horarios atualizados
- nenhum texto quebrado
- `npm run check` sem erro

## Quando limpar arquivos

Se um arquivo:

- nao esta referenciado em `index.html`
- nao faz parte do fluxo atual
- nao ajuda no deploy
- nao ajuda na manutencao

entao ele deve ser removido ou consolidado.
