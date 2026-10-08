@echo off
echo Starting Next Step Guide Development Servers...
echo.

REM Start backend in a new window
echo Starting Backend Server (Flask)...
start "Backend - Flask" cmd /k "cd backend && python app.py"

REM Wait a moment for backend to start
timeout /t 3 /nobreak > nul

REM Start frontend in a new window
echo Starting Frontend Server (Vite)...
start "Frontend - Vite" cmd /k "npm run dev"

echo.
echo ✅ Both servers are starting!
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to close this window (servers will keep running)...
pause > nul
