@echo off
echo ========================================================
echo  🚀 Starting Growthcrew Social Studio (Local Dev)
echo ========================================================
echo.

echo [1/2] Starting Python FastAPI Backend on port 3005...
start "Growthcrew FastAPI Backend (Port 3005)" cmd /k "cd /d %~dp0fastapi-backend && uvicorn main:app --port 3005 --reload"

timeout /t 2 >nul

echo [2/2] Starting React Frontend on port 5173...
start "Growthcrew React Frontend (Port 5173)" cmd /k "cd /d %~dp0client && npm run dev"

echo.
echo ========================================================
echo  ✅ System Running!
echo  🌐 Frontend: http://localhost:5173
echo  📡 Backend API: http://localhost:3005
echo  📖 API Docs: http://localhost:3005/docs
echo ========================================================
