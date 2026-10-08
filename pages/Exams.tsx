

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Exam, NotificationType } from '../types';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
import { NotificationContext } from '../contexts/NotificationContext';
import { mockExams } from '../data/mockData'; // Import mock data

const ExamCard: React.FC<{ exam: Exam }> = ({ exam }) => (
    <Card>
        <div className="p-6">
            <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light">{exam.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Test Dates: {exam.date}</p>
            <p className="text-slate-600 dark:text-slate-300 mt-3">{exam.description}</p>
            {exam.officialLink && (
                 <div className="mt-4 pt-4 border-t border-pastel-grey dark:border-slate-700">
                    <a 
                        href={exam.officialLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-semibold text-pastel-blue-dark hover:underline dark:text-pastel-olive dark:hover:text-pastel-green"
                    >
                        Official Website &rarr;
                    </a>
                </div>
            )}
        </div>
    </Card>
);

const Exams: React.FC = () => {
    const [exams, setExams] = useState<Exam[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const notificationContext = useContext(NotificationContext);

    const fetchExams = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            // In a real app, this would fetch from '/api/exams'
            // For now, we use mock data
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
            setExams(mockExams);
        } catch (err) {
            setError((err as Error).message);
            notificationContext?.showNotification('Failed to load exams. Please try again.', NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    }, [notificationContext]);

    useEffect(() => {
        fetchExams();
    }, [fetchExams]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-4">Entrance Exams</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto mb-8">
                Get information about important entrance exams for your desired field of study.
            </p>
            {loading ? (
                 <div className="flex justify-center py-10"><Spinner size="lg" /></div>
            ) : error ? (
                <div className="text-center py-10">
                    <Card className="inline-flex flex-col items-center p-8 bg-red-50 border border-red-200 dark:bg-red-900 dark:border-red-700">
                        <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-xl font-semibold text-red-700 dark:text-red-200 mb-4">{error}</p>
                        <button
                            onClick={fetchExams}
                            className="px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors disabled:opacity-50 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                            disabled={loading}
                        >
                            {loading ? 'Retrying...' : 'Retry'}
                        </button>
                    </Card>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exams.map(exam => (
                        <ExamCard key={exam.id} exam={exam} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Exams;