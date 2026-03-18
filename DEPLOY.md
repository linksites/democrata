# 🚀 Deploy Guide - Democrata Barbearia & Pub

## Opções de Deploy (Escolha uma)

### 1. **GitHub Pages** ⭐ (Recomendado - Gratuito)

```bash
# 1. Criar repositório no GitHub
# 2. Fazer push dos arquivos
git init
git add .
git commit -m "First commit - Democrata Barbearia & Pub"
git branch -M main
git remote add origin https://github.com/SEU-USERNAME/democrata-barbearia-pub.git
git push -u origin main

# 3. Ativar GitHub Pages
# Vá para Settings > Pages > Source: Deploy from a branch
# Branch: main / (root)
# Salve e aguarde 2-3 minutos
```

### 2. **Netlify** ⚡ (Mais Rápido - Gratuito)

```bash
# Opção 1: Drag & Drop
# 1. Vá para netlify.com
# 2. Arraste a pasta do projeto para a área
# 3. Pronto! Site online instantaneamente

# Opção 2: Via Git
# 1. Conecte seu repositório GitHub
# 2. Configure build settings (não precisa para sites estáticos)
# 3. Deploy automático
```

### 3. **Vercel** 🎯 (Zero Config - Gratuito)

```bash
# 1. Vá para vercel.com
# 2. Import Project > Git Repository
# 3. Selecione seu repositório
# 4. Framework Preset: Other
# 5. Deploy!
```

### 4. **Firebase Hosting** 🔥 (Google - Gratuito)

```bash
# 1. Instalar Firebase CLI
npm install -g firebase-tools

# 2. Login no Firebase
firebase login

# 3. Iniciar projeto
firebase init

# 4. Configurar firebase.json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

# 5. Deploy
firebase deploy
```

### 5. **Surge.sh** ⚡ (Ultra Rápido - Gratuito)

```bash
# 1. Instalar Surge
npm install -g surge

# 2. Fazer deploy
surge

# 3. Escolher um nome ou use o padrão
# Ex: democrata-barbearia-pub.surge.sh
```

---

## 📋 Checklist Pré-Deploy

### ✅ **Antes de Publicar**

1. **Atualizar Contatos**
   - Telefone: `+5511999999999` → Seu número real
   - WhatsApp: Link wa.me/ com seu número
   - Instagram: `@democratapub` → Seu perfil real
   - iFood: Link direto para sua loja

2. **Adicionar Imagens**
   - Logo em `assets/logo/logo.jpeg`
   - Hero background em `assets/gallery/`
   - Galeria em `assets/gallery/`
   - Cardápio em `assets/menu/`

3. **Testar Links**
   - Todos os botões funcionando
   - Redirecionamentos corretos
   - Responsividade mobile

4. **Otimização**
   - Comprimir imagens (TinyPNG)
   - Testar performance (PageSpeed Insights)
   - Validar HTML/CSS

---

## 🌐 URLs Após Deploy

### GitHub Pages
```
https://SEU-USERNAME.github.io/democrata-barbearia-pub
```

### Netlify
```
https://SEU-PROJECT-NAME.netlify.app
```

### Vercel
```
https://democrata-barbearia-pub.vercel.app
```

### Firebase
```
https://SEU-PROJECT-NAME.web.app
```

### Surge
```
https://democrata-barbearia-pub.surge.sh
```

---

## 🔧 Configurações Avançadas

### Custom Domain
```bash
# GitHub Pages: CNAME file
# Netlify: Domain management
# Vercel: Domain settings
# Firebase: Hosting > Custom domains
```

### SSL Certificate
- **Todos gratuitos** incluem HTTPS automático
- **Custom domains** também com SSL gratuito

### Analytics
```bash
# Google Analytics: Adicionar script antes de </head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

---

## 📱 Teste Pós-Deploy

### Mobile Test
- [ ] Testar em iPhone/Android
- [ ] Verificar botões flutuantes
- [ ] Testar integrações (tel, WhatsApp, iFood)

### Desktop Test
- [ ] Chrome, Firefox, Safari, Edge
- [ ] Testar galeria lightbox
- [ ] Verificar animações

### Performance
- [ ] PageSpeed Insights > 90
- [ ] GTmetrix Grade A
- [ ] Mobile Friendly

---

## 🎯 Suporte e Manutenção

### Atualizações
```bash
# Para atualizar o site:
git add .
git commit -m "Update content"
git push
# Deploy automático (dependendo da plataforma)
```

### Backup
```bash
# Sempre manter backup local
# GitHub já serve como backup do código
```

---

**🚀 Seu site Democrata Barbearia & Pub está pronto para o mundo!**
