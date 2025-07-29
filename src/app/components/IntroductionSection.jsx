"use client";

import React from 'react';
import { motion } from 'framer-motion';
const IntroductionSection = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2.6 }}
>
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-grey-900 via-emerald-900 to-green-500 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Hi, I’m <span className="text-indigo-400">Gagan</span>
              <br />
              Software Development Engineer
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
                By day, I scale backend services for global traffic. By night, I'm formulating AI-powered tools and exploring the frontiers of machine learning. Let's build something impactful.            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="https://github.com/gagankaur1709" 
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                View Projects
              </a>
              <a 
                href="mailto:gagankaur1709@gmail.com" 
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <img
                    src="profile-photo.jpg" 
                    alt="A digital portrait of Gagandeep Kaur"
                    className="relative w-full h-full object-cover object-top rounded-full border-4 border-gray-700/80 shadow-2xl"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1e293b/a5b4fc?text=Image+Error'; }}
                    />
            </div>
          </div>

        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default IntroductionSection;
