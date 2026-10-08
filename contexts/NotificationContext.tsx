
import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { NotificationType } from '../types';
import Notification from '../components/ui/Notification';

interface NotificationState {
  message: string;
  type: NotificationType;
  id: number;
}

interface NotificationContextType {
  showNotification: (message: string, type?: NotificationType) => void;
}

export const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const showNotification = useCallback((message: string, type: NotificationType = NotificationType.INFO) => {
    setNotification({ message, type, id: Date.now() });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </NotificationContext.Provider>
  );
};
