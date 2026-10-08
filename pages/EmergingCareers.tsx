import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Career, NotificationType } from '../types';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
import { NotificationContext } from '../contexts/NotificationContext';
import { mockCareers } from '../data/mockData'; 

const CareerCard: React.FC<{ career: Career }> = ({ career }) => (
    <Link to={`/careers/${career.id}`} className="block transition-transform hover:scale-105">
        <Card className="h-full flex flex-col">
            <img src={career.image} alt={career.title} className="w-full h-40 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light">{career.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm flex-grow">{career.description.substring(0, 100)}...</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {career.tags.map(tag => (
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


const EmergingCareers: React.FC = () => {
    const [careers, setCareers] = useState<Career[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const notificationContext = useContext(NotificationContext);

    const fetchEmergingCareers = useCallback(async () => {
        setLoading(true);
        setError(null); 
        try {
            await new Promise(resolve => setTimeout(resolve, 500)); 
            const emerging = mockCareers.filter(c => c.tags.includes('Emerging'));
            setCareers(emerging);
        } catch (err) {
            setError((err as Error).message);
            notificationContext?.showNotification('Failed to load emerging careers. Please try again.', NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    }, [notificationContext]);

    useEffect(() => {
        fetchEmergingCareers();
    }, [fetchEmergingCareers]);


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-4">Emerging Career Paths</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto mb-8">
                Explore professions that are new and rapidly growing, offering exciting opportunities for the future.
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
                            onClick={fetchEmergingCareers}
                            className="px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors disabled:opacity-50 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                            disabled={loading}
                        >
                            {loading ? 'Retrying...' : 'Retry'}
                        </button>
                    </Card>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {careers.length > 0 ? (
                        careers.map(career => (
                            <CareerCard key={career.id} career={career} />
                        ))
                    ) : (
                        <p className="text-center text-slate-600 dark:text-slate-300 col-span-full">No emerging careers found at this time.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default EmergingCareers;