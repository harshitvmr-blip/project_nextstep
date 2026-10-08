

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { NotificationType } from '../types';
import Spinner from '../components/ui/Spinner';
import Card from '../components/ui/Card';
import { NotificationContext } from '../contexts/NotificationContext';
import { mockBookings } from '../data/mockData'; // Import mock data

// Fix: Import Booking interface after it's defined in types.ts
import { Booking } from '../types';

const statusColor = {
    Confirmed: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
    Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    Cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

const MyBookings: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const notificationContext = useContext(NotificationContext);

    const fetchBookings = useCallback(async () => {
        setLoading(true);
        setError(null);
        // const token = localStorage.getItem('token'); // Removed token usage for mock data
        try {
            // In a real app, this would fetch from '/api/bookings/my' with auth
            // For now, we use mock data
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
            setBookings(mockBookings);
        } catch (err) {
            const errorMessage = (err as Error).message;
            setError(errorMessage);
            notificationContext?.showNotification(errorMessage, NotificationType.ERROR);
        } finally {
            setLoading(false);
        }
    }, [notificationContext]);

    useEffect(() => {
        fetchBookings();
    }, [fetchBookings]);

    const handleCancelBooking = (bookingId: string) => {
        setBookings(prev => prev.filter(b => b.id !== bookingId));
        notificationContext?.showNotification('Booking cancelled successfully!', NotificationType.INFO);
    };

    return (
        <div className="bg-white dark:bg-brand-dark p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-6">My Bookings</h2>
            <div className="space-y-4">
                {loading ? (
                    <div className="flex justify-center py-10"><Spinner /></div>
                ) : error ? (
                    <div className="text-center py-10">
                        <Card className="inline-flex flex-col items-center p-8 bg-red-50 border border-red-200 dark:bg-red-900 dark:border-red-700">
                            <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p className="text-xl font-semibold text-red-700 dark:text-red-200 mb-4">{error}</p>
                            <button
                                onClick={fetchBookings}
                                className="px-6 py-2 bg-pastel-blue text-brand-dark font-semibold rounded-lg shadow-md hover:bg-pastel-blue-dark transition-colors disabled:opacity-50 dark:bg-pastel-olive dark:hover:bg-pastel-green dark:text-brand-dark"
                                disabled={loading}
                            >
                                {loading ? 'Retrying...' : 'Retry'}
                            </button>
                        </Card>
                    </div>
                ) : bookings.length > 0 ? (
                    bookings.map(booking => (
                        <div key={booking.id} className="p-4 border border-pastel-grey dark:border-slate-700 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center">
                           <div>
                                <p className="font-bold text-brand-dark dark:text-brand-light">{booking.counselorName}</p>
                                <p className="text-slate-600 dark:text-slate-300">{booking.date} at {booking.time}</p>
                           </div>
                           <div className="flex items-center gap-4 mt-2 sm:mt-0">
                             <span className={`px-2.5 py-0.5 text-sm font-medium rounded-full ${statusColor[booking.status]}`}>
                                {booking.status}
                             </span>
                             {booking.status !== 'Cancelled' && (
                                <button onClick={() => handleCancelBooking(booking.id)} className="text-sm text-red-600 hover:underline">Cancel</button>
                             )}
                           </div>
                        </div>
                    ))
                ) : (
                    <p className="text-slate-600 dark:text-slate-300">You have no upcoming bookings.</p>
                )}
            </div>
        </div>
    );
};

export default MyBookings;