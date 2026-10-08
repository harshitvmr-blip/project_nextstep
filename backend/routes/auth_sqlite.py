from flask import Blueprint, request, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash
from db_sqlite import engine
from sqlalchemy import text
import os

bp = Blueprint("auth", __name__, url_prefix="/api/auth")

@bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    name, email, password = data.get("name"), data.get("email"), data.get("password")

    if not (name and email and password):
        return jsonify({"error": "Missing fields"}), 400

    hashed_pw = generate_password_hash(password)

    try:
        with engine.connect() as conn:
            conn.execute(
                text("INSERT INTO users (name, email, password_hash) VALUES (:n, :e, :p)"),
                {"n": name, "e": email, "p": hashed_pw}
            )
            conn.commit()
        return jsonify({"message": "User registered successfully"}), 201
    except Exception as e:
        return jsonify({"error": "Email already exists"}), 400

@bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email, password = data.get("email"), data.get("password")

    with engine.connect() as conn:
        result = conn.execute(
            text("SELECT * FROM users WHERE email=:e"), {"e": email}
        ).fetchone()

    if not result or not check_password_hash(result.password_hash, password):
        return jsonify({"error": "Invalid email or password"}), 401

    # Simple session-based auth for testing
    session['user_id'] = result.id
    session['user_email'] = result.email
    
    # Return a simple token (user ID for now)
    return jsonify({
        "access_token": f"user_{result.id}", 
        "user": {"id": result.id, "name": result.name, "email": result.email}
    }), 200

@bp.route("/profile", methods=["GET"])
def profile():
    # Simple auth check using session or token
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({"error": "No token provided"}), 401
    
    token = auth_header.split(' ')[1]
    if not token.startswith('user_'):
        return jsonify({"error": "Invalid token"}), 401
    
    user_id = token.replace('user_', '')
    
    with engine.connect() as conn:
        user = conn.execute(
            text("SELECT id, name, email FROM users WHERE id=:id"), {"id": user_id}
        ).fetchone()
    
    if not user:
        return jsonify({"error": "User not found"}), 404
        
    return jsonify({"id": user.id, "name": user.name, "email": user.email})