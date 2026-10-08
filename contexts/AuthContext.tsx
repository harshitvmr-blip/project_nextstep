import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  signup: (name: string, email: string, pass: string) => Promise<void>; // Renamed from register
  logout: () => void;
}

const API_URL = '/api/auth';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await fetch(`${API_URL}/profile`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (res.ok) {
            const userData = await res.json();
            setUser(userData);
          } else {
            localStorage.removeItem('token');
          }
        } catch (error) {
          console.error("Session verification failed:", error);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    verifyUser();
  }, []);

  const login = async (email: string, pass: string) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass }),
    });
    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token);
        setUser(data.user);
    } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
    }
  };

  const signup = async (name: string, email: string, pass: string) => { // Renamed from register
     const response = await fetch(`${API_URL}/register`, { // Backend API might still be /register
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password: pass }),
    });
     if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token);
        setUser(data.user);
    } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
    }
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  if (loading) {
    return (
        <div className="flex items-center justify-center h-screen bg-brand-light dark:bg-brand-dark">
            <div className="w-16 h-16 border-4 border-pastel-blue border-dashed rounded-full animate-spin"></div>
        </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};