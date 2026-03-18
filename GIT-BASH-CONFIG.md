# 🔧 CONFIGURAÇÃO DO GIT BASH - WINDOWS

## ✅ Verificação Inicial

### 1. Verificar se Git está instalado corretamente:
```bash
# No terminal CMD ou PowerShell:
git --version

# Deve retornar algo como:
# git version 2.40.0.windows.1
```

### 2. Verificar localização do Git:
```bash
where git

# Deve mostrar:
# C:\Program Files\Git\cmd\git.exe
# C:\Program Files\Git\bin\git.exe
```

---

## 🛠️ Configuração do PATH

### Opção 1: Via Interface Gráfica

1. **Clique direito** em "Este Computador" → **Propriedades**
2. Clique em **"Configurações avançadas do sistema"**
3. Aba **"Avançado"** → **"Variáveis de Ambiente"**
4. Em **"Variáveis do sistema"**, encontre **"Path"**
5. Clique **"Editar"**
6. Adicione estes caminhos (se não existirem):
```
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
C:\Program Files\Git\usr\bin
```

### Opção 2: Via Comando (Admin)

Abra **PowerShell como Administrador**:

```powershell
# Adicionar ao PATH do sistema
[Environment]::SetEnvironmentVariable(
    "Path",
    [Environment]::GetEnvironmentVariable("Path", "Machine") + ";C:\Program Files\Git\cmd;C:\Program Files\Git\bin",
    "Machine"
)
```

---

## 📝 Configuração do Git Bash

### 1. Abrir Git Bash:
- Clique direito na pasta do projeto
- Selecione **"Git Bash Here"**

### 2. Configurar identidade Git:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### 3. Configurar editor (VS Code):
```bash
git config --global core.editor "code --wait"
```

### 4. Configurar terminal padrão:
```bash
git config --global core.autocrlf true
```

---

## 🎯 Aliases Úteis

Configure atalhos para comandos frequentes:

```bash
# Adicionar ao arquivo ~/.bashrc

echo '
# Aliases Git
alias gs="git status"
alias ga="git add"
alias gc="git commit -m"
alias gp="git push"
alias gl="git pull"
alias gd="git diff"

# Navegação
alias ..="cd .."
alias ...="cd ../.."
alias ll="ls -la"
' >> ~/.bashrc
```

---

## 🔍 Diagnóstico de Problemas

### Problema: "git não é reconhecido como comando"

**Solução 1:** Reiniciar terminal após configurar PATH
**Solução 2:** Reinstalar Git com opção "Add to PATH"
**Solução 3:** Usar caminho completo:
```bash
"C:\Program Files\Git\bin\git.exe" --version
```

### Problema: Erro de sintaxe com &&

No **CMD do Windows**, use:
```cmd
git add . && git commit -m "mensagem" && git push
```

No **PowerShell**, use:
```powershell
git add .; git commit -m "mensagem"; git push
```

No **Git Bash**, use:
```bash
git add . && git commit -m "mensagem" && git push
```

---

## 🚀 Teste de Configuração

Execute estes comandos para verificar:

```bash
# 1. Versão do Git
git --version

# 2. Configurações
git config --list

# 3. Status do repositório atual
git status

# 4. Testar commit simples
git add .
git commit -m "Teste de configuração"
git push
```

---

## 📂 Estrutura de Arquivos Git

```
C:\Program Files\Git\
├── bin\
│   ├── git.exe          ← Executável principal
│   ├── bash.exe         ← Git Bash
│   └── sh.exe           ← Shell
├── cmd\
│   └── git.exe          ← Versão CMD
├── usr\
│   └── bin\
│       └── bash         ← Bash Unix
└── etc\
    └── gitconfig        ← Configuração global
```

---

## 🎮 Atalhos do Git Bash

| Atalho | Ação |
|--------|------|
| `Ctrl+C` | Cancelar comando |
| `Ctrl+L` | Limpar tela |
| `Ctrl+A` | Início da linha |
| `Ctrl+E` | Fim da linha |
| `Ctrl+U` | Apagar linha |
| `Tab` | Autocompletar |
| `↑` / `↓` | Histórico |
| `Ctrl+R` | Buscar no histórico |

---

## ✅ Checklist de Configuração

- [ ] Git instalado em `C:\Program Files\Git`
- [ ] PATH configurado com `Git\cmd` e `Git\bin`
- [ ] Terminal reiniciado após configuração
- [ ] `git --version` funciona
- [ ] `git status` funciona no projeto
- [ ] Commit e push funcionam
- [ ] Aliases configurados (opcional)

---

## 🆘 Suporte

Se continuar com problemas:

1. **Reinstale o Git:** https://git-scm.com/download/win
2. **Escolha:** "Use Git from the Windows Command Prompt"
3. **Escolha:** "Checkout Windows-style, commit Unix-style"
4. **Escolha:** "Use Windows' default console window"

**Após instalação, reinicie o computador.**

---

## 🎯 Resumo Rápido

```bash
# Configuração mínima necessária:
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git config --global core.autocrlf true

# Verificar:
git config --list
```

**Configuração concluída!** 🎉
