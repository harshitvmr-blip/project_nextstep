import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { Career } from '../types';
import { mockCareers } from '../data/mockData';
import Spinner from '../components/ui/Spinner';

const RecommendedCareerCard: React.FC<{ career: Career }> = ({ career }) => (
    <Link to={`/careers/${career.id}`} className="block transition-transform hover:scale-105">
        <Card className="h-full flex flex-col">
            <img src={career.image} alt={career.title} className="w-full h-40 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light">{career.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm flex-grow">{career.description.substring(0, 100)}...</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {career.tags.slice(0, 2).map(tag => ( // Show first 2 tags
                        <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-semibold bg-pastel-green/20 text-pastel-green dark:bg-pastel-olive/20 dark:text-pastel-olive">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4 pt-4 border-t border-pastel-grey dark:border-slate-700">
                    <p className="text-sm font-semibold text-pastel-olive">{career.avgSalary}</p>
                </div>
            </div>
        </Card>
    </Link>
);


const Recommendations: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasAptitudeResults, setHasAptitudeResults] = useState(false); // Mock state for aptitude test results

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      // Simulate fetching aptitude test results from localStorage or user profile
      await new Promise(resolve => setTimeout(resolve, 1000));
      const aptitudeResults = localStorage.getItem('aptitudeTestResults'); // Example
      if (aptitudeResults) {
        setHasAptitudeResults(true);
        // Mock personalized recommendations based on assumed aptitude results
        const mockRecs = mockCareers.filter(c => ['Technology & IT', 'Science & Research'].includes(c.stream)).slice(0, 3);
        setRecommendations(mockRecs);
      } else {
        setHasAptitudeResults(false);
      }
      setLoading(false);
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
        <div className="flex justify-center items-center h-96"><Spinner size="lg" /></div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-brand-dark dark:text-brand-light">My Personalized Recommendations</h1>
      <p className="text-slate-600 dark:text-slate-300">Here are some career paths tailored to your interests and aptitude test results, {authContext?.user?.name}.</p>

      {!hasAptitudeResults && (
        <Card className="p-6 text-center bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3">Aptitude Test Needed!</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">Take our aptitude test to unlock your personalized career recommendations.</p>
            <Link 
                to="/aptitude-test" 
                className="inline-block px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
            >
                Start Aptitude Test &rarr;
            </Link>
        </Card>
      )}

      {hasAptitudeResults && recommendations.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map(career => (
            <RecommendedCareerCard key={career.id} career={career} />
          ))}
        </div>
      ) : hasAptitudeResults && (
        <Card className="p-6 text-center">
            <p className="text-slate-600 dark:text-slate-300">No specific recommendations found at this time. Try updating your profile or retaking the aptitude test.</p>
            <Link 
                to="/careers" 
                className="inline-block mt-4 px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
            >
                Explore All Careers &rarr;
            </Link>
        </Card>
      )}
    </div>
  );
};

export default Recommendations;