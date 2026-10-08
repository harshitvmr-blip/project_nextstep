

import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Counselor } from '../types';
import Card from '../components/ui/Card';
import { NotificationContext } from '../contexts/NotificationContext';
import { NotificationType } from '../types';
import Spinner from '../components/ui/Spinner';
import { mockCounselors } from '../data/mockData'; // Import mock data

const CounselorCard: React.FC<{ counselor: Counselor }> = ({ counselor }) => {
    const notificationContext = useContext(NotificationContext);

    const handleBook = () => {
        notificationContext?.showNotification(`Booking session with ${counselor.name}...`, NotificationType.INFO);
    };

    return (
        <Card className="flex flex-col items-center p-6 text-center">
            <img src={counselor.avatar} alt={counselor.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light">{counselor.name}</h3>
            <p className="text-pastel-blue-dark dark:text-pastel-olive font-semibold">{counselor.specialization}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{counselor.experience} years of experience</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 italic flex-grow">{counselor.bio}</p> {/* Display bio */}
            <button
                onClick={handleBook}
                className="mt-4 w-full px-4 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-sm hover:bg-pastel-blue-dark transition-colors dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
            >
                Book a Session
            </button>
        </Card>
    );
};


const Counseling: React.FC = () => {
    const [counselors, setCounselors] = useState<Counselor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const notificationContext = useContext(NotificationContext);
    
    const fetchCounselors = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            // In a real app, this would fetch from '/api/counselors'
            // For now, we use mock data
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
            setCounselors(mockCounselors);
        } catch (err) {
            setError((err as Error).message);
            notificationContext?.showNotification('Failed to load counselors. Please try again.', NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    }, [notificationContext]); 

    useEffect(() => {
        fetchCounselors();
    }, [fetchCounselors]); 

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-4">Expert Counseling</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto mb-8">
                Book a one-on-one session with our experienced career counselors to get personalized guidance. We are here to help you navigate your career path, overcome challenges, and unlock your full potential.
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
                            onClick={fetchCounselors}
                            className="px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors disabled:opacity-50 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                            disabled={loading}
                        >
                            {loading ? 'Retrying...' : 'Retry'}
                        </button>
                    </Card>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {counselors.map(counselor => (
                        <CounselorCard key={counselor.id} counselor={counselor} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Counseling;