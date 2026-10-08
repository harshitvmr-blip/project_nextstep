#!/usr/bin/env python3
"""
Initialize the SQLite database for Next Step Guide backend
"""
from db_simple import init_db

if __name__ == "__main__":
    print("Initializing database...")
    init_db()
    print("✅ Database setup complete!")
