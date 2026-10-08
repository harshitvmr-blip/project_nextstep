from flask import Blueprint, jsonify
try:
    from db_simple import engine
except ImportError:
    from db import engine

# Create Blueprint for careers routes
bp = Blueprint("careers", __name__, url_prefix="/api")

@bp.route("/careers", methods=["GET"])
def get_careers():
    """Get list of careers - returns mock data for now"""
    # TODO: Fetch from database when populated
    # For now, return empty array - frontend will use mock data
    return jsonify([]), 200
