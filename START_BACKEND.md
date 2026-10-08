# Backend Setup & Integration Guide

## Quick Start

### 1. Install Python Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 2. Initialize Database

```bash
python init_db.py
```

This creates a SQLite database at `backend/nextstep.db` with the required tables.

### 3. Configure Environment Variables

Edit `backend/.env` and add your Gemini API key:

```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

Get your API key from: https://aistudio.google.com/app/apikey

### 4. Start the Backend Server

```bash
python app.py
```

The backend will run on **http://localhost:5000**

### 5. Start the Frontend (in a new terminal)

```bash
npm run dev
```

The frontend will run on **http://localhost:3000** and automatically proxy API requests to the backend.

## Architecture

```
Frontend (React + Vite)          Backend (Flask)
http://localhost:3000     →      http://localhost:5000
        ↓                               ↓
   /api/* requests          →      Flask Routes
        ↓                               ↓
   Vite Proxy              →      SQLite Database
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (requires token)

### Resources
- `GET /api/colleges` - Get colleges list
- `GET /api/scholarships` - Get scholarships list
- `GET /api/exams` - Get exams list

### Careers
- `GET /api/careers` - Get careers list

### AI Features
- `POST /api/gemini/suggest-careers` - Get AI career suggestions
- `POST /api/chat` - Chat with AI assistant

### Aptitude
- `POST /api/aptitude-test` - Submit aptitude test
- `POST /api/career-recommendations` - Get career recommendations

## Database

The app uses **SQLite** for simplicity. The database file is created at `backend/nextstep.db`.

### Tables:
- **users** - User accounts (id, name, email, password_hash, education_level)
- **careers** - Career information (currently using frontend mock data)

## Troubleshooting

### Port Already in Use
If port 5000 is busy, change it in `backend/.env`:
```env
PORT=5001
```

Then update `vite.config.ts` proxy target to match.

### Database Errors
Delete `backend/nextstep.db` and run `python init_db.py` again.

### CORS Errors
The backend has CORS enabled for all origins. If you still see CORS errors, ensure both servers are running.

## Next Steps

1. **Implement Gemini AI Integration** - Update `backend/routes/gemini.py` and `backend/routes/chat.py` to use the actual Google Gemini API
2. **Populate Database** - Add career, college, and scholarship data to the database
3. **Add More Endpoints** - Implement counselor booking, user preferences, etc.
4. **Add Authentication Middleware** - Protect routes that require authentication
5. **Deploy** - Deploy backend to a cloud service (Heroku, Railway, Google Cloud Run)

## Production Considerations

- Change `JWT_SECRET_KEY` in `backend/.env` to a secure random string
- Use PostgreSQL or MySQL instead of SQLite for production
- Add rate limiting and input validation
- Implement proper error logging
- Use environment-specific configs
- Add API documentation (Swagger/OpenAPI)
