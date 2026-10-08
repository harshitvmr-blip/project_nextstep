from flask import Blueprint, jsonify, request

bp = Blueprint("aptitude", __name__, url_prefix="/api")

@bp.route("/aptitude-test", methods=["POST"])
def aptitude_test():
    """Basic aptitude test endpoint - placeholder implementation"""
    data = request.get_json()
    answers = data.get("answers", [])
    
    # Simple scoring logic (placeholder)
    score = len([a for a in answers if a.get("correct", False)])
    total = len(answers)
    percentage = (score / total * 100) if total > 0 else 0
    
    return jsonify({
        "score": score,
        "total": total,
        "percentage": percentage,
        "message": f"You scored {score} out of {total} ({percentage:.1f}%)"
    }), 200

@bp.route("/career-recommendations", methods=["POST"])
def career_recommendations():
    """Get career recommendations based on aptitude results"""
    data = request.get_json()
    interests = data.get("interests", [])
    skills = data.get("skills", [])
    
    # Placeholder recommendations
    recommendations = [
        {"career": "Software Engineer", "match": 85},
        {"career": "Data Scientist", "match": 78},
        {"career": "Product Manager", "match": 72}
    ]
    
    return jsonify({"recommendations": recommendations}), 200