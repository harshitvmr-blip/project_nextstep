

import React from 'react';

const Spinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
    const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-10 h-10',
        lg: 'w-16 h-16',
    };
    return (
        <div className={`border-4 border-pastel-grey dark:border-slate-700 border-t-pastel-blue rounded-full animate-spin ${sizeClasses[size]}`}></div>
    );
};

export default Spinner;