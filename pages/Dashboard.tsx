

import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const authContext = useContext(AuthContext);

    // Mock data for dashboard summary
    const userStats = {
        careersExplored: 12,
        aptitudeTestStatus: 'Completed',
        resourcesSaved: 5,
        upcomingBookings: 1,
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-brand-dark dark:text-brand-light">
                Welcome back, {authContext?.user?.name}!
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                    <h3 className="font-bold text-lg text-brand-dark dark:text-brand-light">My Profile</h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">Update your personal information and career interests.</p>
                    <Link to="/dashboard/profile" className="text-pastel-blue-dark font-semibold mt-4 inline-block dark:text-pastel-olive">Go to Profile &rarr;</Link>
                </Card>
                <Card className="p-6">
                    <h3 className="font-bold text-lg text-brand-dark dark:text-brand-light">My Bookings</h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">You have <span className="font-bold text-pastel-olive">{userStats.upcomingBookings}</span> upcoming counseling session.</p>
                    <Link to="/dashboard/bookings" className="text-pastel-blue-dark font-semibold mt-4 inline-block dark:text-pastel-olive">View Bookings &rarr;</Link>
                </Card>
                <Card className="p-6 bg-pastel-olive dark:bg-pastel-green">
                    <h3 className="font-bold text-lg text-brand-dark">AI Career Recommendations</h3>
                    <p className="text-slate-700 dark:text-brand-dark mt-2">Get personalized career suggestions based on your aptitude test results.</p>
                    <Link to="/dashboard/recommendations" className="text-brand-dark font-semibold mt-4 inline-block">View Recommendations &rarr;</Link>
                </Card>

                {/* New Summary Cards */}
                <Card className="p-6">
                    <h3 className="font-bold text-lg text-brand-dark dark:text-brand-light">Career Journey</h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">You have explored <span className="font-bold text-pastel-blue-dark">{userStats.careersExplored}</span> career paths.</p>
                    <Link to="/careers" className="text-pastel-blue-dark font-semibold mt-4 inline-block dark:text-pastel-olive">Continue Exploring &rarr;</Link>
                </Card>
                <Card className="p-6">
                    <h3 className="font-bold text-lg text-brand-dark dark:text-brand-light">Aptitude Test Status</h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">Test Status: <span className="font-bold text-pastel-olive">{userStats.aptitudeTestStatus}</span></p>
                    <Link to="/aptitude-test" className="text-pastel-blue-dark font-semibold mt-4 inline-block dark:text-pastel-olive">Retake Test &rarr;</Link>
                </Card>
                <Card className="p-6">
                    <h3 className="font-bold text-lg text-brand-dark dark:text-brand-light">Saved Resources</h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">You have <span className="font-bold text-pastel-blue-dark">{userStats.resourcesSaved}</span> resources saved.</p>
                    <Link to="/resources" className="text-pastel-blue-dark font-semibold mt-4 inline-block dark:text-pastel-olive">View Resources &rarr;</Link>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;