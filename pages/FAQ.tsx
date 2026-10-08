
import React, { useState } from 'react';
import Card from '../components/ui/Card';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="p-6">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s/g, '-')}`}
      >
        <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light flex-grow">
          {question}
        </h3>
        <span className="ml-4 text-slate-500 dark:text-slate-400">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <p
          id={`faq-answer-${question.replace(/\s/g, '-')}`}
          className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed"
        >
          {answer}
        </p>
      )}
    </Card>
  );
};

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: 'What is Next Step Guide?',
      answer: 'Next Step Guide is a comprehensive career guidance platform designed to help students and professionals explore career paths, find suitable colleges and courses, discover scholarship opportunities, and receive personalized AI-powered career suggestions and expert counseling.',
    },
    {
      question: 'How does the AI Career Suggester work?',
      answer: 'Our AI Career Suggester uses the Gemini API. You describe your interests, hobbies, skills, and passions, and the AI processes this information to suggest potential career paths that align with your profile. The more detail you provide, the more tailored the suggestions will be.',
    },
    {
      question: 'Is counseling free?',
      answer: 'While some introductory resources and AI suggestions are free, one-on-one sessions with our expert career counselors are a premium service. Please check the "Counseling" page for pricing and booking details.',
    },
    {
      question: 'How do I update my profile information?',
      answer: 'You can update your personal details, including your name, email, and education level, by navigating to your Dashboard and then selecting "My Profile".',
    },
    {
      question: 'What kind of resources are available?',
      answer: 'Our resource library includes a wide range of content such as articles on career development, videos for interview preparation, webinars on emerging industries, and trend reports to keep you informed about the future of work.',
    },
    {
      question: 'Can I retake the Aptitude Test?',
      answer: 'Yes, you can retake the aptitude test at any time. Your latest results will be used to generate updated career recommendations.',
    },
    {
      question: 'How often are the career and college databases updated?',
      answer: 'We strive to keep our databases as current as possible, with regular updates to career information, college details, and scholarship opportunities. Industry trends and emerging careers are reviewed frequently.',
    },
    {
      question: 'What if I forget my password?',
      answer: 'If you forget your password, you can use the "Forgot Password" link on the login page. We will send a reset link to your registered email address.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto mb-8">
        Find answers to common questions about Next Step Guide and how to make the most of our platform.
      </p>

      <div className="space-y-6">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;