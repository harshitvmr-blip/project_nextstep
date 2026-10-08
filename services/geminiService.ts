export const getCareerSuggestions = async (interests: string): Promise<string> => {
  try {
    const response = await fetch('/api/gemini/suggest-careers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ interests }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "An error occurred while fetching suggestions.");
    }

    const data = await response.json();
    return data.suggestions;
  } catch (error) {
    console.error("Error calling backend for Gemini API:", error);
    return "Sorry, I couldn't generate suggestions at this time. Please try again later.";
  }
};
