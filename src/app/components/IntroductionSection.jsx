"use client";

import React from 'react';
import { motion } from 'framer-motion';
import NeuralWeb from './NeuralWeb';

const IntroductionSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
    
      <div className="absolute inset-0 z-0 opacity-50">
        <NeuralWeb />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-grey-900 via-grey-500 to-grey-300 animate-gradient-xy"></div>
      
      <motion.div
        className="container mx-auto px-6 py-20 relative z-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5}}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          Hi, I am <span className="text-indigo-400" style={{ fontFamily: 'var(--font-nothing-you-could-do)' }}>Gagan</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Software Development Engineer specializing in scalable backend systems and AI-powered tools.
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/gagankaur1709" 
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:-translate-y-1"
          >
            View Projects
          </a>
          <a 
            href="mailto:gagankaur1709@gmail.com" 
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroductionSection;