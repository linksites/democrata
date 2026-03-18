@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

REM ============================================
REM BACKUP AUTOMATICO - Democrata
REM Cria backup com timestamp
REM ============================================

echo.
echo  ================================================
echo    💾 BACKUP AUTOMATICO - DEMOCRATA
echo  ================================================
echo.

REM Definir pasta de backup
set backup_dir=C:\Backups\Democrata
set datetime=%date:~6,4%%date:~3,2%%date:~0,2%_%time:~0,2%%time:~3,2%
set datetime=%datetime: =0%
set backup_file=backup_democrata_%datetime%.zip

REM Criar pasta de backup se nao existir
if not exist "%backup_dir%" (
    echo 📁 Criando pasta de backup...
    mkdir "%backup_dir%"
)

echo 💾 Criando backup: %backup_file%
echo.

REM Verificar se 7-Zip esta instalado
if exist "C:\Program Files\7-Zip\7z.exe" (
    echo 📦 Usando 7-Zip para compressao...
    "C:\Program Files\7-Zip\7z.exe" a -tzip "%backup_dir%\%backup_file%" "*" -x!.git -x!node_modules -x!*.zip
) else (
    echo ⚠️  7-Zip nao encontrado. Usando compactacao basica...
    echo ℹ️  Instale 7-Zip para melhor compactacao: https://www.7-zip.org/
    
    REM Fallback: copiar arquivos sem zip
    set backup_folder=%backup_dir%\backup_%datetime%
    mkdir "%backup_folder%"
    xcopy /s /e /y "*" "%backup_folder%\" >nul 2>&1
    echo ✅ Backup criado em: %backup_folder%
)

echo.
echo ================================================
echo    ✅ BACKUP CONCLUIDO!
echo ================================================
echo.
echo 📂 Local: %backup_dir%
echo 🕐 Data: %date% %time%
echo.
echo Backups anteriores:
dir /b /o-d "%backup_dir%\backup_*" 2>nul | head -5

echo.
pause
