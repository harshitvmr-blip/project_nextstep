// components/chatbot/ChatWindow.tsx

import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage, MessageSender } from '../../types';
import { sendMessageToChatbot } from '../../services/chatService';
import Spinner from '../ui/Spinner';

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hi there! I'm your AI career assistant. How can I help you today?",
      sender: MessageSender.AI,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '' || loading) return;

    const userMessage: ChatMessage = {
      text: input,
      sender: MessageSender.User,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const aiResponseText = await sendMessageToChatbot(userMessage.text);
      const aiMessage: ChatMessage = {
        text: aiResponseText,
        sender: MessageSender.AI,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        text: "Sorry, I couldn't get a response. Please try again.",
        sender: MessageSender.AI,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 w-80 h-96 bg-white dark:bg-brand-dark rounded-xl shadow-xl flex flex-col border border-pastel-grey dark:border-slate-700 animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-pastel-blue dark:bg-pastel-blue-dark text-white dark:text-brand-light rounded-t-xl shadow-sm">
        <h3 className="text-lg font-bold">AI Assistant</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close chat"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-light dark:bg-slate-800">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === MessageSender.User ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] px-3 py-2 rounded-lg text-sm shadow-md
                ${msg.sender === MessageSender.User
                  ? 'bg-pastel-blue/80 text-white dark:bg-pastel-olive/80 dark:text-brand-dark'
                  : 'bg-pastel-grey/80 text-brand-dark dark:bg-slate-700/80 dark:text-slate-100'
                }`}
            >
              {msg.text}
              <div className={`text-xs mt-1 ${msg.sender === MessageSender.User ? 'text-blue-100 dark:text-brand-dark/80' : 'text-slate-500 dark:text-slate-400'} text-right`}>
                {formatTimestamp(msg.timestamp)}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[75%] px-3 py-2 rounded-lg text-sm shadow-md bg-pastel-grey/80 dark:bg-slate-700/80">
              <Spinner size="sm" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-pastel-grey dark:border-slate-700 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-pastel-grey dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-pastel-blue focus:outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400"
          disabled={loading}
          aria-label="Chat input"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-pastel-blue text-white dark:bg-pastel-olive dark:text-brand-dark rounded-lg hover:bg-pastel-blue-dark dark:hover:bg-pastel-green transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-blue-dark disabled:opacity-50"
          disabled={loading}
          aria-label="Send message"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;