

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-brand-dark rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md dark:border dark:border-slate-700 ${className}`}>
      {children}
    </div>
  );
};

export default Card;