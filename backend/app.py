import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable CORS for frontend-backend communication

    # Import and register all blueprints here
    from routes.careers import bp as careers_bp
    from routes.auth import bp as auth_bp
    from routes.aptitude import bp as aptitude_bp
    from routes.resources import bp as resources_bp
    from routes.gemini import bp as gemini_bp
    from routes.chat import bp as chat_bp

    # Register blueprints
    app.register_blueprint(careers_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(aptitude_bp)
    app.register_blueprint(resources_bp)
    app.register_blueprint(gemini_bp)
    app.register_blueprint(chat_bp)

    # Health check route
    @app.route("/health")
    def health():
        return jsonify({"status": "ok"}), 200

    return app


# Create the Flask app instance
app = create_app()

# Run the server
if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(
        host="0.0.0.0",
        port=port,
        debug=(os.getenv("FLASK_ENV") == "development")
    )
