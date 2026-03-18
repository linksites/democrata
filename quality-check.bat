@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

REM ============================================
REM VERIFICADOR DE QUALIDADE - Democrata
REM Checa erros comuns antes do deploy
REM ============================================

echo.
echo  ================================================
echo    🔍 VERIFICADOR DE QUALIDADE - DEMOCRATA
echo  ================================================
echo.

set errors=0
set warnings=0

REM Verificar se está na pasta correta
if not exist "index.html" (
    echo ❌ ERRO CRITICO: index.html nao encontrado!
    set /a errors+=1
    pause
    exit /b 1
)

echo 📁 Verificando estrutura de pastas...

REM Verificar pastas essenciais
set folders=assets assets\logo assets\hero assets\menu assets\foodtruck assets\ambiente
for %%f in (%folders%) do (
    if exist "%%f" (
        echo   ✅ %%f
    ) else (
        echo   ⚠️  %%f (nao encontrada)
        set /a warnings+=1
    )
)

echo.
echo 🔗 Verificando links no HTML...

REM Verificar se imagens referenciadas existem
findstr /r "src=\"assets" index.html >nul
if errorlevel 1 (
    echo   ⚠️  Nenhuma imagem local encontrada no HTML
    set /a warnings+=1
) else (
    echo   ✅ Referencias de imagens encontradas
)

echo.
echo 📱 Verificando responsividade...

REM Verificar viewport
findstr /c:"viewport" index.html >nul
if errorlevel 1 (
    echo   ❌ Viewport nao encontrado!
    set /a errors+=1
) else (
    echo   ✅ Viewport configurado
)

echo.
echo 🎨 Verificando CSS...

REM Verificar arquivos CSS
set css_files=style.css cardapio-styles.css logo-styles.css premium-styles.css
for %%c in (%css_files%) do (
    if exist "%%c" (
        echo   ✅ %%c
    ) else (
        echo   ⚠️  %%c (nao encontrado)
        set /a warnings+=1
    )
)

echo.
echo ⚡ Verificando scripts...

REM Verificar arquivos JS
if exist "script.js" (
    echo   ✅ script.js
) else (
    echo   ⚠️  script.js (nao encontrado)
    set /a warnings+=1
)

if exist "premium-script.js" (
    echo   ✅ premium-script.js
) else (
    echo   ⚠️  premium-script.js (nao encontrado)
    set /a warnings+=1
)

echo.
echo 📞 Verificando contatos...

REM Verificar telefone
findstr /c:"98178-3159" index.html >nul
if errorlevel 1 (
    echo   ⚠️  Telefone padrao nao encontrado
    set /a warnings+=1
) else (
    echo   ✅ Telefone configurado
)

echo.
echo 🌐 Verificando links externos...

REM Verificar iFood
findstr /c:"ifood.com.br" index.html >nul
if errorlevel 1 (
    echo   ⚠️  Link iFood nao encontrado
    set /a warnings+=1
) else (
    echo   ✅ Link iFood configurado
)

echo.
echo 📊 RESUMO DA VERIFICACAO:
echo ================================================
echo    Erros: %errors%
echo    Avisos: %warnings%
echo ================================================
echo.

if %errors% gtr 0 (
    echo ❌ VERIFICACAO FALHOU! Corrija os erros antes do deploy.
    pause
    exit /b 1
) else (
    if %warnings% gtr 0 (
        echo ⚠️  Verificacao concluida com avisos. Pode prosseguir com cautela.
    ) else (
        echo ✅ VERIFICACAO PERFEITA! Pronto para deploy.
    )
    echo.
    choice /c sn /m "Deseja executar o deploy agora"
    if errorlevel 2 exit /b 0
    if errorlevel 1 call auto-deploy.bat
)

pause
