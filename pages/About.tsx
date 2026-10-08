import React from 'react';
import Card from '../components/ui/Card';

const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light text-center mb-4">About Next Step Guide</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto mb-8">
                Empowering individuals to confidently navigate their career paths.
            </p>

            <div className="space-y-12">
                <Card className="p-8">
                    <h2 className="text-3xl font-bold text-brand-dark dark:text-brand-light mb-4 pb-2 border-b-2 border-pastel-blue dark:border-pastel-olive">Our Mission</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Our mission at Next Step Guide is to provide comprehensive, personalized career guidance to students and professionals worldwide. We believe that everyone deserves the opportunity to find a fulfilling and successful career path, and we are dedicated to offering the tools, resources, and expert support needed to achieve that.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                        Through cutting-edge AI, extensive data, and human expertise, we aim to demystify career exploration, making it accessible, engaging, and highly effective for all users.
                    </p>
                </Card>

                <Card className="p-8">
                    <h2 className="text-3xl font-bold text-brand-dark dark:text-brand-light mb-4 pb-2 border-b-2 border-pastel-blue dark:border-pastel-olive">The Problem We Solve</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Navigating the modern job market can be overwhelming. Students often struggle to choose the right academic path, while professionals face challenges in career transitions or identifying growth opportunities. Traditional guidance methods can be limited, outdated, or inaccessible.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                        Next Step Guide addresses these issues by offering a centralized platform that combines personalized AI suggestions, a vast resource library, detailed career and educational information, and one-on-one counseling. We bridge the gap between aspirations and actionable plans.
                    </p>
                </Card>

                <Card className="p-8">
                    <h2 className="text-3xl font-bold text-brand-dark dark:text-brand-light mb-4 pb-2 border-b-2 border-pastel-blue dark:border-pastel-olive">Our Vision</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        To be the leading global platform for career guidance, recognized for our innovative approach, accurate recommendations, and unwavering commitment to user success. We envision a world where every individual feels empowered to make informed career decisions and achieve their full potential.
                    </p>
                    <div className="mt-8 text-center">
                        <img 
                            src="https://assets-global.website-files.com/624c431a89c4501a248cf10e/6335193910544f128c946e32_Homepage_Hero_Illustration.svg" 
                            alt="Vision illustration" 
                            className="max-w-sm mx-auto object-contain"
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default About;