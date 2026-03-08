@echo off
chcp 65001 >nul
title Next Provedor — Iniciando...
color 0A

echo.
echo  ╔══════════════════════════════════════════╗
echo  ║        NEXT PROVEDOR — DEV SERVER        ║
echo  ╚══════════════════════════════════════════╝
echo.

set "ROOT=%~dp0"

:: Verifica Node.js
where node >nul 2>&1
if errorlevel 1 (
  echo  [ERRO] Node.js nao encontrado!
  echo  Baixe em: https://nodejs.org
  pause & exit /b 1
)

:: Verifica se os pacotes estão instalados
if not exist "%ROOT%node_modules" (
  echo  [AGUARDE] Primeira execucao — instalando dependencias...
  echo  Isso leva 1-2 minutos, apenas na primeira vez.
  echo.
  cd /d "%ROOT%"
  npm install
  echo.
)

:: Inicia tudo com um só comando em nova janela
echo  Iniciando site...
start "NEXT PROVEDOR" cmd /k "cd /d "%ROOT%" && color 0B && npm run dev"

:: Aguarda o servidor compilar
echo  Aguardando compilacao...
timeout /t 5 /nobreak >nul

:: Abre o navegador
start "" "http://localhost:3000"

echo.
echo  ╔══════════════════════════════════════════╗
echo  ║  Site rodando em http://localhost:3000   ║
echo  ║  Feche a janela azul para parar.         ║
echo  ╚══════════════════════════════════════════╝
echo.
timeout /t 3 /nobreak >nul
exit
