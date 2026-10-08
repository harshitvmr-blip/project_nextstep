# Test Backend-Frontend Integration
Write-Host "Testing Next Step Guide Integration..." -ForegroundColor Cyan
Write-Host ""

# Test 1: Backend Health Check
Write-Host "1. Testing Backend Health..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost:5000/health" -Method Get
    if ($response.status -eq "ok") {
        Write-Host "   ✅ Backend is healthy!" -ForegroundColor Green
    }
} catch {
    Write-Host "   ❌ Backend is not responding. Make sure it's running on port 5000" -ForegroundColor Red
    Write-Host "   Run: cd backend && python app.py" -ForegroundColor Yellow
}

Write-Host ""

# Test 2: Frontend Server
Write-Host "2. Testing Frontend Server..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -Method Get -TimeoutSec 5 -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host "   ✅ Frontend is running!" -ForegroundColor Green
    }
} catch {
    Write-Host "   ❌ Frontend is not responding. Make sure it's running on port 3000" -ForegroundColor Red
    Write-Host "   Run: npm run dev" -ForegroundColor Yellow
}

Write-Host ""

# Test 3: API Endpoints
Write-Host "3. Testing API Endpoints..." -ForegroundColor Yellow

# Test colleges endpoint
try {
    $colleges = Invoke-RestMethod -Uri "http://localhost:5000/api/colleges" -Method Get
    Write-Host "   ✅ /api/colleges - Working ($($colleges.Count) colleges)" -ForegroundColor Green
} catch {
    Write-Host "   ❌ /api/colleges - Failed" -ForegroundColor Red
}

# Test scholarships endpoint
try {
    $scholarships = Invoke-RestMethod -Uri "http://localhost:5000/api/scholarships" -Method Get
    Write-Host "   ✅ /api/scholarships - Working ($($scholarships.Count) scholarships)" -ForegroundColor Green
} catch {
    Write-Host "   ❌ /api/scholarships - Failed" -ForegroundColor Red
}

# Test exams endpoint
try {
    $exams = Invoke-RestMethod -Uri "http://localhost:5000/api/exams" -Method Get
    Write-Host "   ✅ /api/exams - Working ($($exams.Count) exams)" -ForegroundColor Green
} catch {
    Write-Host "   ❌ /api/exams - Failed" -ForegroundColor Red
}

Write-Host ""

# Test 4: Database
Write-Host "4. Testing Database..." -ForegroundColor Yellow
if (Test-Path "backend/nextstep.db") {
    Write-Host "   ✅ Database file exists" -ForegroundColor Green
} else {
    Write-Host "   ❌ Database file not found. Run: python backend/init_db.py" -ForegroundColor Red
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Integration Test Complete!" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Access your app at: http://localhost:3000" -ForegroundColor Green
Write-Host ""
