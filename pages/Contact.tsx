import React, { useState, useContext } from 'react';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';
import { NotificationContext } from '../contexts/NotificationContext';
import { NotificationType } from '../types';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const notificationContext = useContext(NotificationContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Simulate API call to send message
            await new Promise(resolve => setTimeout(resolve, 1500));
            notificationContext?.showNotification('Your message has been sent!', NotificationType.SUCCESS);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            notificationContext?.showNotification((error as Error).message || 'Failed to send message.', NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-4">Contact Us</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto mb-8">
                Have questions or need support? Send us a message, and we'll get back to you as soon as possible.
            </p>

            <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-pastel-grey dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-pastel-blue focus:border-pastel-blue sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-pastel-grey dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-pastel-blue focus:border-pastel-blue sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-pastel-grey dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-pastel-blue focus:border-pastel-blue sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pastel-blue hover:bg-pastel-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-blue-dark disabled:bg-slate-400 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                        >
                            {loading ? <Spinner size="sm" /> : 'Send Message'}
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Contact;