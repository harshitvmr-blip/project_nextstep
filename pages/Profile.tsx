

import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { NotificationContext } from '../contexts/NotificationContext';
import { NotificationType } from '../types';
import Spinner from '../components/ui/Spinner';

const Profile: React.FC = () => {
    const authContext = useContext(AuthContext);
    const notificationContext = useContext(NotificationContext);
    
    const [name, setName] = useState(authContext?.user?.name || '');
    const [email, setEmail] = useState(authContext?.user?.email || '');
    const [educationLevel, setEducationLevel] = useState(authContext?.user?.educationLevel || ''); // New state for education level
    const [loading, setLoading] = useState(false);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock API call to update profile
        setTimeout(() => {
            // In a real app, this would update the user context and send data to backend
            if (authContext?.user) {
                // Update local user state for demonstration
                authContext.user.name = name;
                authContext.user.email = email;
                authContext.user.educationLevel = educationLevel;
            }
            notificationContext?.showNotification('Profile updated successfully!', NotificationType.SUCCESS);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="bg-white dark:bg-brand-dark p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-6">My Profile</h2>
            <form onSubmit={handleUpdate} className="space-y-6 max-w-lg">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-pastel-grey dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-pastel-blue focus:border-pastel-blue sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-pastel-grey dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-pastel-blue focus:border-pastel-blue sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                </div>
                 <div>
                    <label htmlFor="educationLevel" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Highest Education Level</label>
                    <select
                        id="educationLevel"
                        value={educationLevel}
                        onChange={(e) => setEducationLevel(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-pastel-grey dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-pastel-blue focus:border-pastel-blue sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    >
                        <option value="">Select...</option>
                        <option value="High School">High School</option>
                        <option value="Associate Degree">Associate Degree</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>
                 <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pastel-blue hover:bg-pastel-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-blue-dark disabled:bg-slate-400 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                    >
                         {loading ? <Spinner size="sm" /> : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;