import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Resource, NotificationType } from '../types';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
import { NotificationContext } from '../contexts/NotificationContext';
import { mockResources } from '../data/mockData';
import ResourceCard from '../components/resources/ResourceCard'; // Import ResourceCard

const Resources: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const notificationContext = useContext(NotificationContext);

    const fetchResources = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));
            setResources(mockResources);
        } catch (err) {
            setError((err as Error).message);
            notificationContext?.showNotification('Failed to load resources. Please try again.', NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    }, [notificationContext]);

    useEffect(() => {
        fetchResources();
    }, [fetchResources]);

    const uniqueTypes = ['All', ...Array.from(new Set(mockResources.map(r => r.type)))];

    const filteredResources = resources.filter(r => {
        const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              r.summary.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'All' || r.type === selectedType;
        return matchesSearch && matchesType;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-4">Resource Library</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto mb-8">
                Access a curated collection of articles, videos, and reports to enhance your career journey.
            </p>
            <div className="mb-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search resources by title or summary..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow px-4 py-3 border border-pastel-grey dark:border-slate-700 rounded-full shadow-sm focus:ring-2 focus:ring-pastel-blue focus:outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400"
                    disabled={loading}
                />
                 <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full sm:w-auto px-4 py-3 border border-pastel-grey dark:border-slate-700 rounded-full shadow-sm focus:ring-2 focus:ring-pastel-blue focus:outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    disabled={loading}
                >
                    {uniqueTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
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
                            onClick={fetchResources}
                            className="px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors disabled:opacity-50 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                            disabled={loading}
                        >
                            {loading ? 'Retrying...' : 'Retry'}
                        </button>
                    </Card>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map(resource => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Resources;