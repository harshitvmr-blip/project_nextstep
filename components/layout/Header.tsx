
import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import Dropdown from '../ui/Dropdown';

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
        ? 'bg-pastel-blue text-brand-dark dark:bg-pastel-blue-dark dark:text-brand-light'
        : 'text-slate-700 hover:bg-pastel-grey hover:text-brand-dark dark:text-slate-300 dark:hover:bg-brand-dark dark:hover:text-brand-light'
      }`
    }
  >
    {children}
  </NavLink>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-brand-dark shadow-sm dark:shadow-slate-700 transition-colors duration-300 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-12 w-auto mr-3" src="/images/resources/generated-image (8).png" alt="Next Step Guide Logo" />
              <span className="text-xl font-bold text-brand-dark dark:text-brand-light hidden sm:block">Next Step Guide</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavItem to="/careers">Careers</NavItem>
            <NavItem to="/colleges">Colleges</NavItem>
            <NavItem to="/scholarships">Scholarships</NavItem>
            <NavItem to="/counseling">Counseling</NavItem>
            <NavItem to="/resources">Resources</NavItem>
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-pastel-grey dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pastel-blue-dark"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M4 12H3m15.325 5.5l-.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {authContext?.user ? (
              <Dropdown buttonContent={<span className="font-medium">{authContext.user.name}</span>} position="left">
                <Link to="/dashboard" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-pastel-grey dark:hover:bg-slate-700" role="menuitem">
                  Dashboard
                </Link>
                <Link to="/dashboard/profile" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-pastel-grey dark:hover:bg-slate-700" role="menuitem">
                  Profile
                </Link>
                <button
                  onClick={authContext.logout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900"
                  role="menuitem"
                >
                  Logout
                </button>
              </Dropdown>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-dark dark:hover:text-brand-light">
                  Login
                </Link>
                <Link to="/signup" className="px-4 py-2 text-sm font-medium bg-pastel-blue text-brand-dark rounded-md hover:bg-pastel-blue-dark transition-colors dark:bg-pastel-olive dark:text-brand-dark">
                  Signup
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-brand-dark hover:bg-pastel-grey dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pastel-blue-dark"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem to="/careers">Careers</NavItem>
            <NavItem to="/colleges">Colleges</NavItem>
            <NavItem to="/scholarships">Scholarships</NavItem>
            <NavItem to="/counseling">Counseling</NavItem>
            <NavItem to="/resources">Resources</NavItem>
            {authContext?.user ? (
              <>
                <NavItem to="/dashboard">Dashboard</NavItem>
                <NavItem to="/dashboard/profile">Profile</NavItem>
                <button
                  onClick={authContext.logout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavItem to="/login">Login</NavItem>
                <NavItem to="/signup">Signup</NavItem>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
