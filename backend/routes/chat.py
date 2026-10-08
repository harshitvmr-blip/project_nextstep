from flask import Blueprint, request, jsonify
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure Gemini AI
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

bp = Blueprint("chat", __name__, url_prefix="/api")

# System prompt for the career guidance chatbot
SYSTEM_PROMPT = """You are a helpful career guidance counselor assistant for "Next Step Guide", 
a platform that helps students and professionals with career planning. You provide advice on:
- Career paths and opportunities
- Educational requirements
- College and scholarship information
- Exam preparation
- Skill development
- Career transitions

Be friendly, supportive, and provide actionable advice. Keep responses concise but informative.
If asked about specific careers, colleges, or scholarships, provide relevant information."""

@bp.route("/chat", methods=["POST"])
def chat():
    """Handle chatbot messages using Gemini AI"""
    data = request.get_json()
    message = data.get("message", "")
    
    if not message:
        return jsonify({"error": "Message is required"}), 400
    
    try:
        # Initialize Gemini model
        model = genai.GenerativeModel('gemini-2.5-flash')
        
        # Create conversation with system context
        full_prompt = f"{SYSTEM_PROMPT}\n\nUser: {message}\n\nAssistant:"
        
        # Generate response
        response = model.generate_content(full_prompt)
        
        return jsonify({"response": response.text}), 200
        
    except Exception as e:
        print(f"Error in chat endpoint: {str(e)}")
        # Fallback response if AI fails
        return jsonify({
            "response": "I'm here to help with career guidance! You can ask me about careers, colleges, scholarships, or exams. How can I assist you today?"
        }), 200
