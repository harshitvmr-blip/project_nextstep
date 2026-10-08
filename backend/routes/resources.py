from flask import Blueprint, jsonify, request
try:
    from db_simple import engine
except ImportError:
    from db import engine

bp = Blueprint("resources", __name__, url_prefix="/api")

@bp.route("/colleges", methods=["GET"])
def get_colleges():
    """Get list of colleges - placeholder data"""
    colleges = [
        {
            "id": "1",
            "name": "Indian Institute of Technology Delhi",
            "location": "New Delhi, India",
            "rating": 4.8,
            "courses": ["Computer Science", "Mechanical Engineering", "Electrical Engineering"],
            "description": "Premier engineering institute in India",
            "website": "https://home.iitd.ac.in/",
            "image": "/images/iit-delhi.jpg"
        },
        {
            "id": "2", 
            "name": "Indian Institute of Management Ahmedabad",
            "location": "Ahmedabad, Gujarat",
            "rating": 4.9,
            "courses": ["MBA", "Executive MBA", "Fellow Programme"],
            "description": "Top business school in India",
            "website": "https://www.iima.ac.in/",
            "image": "/images/iim-ahmedabad.jpg"
        }
    ]
    return jsonify(colleges), 200

@bp.route("/scholarships", methods=["GET"])
def get_scholarships():
    """Get list of scholarships - placeholder data"""
    scholarships = [
        {
            "id": "1",
            "name": "Merit Scholarship",
            "provider": "Government of India",
            "amount": "₹50,000 per year",
            "eligibility": "Students with 85%+ marks"
        },
        {
            "id": "2",
            "name": "Need-based Scholarship",
            "provider": "Private Foundation",
            "amount": "₹25,000 per year", 
            "eligibility": "Family income < ₹3 lakhs"
        }
    ]
    return jsonify(scholarships), 200

@bp.route("/exams", methods=["GET"])
def get_exams():
    """Get list of upcoming exams - placeholder data"""
    exams = [
        {
            "id": "1",
            "name": "JEE Main",
            "date": "2024-04-15",
            "description": "Joint Entrance Examination for engineering colleges"
        },
        {
            "id": "2",
            "name": "NEET",
            "date": "2024-05-05", 
            "description": "National Eligibility cum Entrance Test for medical colleges"
        }
    ]
    return jsonify(exams), 200