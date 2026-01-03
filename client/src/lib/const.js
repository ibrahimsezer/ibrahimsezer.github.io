// lib/const.js
import { FaTerminal } from 'react-icons/fa';

export const scriptDetails = {
  flutter_wifi_debug: {
    id: 1,
    title: "🔷 Flutter Wifi Debug Initialize Guide",
    codetitle: "Flutter Wifi Debug",
    titleDescription: "This script automates the process of connecting your Android device to your development machine over Wi-Fi, eliminating the need for USB cables.",
    icon: <FaTerminal />,
    code: `@echo off
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
`,
    language: "bash",
    category: "mobile",
    description: "This script automates the process of connecting your Android device to your development machine over Wi-Fi, eliminating the need for USB cables.",
    isFeatured: true,
    lastUpdated: "2025-05-02",
  },
  turbo_typescript: {
    id: 2,
    title: "🔧 Turbo+Typescript Initialize Guide",
    codetitle: "Turbo+Typescript",
    titleDescription: "This script sets up a monorepo project using Turborepo and TypeScript. It creates a structured project with separate frontend and backend applications, along with shared packages.",
    icon: <FaTerminal />,
    code: `@echo off
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
pause`,
    language: "bash",
    category: "tools",
    description: "Misuse of commands like /MIR may delete destination files. Ensure files are not locked during backup. Regularly check backup destination space. Watch for permission issues.",
    isFeatured: true,
    lastUpdated: "2025-05-02",

  },
  git_auto_pull: {
    id: 3,
    title: "🔄 Git Repo Auto-Pull & Build",
    codetitle: "git-auto-pull-build",
    titleDescription: "Automatically pulls updates from a Git repository and builds the project. Ideal for lightweight CI/CD workflows.",
    icon: <FaTerminal />,
    code: `@echo off
color 0B
title Git Auto‑Pull & Build

REM ── CONFIGURATION ──
set "REPO_DIR=C:\\Path\\To\\Your\\Repo"
set "BUILD_CMD=mvn clean install"

REM ── NAVIGATE TO REPO ──
echo [1] Navigating to repo directory...
cd /d "%REPO_DIR%" || (
  echo ERROR: Could not change directory to %REPO_DIR%.
  pause
  exit /b 1
)

echo.
echo WARNING: This will reset your local branch to match origin/master.
echo Any uncommitted changes will be LOST.
set /p CONFIRM="Proceed with reset and pull? (Y/N): "
if /i not "%CONFIRM%"=="Y" (
  echo Operation canceled by user.
  pause
  exit /b 0
)

echo.
echo [2] Fetching latest from origin/master...
git fetch origin
if %ERRORLEVEL% neq 0 (
  echo ERROR: git fetch failed.
  pause
  exit /b 1
)

echo [3] Resetting local branch to origin/master...
git reset --hard origin/master
if %ERRORLEVEL% neq 0 (
  echo ERROR: git reset failed.
  pause
  exit /b 1
)

echo.
echo [4] Running build command: %BUILD_CMD%...
%BUILD_CMD%
if %ERRORLEVEL% equ 0 (
  echo Build SUCCESSFUL!
) else (
  echo Build FAILED. Check the output for details.
)

pause
`,
    language: "bash",
    category: "git",
    description: `
🎯 What is its purpose?
Update a project periodically or when triggered:

Update from git repository (pull)

Run the build step (ex: pnpm build, flutter build, npm run build)

This script updates the project without manual intervention in environments such as CI/CD.

📌 Where to Use?
In simplified versions of CI/CD pipelines

Local deployments on Raspberry Pi or low-cost servers

On systems where Docker images need to be kept up to date

For build after deployment on simple staging servers

⚠️ Things to Consider
If there are merge conflicts during the pull operation, the script may fail.

If the build fails, subsequent operations will be affected.

If private repo is used instead of public repo, the access token should be stored securely.

The directory where the script will run must be set correctly, there is a risk of overwriting the wrong repo.`,
    isFeatured: true,
    lastUpdated: "2025-05-02",

  },
  docker_build: {
    id: 4,
    title: "🐳 Docker: Build & Push Image",
    codetitle: "docker-build-push",
    titleDescription: "Builds a Docker image from a project and pushes it to a container registry. Useful for automated deployments.",
    icon: <FaTerminal />,
    code: `@echo off
color 0E
title Docker Build & Push

REM ── CONFIGURATION ──
set "IMAGE_NAME=myapp"
set "IMAGE_TAG=latest"
set "REGISTRY=myregistry.azurecr.io"

echo [1] Building Docker image %IMAGE_NAME%:%IMAGE_TAG%...
docker build -t %IMAGE_NAME%:%IMAGE_TAG% .
if %ERRORLEVEL% neq 0 (
  echo ERROR: Docker build failed.
  pause
  exit /b 1
)

echo.
echo [2] Tagging image for registry: %REGISTRY%/%IMAGE_NAME%:%IMAGE_TAG%...
docker tag %IMAGE_NAME%:%IMAGE_TAG% %REGISTRY%/%IMAGE_NAME%:%IMAGE_TAG%
if %ERRORLEVEL% neq 0 (
  echo ERROR: Docker tag failed.
  pause
  exit /b 1
)

echo.
echo WARNING: You are about to push the image to %REGISTRY%.
set /p CONFIRM_PUSH="Proceed with docker push? (Y/N): "
if /i not "%CONFIRM_PUSH%"=="Y" (
  echo Push operation canceled by user.
  pause
  exit /b 0
)

echo.
echo [3] Pushing image to %REGISTRY%...
docker push %REGISTRY%/%IMAGE_NAME%:%IMAGE_TAG%
if %ERRORLEVEL% equ 0 (
  echo Docker push SUCCESSFUL!
) else (
  echo Docker push FAILED. Check registry credentials and network.
)

pause
`,
    language: "bash",
    category: "backend",
    description: `🐳 Docker: Build & Push Image
🎯 What is its purpose?
Automatically builds a project containing a dockerfile:

Builds (e.g. docker build)

Tags (e.g. docker tag)

Pushes to Docker Hub or another registry (docker push)

This process is a fundamental part of pre-deployment automation.

📌 Where is it used?
Updating microservices with new image after each push

Automated container production in CI/CD pipelines

Push operations to local registries (e.g. Harbor)

Developer teams can release and distribute their own custom images

⚠️ Things to Consider
Docker Hub may get stuck in rate limit, auth token should be used.

If the built image is large, the push time may be too long.

Hidden data should not be left in Dockerfile.

Make sure Docker daemon is active before running the script.`,
    isFeatured: true,
    lastUpdated: "2025-05-02",

  },
  azure_func: {
    id: 5,
    title: "☁️ Azure Functions Deployment",
    codetitle: "azure-functions-deploy",
    titleDescription: "Builds and deploys an Azure Functions project by zipping and pushing it using Azure CLI.",
    icon: <FaTerminal />,
    code: `@echo off
color 09
title Deploy Azure Functions

REM ── CONFIGURATION ──
set "FUNCTION_APP_NAME=MyFuncApp"
set "SOURCE_DIR=C:\\Path\\To\\FunctionProject"
set "RESOURCE_GROUP=MyResourceGroup"

echo [1] Preparing to deploy Azure Function: %FUNCTION_APP_NAME%
echo Source directory: %SOURCE_DIR%
echo Resource group: %RESOURCE_GROUP%
echo.
echo WARNING: This will overwrite the existing deployment on Azure.
set /p CONFIRM_DEPLOY="Proceed with deployment? (Y/N): "
if /i not "%CONFIRM_DEPLOY%"=="Y" (
  echo Deployment canceled by user.
  pause
  exit /b 0
)

echo.
echo [2] Packaging and publishing function app...
cd /d "%SOURCE_DIR%" || (
  echo ERROR: Could not change directory to %SOURCE_DIR%.
  pause
  exit /b 1
)

func azure functionapp publish %FUNCTION_APP_NAME% --resource-group %RESOURCE_GROUP% --dotnet
if %ERRORLEVEL% equ 0 (
  echo Deployment SUCCESSFUL!
) else (
  echo Deployment FAILED. Check Azure CLI login and permissions.
)

pause
`,
    language: "bash",
    category: "cloud",
    description: `🎯 What is the Purpose?
An Azure Functions project:

Builds

Zip and deploys

Installs to a Function App on Azure (ex: az functionapp deployment source config-zip)

This process provides script automation that continuously deploys functions to the Azure environment.

📌 Where is it used?
Uploading server-independent background jobs to Azure

Updating event-based or trigger-based functions

Automatic function updates in CI/CD operations

In micro-function deployments used with API Gateway

⚠️ Things to Consider
Azure CLI must be installed and logged in (az login).

If there is a Function App slot, it should not be deployed to the wrong slot.

If the resource group or app name is entered incorrectly, there may be a risk of data loss.

Alternatives such as func azure functionapp publish should be evaluated before deployment.`,
    isFeatured: true,
    lastUpdated: "2025-05-02",

  },
  log_file_monitor: {
    id: 6,
    title: "🔍 Log File Monitor (Tail Emulation)",
    codetitle: "log-file-monitor",
    titleDescription: "Emulates Unix tail -f command on Windows to monitor live changes in log files. Useful for debugging.",
    icon: <FaTerminal />,
    code: `@echo off
color 0D
title Log Monitor

REM ── CONFIGURATION ──
set "LOG_FILE=C:\\Path\\To\\Your\\app.log"
set "INTERVAL=2"

echo [1] Ready to monitor log file:
echo     %LOG_FILE%
echo.
set /p CONFIRM_MONITOR="Start monitoring? (Y/N): "
if /i not "%CONFIRM_MONITOR%"=="Y" (
  echo Log monitoring canceled.
  pause
  exit /b 0
)

echo.
echo Monitoring %LOG_FILE% every %INTERVAL% seconds. Press Ctrl+C to stop.

:loop
  cls
  echo === Last 20 lines of %LOG_FILE% ===
  for /f "skip=1 delims=" %%A in ('powershell -command "Get-Content -Path '%LOG_FILE%' -Tail 20"') do echo %%A
  timeout /t %INTERVAL% >nul
goto loop
`,
    language: "bash",
    category: "debugging",
    description: `
🎯 What is its purpose?
As the Windows equivalent of the tail -f command in Linux, it allows live monitoring of changes at the end of a .log file. This is useful, for example, to monitor the logs of a web server in real time.

📌 Where is it used?
Live monitoring of application logs

Monitoring log activity during debugging

Reflect log changes to the terminal in Dev environments

Observing microservice logs or event outputs

⚠️ Things to Consider
In .bat this is usually done with powershell -command; Windows CMD offers limited capabilities.

If the log file is very large, it can quickly consume memory.

If the file is write-locked, it may not be monitored.

tail emulation may not be able to provide full-time updates, delays may occur.`,
    isFeatured: true,
    lastUpdated: "2025-05-02",

  },
  folder_sync: {
    id: 7,
    title: "📁 Two-Way Folder Sync with Robocopy",
    codetitle: "folder-sync",
    titleDescription: "Folder sync",
    icon: <FaTerminal />,
    code: `@echo off
color 0C
title Robocopy Two‑Way Sync

REM ── CONFIGURATION ──
set "SOURCE=C:\\FolderA"
set "DEST=C:\\FolderB"
set "LOGFILE=C:\\Logs\\sync.log"

echo [1] Two‑way mirror sync will run between:
echo     SOURCE: %SOURCE%
echo     DEST:   %DEST%
echo.
echo WARNING: /MIR option will DELETE files in the destination to match the source.
set /p CONFIRM_SYNC="Proceed with two‑way sync? (Y/N): "
if /i not "%CONFIRM_SYNC%"=="Y" (
  echo Two‑way sync canceled by user.
  pause
  exit /b 0
)

echo.
echo [2] Syncing %SOURCE% → %DEST%...
robocopy "%SOURCE%" "%DEST%" /MIR /Z /NP /R:3 /W:5 /LOG+:"%LOGFILE%"
echo [3] Syncing %DEST% → %SOURCE%...
robocopy "%DEST%" "%SOURCE%" /MIR /Z /NP /R:3 /W:5 /LOG+:"%LOGFILE%"

echo.
echo Sync complete. Log available at %LOGFILE%.
pause
`,
    language: "bash",
    category: "tools",
    description: `🎯 What is its purpose?
This script performs two-way file synchronization between two folders. That is:

When synchronizing FolderA → FolderB, files in FolderA but not in FolderB are copied, and files in FolderB but not in FolderA are deleted.

The same is done in the reverse direction: FolderB → FolderA.

This allows two folders to be made identical (bi-directional mirroring).

🔐 Security Layer
Since the script is performing a critical operation (such as deleting a file),
it requires prior confirmation from the user. If the user types anything other than Y,
the operation is canceled. This reduces the risk of misuse.`
    ,
    isFeatured: true,
    lastUpdated: "2025-05-02",
  },
  check_ip_network: {
    id: 8,
    title: "🌐 Network: Check IP Address and Internet Connectivity",
    codetitle: "check-ip-network",
    titleDescription: "This script displays your local IP address and checks internet connectivity.",
    icon: <FaTerminal />,
    code: `@echo off
color 0D
title Network Status

echo [1] Obtaining local IP address...
ipconfig | findstr /i "IPv4"

echo [2] Checking internet connection...
ping www.google.com -n 1

echo
pause`,
    language: "bash",
    category: "tools",
    description: "This script displays your local IP address and checks internet connectivity.",
    isFeatured: true,
    lastUpdated: "2025-05-02",
  },
  server_backup: {
    id: 9,
    title: "🗄️ Server Backup",
    codetitle: "server-backup",
    titleDescription: "It is used to back up specific files or folders on the server to a specified destination folder (usually an external disk, NAS or another server). With this script, scheduled daily/weekly backups can be automated.",
    icon: <FaTerminal />,
    code: `@echo off
color 0A
title SQL Server Backup

REM Configuration
set "SERVER_NAME=YOUR_SQL_SERVER"
set "DATABASE_NAME=YourDatabase"
set "BACKUP_DIR=C:\\Backups\\SQL"
set "TIMESTAMP=%DATE:~10,4%-%DATE:~4,2%-%DATE:~7,2%_%TIME:~0,2%-%TIME:~3,2%-%TIME:~6,2%"

REM Ensure backup directory exists
if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"

echo [1] Backing up %DATABASE_NAME% on %SERVER_NAME%...
sqlcmd -S %SERVER_NAME% -Q "BACKUP DATABASE [%DATABASE_NAME%] TO DISK=N'%BACKUP_DIR%\\%DATABASE_NAME%_%TIMESTAMP%.bak' WITH INIT, SKIP, NOREWIND, NOUNLOAD, STATS=10"

if %ERRORLEVEL% EQU 0 (
    echo Backup SUCCESSFUL!
) else (
    echo Backup FAILED. Check SQL Server permissions and path.
)

pause

`,
    language: "bash",
    category: "backend",
    description: `
🎯 What is its purpose?
It is used to back up specific files or folders on the server to a specified destination folder (usually an external disk, NAS or another server). With this script, scheduled daily/weekly backups can be automated.

📌 Where is it used?
File-based backup of web servers

Regular copying of database dump files

Secure backup of customer data

Configuration backups in development environments

⚠️ Things to Consider
Commands such as /MIR can delete files on the target if used incorrectly.

Backup directories should be tested for file locking.

The free space of the backup destination should be checked regularly.

Permissions/access rights should be considered when backing up critical system files.`,
    isFeatured: true,
    lastUpdated: "2025-05-02",
  },
  clean_temporary_files: {

    id: 10,
    title: "🛠️ Tool: Clean Temporary Files",
    codetitle: "clean-temp-file",
    titleDescription: "This script cleans up temporary and log files in your project directory.",
    icon: <FaTerminal />,
    code: `@echo off
color 0C
title Clean Temporary Files

echo [1] Deleting temporary files...
del /s /q "C:/Path/To/Your/Project/*.tmp"
del /s /q "C:/Path/To/Your/Project/*.log"

echo [2] Cleanup completed.
echo.
pause
`,
    language: "bash",
    category: "tools",
    description: "This script cleans up temporary and log files in your project directory.",
    isFeatured: true,
    lastUpdated: "2025-05-02",

  }
};
