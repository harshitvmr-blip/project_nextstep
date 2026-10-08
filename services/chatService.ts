// services/chatService.ts

export const sendMessageToChatbot = async (message: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "An error occurred while communicating with the chatbot.");
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error sending message to chatbot backend:", error);
    return "Sorry, I'm having trouble connecting right now. Please try again later.";
  }
};