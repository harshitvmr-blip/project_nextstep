// components/chatbot/ChatbotToggle.tsx

import React from 'react';

interface ChatbotToggleProps {
  onToggle: () => void;
  isOpen: boolean;
}

const ChatbotToggle: React.FC<ChatbotToggleProps> = ({ onToggle, isOpen }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out
        ${isOpen ? 'rotate-180 bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800' : 'bg-pastel-blue hover:bg-pastel-blue-dark dark:bg-pastel-olive dark:hover:bg-pastel-green'}
        text-white dark:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-blue-dark`}
      aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
    >
      {isOpen ? (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )}
    </button>
  );
};

export default ChatbotToggle;