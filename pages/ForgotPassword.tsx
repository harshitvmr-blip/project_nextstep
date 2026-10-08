import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NotificationContext } from '../contexts/NotificationContext';
import { NotificationType } from '../types';
import Spinner from '../components/ui/Spinner';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    
    const notificationContext = useContext(NotificationContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Mock API call for password reset
            await new Promise(resolve => setTimeout(resolve, 1500)); 
            notificationContext?.showNotification('If your email is registered, you will receive a password reset link.', NotificationType.INFO);
            setEmail(''); // Clear email after submission
        } catch (error) {
            notificationContext?.showNotification((error as Error).message || 'Failed to send reset link.', NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="min-h-[60vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-light to-pastel-grey dark:from-slate-800 dark:to-brand-dark">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-700 p-10 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-dark dark:text-brand-light">
                        Forgot your password?
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-slate-300">
                        Enter your email address below and we'll send you a link to reset your password.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-pastel-grey dark:border-slate-600 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-100 rounded-md focus:outline-none focus:ring-pastel-blue focus:border-pastel-blue focus:z-10 sm:text-sm bg-white dark:bg-slate-800"
                                placeholder="Email address"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pastel-blue hover:bg-pastel-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-blue-dark disabled:bg-slate-400 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                        >
                            {loading ? <Spinner size="sm" /> : 'Send Reset Link'}
                        </button>
                    </div>
                </form>
                <div className="text-center text-sm text-gray-600 dark:text-slate-300">
                    <Link to="/login" className="font-medium text-pastel-blue-dark hover:text-pastel-blue dark:text-pastel-olive dark:hover:text-pastel-green">
                        Remember your password? Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;