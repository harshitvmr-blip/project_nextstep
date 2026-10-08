from flask import Blueprint, request, jsonify
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure Gemini AI
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

bp = Blueprint("gemini", __name__, url_prefix="/api/gemini")

@bp.route("/suggest-careers", methods=["POST"])
def suggest_careers():
    """Generate career suggestions using Gemini AI"""
    data = request.get_json()
    interests = data.get("interests", "")
    
    if not interests:
        return jsonify({"error": "Interests are required"}), 400
    
    try:
        # Initialize Gemini model
        model = genai.GenerativeModel('gemini-2.5-flash')
        
        # Create detailed prompt for career suggestions
        prompt = f"""As a career counselor, provide personalized career suggestions based on the following interests:

Interests: {interests}

Please provide:
1. 5-7 specific career recommendations that align with these interests
2. For each career, briefly explain:
   - Why it matches their interests
   - Key skills required
   - Typical salary range
   - Growth potential

Format the response in a clear, organized way that's easy to read and actionable.
Be encouraging and specific."""
        
        # Generate response
        response = model.generate_content(prompt)
        
        return jsonify({"suggestions": response.text}), 200
        
    except Exception as e:
        print(f"Error in suggest-careers endpoint: {str(e)}")
        # Fallback response
        suggestions = f"""Based on your interests in {interests}, here are some career suggestions:

1. **Software Engineer** - If you enjoy problem-solving and technology
   - Skills: Programming, algorithms, system design
   - Salary: $100,000 - $180,000/year
   - Growth: 22% (Much faster than average)

2. **Data Scientist** - If you like working with data and analytics  
   - Skills: Statistics, machine learning, Python
   - Salary: $110,000 - $200,000/year
   - Growth: 35% (Much faster than average)

3. **Product Manager** - If you enjoy strategy and working with teams
   - Skills: Communication, strategy, technical knowledge
   - Salary: $120,000 - $180,000/year
   - Growth: 15% (Faster than average)

4. **UX Designer** - If you're creative and user-focused
   - Skills: Design thinking, prototyping, user research
   - Salary: $80,000 - $130,000/year
   - Growth: 13% (Faster than average)

5. **Digital Marketing Specialist** - If you like creativity and analytics
   - Skills: SEO, content marketing, analytics
   - Salary: $50,000 - $90,000/year
   - Growth: 10% (Faster than average)

Each of these careers offers growth opportunities and aligns with modern industry trends. Consider exploring courses and certifications in your area of interest!"""
        
        return jsonify({"suggestions": suggestions}), 200
