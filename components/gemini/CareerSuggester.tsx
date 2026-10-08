

import React, { useState } from 'react';
import { getCareerSuggestions } from '../../services/geminiService';
import Spinner from '../ui/Spinner';

const CareerSuggester: React.FC = () => {
  const [interests, setInterests] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSuggest = async () => {
    if (!interests.trim()) {
      setError('Please tell us about your interests first!');
      return;
    }
    setError('');
    setLoading(true);
    setSuggestions('');
    try {
      const result = await getCareerSuggestions(interests);
      setSuggestions(result);
    } catch (e) {
      setError('An error occurred while getting suggestions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-brand-dark p-6 sm:p-8 rounded-xl shadow-lg border border-pastel-grey dark:border-slate-700">
      <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-4">AI Career Suggester</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Not sure where to start? Describe your hobbies, passions, and skills, and our AI will suggest some career paths for you.
      </p>
      <div className="space-y-4">
        <textarea
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="e.g., I love solving complex puzzles, enjoy working in teams, and am passionate about sustainable technology..."
          className="w-full h-32 p-3 border border-pastel-grey dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-pastel-blue focus:outline-none transition-shadow bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400"
          disabled={loading}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleSuggest}
          disabled={loading}
          className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-pastel-olive text-brand-dark font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed dark:bg-pastel-green dark:text-brand-dark"
        >
          {loading ? (
            <>
              <Spinner size="sm" />
              <span className="ml-2">Thinking...</span>
            </>
          ) : (
            'Get Suggestions'
          )}
        </button>
      </div>
      {suggestions && (
        <div className="mt-8 pt-6 border-t border-pastel-grey dark:border-slate-700">
          <h4 className="text-xl font-semibold text-brand-dark dark:text-brand-light mb-4">Here are some ideas:</h4>
          <div
            className="prose prose-slate max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: suggestions.replace(/\n/g, '<br />') }}
          />
        </div>
      )}
    </div>
  );
};

export default CareerSuggester;