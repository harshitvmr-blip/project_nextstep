

import React, { useContext, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ThemeProvider } from './contexts/ThemeContext'; // Import ThemeProvider

import { Header } from './components/layout/Header';
import Footer from './components/layout/Footer';
import DashboardLayout from './components/layout/DashboardLayout';
import ScrollToTop from './components/utils/ScrollToTop'; // Import ScrollToTop

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'; // Renamed Register to Signup
import ForgotPassword from './pages/ForgotPassword'; // New page
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import Colleges from './pages/Colleges';
import CollegeDetail from './pages/CollegeDetail';
import Scholarships from './pages/Scholarships';
import Exams from './pages/Exams';
import Counseling from './pages/Counseling';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import MyBookings from './pages/MyBookings';
import AptitudeTest from './pages/AptitudeTest'; // New page
import Recommendations from './pages/Recommendations'; // New page
import Resources from './pages/Resources'; // New page
import EmergingCareers from './pages/EmergingCareers'; // New page
import Trends from './pages/Trends'; // New page
import Contact from './pages/Contact'; // New page
import About from './pages/About'; // New page
import FAQ from './pages/FAQ'; // New page

import ChatbotToggle from './components/chatbot/ChatbotToggle'; // Import ChatbotToggle
import ChatWindow from './components/chatbot/ChatWindow'; // Import ChatWindow


// A wrapper for protected routes
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const authContext = useContext(AuthContext);
  if (!authContext?.user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};


function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State for chatbot visibility

  const toggleChatbot = () => {
    setIsChatbotOpen(prev => !prev);
  };

  return (
    <NotificationProvider>
      <AuthProvider>
        <ThemeProvider> {/* Wrap with ThemeProvider */}
          <HashRouter>
            <ScrollToTop /> {/* Add ScrollToTop */}
            <div className="flex flex-col min-h-screen bg-brand-light dark:bg-brand-dark font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300"> {/* Added dark mode classes */}
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} /> {/* Updated route */}
                  <Route path="/forgot-password" element={<ForgotPassword />} /> {/* New route */}
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/careers/:id" element={<CareerDetail />} />
                  <Route path="/colleges" element={<Colleges />} />
                  <Route path="/colleges/:id" element={<CollegeDetail />} />
                  <Route path="/scholarships" element={<Scholarships />} />
                  <Route path="/exams" element={<Exams />} />
                  <Route path="/counseling" element={<Counseling />} />
                  <Route path="/personal-guidance" element={<Navigate to="/counseling" replace />} /> {/* Redirect */}
                  <Route path="/aptitude-test" element={<AptitudeTest />} /> {/* New route */}
                  <Route path="/resources" element={<Resources />} /> {/* New route */}
                  <Route path="/emerging-careers" element={<EmergingCareers />} /> {/* New route */}
                  <Route path="/trends" element={<Trends />} /> {/* New route */}
                  <Route path="/contact" element={<Contact />} /> {/* New route */}
                  <Route path="/about" element={<About />} /> {/* New route */}
                  <Route path="/faq" element={<FAQ />} /> {/* New route */}
                  
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <DashboardLayout />
                    </ProtectedRoute>
                  }>
                    <Route index element={<Dashboard />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="bookings" element={<MyBookings />} />
                    <Route path="recommendations" element={<Recommendations />} /> {/* New protected sub-route */}
                    {/* Add other dashboard routes here like aptitude test history etc. */}
                  </Route>

                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
              <Footer />
              <ChatbotToggle onToggle={toggleChatbot} isOpen={isChatbotOpen} />
              {isChatbotOpen && <ChatWindow onClose={toggleChatbot} />}
            </div>
          </HashRouter>
        </ThemeProvider>
      </AuthProvider>
    </NotificationProvider>
  );
}

export default App;