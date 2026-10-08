import requests
import random
import string
import sys

BASE_URL = "http://localhost:5000"

def get_random_string(length):
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=length))

def run_tests():
    print("==================================================")
    print("🚀 Starting Next Step Guide API Flow Tests...")
    print("==================================================")
    
    session = requests.Session()
    
    # Generate unique user credentials
    username = f"testuser_{get_random_string(5)}"
    email = f"{username}@example.com"
    password = "Password123!"
    
    # 1. Test Registration
    print("\n1. Testing Registration Endpoint...")
    reg_url = f"{BASE_URL}/api/auth/register"
    reg_data = {
        "name": username,
        "email": email,
        "password": password
    }
    
    response = session.post(reg_url, json=reg_data)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")
    assert response.status_code == 201, f"Expected 201, got {response.status_code}"
    print("✅ Registration passed!")
    
    # 2. Test Login
    print("\n2. Testing Login Endpoint...")
    login_url = f"{BASE_URL}/api/auth/login"
    login_data = {
        "email": email,
        "password": password
    }
    
    response = session.post(login_url, json=login_data)
    print(f"Status Code: {response.status_code}")
    res_json = response.json()
    print(f"Response: {res_json}")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    
    token = res_json.get("access_token")
    assert token is not None, "Login token is missing in response"
    print(f"✅ Login passed! Token: {token}")
    
    # 3. Test Profile (Auth Header)
    print("\n3. Testing Auth-Guarded Profile Endpoint...")
    profile_url = f"{BASE_URL}/api/auth/profile"
    headers = {
        "Authorization": f"Bearer {token}"
    }
    
    response = session.get(profile_url, headers=headers)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.json()}")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    assert response.json().get("email") == email, "Profile email mismatch"
    print("✅ Profile retrieval passed!")
    
    # 4. Test Resource Endpoints
    resources = ["colleges", "scholarships", "exams"]
    for res in resources:
        print(f"\n4.{resources.index(res)+1} Testing /api/{res} endpoint...")
        res_url = f"{BASE_URL}/api/{res}"
        response = session.get(res_url)
        print(f"Status Code: {response.status_code}")
        items = response.json()
        print(f"Response Items: {len(items)} items returned")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        print(f"✅ /api/{res} passed!")
        
    # 5. Test Chat Assistant Endpoint (Gemini Integration)
    print("\n5. Testing Chat Assistant (Gemini) Endpoint...")
    chat_url = f"{BASE_URL}/api/chat"
    chat_data = {
        "message": "Hello, I am interested in building computer software. What careers fit me?"
    }
    
    response = session.post(chat_url, json=chat_data)
    print(f"Status Code: {response.status_code}")
    chat_res = response.json()
    print(f"Response Text: {chat_res.get('response', '')[:200]}...")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    assert "response" in chat_res, "Response field missing in chatbot reply"
    print("✅ Chat Assistant endpoint passed!")
    
    # 6. Test Gemini Career Suggestions Endpoint
    print("\n6. Testing Gemini Career Suggestion Endpoint...")
    suggest_url = f"{BASE_URL}/api/gemini/suggest-careers"
    suggest_data = {
        "interests": "software programming, writing code, building mobile apps"
    }
    
    response = session.post(suggest_url, json=suggest_data)
    print(f"Status Code: {response.status_code}")
    suggest_res = response.json()
    print(f"Suggestions Text: {suggest_res.get('suggestions', '')[:200]}...")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    assert "suggestions" in suggest_res, "Suggestions field missing in response"
    print("✅ Gemini Career Suggestion endpoint passed!")
    
    print("\n==================================================")
    print("🎉 All API Flow Tests Completed Successfully!")
    print("==================================================")

if __name__ == "__main__":
    try:
        run_tests()
    except AssertionError as ae:
        print(f"\n❌ Test Failure: {ae}")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Error during test: {e}")
        sys.exit(1)
