# 🚀 SCRIPT DE ORGANIZAÇÃO - Imagens Democrata

## 📁 PASSO A PASSO PARA ORGANIZAR

### **Comando para renomear e mover (execute no terminal):**

```bash
# 1. Navegar para pasta assets
cd c:\Projeto\democrata\assets

# 2. Remover arquivos desnecessários
del "18 de mar. de 2026, 00_05_10.png"
del "18 de mar. de 2026, 00_05_19.png"
del "estrutura-imagens.md"
del "organizacao-imagens.md"
del "PASSOS-ORGANIZACAO.md"

# 3. Mover e renomear imagens

# Logo - já está correto
# (manter assets/logo/logo.jpeg)

# Hero - background principal
move "hamburguer-e-coca-cola-fundo-barbearia-rustica.jpeg" hero\hero-bg.jpg

# Ambiente - fotos da barbearia
move "barbearia fachada-frente-e-idealizador.jpeg" ambiente\barbearia-fachada.jpg
move "horarios-democrata-barbearia.jpeg" ambiente\barbearia-interior.jpg

# Food Truck
move "horario-de-funcionamento-food-truck.jpeg" foodtruck\foodtruck-horarios.jpg

# Menu - produtos
move "omelhorhamburguerdasuavida.jpeg" menu\burger-destaque.jpg

# 4. Limpar arquivos .gitkeep vazios
del gallery\.gitkeep
del hero\.gitkeep
del menu\.gitkeep
del logo\.gitkeep

# 5. Criar pasta ambiente se não existir
mkdir ambiente
mkdir foodtruck

# 6. Verificar estrutura final
dir /s
```

## 📂 ESTRUTURA FINAL ESPERADA

```
assets/
├── logo/
│   └── logo.jpeg (40KB)
├── hero/
│   └── hero-bg.jpg (276KB - hamburguer e coca)
├── ambiente/
│   ├── barbearia-fachada.jpg (167KB)
│   └── barbearia-interior.jpg (269KB)
├── foodtruck/
│   └── foodtruck-horarios.jpg (200KB)
└── menu/
    └── burger-destaque.jpg (159KB)
```

## 🎨 MAPEAMENTO DAS IMAGENS

| Arquivo Original | Destino | Uso no Site |
|-----------------|---------|-------------|
| hamburguer-e-coca-cola-fundo-barbearia-rustica.jpeg | hero/hero-bg.jpg | Background do hero |
| barbearia fachada-frente-e-idealizador.jpeg | ambiente/barbearia-fachada.jpg | Galeria - fachada |
| horarios-democrata-barbearia.jpeg | ambiente/barbearia-interior.jpg | Galeria - interior |
| horario-de-funcionamento-food-truck.jpeg | foodtruck/foodtruck-horarios.jpg | Seção food truck |
| omelhorhamburguerdasuavida.jpeg | menu/burger-destaque.jpg | Cardápio - burger em destaque |
| logo.jpeg | logo/logo.jpeg | Logo do site |

## ⚡ OTIMIZAÇÃO

### Após mover, comprima as imagens:
1. Acesse: https://tinypng.com
2. Arraste cada imagem
3. Baixe a versão otimizada
4. Substitua a original

**Meta:** Todas as imagens < 200KB para carregamento rápido!

## 🚀 DEPOIS DE ORGANIZAR

Execute:
```bash
git add assets/
git commit -m "📁 Organizar imagens em pastas estruturadas"
git push
```

**Pronto para o próximo passo: Criar seção de cardápio!** 🎯
