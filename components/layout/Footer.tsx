

import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-brand-dark border-t border-pastel-grey dark:border-slate-700 mt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Explore</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/careers" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Careers</Link></li>
              <li><Link to="/colleges" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Colleges</Link></li>
              <li><Link to="/scholarships" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Scholarships</Link></li>
              <li><Link to="/exams" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Exams</Link></li>
              <li><Link to="/aptitude-test" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Aptitude Test</Link></li> {/* New Link */}
              <li><Link to="/resources" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Resources</Link></li> {/* New Link */}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Help Center</Link></li>
              <li><Link to="/counseling" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Book Counseling</Link></li>
              <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Contact Us</Link></li> {/* Updated Link */}
              <li><Link to="/faq" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">FAQ</Link></li> {/* New Link */}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">About Us</Link></li> {/* Updated Link */}
              <li><Link to="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Blog</Link></li>
              <li><Link to="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-brand-light">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Next Step Guide</h3>
            <p className="mt-4 text-base text-gray-500 dark:text-slate-400">Your guide to a successful future.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-slate-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Next Step Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;