import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable CORS for frontend-backend communication
    
    # Set secret key for sessions
    app.config["SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "super-secret-key")

    # Import and register all blueprints here
    from routes.careers_sqlite import bp as careers_bp
    from routes.auth_sqlite import bp as auth_bp
    from routes.aptitude import bp as aptitude_bp
    from routes.resources import bp as resources_bp
    from routes.gemini import bp as gemini_bp

    # Register blueprints
    app.register_blueprint(careers_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(aptitude_bp)
    app.register_blueprint(resources_bp)
    app.register_blueprint(gemini_bp)

    # Health check route
    @app.route("/health")
    def health():
        return jsonify({"status": "ok", "database": "SQLite"}), 200

    return app


# Create the Flask app instance
app = create_app()

# Initialize database
def init_db():
    from db_sqlite import engine
    from sqlalchemy import text
    
    # Read and execute schema
    with open('schema_sqlite.sql', 'r') as f:
        schema = f.read()
    
    with engine.connect() as conn:
        # Split by semicolon and execute each statement
        statements = [stmt.strip() for stmt in schema.split(';') if stmt.strip()]
        for statement in statements:
            try:
                conn.execute(text(statement))
            except Exception as e:
                print(f"Error executing: {statement[:50]}... - {e}")
        conn.commit()
    
    print("✅ Database initialized successfully!")

# Run the server
if __name__ == "__main__":
    init_db()  # Initialize database on startup
    port = int(os.getenv("PORT", 5000))
    app.run(
        host="0.0.0.0",
        port=port,
        debug=(os.getenv("FLASK_ENV") == "development")
    )