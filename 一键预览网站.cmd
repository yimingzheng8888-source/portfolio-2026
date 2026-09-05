@echo off
cd /d "%~dp0"

echo.
echo Starting portfolio website. Please wait...
echo The browser will open automatically. Keep this window open while previewing.
echo.

if not exist "node_modules\vite\bin\vite.js" (
  echo Installing dependencies for the first run...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo Installation failed. Please install Node.js and try again.
    pause
    exit /b 1
  )
)

call npm.cmd run open

if errorlevel 1 (
  echo.
  echo Startup failed. Please confirm that Node.js is installed.
  pause
)
