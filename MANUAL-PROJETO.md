# Manual do Projeto Democrata

## Objetivo

Este manual existe para manter o site no ar com o minimo de atrito.

O projeto foi montado para ter:

- poucos arquivos
- manutencao direta
- preview local simples
- validacao antes do deploy

## Base Atual

Os arquivos centrais do site sao:

- `index.html`
- `style.css`
- `script.js`
- `assets/hero/`
- `assets/logo/`
- `assets/menu/`
- `assets/gallery/`

Se um arquivo estiver fora desse fluxo e nao for usado pela pagina, ele deve ser revisto antes de continuar acumulando no repositorio.

## Onde Editar Cada Parte

### Textos, links e estrutura

Arquivo:

- `index.html`

Aqui voce altera:

- titulos e descricoes
- links de iFood, WhatsApp, telefone e Instagram
- horarios
- cards de cardapio
- ordem das secoes
- imagens usadas em hero, galeria e horarios

### Aparencia e responsividade

Arquivo:

- `style.css`

Aqui voce altera:

- cores
- espacamentos
- tipografia
- layout
- estados de hover
- animacoes
- comportamento mobile

### Interacoes

Arquivo:

- `script.js`

Aqui voce altera:

- reveal animations
- smooth scroll
- nav ativa no scroll
- menu mobile
- tilt do hero
- lightbox da galeria

## Assets Ativos na Pagina

### Hero

- `assets/hero/hero-bg.jpg`
- `assets/menu/triocompletodemocrata.jpg`

### Logo

- `assets/logo/logo-perfil1.jpg`
- `assets/logo/nome-democrata.png`

### Menu

- `assets/menu/burguerdemocrata.jpg`
- `assets/menu/burguercareca.jpg`
- `assets/menu/combotriocareca.jpg`

### Galeria

- `assets/menu/burguercorte.jpg`
- `assets/menu/triocompletodemocrata.jpg`
- `assets/menu/sanduichleitaonabrasa.jpg`
- `assets/gallery/edisonlima.jpg`
- `assets/gallery/barbearia-interior.jpg`

### Horarios

- `assets/menu/food-truck-horarios.jpg`

## Assets em Revisao

Os arquivos abaixo nao sao a referencia principal atual do front:

- `assets/logo/logoperfil.jpg`
- `assets/menu/burger-destaque.jpg`
- `assets/menu/omelhorburgue.jpg`
- `assets/burguerdocareca.jpg`
- `assets/menu/combotriocareca`

Eles devem ser mantidos apenas como acervo temporario ate uma limpeza dedicada.

## Fluxo Recomendado

1. Rodar `git status --short`
2. Subir preview local com `npm run dev`
3. Fazer alteracoes pequenas por vez
4. Validar com `npm run check`
5. Revisar no desktop e no mobile
6. Commitar
7. Fazer push para `main`

## Como Publicar

O projeto usa GitHub Pages com GitHub Actions.

Passos:

1. Confirmar que `npm run check` passou
2. Commitar as alteracoes
3. Fazer `git push origin main`
4. Aguardar o workflow terminar
5. Conferir `https://linksites.github.io/democrata/`

## Regras de Consistencia

- nao duplicar CSS ou JS para resolver o mesmo problema
- nao apontar o HTML para assets inexistentes
- nao manter documentacao divergente do estado real do projeto
- nao misturar arquivos mestre pesados com thumbnails web sem criterio
- validar sempre antes do deploy

## Checklist Antes de Publicar

- links comerciais corretos
- hero carregando com imagem de produto coerente
- logo do cabecalho carregando
- galeria abrindo no lightbox
- horarios atualizados
- layout conferido em desktop e mobile
- `npm run check` sem erro

## Quando Limpar Arquivos

Se um arquivo:

- nao esta referenciado pela pagina
- nao ajuda no deploy
- nao participa da manutencao
- e duplicado de outro asset

entao ele deve ser removido, consolidado ou arquivado em uma rodada propria de limpeza.
