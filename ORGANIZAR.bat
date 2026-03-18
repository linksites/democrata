@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

echo.
echo  ================================================
echo   ORGANIZADOR DE IMAGENS - DEMOCRATA
echo  ================================================
echo.

REM Verificar pasta atual
if not exist "assets" (
    echo ERRO: Pasta 'assets' nao encontrada!
    pause
    exit /b 1
)

REM Criar estrutura de pastas
echo Criando pastas...
if not exist "assets\logo" mkdir "assets\logo"
if not exist "assets\hero" mkdir "assets\hero"
if not exist "assets\foodtruck" mkdir "assets\foodtruck"
if not exist "assets\ambiente" mkdir "assets\ambiente"
if not exist "assets\menu" mkdir "assets\menu"
echo Pastas criadas!
echo.

echo Movendo imagens...
echo.

REM Logo transparente
if exist "assets\democratalogofundotransparente.png" (
    move "assets\democratalogofundotransparente.png" "assets\logo\logo.png" >nul
    echo [OK] Logo transparente
)

REM Logo perfil
if exist "assets\logodemocratasemfundo.png" (
    move "assets\logodemocratasemfundo.png" "assets\logo\logo-perfil.png" >nul
    echo [OK] Logo perfil
)

REM Hero background
if exist "assets\hamburguer-e-coca-cola-fundo-barbearia-rustica.jpeg" (
    move "assets\hamburguer-e-coca-cola-fundo-barbearia-rustica.jpeg" "assets\hero\hero-bg.jpg" >nul
    echo [OK] Hero (burger)
)

REM Food truck banner
if exist "assets\horario-de-funcionamento-food-truck.jpeg" (
    move "assets\horario-de-funcionamento-food-truck.jpeg" "assets\foodtruck\foodtruck-banner.jpg" >nul
    echo [OK] Food truck banner
)

REM Fachada
if exist "assets\barbearia fachada-frente-e-idealizador.jpeg" (
    move "assets\barbearia fachada-frente-e-idealizador.jpeg" "assets\ambiente\barbearia-fachada.jpg" >nul
    echo [OK] Fachada
)

REM Horario
if exist "assets\horarios-democrata-barbearia.jpeg" (
    move "assets\horarios-democrata-barbearia.jpeg" "assets\ambiente\horario-funcionamento.jpg" >nul
    echo [OK] Horario funcionamento
)

REM Menu burger
if exist "assets\omelhorhamburguerdasuavida.jpeg" (
    move "assets\omelhorhamburguerdasuavida.jpeg" "assets\menu\burger-destaque.jpg" >nul
    echo [OK] Burger destaque
)

REM Food truck existente
if exist "assets\menu\food-truck-horarios.jpg" (
    move "assets\menu\food-truck-horarios.jpg" "assets\foodtruck\foodtruck-exterior.jpg" >nul
    echo [OK] Food truck exterior
)

echo.
echo ================================================
echo   ORGANIZACAO CONCLUIDA!
echo ================================================
echo.
echo Proximos passos:
echo   git add .
echo   git commit -m "Organize images"
echo   git push
echo.
pause
endlocal
