import google.generativeai as genai

# Configure with your API key
genai.configure(api_key='AIzaSyDds1dH5ycwoCdNiFzS3E0QaH5fR73jTGY')

print("=" * 80)
print("AVAILABLE GEMINI MODELS FOR YOUR API KEY")
print("=" * 80)
print()

# Get all models that support text generation
models = genai.list_models()

# Categorize models
flash_models = []
pro_models = []
experimental_models = []
other_models = []

for m in models:
    if 'generateContent' in m.supported_generation_methods:
        model_name = m.name.replace('models/', '')
        
        if 'flash' in model_name.lower():
            flash_models.append((model_name, m.display_name))
        elif 'pro' in model_name.lower():
            pro_models.append((model_name, m.display_name))
        elif 'exp' in model_name.lower() or 'experimental' in model_name.lower():
            experimental_models.append((model_name, m.display_name))
        else:
            other_models.append((model_name, m.display_name))

# Print categorized models
print("🚀 FLASH MODELS (Fast & Efficient - Recommended for Chat)")
print("-" * 80)
for name, display in flash_models[:10]:
    print(f"  • {name}")
    print(f"    {display}")
    print()

print("\n💎 PRO MODELS (More Capable, Slower)")
print("-" * 80)
for name, display in pro_models[:5]:
    print(f"  • {name}")
    print(f"    {display}")
    print()

print("\n🧪 EXPERIMENTAL MODELS")
print("-" * 80)
for name, display in experimental_models[:5]:
    print(f"  • {name}")
    print(f"    {display}")
    print()

print("\n📋 RECOMMENDED FOR YOUR APP:")
print("-" * 80)
print("  ✅ gemini-2.5-flash          - Latest, fastest (CURRENTLY USING)")
print("  ✅ gemini-flash-latest        - Always points to newest flash")
print("  ✅ gemini-2.5-pro             - More capable for complex queries")
print("  ✅ gemini-2.0-flash           - Stable, reliable")
print()
