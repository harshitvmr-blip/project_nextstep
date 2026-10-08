

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SidebarLink: React.FC<{ to: string; children: React.ReactNode; end?: boolean }> = ({ to, children, end = false }) => (
    <NavLink
        to={to}
        end={end}
        className={({ isActive }) => 
        `flex items-center px-4 py-2 text-slate-700 dark:text-slate-300 rounded-lg transition-colors duration-200 ${
            isActive ? 'bg-pastel-blue text-brand-dark font-semibold dark:bg-pastel-blue-dark dark:text-brand-light' : 'hover:bg-pastel-grey dark:hover:bg-slate-700'
        }`
      }
    >
        {children}
    </NavLink>
);


const DashboardLayout: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="md:w-1/4 lg:w-1/5 flex-shrink-0">
                    <div className="bg-white dark:bg-brand-dark p-4 rounded-lg shadow-sm">
                       <h2 className="text-lg font-bold text-brand-dark dark:text-brand-light mb-4">Dashboard</h2>
                       <nav className="space-y-2">
                           <SidebarLink to="/dashboard" end={true}>Overview</SidebarLink>
                           <SidebarLink to="/dashboard/profile">My Profile</SidebarLink>
                           <SidebarLink to="/dashboard/bookings">My Bookings</SidebarLink>
                           <SidebarLink to="/aptitude-test">Aptitude Test</SidebarLink> {/* New link */}
                           <SidebarLink to="/dashboard/recommendations">My Recommendations</SidebarLink> {/* New link */}
                       </nav>
                    </div>
                </aside>
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;