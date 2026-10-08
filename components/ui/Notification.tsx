

import React, { useEffect } from 'react';
import { NotificationType } from '../../types';

interface NotificationProps {
  message: string;
  type: NotificationType;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  const baseClasses = 'fixed top-5 right-5 w-full max-w-sm p-4 rounded-lg shadow-lg flex items-center z-50 animate-fade-in-down';
  
  const typeClasses = {
    [NotificationType.SUCCESS]: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
    [NotificationType.ERROR]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    [NotificationType.INFO]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  };

  const Icon = () => {
    switch (type) {
      case NotificationType.SUCCESS:
        return (
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        );
      case NotificationType.ERROR:
        return (
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        );
      default:
        return (
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        );
    }
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <Icon />
      <span className="flex-1">{message}</span>
      <button onClick={onClose} className="ml-4 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
  );
};

export default Notification;