// lib/const.js
export const turbo_typescriptInitialize = `@echo off
:: Monorepo Project Setup Script

:: === CONFIGURATION ===
set "BASE_DIR=C:\\Path\\To\\Your\\Workspace"
set "PROJECT_NAME=project-name"

:: 1. Create main project folder
cd /d "%BASE_DIR%"
mkdir "%PROJECT_NAME%"
cd "%PROJECT_NAME%"

:: 2. Initialize pnpm project
echo [1] Initializing pnpm project...
pnpm init

:: 3. Add turbo and typescript as dev dependencies
echo [2] Adding turbo and typescript as dev dependencies...
pnpm add -D turbo typescript

:: 4. Create pnpm workspace file
echo [3] Creating pnpm-workspace.yaml...
(
echo packages:
echo   - 'apps/*'
echo   - 'packages/*'
) > pnpm-workspace.yaml

:: 5. Create apps and packages folders
echo [4] Creating folder structure...
mkdir apps
mkdir apps\\web
mkdir apps\\api
mkdir packages
mkdir packages\\types

:: 6. Create turbo.json configuration file
echo [5] Creating turbo.json configuration...
(
echo {
echo   "$schema": "https://turborepo.org/schema.json",
echo   "pipeline": {
echo     "build": {
echo       "dependsOn": ["^build"],
echo       "outputs": ["dist/**"]
echo     },
echo     "dev": {
echo       "cache": false
echo     },
echo     "lint": {},
echo     "test": {}
echo   }
echo }
) > turbo.json

:: 7. Overwrite package.json with scripts and devDependencies
echo [6] Updating package.json scripts and devDependencies...
del package.json
(
echo {
echo   "name": "%PROJECT_NAME%",
echo   "version": "1.0.0",
echo   "private": true,
echo   "scripts": {
echo     "dev": "turbo run dev",
echo     "build": "turbo run build",
echo     "lint": "turbo run lint",
echo     "test": "turbo run test"
echo   },
echo   "devDependencies": {
echo     "turbo": "^1.10.0",
echo     "typescript": "^5.0.0"
echo   }
echo }
) > package.json

:: 8. Setup apps/web with Vite + React + TypeScript
echo [7] Setting up apps/web with Vite + React + TypeScript...
cd apps\\web
pnpm create vite . -- --template react-ts
pnpm install

:: 9. Setup apps/api with Express + TypeScript
echo [8] Setting up apps/api with Express + TypeScript...
cd ..\\api
pnpm init -y
pnpm add express
pnpm add -D typescript ts-node @types/node @types/express
echo {} > tsconfig.json

:: Return to base directory
cd ..\\..\\..

echo.
echo ✅ Setup completed successfully. Your frontend and backend folders are ready!
pause
`;

export const flutterDebugCode = `@echo off
color 0A
title Flutter Wi-Fi Debug Connection

REM ADB check
where adb >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    color 0C
    echo ERROR: adb command not recognized.
    echo.
    echo 1. Make sure Android Studio or SDK Platform Tools are installed.
    echo 2. Add the platform-tools folder to your PATH variable.
    echo.
    pause
    exit /b
)

REM List devices
echo [1] Listing devices (must be connected via USB)...
adb devices
echo.
pause

REM Switch to TCP/IP mode
echo [2] Putting device into TCP/IP mode (port 5555)...
adb tcpip 5555
echo.
pause

REM Enter IP address
set /p DEVICE_IP=[3] Enter the device's IP address (example: 192.168.1.102): 

REM ADB connect
echo [4] Connecting to IP address...
adb connect %DEVICE_IP%:5555
echo.
timeout /t 2 >nul

REM Connection check
echo [5] Checking connection status...
adb devices | findstr %DEVICE_IP% >nul
IF %ERRORLEVEL% EQU 0 (
    echo.
    echo Connection SUCCESSFUL! The device can now be used with Flutter over Wi-Fi.
) ELSE (
    color 0C
    echo.
    echo Connection FAILED. Check the IP address and Wi-Fi network.
)

echo.
pause
`;
