@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  LeCucine — локальный сервер
echo  ----------------------------
echo  Открой в браузере: http://localhost:8080
echo.
echo  Чтобы остановить — Ctrl+C
echo.
start "" http://localhost:8080
python -m http.server 8080
