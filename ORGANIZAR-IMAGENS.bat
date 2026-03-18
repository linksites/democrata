@echo off
chcp 65001 >nul
echo 🗂️  Organizando Imagens - Democrata Barbearia & Pub
echo ==================================================
echo.

REM Criar pastas se não existirem
echo 📁 Criando estrutura de pastas...
if not exist "assets\logo" mkdir "assets\logo"
if not exist "assets\hero" mkdir "assets\hero"
if not exist "assets\foodtruck" mkdir "assets\foodtruck"
if not exist "assets\ambiente" mkdir "assets\ambiente"
if not exist "assets\menu" mkdir "assets\menu"
if not exist "assets\gallery" mkdir "assets\gallery"
echo ✅ Pastas criadas!
echo.

REM Mover imagens para locais corretos
echo 📦 Movendo imagens...

REM Logo transparente (imagem 1)
if exist "assets\democratalogofundotransparente.png" (
    move "assets\democratalogofundotransparente.png" "assets\logo\logo.png"
    echo ✅ Logo transparente → assets\logo\logo.png
)

REM Logo sem fundo alternativo  
if exist "assets\logodemocratasemfundo.png" (
    move "assets\logodemocratasemfundo.png" "assets\logo\logo-perfil.png"
    echo ✅ Logo perfil → assets\logo\logo-perfil.png
)

REM Hero background (burger)
if exist "assets\hamburguer-e-coca-cola-fundo-barbearia-rustica.jpeg" (
    move "assets\hamburguer-e-coca-cola-fundo-barbearia-rustica.jpeg" "assets\hero\hero-bg.jpg"
    echo ✅ Hero background → assets\hero\hero-bg.jpg
)

REM Food truck banner
if exist "assets\horario-de-funcionamento-food-truck.jpeg" (
    move "assets\horario-de-funcionamento-food-truck.jpeg" "assets\foodtruck\foodtruck-banner.jpg"
    echo ✅ Food truck banner → assets\foodtruck\foodtruck-banner.jpg
)

REM Ambiente - fachada
if exist "assets\barbearia fachada-frente-e-idealizador.jpeg" (
    move "assets\barbearia fachada-frente-e-idealizador.jpeg" "assets\ambiente\barbearia-fachada.jpg"
    echo ✅ Fachada → assets\ambiente\barbearia-fachada.jpg
)

REM Ambiente - interior/horários
if exist "assets\horarios-democrata-barbearia.jpeg" (
    move "assets\horarios-democrata-barbearia.jpeg" "assets\ambiente\horario-funcionamento.jpg"
    echo ✅ Horário funcionamento → assets\ambiente\horario-funcionamento.jpg
)

REM Menu - burger destaque
if exist "assets\omelhorhamburguerdasuavida.jpeg" (
    move "assets\omelhorhamburguerdasuavida.jpeg" "assets\menu\burger-destaque.jpg"
    echo ✅ Burger destaque → assets\menu\burger-destaque.jpg
)

REM Menu - food truck
if exist "assets\menu\food-truck-horarios.jpg" (
    move "assets\menu\food-truck-horarios.jpg" "assets\foodtruck\foodtruck-exterior.jpg"
    echo ✅ Food truck exterior → assets\foodtruck\foodtruck-exterior.jpg
)

REM Logo antigo (manter como backup)
if exist "assets\logo\logo.jpeg" (
    move "assets\logo\logo.jpeg" "assets\logo\logo-old.jpeg"
    echo ℹ️  Logo antigo renomeado → assets\logo\logo-old.jpeg
)

REM Remover arquivos desnecessários
echo.
echo 🧹 Limpando arquivos temporários...
if exist "assets\.gitkeep" del "assets\.gitkeep" /q
if exist "assets\logo\.gitkeep" del "assets\logo\.gitkeep" /q
if exist "assets\hero\.gitkeep" del "assets\hero\.gitkeep" /q
if exist "assets\foodtruck\.gitkeep" del "assets\foodtruck\.gitkeep" /q
if exist "assets\ambiente\.gitkeep" del "assets\ambiente\.gitkeep" /q
if exist "assets\menu\.gitkeep" del "assets\menu\.gitkeep" /q
if exist "assets\gallery\.gitkeep" del "assets\gallery\.gitkeep" /q
echo ✅ Limpo!

echo.
echo ==================================================
echo ✅ Organização concluída!
echo.
echo 📂 Estrutura final:
echo assets/
echo ├── logo/
echo │   ├── logo.png (transparente)
echo │   └── logo-perfil.png (circular)
echo ├── hero/
echo │   └── hero-bg.jpg (burger)
echo ├── foodtruck/
echo │   ├── foodtruck-banner.jpg (logo)
echo │   └── foodtruck-exterior.jpg
echo ├── ambiente/
echo │   ├── barbearia-fachada.jpg
echo │   └── horario-funcionamento.jpg
echo └── menu/
echo     └── burger-destaque.jpg
echo.
echo 🚀 Execute agora:
echo    git add .
echo    git commit -m "📁 Organize images in structured folders"
echo    git push
echo.
pause
