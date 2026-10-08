

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Scholarship, NotificationType } from '../types';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
import { NotificationContext } from '../contexts/NotificationContext';
import { mockScholarships } from '../data/mockData'; // Import mock data

const ScholarshipCard: React.FC<{ scholarship: Scholarship }> = ({ scholarship }) => (
    <Card>
        <div className="p-6">
            <span className="text-sm font-semibold text-pastel-blue-dark dark:text-pastel-olive">{scholarship.provider}</span>
            <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light mt-1">{scholarship.name}</h3>
            <p className="text-2xl font-bold text-pastel-olive dark:text-pastel-green my-3">{scholarship.amount}</p>
            <p className="text-slate-600 dark:text-slate-300"><span className="font-semibold">Eligibility:</span> {scholarship.eligibility}</p>
            <p className="text-slate-600 dark:text-slate-300 mt-2"><span className="font-semibold">Deadline:</span> {scholarship.deadline}</p> {/* New field */}
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 px-6 py-3">
             <a href={scholarship.applicationLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-pastel-blue-dark hover:underline dark:text-pastel-olive dark:hover:text-pastel-green">Apply Now &rarr;</a> {/* Updated Link */}
        </div>
    </Card>
);

const Scholarships: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [scholarships, setScholarships] = useState<Scholarship[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const notificationContext = useContext(NotificationContext);

    const fetchScholarships = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            // In a real app, this would fetch from '/api/scholarships'
            // For now, we use mock data
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
            setScholarships(mockScholarships);
        } catch (err) {
            setError((err as Error).message);
            notificationContext?.showNotification('Failed to load scholarships. Please try again.', NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    }, [notificationContext]);
    
    useEffect(() => {
        fetchScholarships();
    }, [fetchScholarships]);
    
    const filteredScholarships = scholarships.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-4">Fund Your Future</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto mb-8">
                Explore thousands of scholarships to help pay for your education.
            </p>
            <div className="mb-8 max-w-lg mx-auto">
                <input
                    type="text"
                    placeholder="Search scholarships..."
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
                            onClick={fetchScholarships}
                            className="px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors disabled:opacity-50 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                            disabled={loading}
                        >
                            {loading ? 'Retrying...' : 'Retry'}
                        </button>
                    </Card>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredScholarships.map(scholarship => (
                        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Scholarships;