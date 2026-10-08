

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { College, NotificationType } from '../types';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
import { NotificationContext } from '../contexts/NotificationContext';
import { mockColleges } from '../data/mockData'; // Import mock data

const CollegeCard: React.FC<{ college: College }> = ({ college }) => (
    <Link to={`/colleges/${college.id}`} className="block transition-transform hover:scale-105">
        <Card className="h-full flex flex-col">
            <img src={college.image} alt={college.name} className="w-full h-40 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light flex-1 pr-2">{college.name}</h3>
                    <div className="bg-pastel-olive text-brand-dark text-sm font-bold px-2 py-1 rounded flex-shrink-0 dark:bg-pastel-green">
                        {college.rating} ★
                    </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{college.location}</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm flex-grow">{college.description.substring(0,100)}...</p>
            </div>
        </Card>
    </Link>
);


const Colleges: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [colleges, setColleges] = useState<College[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const notificationContext = useContext(NotificationContext);

    const fetchColleges = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            // In a real app, this would fetch from '/api/colleges'
            // For now, we use mock data
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
            setColleges(mockColleges);
        } catch (err) {
            setError((err as Error).message);
            notificationContext?.showNotification('Failed to load colleges. Please try again.', NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    }, [notificationContext]);

    useEffect(() => {
        fetchColleges();
    }, [fetchColleges]);

    const filteredColleges = colleges.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-4">Find Your College</h1>
             <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto mb-8">
                Browse through our directory of colleges and universities to find your perfect fit.
            </p>
            <div className="mb-8 max-w-lg mx-auto">
                <input
                    type="text"
                    placeholder="Search colleges..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-pastel-grey dark:border-slate-700 rounded-full shadow-sm focus:ring-2 focus:ring-pastel-blue focus:outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400"
                    disabled={loading}
                />
            </div>
            
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
                            onClick={fetchColleges}
                            className="px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors disabled:opacity-50 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                            disabled={loading}
                        >
                            {loading ? 'Retrying...' : 'Retry'}
                        </button>
                    </Card>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredColleges.map(college => (
                        <CollegeCard key={college.id} college={college} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Colleges;