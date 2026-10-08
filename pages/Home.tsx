

import React from 'react';
import { Link } from 'react-router-dom';
import CareerSuggester from '../components/gemini/CareerSuggester';
import Card from '../components/ui/Card'; // Import Card component

const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string; link: string; }> = ({ icon, title, description, link }) => (
    <div className="bg-white dark:bg-brand-dark p-6 rounded-xl shadow-sm text-center transform transition-transform hover:scale-105 hover:shadow-md dark:border dark:border-slate-700">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>
        <Link to={link} className="font-semibold text-pastel-blue-dark hover:underline hover:text-pastel-blue transition-colors dark:text-pastel-olive dark:hover:text-pastel-green">
            Learn More &rarr;
        </Link>
    </div>
);

const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-pastel-blue-dark to-pastel-blue dark:from-slate-800 dark:to-brand-dark relative overflow-hidden py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-center md:text-left md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                            Unlock Your <span className="text-pastel-olive">Potential</span>, Define Your <span className="text-pastel-olive">Path</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-lg text-slate-100">
                            Your comprehensive guide to exploring careers, finding the right courses, and securing scholarships.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start gap-4">
                            <Link to="/careers" className="px-8 py-3 bg-pastel-olive text-brand-dark font-semibold rounded-lg shadow-lg hover:bg-pastel-green transition-colors transform hover:scale-105">
                                Explore Careers
                            </Link>
                            <Link to="/signup" className="px-8 py-3 bg-white text-brand-dark font-semibold rounded-lg shadow-lg hover:bg-pastel-grey transition-colors transform hover:scale-105">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        {/* Modern illustration */}
                        <img 
                            src="https://imgs.search.brave.com/PYI74aHk_JOhb8pnTz5OYH3z-Gc4o1g7DYR79iECU-E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/NjIxLzU5OS9zbWFs/bC9ncm91cC1vZi1k/aXZlcnNlLWludGVy/bmF0aW9uYWwtZ3Jh/ZHVhdGluZy1zdHVk/ZW50cy1jZWxlYnJh/dGluZy1mcmVlLXBo/b3RvLmpwZw" 
                            alt="Youth exploring career options" 
                            className="w-full max-w-md md:max-w-lg object-contain transform rotate-3 hover:rotate-0 transition-transform duration-500" 
                        />
                    </div>
                </div>
            </section>

             {/* AI Suggester Section */}
            <section className="py-16 bg-brand-light dark:bg-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CareerSuggester />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white dark:bg-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-brand-light mb-12">Everything You Need To Succeed</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard 
                            icon={<svg className="h-12 w-12 text-pastel-green" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 6H6a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 006 21h12a2.25 2.25 0 002.25-2.25V8.25A2.25 2.25 0 0018 6zM10.5 12h3a.75.75 0 010 1.5h-3a.75.75 0 010-1.5z" clipRule="evenodd" /><path fillRule="evenodd" d="M15.375 1.5A2.25 2.25 0 0013.125 0h-2.25A2.25 2.25 0 008.625 1.5V3h6.75V1.5z" clipRule="evenodd" /></svg>}
                            title="Vast Career Directory"
                            description="In-depth information on thousands of career paths."
                            link="/careers"
                        />
                        <FeatureCard 
                            icon={<svg className="h-12 w-12 text-pastel-green" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.5 4.75a3 3 0 013-3h9A3 3 0 0119.5 4.75V19.5a3 3 0 01-3 3H7.5a3 3 0 01-3-3V4.75zM7.5 7.5a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zM7.5 12a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zM7.5 16.5a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" /></svg>}
                            title="College & Course Finder"
                            description="Find the perfect institution and program for your goals."
                            link="/colleges"
                        />
                        <FeatureCard 
                            icon={<svg className="h-12 w-12 text-pastel-green" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM12 5.25A.75.75 0 0112.75 6v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zM9 12a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H9.75A.75.75 0 019 12zM12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zM12 3a8.25 8.25 0 100 16.5A8.25 8.25 0 0012 3z" clipRule="evenodd" /></svg>}
                            title="Scholarship Explorer"
                            description="Discover financial aid opportunities to fund your education."
                            link="/scholarships"
                        />
                         <FeatureCard 
                            icon={<svg className="h-12 w-12 text-pastel-green" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016.035.02a.76.76 0 00.796 0l.035-.02.028-.016.07-.04c1.416-.951 3.076-2.593 3.167-3.544.007-.07.009-.136.009-.197V7.309A2.25 2.25 0 0013.5 5.25H12V4.75A2.75 2.75 0 009.25 2H5.5a2.75 2.75 0 00-2.75 2.75V17.25c0 .161.006.32.016.475a13.997 13.997 0 00.177 1.353c.124.316.331.6.594.839.458.463 1.061.607 1.527.607h.173c.293 0 .58-.118.806-.344l3.157-3.157A.75.75 0 0111.54 22.35zM9.75 7.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" clipRule="evenodd" /></svg>}
                            title="Aptitude Test"
                            description="Take a quick test to understand your strengths and get personalized recommendations."
                            link="/aptitude-test"
                        />
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-brand-light dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-brand-light mb-12">Your Journey to Success: How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 text-center transform transition-transform hover:scale-105 hover:shadow-md border border-pastel-grey dark:border-slate-700">
                            <div className="flex justify-center mb-4">
                                <svg className="h-12 w-12 text-pastel-blue dark:text-pastel-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 19.05a2.25 2.25 0 011.137-3.894l1.434-.492c.82-.282 1.693.056 2.019.897.324.84.021 1.743-.685 2.025l-.492.197c-.637.255-1.286.381-1.93.375v.008zM12 21a9 9 0 110-18 9 9 0 010 18z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-2">1. Discover Your Potential</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Take our personalized aptitude test and leverage AI suggestions to uncover career paths aligned with your strengths and interests.
                            </p>
                        </Card>
                        <Card className="p-6 text-center transform transition-transform hover:scale-105 hover:shadow-md border border-pastel-grey dark:border-slate-700">
                            <div className="flex justify-center mb-4">
                                <svg className="h-12 w-12 text-pastel-blue dark:text-pastel-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.079 0-2.15.262-3.072.74a3.006 3.006 0 00.096 4.723S9.537 14.004 12 17.25c2.463-3.246 9.006-8.502 9.006-8.502a3.007 3.007 0 00.096-4.723A8.966 8.966 0 0018 3.75c-1.079 0-2.15.262-3.072.74L12 6.042z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-2">2. Explore & Learn</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Dive into our extensive library of careers, colleges, scholarships, and resources. Gain the knowledge you need to make informed decisions.
                            </p>
                        </Card>
                        <Card className="p-6 text-center transform transition-transform hover:scale-105 hover:shadow-md border border-pastel-grey dark:border-slate-700">
                            <div className="flex justify-center mb-4">
                                <svg className="h-12 w-12 text-pastel-blue dark:text-pastel-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 1.01-.117 1.993-.33 2.942a4.992 4.992 0 00-1.464-1.464A4.991 4.991 0 0012 18.75c-2.502 0-4.71-1.282-6.195-3.212a4.992 4.992 0 00-1.464 1.464C3.117 19.007 3 19.99 3 21m0-3c0-1.01.117-1.993.33-2.942a4.992 4.992 0 011.464 1.464A4.991 4.991 0 0112 15.75c2.502 0 4.71 1.282 6.195 3.212a4.992 4.992 0 011.464-1.464C20.883 15.007 21 14.01 21 13.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-2">3. Connect & Plan</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Book one-on-one sessions with expert career counselors and create a tailored action plan to achieve your professional goals.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white dark:bg-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-brand-dark dark:text-brand-light mb-8">Why Choose Next Step Guide?</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10">
                        We are dedicated to providing a superior career guidance experience with unique features designed to help you succeed.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="p-6 text-left">
                            <h3 className="text-xl font-bold text-pastel-blue-dark dark:text-pastel-olive mb-3">AI-Powered Insights</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Leverage cutting-edge artificial intelligence for personalized career suggestions and trend analysis.
                            </p>
                        </Card>
                        <Card className="p-6 text-left">
                            <h3 className="text-xl font-bold text-pastel-blue-dark dark:text-pastel-olive mb-3">Comprehensive Resources</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Access a vast and up-to-date database of careers, educational institutions, scholarships, and learning materials.
                            </p>
                        </Card>
                        <Card className="p-6 text-left">
                            <h3 className="text-xl font-bold text-pastel-blue-dark dark:text-pastel-olive mb-3">Expert Human Guidance</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Connect with experienced career counselors for personalized one-on-one sessions and mentorship.
                            </p>
                        </Card>
                        <Card className="p-6 text-left">
                            <h3 className="text-xl font-bold text-pastel-blue-dark dark:text-pastel-olive mb-3">Holistic Approach</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                We consider your unique aptitudes, interests, and aspirations to provide a truly tailored career journey.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-brand-light dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-brand-light mb-12">What Our Users Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 relative overflow-hidden bg-white dark:bg-slate-700">
                            <svg className="absolute top-0 left-0 w-24 h-24 text-pastel-blue/10 dark:text-slate-600/10 transform rotate-[-15deg]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M9.277 3.003h-2.909l-4.524 15.688h2.909l1.838-6.398c.119-.414.025-.857-.245-1.218-.27-.361-.692-.56-1.144-.56H3.36V7.086h2.91a2.25 2.25 0 012.25 2.25v2.793a.75.75 0 00.75.75h2.91l-.916 3.19h-2.909zM20.277 3.003h-2.909l-4.524 15.688h2.909l1.838-6.398c.119-.414.025-.857-.245-1.218-.27-.361-.692-.56-1.144-.56h-2.909V7.086h2.91a2.25 2.25 0 012.25 2.25v2.793a.75.75 0 00.75.75h2.91l-.916 3.19h-2.909z" />
                            </svg>
                            <p className="relative text-slate-700 dark:text-slate-200 italic mb-4">
                                "Next Step Guide transformed my career search. The aptitude test was spot-on, and the AI suggestions opened my eyes to possibilities I hadn't considered. Highly recommend!"
                            </p>
                            <p className="relative font-semibold text-brand-dark dark:text-brand-light">- Jane Doe, University Student</p>
                        </Card>
                        <Card className="p-6 relative overflow-hidden bg-white dark:bg-slate-700">
                            <svg className="absolute top-0 left-0 w-24 h-24 text-pastel-blue/10 dark:text-slate-600/10 transform rotate-[-15deg]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M9.277 3.003h-2.909l-4.524 15.688h2.909l1.838-6.398c.119-.414.025-.857-.245-1.218-.27-.361-.692-.56-1.144-.56H3.36V7.086h2.91a2.25 2.25 0 012.25 2.25v2.793a.75.75 0 00.75.75h2.91l-.916 3.19h-2.909zM20.277 3.003h-2.909l-4.524 15.688h2.909l1.838-6.398c.119-.414.025-.857-.245-1.218-.27-.361-.692-.56-1.144-.56h-2.909V7.086h2.91a2.25 2.25 0 012.25 2.25v2.793a.75.75 0 00.75.75h2.91l-.916 3.19h-2.909z" />
                            </svg>
                            <p className="relative text-slate-700 dark:text-slate-200 italic mb-4">
                                "Booking a session with a counselor through this platform was a game-changer. Their insights helped me refine my resume and confidently pursue my dream job. Thank you!"
                            </p>
                            <p className="relative font-semibold text-brand-dark dark:text-brand-light">- John Smith, Marketing Professional</p>
                        </Card>
                        <Card className="p-6 relative overflow-hidden bg-white dark:bg-slate-700">
                            <svg className="absolute top-0 left-0 w-24 h-24 text-pastel-blue/10 dark:text-slate-600/10 transform rotate-[-15deg]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M9.277 3.003h-2.909l-4.524 15.688h2.909l1.838-6.398c.119-.414.025-.857-.245-1.218-.27-.361-.692-.56-1.144-.56H3.36V7.086h2.91a2.25 2.25 0 012.25 2.25v2.793a.75.75 0 00.75.75h2.91l-.916 3.19h-2.909zM20.277 3.003h-2.909l-4.524 15.688h2.909l1.838-6.398c.119-.414.025-.857-.245-1.218-.27-.361-.692-.56-1.144-.56h-2.909V7.086h2.91a2.25 2.25 0 012.25 2.25v2.793a.75.75 0 00.75.75h2.91l-.916 3.19h-2.909z" />
                            </svg>
                            <p className="relative text-slate-700 dark:text-slate-200 italic mb-4">
                                "The resource library is invaluable! I found so many useful articles on emerging careers and interview techniques. This platform truly supports your growth at every step."
                            </p>
                            <p className="relative font-semibold text-brand-dark dark:text-brand-light">- Emily White, Recent Graduate</p>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;