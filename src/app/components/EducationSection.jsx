"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const journeyData = [
  {
    type: "education",
    title: "Master of Science",
    subtitle: "Advanced Computer Science",
    organization: "University of Birmingham",
    location: "Birmingham, United Kingdom",
    year: "2024 - 2025",
    description: "Specialized in advanced algorithms, machine learning, and distributed systems. Focused on cutting-edge research in artificial intelligence and software engineering methodologies.",
    highlights: [
      "Human Computer Interaction",
      "Distributed Systems",
      "Intelligent Software Engineering",
      "Advanced Networking",
      "Designing and Managing Secured Systems",
      "Algorithms and Complexity"
    ],
    icon: <FaGraduationCap className="text-2xl" />
  },
  {
    type: "experience",
    title: "Software Development Engineer I",
    subtitle: "Backend System",
    organization: "Sixt Research and Development",
    location: "Bengaluru, India",
    year: "2022 - 2024",
    description: "Developed and maintained robust backend systems for global car rental platform. Focused on microservices architecture, API development, and system optimization.",
    highlights: [
      "Microservices Architecture",
      "Java Development",
      "API Design & Development",
      "System Optimization",
      "CI/CD Implementation"
    ],
    icon: <FaBriefcase className="text-2xl" />
  },
  {
    type: "education",
    title: "Bachelor of Engineering",
    subtitle: "Computer Science",
    organization: "Dayananda Sagar Academy of Technology and Management",
    location: "Bengaluru, India", 
    year: "2018 - 2022",
    description: "Comprehensive foundation in computer science fundamentals, software development, data structures, algorithms, and system design. Graduated with strong technical expertise.",
    highlights: [
      "Web Development",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Big Data",
      "Database Management Systems",
      "Python Programming"
    ],
    icon: <FaGraduationCap className="text-2xl" />
  }
];

const EducationSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="education"
      className="py-20 md:py-28 bg-gray-950 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-indigo-400"
          variants={itemVariants}
        >
          My Journey
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-500"></div>
            
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
                variants={itemVariants}>
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-gray-950 z-10 ${
                  item.type === 'experience' ? 'bg-emerald-500' : 'bg-indigo-500'
                }`}></div>
                <div className="ml-16 bg-gray-800 rounded-lg p-6 w-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-indigo-400 mb-2">
                        {item.subtitle}
                      </h4>
                    </div>
                    <div className={`${item.type === 'experience' ? 'text-emerald-400' : 'text-indigo-400'}`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <FaUniversity className="mr-2 text-indigo-400" />
                      <span>{item.organization}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FaMapMarkerAlt className="mr-2 text-indigo-400" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FaCalendarAlt className="mr-2 text-indigo-400" />
                      <span>{item.year}</span>
                    </div>
                  </div>
                
                  
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          item.type === 'experience' 
                            ? 'bg-green-900/50 text-emerald-300' 
                            : 'bg-indigo-900/50 text-indigo-300'
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
