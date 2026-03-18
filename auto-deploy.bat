@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

REM ============================================
REM AUTO-DEPLOY DEMOCRATA - Deploy Automatizado
REM ============================================

echo.
echo  ================================================
echo    🚀 AUTO-DEPLOY - DEMOCRATA BARBEARIA
echo  ================================================
echo.

REM Verificar se está na pasta correta
if not exist "index.html" (
    echo ❌ ERRO: index.html nao encontrado!
    echo Execute este script na pasta c:\Projeto\democrata
    pause
    exit /b 1
)

echo 📋 Verificando status do Git...
git status --short

REM Verificar se há alterações
for /f %%i in ('git status --porcelain ^| find /c /v ""') do set changes=%%i

if %changes% equ 0 (
    echo.
    echo ℹ️  Nenhuma alteracao para commitar.
    echo O repositorio esta atualizado!
    pause
    exit /b 0
)

echo.
echo 📝 Alteracoes detectadas: %changes% arquivo(s)
echo.

REM Gerar mensagem de commit automatica com timestamp
set datetime=%date%_%time%
set datetime=%datetime:/=-%
set datetime=%datetime::=-%
set datetime=%datetime: =_%
set commit_msg=Auto-deploy_%datetime%

echo 🎯 Mensagem de commit: %commit_msg%
echo.

REM Adicionar arquivos
echo 📦 Adicionando arquivos...
git add .
if errorlevel 1 (
    echo ❌ Erro ao adicionar arquivos!
    pause
    exit /b 1
)
echo ✅ Arquivos adicionados!

REM Commit
echo.
echo 💾 Criando commit...
git commit -m "%commit_msg%"
if errorlevel 1 (
    echo ❌ Erro ao criar commit!
    pause
    exit /b 1
)
echo ✅ Commit criado!

REM Push
echo.
echo 🚀 Enviando para GitHub...
git push origin main
if errorlevel 1 (
    echo ❌ Erro no push!
    pause
    exit /b 1
)

echo.
echo ================================================
echo    ✅ DEPLOY CONCLUIDO COM SUCESSO!
echo ================================================
echo.
echo 🌐 Site sera atualizado em: https://linksites.github.io/democrata
echo ⏱️  Aguarde 2-3 minutos para propagacao.
echo.
pause
