@echo off
setlocal
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js/npm nao encontrado. Instale o Node.js e tente novamente.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Instalando dependencias...
  npm install
  if errorlevel 1 (
    echo Falha ao instalar dependencias.
    pause
    exit /b 1
  )
)

start "" cmd /c "timeout /t 3 >nul && start http://127.0.0.1:5173/"
npm run dev -- --host 127.0.0.1 --port 5173

pause
