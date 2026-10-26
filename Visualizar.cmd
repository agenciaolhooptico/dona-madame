@echo off
cd /d "%~dp0"
set "DONA_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%DONA_NODE%" set "DONA_NODE=node"
start "" "http://localhost:4173"
"%DONA_NODE%" serve.mjs
pause
