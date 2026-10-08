

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { Career, NotificationType } from '../types';
import Spinner from '../components/ui/Spinner';
import { NotificationContext } from '../contexts/NotificationContext';
import { mockCareers } from '../data/mockData'; // Import mock data

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-4 pb-2 border-b-2 border-pastel-blue dark:border-pastel-olive">{title}</h2>
        {children}
    </div>
);

const CareerDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [career, setCareer] = useState<Career | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const notificationContext = useContext(NotificationContext);

    const fetchCareer = useCallback(async () => {
        setLoading(true);
        setError(null); 
        try {
            // In a real app, this would fetch from `/api/careers/${id}`
            // For now, find from mock data
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
            const foundCareer = mockCareers.find(c => c.id === id);
            if (!foundCareer) {
                const errorMessage = 'Career not found';
                setError(errorMessage);
                throw new Error(errorMessage);
            }
            setCareer(foundCareer);
        } catch (err) {
             setError((err as Error).message);
             if ((err as Error).message !== 'Career not found') {
                notificationContext?.showNotification('Failed to load career details due to a network error.', NotificationType.ERROR);
             }
        } finally {
            setLoading(false);
        }
    }, [id, notificationContext]);

    useEffect(() => {
        fetchCareer();
    }, [fetchCareer]);

    if (loading) {
        return <div className="flex justify-center items-center h-96"><Spinner size="lg" /></div>;
    }

    if (error || !career) {
        return (
            <div className="text-center py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-brand-dark dark:text-brand-light">Career Not Found</h2>
                <p className="text-slate-600 dark:text-slate-300 mt-2">Sorry, we couldn't find the career you're looking for.</p>
                <Link to="/careers" className="mt-6 inline-block px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark">
                    &larr; Back to All Careers
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link to="/careers" className="text-pastel-blue-dark hover:underline mb-8 inline-block dark:text-pastel-olive dark:hover:text-pastel-green">
                    &larr; Back to All Careers
                </Link>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                        <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light">{career.title}</h1>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{career.longDescription}</p> {/* Using longDescription */}
                    </div>
                    <div className="md:col-span-1">
                        <img src={career.image} alt={career.title} className="w-full rounded-lg shadow-lg object-cover aspect-video" />
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <DetailSection title="Key Responsibilities">
                            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                                {career.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </DetailSection>

                        <DetailSection title="Essential Skills & Proficiency">
                            <div className="flex flex-wrap gap-4">
                                {career.skillProficiency.map((skill, index) => (
                                    <div key={index} className="flex flex-col items-center bg-pastel-grey dark:bg-slate-700 p-3 rounded-lg">
                                        <span className="text-slate-700 dark:text-slate-100 text-sm font-medium">{skill.skill}</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">({skill.level})</span>
                                    </div>
                                ))}
                            </div>
                        </DetailSection>

                        <DetailSection title="Career Path">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{career.careerPath}</p>
                        </DetailSection>

                        <DetailSection title="Future Scope & Automation Impact">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed"><strong className="font-semibold text-brand-dark dark:text-brand-light">Future Scope:</strong> {career.futureScope}</p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-2"><strong className="font-semibold text-brand-dark dark:text-brand-light">Automation Impact:</strong> {career.automationImpact}</p>
                        </DetailSection>
                    </div>

                    <div className="md:col-span-1">
                        <Card className="p-6 sticky top-24">
                            <h3 className="text-lg font-bold text-brand-dark dark:text-brand-light mb-4 border-b border-pastel-grey dark:border-slate-700 pb-3">Career Snapshot</h3>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300">
                                <div>
                                    <strong className="font-semibold block text-brand-dark dark:text-brand-light">Average Salary:</strong> 
                                    <span>{career.avgSalary}</span>
                                </div>
                                <div>
                                    <strong className="font-semibold block text-brand-dark dark:text-brand-light">Required Education:</strong>
                                    <span>{career.requiredEducation}</span>
                                </div>
                                <div>
                                    <strong className="font-semibold block text-brand-dark dark:text-brand-light">Growth Rate:</strong>
                                    <span>{career.growthRate}</span>
                                </div>
                                <div>
                                    <strong className="font-semibold block text-brand-dark dark:text-brand-light">Work-Life Balance:</strong>
                                    <span>{career.workLifeBalance}</span>
                                </div>
                                <div>
                                    <strong className="font-semibold block text-brand-dark dark:text-brand-light">Job Openings (Est. Annually):</strong>
                                    <span>{career.jobOpenings.toLocaleString()}</span>
                                </div>
                            </div>
                            {career.topEmployers && career.topEmployers.length > 0 && (
                                <div className="mt-6 pt-4 border-t border-pastel-grey dark:border-slate-700">
                                    <strong className="font-semibold block text-brand-dark dark:text-brand-light mb-3">Top Employers:</strong>
                                    <div className="flex flex-wrap gap-3">
                                        {career.topEmployers.map((employer, index) => (
                                            <img key={index} src={employer.logo} alt={employer.name} title={employer.name} className="h-8 object-contain" />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerDetail;