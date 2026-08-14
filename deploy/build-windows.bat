@echo off
setlocal
cd /d "%~dp0.."

echo [1/4] Build frontend...
cd frontend
call npm ci
if errorlevel 1 exit /b 1
call npm run build
if errorlevel 1 exit /b 1

echo [2/4] Build backend...
cd ..\backend
call npm ci
if errorlevel 1 exit /b 1
call npm run build
if errorlevel 1 exit /b 1

echo [3/4] Copy frontend\dist -^> backend\public...
if exist public rmdir /s /q public
xcopy /E /I /Y ..\frontend\dist public
if errorlevel 1 exit /b 1

echo [4/4] Done.
echo.
echo Upload folder "backend" to Plesk, then set .env:
echo   FRONTEND_URL=https://your-domain.com
echo   STATIC_DIR=./public
echo   PORT=3000
echo See deploy\plesk-windows.md
endlocal
