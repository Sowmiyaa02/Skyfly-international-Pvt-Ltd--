@echo off
REM git-push.bat
REM Run this script after installing Git for Windows and replacing the repo URL.

REM 1. Initialize local git repository
git init

REM 2. Add all files
git add .

REM 3. Create initial commit
git commit -m "Initial commit: add website files and deployment setup"

REM 4. Set main branch
git branch -M main

REM 5. Add GitHub remote (replace USERNAME and REPO)
git remote add origin https://github.com/Sowmiyaa02/YOUR-REPO.git

REM 6. Push to GitHub
git push -u origin main

echo.
echo Replace YOUR-REPO with your GitHub repository name above.
echo Then run this script again.
echo.
echo If git is not installed, download it from: https://git-scm.com/download/win
pause
