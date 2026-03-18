@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

REM ============================================
REM MENU DE AUTOMACAO - DEMOCRATA BARBEARIA
REM ============================================

:menu
echo.
echo  ================================================
echo    🤖 MENU DE AUTOMACAO - DEMOCRATA
echo  ================================================
echo.
echo    [1] 🔍 Verificar qualidade do site
echo    [2] 🚀 Deploy automatico (add + commit + push)
echo    [3] 💾 Criar backup
echo    [4] 📊 Status do Git
echo    [5] 🔄 Atualizar do GitHub (pull)
echo    [6] 🧹 Limpar arquivos temporarios
echo    [7] 📁 Organizar imagens
echo    [8] 🌐 Abrir site no navegador
echo    [9] ❌ Sair
echo.
echo  ================================================
set /p opcao="Escolha uma opcao (1-9): "

if "%opcao%"=="1" goto verificar
if "%opcao%"=="2" goto deploy
if "%opcao%"=="3" goto backup
if "%opcao%"=="4" goto status
if "%opcao%"=="5" goto pull
if "%opcao%"=="6" goto limpar
if "%opcao%"=="7" goto organizar
if "%opcao%"=="8" goto abrir
if "%opcao%"=="9" goto sair
goto menu

:verificar
echo.
echo 🔍 Iniciando verificacao de qualidade...
call quality-check.bat
goto menu

:deploy
echo.
echo 🚀 Iniciando deploy automatico...
call auto-deploy.bat
goto menu

:backup
echo.
echo 💾 Criando backup...
call backup.bat
goto menu

:status
echo.
echo 📊 Status do Git:
git status
echo.
pause
goto menu

:pull
echo.
echo 🔄 Atualizando do GitHub...
git pull origin main
echo.
if errorlevel 1 (
    echo ❌ Erro ao atualizar!
) else (
    echo ✅ Atualizado com sucesso!
)
pause
goto menu

:limpar
echo.
echo 🧹 Limpando arquivos temporarios...

REM Remover arquivos temporarios
if exist "*.tmp" del /q "*.tmp" 2>nul
if exist "*.log" del /q "*.log" 2>nul

REM Limpar pasta temp do sistema
REM (com cuidado, apenas arquivos antigos)

echo ✅ Limpeza concluida!
pause
goto menu

:organizar
echo.
echo 📁 Organizando imagens...
call ORGANIZAR.bat 2>nul
if errorlevel 1 (
    echo ℹ️  Script ORGANIZAR.bat nao encontrado.
    echo Execute manualmente ou crie as pastas:
    echo   - assets/logo
    echo   - assets/hero
    echo   - assets/foodtruck
    echo   - assets/ambiente
    echo   - assets/menu
)
pause
goto menu

:abrir
echo.
echo 🌐 Abrindo site...
start https://linksites.github.io/democrata
goto menu

:sair
echo.
echo 👋 Obrigado por usar o Menu de Automacao!
echo 🎩 Democrata Barbearia ^& Pub
echo.
pause
exit
