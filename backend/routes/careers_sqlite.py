from flask import Blueprint, jsonify
from db_sqlite import engine
from sqlalchemy import text

# Create Blueprint for careers routes
bp = Blueprint("careers", __name__, url_prefix="/api")

@bp.route("/careers", methods=["GET"])
def get_careers():
    try:
        with engine.connect() as conn:
            result = conn.execute(text("SELECT * FROM careers"))
            careers = []
            for row in result.fetchall():
                career = {
                    "id": str(row.id),
                    "title": row.name,  # Map name to title for frontend
                    "description": row.description or "Exciting career opportunity",
                    "avgSalary": row.avg_salary or "Competitive salary",
                    "requiredEducation": row.required_education or "Bachelor's degree",
                    "image": row.image or "/images/default-career.jpg",
                    "responsibilities": row.responsibilities or "Various responsibilities",
                    "skills": row.skills or "Professional skills required",
                    "careerPath": row.career_path or "Growth opportunities available"
                }
                careers.append(career)
        return jsonify(careers), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500