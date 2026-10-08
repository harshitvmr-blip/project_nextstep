import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Database credentials
DB_USER = os.getenv("DB_USER", "root")
DB_PASS = os.getenv("DB_PASS", "")
DB_NAME = os.getenv("DB_NAME", "nextstep_db")
DB_HOST = os.getenv("DB_HOST", "127.0.0.1")
DB_PORT = os.getenv("DB_PORT", "3306")
INSTANCE_CONNECTION_NAME = os.getenv("INSTANCE_CONNECTION_NAME", "")

# Choose connection type automatically
if INSTANCE_CONNECTION_NAME:
    # ---- CLOUD SQL (GCP) CONNECTION ----
    SQLALCHEMY_DATABASE_URL = (
        f"mysql+pymysql://{DB_USER}:{DB_PASS}@/{DB_NAME}"
        f"?unix_socket=/cloudsql/{INSTANCE_CONNECTION_NAME}"
    )
    print("🔹 Using Cloud SQL connection")
else:
    # ---- LOCAL MYSQL CONNECTION ----
    SQLALCHEMY_DATABASE_URL = (
        f"mysql+pymysql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    )
    print("🔹 Using Local MySQL connection")

# Create engine (connection)
engine = create_engine(SQLALCHEMY_DATABASE_URL, pool_pre_ping=True)

# Optional: Create Session factory for ORM (if needed later)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
