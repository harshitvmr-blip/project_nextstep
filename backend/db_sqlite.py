import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Use SQLite for easy local testing
SQLALCHEMY_DATABASE_URL = "sqlite:///./nextstep.db"

print("🔹 Using SQLite database for local testing")

# Create engine (connection)
engine = create_engine(SQLALCHEMY_DATABASE_URL, pool_pre_ping=True)

# Optional: Create Session factory for ORM (if needed later)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)