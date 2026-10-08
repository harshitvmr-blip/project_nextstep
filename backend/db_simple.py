import os
import sqlite3
from contextlib import contextmanager

# SQLite database path
DB_PATH = os.path.join(os.path.dirname(__file__), 'nextstep.db')

def init_db():
    """Initialize the database with required tables"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    # Create users table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            education_level TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Create careers table (optional - using mock data for now)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS careers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            avg_salary TEXT,
            required_education TEXT
        )
    ''')
    
    conn.commit()
    conn.close()
    print(f"✅ Database initialized at {DB_PATH}")

@contextmanager
def get_db():
    """Context manager for database connections"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

# Simple engine-like object for compatibility
class SimpleEngine:
    @contextmanager
    def connect(self):
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        
        class Connection:
            def __init__(self, conn):
                self.conn = conn
                
            def execute(self, query, params=None):
                cursor = self.conn.cursor()
                if params:
                    # Convert named parameters to positional
                    if isinstance(params, dict):
                        # Replace :param with ? and convert dict to tuple
                        import re
                        param_names = re.findall(r':(\w+)', str(query))
                        query_str = str(query)
                        for name in param_names:
                            query_str = query_str.replace(f':{name}', '?')
                        param_values = tuple(params.get(name) for name in param_names)
                        cursor.execute(query_str, param_values)
                    else:
                        cursor.execute(str(query), params)
                else:
                    cursor.execute(str(query))
                return cursor
                
            def commit(self):
                self.conn.commit()
                
            def fetchone(self):
                return self.cursor.fetchone()
                
            def fetchall(self):
                return self.cursor.fetchall()
        
        try:
            yield Connection(conn)
            conn.commit()
        finally:
            conn.close()

engine = SimpleEngine()

# Initialize database on import
if not os.path.exists(DB_PATH):
    init_db()
