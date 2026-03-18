# 🚀 GitHub Pages Deploy - Democrata Barbearia & Pub

## Passo a Passo Completo

### 1. **Criar Repositório GitHub**
```
1. Acesse: https://github.com
2. Clique em "New repository"
3. Nome: democrata-barbearia-pub
4. Description: Site moderno para barbearia e pub
5. Public (para GitHub Pages gratuito)
6. NÃO adicione README, .gitignore ou license
7. Clique em "Create repository"
```

### 2. **Configurar Git Local**
```bash
# Abrir terminal/CMD na pasta do projeto
cd c:\Projeto\democrata

# Inicializar repositório
git init

# Configurar usuário (se ainda não fez)
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "🚀 First commit - Democrata Barbearia & Pub Website

✨ Features:
- Modern responsive design
- WhatsApp, iFood, Instagram integration
- Interactive gallery with lightbox
- Floating action buttons
- Smooth scroll navigation
- Performance optimized

🎯 Ready for GitHub Pages deploy"
```

### 3. **Conectar ao GitHub**
```bash
# Adicionar remote (substitua SEU-USERNAME)
git remote add origin https://github.com/SEU-USERNAME/democrata-barbearia-pub.git

# Renomear branch para main
git branch -M main

# Push para GitHub
git push -u origin main
```

### 4. **Ativar GitHub Pages**
```
1. No seu repositório GitHub, vá para "Settings"
2. No menu lateral, clique em "Pages"
3. Em "Source", selecione "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Clique em "Save"
7. Aguarde 2-3 minutos
```

### 5. **Acessar Site**
```
Seu site estará disponível em:
https://SEU-USERNAME.github.io/democrata-barbearia-pub

Exemplo:
https://joao-silva.github.io/democrata-barbearia-pub
```

---

## 📋 Arquivos que Serão Enviados

### ✅ **Arquivos Principais**
- `index.html` - Página principal
- `style.css` - Estilos completos
- `script.js` - JavaScript interativo
- `README.md` - Documentação
- `DEPLOY.md` - Guia de deploy
- `package.json` - Configuração
- `.gitignore` - Exclusões

### 📁 **Pasta Assets**
- `logo/logo.jpeg` - Logo do negócio
- `hero/` - Imagens de fundo
- `gallery/` - Galeria de fotos
- `menu/` - Cardápio visual

---

## 🔧 Comandos Git Úteis

### **Verificar Status**
```bash
git status
```

### **Ver Commits**
```bash
git log --oneline
```

### **Atualizar Site**
```bash
# Após fazer alterações
git add .
git commit -m "Update: descrição da alteração"
git push
# GitHub Pages atualiza automaticamente
```

### **Resolver Conflitos**
```bash
# Se houver conflitos
git pull origin main
# Resolva conflitos manualmente
git add .
git commit -m "Resolve conflicts"
git push
```

---

## 🌐 Configurações Avançadas

### **Custom Domain (Opcional)**
```
1. Comprar domínio (ex: democrata.com.br)
2. No GitHub Pages Settings > Custom domains
3. Adicionar domínio
4. Configurar DNS no registrador
```

### **HTTPS Automático**
- ✅ GitHub Pages inclui HTTPS gratuito
- ✅ Funciona com custom domains
- ✅ Certificado renovado automaticamente

---

## 📱 Teste Pós-Deploy

### **Verificar Funcionalidades**
- [ ] Site carrega corretamente
- [ ] Botões de telefone funcionam
- [ ] Links WhatsApp abrem app
- [ ] iFood redireciona corretamente
- [ ] Instagram link funciona
- [ ] Galeria lightbox funciona
- [ ] Mobile responsivo OK
- [ ] Animações suaves

### **Performance Check**
- [ ] PageSpeed Insights > 90
- [ ] Mobile Friendly Test pass
- [ ] Links funcionando

---

## 🚀 Deploy Automático

### **Workflow (Opcional)**
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

---

## 🎯 Sucesso!

Seu site Democrata Barbearia & Pub estará:
- ✅ Online em minutos
- ✅ Com HTTPS gratuito
- ✅ 100% funcional
- ✅ Otimizado para mobile
- ✅ Integrado com todas as plataformas

**Parabéns! Você tem um site profissional moderno!** 🎉
