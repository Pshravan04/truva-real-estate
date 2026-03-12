@echo off
echo ==========================================
echo Truva - HIOX Deployment Preparation Script
echo ==========================================

echo [1/5] Cleaning previous build...
rmdir /s /q .next
rmdir /s /q hiox-deployment

echo [2/5] Building Next.js App (Standalone Mode)...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Exiting.
    pause
    exit /b %errorlevel%
)

echo [3/5] Creating Deployment Package...
mkdir hiox-deployment
xcopy .next\standalone hiox-deployment /E /I /Y

echo [4/5] Copying Static Assets (Required for Standalone)...
mkdir hiox-deployment\.next\static
xcopy .next\static hiox-deployment\.next\static /E /I /Y
mkdir hiox-deployment\public
xcopy public hiox-deployment\public /E /I /Y

echo [5/5] Creating Package.json for Production...
copy package.json hiox-deployment\package.json

echo.
echo ==========================================
echo SUCCESS! Deployment ready in folder: 'hiox-deployment'
echo ==========================================
echo.
echo NEXT STEPS FOR HIOX:
echo 1. Open the 'hiox-deployment' folder.
echo 2. Select ALL files inside and ZIP them (e.g., truva-deploy.zip).
echo 3. Upload this ZIP to your HIOX cPanel Application Root.
echo 4. Unzip in cPanel.
echo 5. Run 'npm install' in cPanel to get Linux binaries.
echo.
pause
