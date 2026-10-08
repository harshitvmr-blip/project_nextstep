import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  buttonContent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  position?: 'left' | 'right';
}

const Dropdown: React.FC<DropdownProps> = ({ buttonContent, children, className = '', position = 'right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const positionClasses = position === 'left' ? 'right-0' : 'left-0';

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        type="button"
        className="flex items-center text-slate-700 dark:text-slate-200 hover:text-brand-dark dark:hover:text-brand-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pastel-blue-dark rounded-md"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {buttonContent}
        <svg className={`ml-2 -mr-1 h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-brand-dark ring-1 ring-black ring-opacity-5 focus:outline-none ${positionClasses}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
