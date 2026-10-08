
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { NotificationContext } from '../contexts/NotificationContext';
import { NotificationType } from '../types';
import Spinner from '../components/ui/Spinner';

const Signup: React.FC = () => { // Renamed from Register
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const notificationContext = useContext(NotificationContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await authContext?.signup(name, email, password); // Updated to signup
            notificationContext?.showNotification('Registration successful! Welcome!', NotificationType.SUCCESS);
            navigate('/dashboard');
        } catch (error) {
            notificationContext?.showNotification((error as Error).message, NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[60vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-light to-pastel-grey dark:from-slate-800 dark:to-brand-dark">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-700 p-10 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-dark dark:text-brand-light">
                        Create a new account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-slate-300">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-pastel-blue-dark hover:text-pastel-blue dark:text-pastel-olive dark:hover:text-pastel-green">
                            Sign in
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <input name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="appearance-none relative block w-full px-3 py-2 border border-pastel-grey dark:border-slate-600 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-100 rounded-md focus:outline-none focus:ring-pastel-blue focus:border-pastel-blue sm:text-sm bg-white dark:bg-slate-800" placeholder="Full Name" />
                        <input name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none relative block w-full px-3 py-2 border border-pastel-grey dark:border-slate-600 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-100 rounded-md focus:outline-none focus:ring-pastel-blue focus:border-pastel-blue sm:text-sm bg-white dark:bg-slate-800" placeholder="Email address" />
                        <input name="password" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none relative block w-full px-3 py-2 border border-pastel-grey dark:border-slate-600 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-100 rounded-md focus:outline-none focus:ring-pastel-blue focus:border-pastel-blue sm:text-sm bg-white dark:bg-slate-800" placeholder="Password" />
                    </div>

                    <div>
                        <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pastel-blue hover:bg-pastel-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-blue-dark disabled:bg-slate-400 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark">
                           {loading ? <Spinner size="sm" /> : 'Create Account'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;