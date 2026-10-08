

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { College, NotificationType } from '../types';
import Spinner from '../components/ui/Spinner';
import { NotificationContext } from '../contexts/NotificationContext';
import { mockColleges } from '../data/mockData'; // Import mock data

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-4 pb-2 border-b-2 border-pastel-blue dark:border-pastel-olive">{title}</h2>
        {children}
    </div>
);

const CollegeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [college, setCollege] = useState<College | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const notificationContext = useContext(NotificationContext);

    const fetchCollege = useCallback(async () => {
        try {
            // In a real app, this would fetch from `/api/colleges/${id}`
            // For now, find from mock data
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
            const foundCollege = mockColleges.find(c => c.id === id);
            if (!foundCollege) {
                const errorMessage = 'College not found';
                setError(errorMessage);
                throw new Error(errorMessage);
            }
            setCollege(foundCollege);
        } catch (err) {
            setError((err as Error).message);
            if ((err as Error).message !== 'College not found') {
                notificationContext?.showNotification('Failed to load college details due to a network error.', NotificationType.ERROR);
            }
        } finally {
            setLoading(false);
        }
    }, [id, notificationContext]);

    useEffect(() => {
        fetchCollege();
    }, [fetchCollege]);

    if (loading) {
        return <div className="flex justify-center items-center h-96"><Spinner size="lg" /></div>;
    }

    if (error || !college) {
        return (
             <div className="text-center py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-brand-dark dark:text-brand-light">College Not Found</h2>
                <p className="text-slate-600 dark:text-slate-300 mt-2">Sorry, we couldn't find the college you're looking for.</p>
                <Link to="/colleges" className="mt-6 inline-block px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark">
                    &larr; Back to All Colleges
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link to="/colleges" className="text-pastel-blue-dark hover:underline mb-8 inline-block dark:text-pastel-olive dark:hover:text-pastel-green">
                    &larr; Back to All Colleges
                </Link>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                        <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light">{college.name}</h1>
                        <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">{college.location}</p>
                        <div className="mt-4 flex items-center gap-2">
                            <div className="bg-pastel-olive text-brand-dark text-lg font-bold px-3 py-1 rounded dark:bg-pastel-green">
                                {college.rating} ★
                            </div>
                            <span className="text-slate-600 dark:text-slate-300">Overall Rating</span>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <img src={college.image} alt={college.name} className="w-full rounded-lg shadow-lg object-cover aspect-video" />
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <DetailSection title="About the College">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{college.description}</p>
                        </DetailSection>

                        <DetailSection title="Top Courses Offered">
                            <div className="flex flex-wrap gap-2">
                                {college.courses.map(course => (
                                    <span key={course} className="bg-pastel-grey text-slate-700 text-sm font-medium px-3 py-1 rounded-full dark:bg-slate-700 dark:text-slate-100">{course}</span>
                                ))}
                            </div>
                        </DetailSection>
                    </div>

                    <div className="md:col-span-1">
                        <Card className="p-6 sticky top-24">
                            <h3 className="text-lg font-bold text-brand-dark dark:text-brand-light mb-4">Visit their Website</h3>
                            <a 
                                href={college.website} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full block text-center px-6 py-3 bg-pastel-blue text-brand-dark font-semibold rounded-lg hover:bg-pastel-blue-dark transition-colors dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                            >
                                Official Website &rarr;
                            </a>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetail;