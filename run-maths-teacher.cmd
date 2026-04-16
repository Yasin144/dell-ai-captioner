@echo off
setlocal
cd /d "%~dp0"

start "" powershell -ExecutionPolicy Bypass -File "%~dp0start-all.ps1"
timeout /t 6 /nobreak >nul
start "" "http://127.0.0.1:8080/"

endlocal
