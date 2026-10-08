import React, { useState, useContext } from 'react';
import { AptitudeQuestion, AptitudeAnswer, NotificationType } from '../types';
import Spinner from '../components/ui/Spinner';
import Card from '../components/ui/Card';
import { NotificationContext } from '../contexts/NotificationContext';
import { mockAptitudeQuestions } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const AptitudeTest: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AptitudeAnswer[]>([]);
  const [loading, setLoading] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);

  const notificationContext = useContext(NotificationContext);
  const navigate = useNavigate();

  const questions: AptitudeQuestion[] = mockAptitudeQuestions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (optionIndex: number) => {
    const existingAnswerIndex = answers.findIndex(
      (a) => a.questionId === currentQuestion.id
    );

    const newAnswer: AptitudeAnswer = {
      questionId: currentQuestion.id,
      selectedOptionIndex: optionIndex,
    };

    if (existingAnswerIndex !== -1) {
      setAnswers((prev) =>
        prev.map((ans, idx) =>
          idx === existingAnswerIndex ? newAnswer : ans
        )
      );
    } else {
      setAnswers((prev) => [...prev, newAnswer]);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmitTest = async () => {
    if (answers.length < questions.length) {
      notificationContext?.showNotification(
        'Please answer all questions before submitting.',
        NotificationType.ERROR
      );
      return;
    }

    setLoading(true);
    // Simulate API call to process results and get recommendations
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setTestCompleted(true);
    notificationContext?.showNotification(
      'Aptitude test completed! Check your recommendations.',
      NotificationType.SUCCESS
    );
  };

  const getSelectedOption = (questionId: string) => {
    return answers.find((a) => a.questionId === questionId)?.selectedOptionIndex;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spinner size="lg" />
      </div>
    );
  }

  if (testCompleted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Card className="p-8">
          <svg className="mx-auto h-24 w-24 text-pastel-green mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light mb-4">Test Completed!</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Congratulations on completing your aptitude test. We are now processing your results to provide personalized career recommendations.
          </p>
          <button
            onClick={() => navigate('/dashboard/recommendations')}
            className="px-8 py-3 bg-pastel-olive text-brand-dark font-semibold rounded-lg shadow-lg hover:bg-pastel-green transition-colors dark:bg-pastel-green dark:text-brand-dark"
          >
            View My Recommendations &rarr;
          </button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-8">Aptitude Test</h1>
      <Card className="p-8">
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <div className="w-full bg-pastel-grey dark:bg-slate-700 rounded-full h-2.5">
            <div
              className="bg-pastel-blue h-2.5 rounded-full"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-6">
          {currentQuestion.question}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`w-full text-left p-4 border border-pastel-grey dark:border-slate-700 rounded-lg transition-all duration-200
                ${getSelectedOption(currentQuestion.id) === index
                  ? 'bg-pastel-blue/20 dark:bg-pastel-olive/20 text-brand-dark dark:text-brand-light font-semibold border-pastel-blue dark:border-pastel-olive'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-pastel-grey/50 dark:hover:bg-slate-700/50'
                }`}
              aria-pressed={getSelectedOption(currentQuestion.id) === index}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-3 bg-pastel-grey text-brand-dark font-semibold rounded-lg hover:bg-pastel-grey/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-700 dark:text-brand-light dark:hover:bg-slate-600"
          >
            &larr; Previous
          </button>
          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmitTest}
              disabled={loading || answers.length < questions.length}
              className="px-6 py-3 bg-pastel-blue text-white font-semibold rounded-lg hover:bg-pastel-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
            >
              Submit Test
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={getSelectedOption(currentQuestion.id) === undefined}
              className="px-6 py-3 bg-pastel-blue text-white font-semibold rounded-lg hover:bg-pastel-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
            >
              Next &rarr;
            </button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default AptitudeTest;