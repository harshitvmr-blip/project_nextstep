import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Resource, NotificationType } from '../types';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
import { NotificationContext } from '../contexts/NotificationContext';
import { mockResources } from '../data/mockData';
import ResourceCard from '../components/resources/ResourceCard';

const Trends: React.FC = () => {
    const [trends, setTrends] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const notificationContext = useContext(NotificationContext);

    const fetchTrends = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            // Simulate API call and filter for 'Trend Report'
            await new Promise(resolve => setTimeout(resolve, 500));
            const trendResources = mockResources.filter(r => r.type === 'Trend Report');
            setTrends(trendResources);
        } catch (err) {
            setError((err as Error).message);
            notificationContext?.showNotification('Failed to load trends. Please try again.', NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    }, [notificationContext]);

    useEffect(() => {
        fetchTrends();
    }, [fetchTrends]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-4">Industry Trends</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto mb-8">
                Stay updated with the latest industry trends, reports, and future outlooks to inform your career decisions.
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
                            onClick={fetchTrends}
                            className="px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors disabled:opacity-50 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                            disabled={loading}
                        >
                            {loading ? 'Retrying...' : 'Retry'}
                        </button>
                    </Card>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trends.length > 0 ? (
                        trends.map(trend => (
                            <ResourceCard key={trend.id} resource={trend} />
                        ))
                    ) : (
                        <p className="text-center text-slate-600 dark:text-slate-300 col-span-full">No trend reports available at this time.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Trends;