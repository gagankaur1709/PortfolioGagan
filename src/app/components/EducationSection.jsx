"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const educationData = [
  {
    degree: "Master of Science",
    field: "Advanced Computer Science",
    university: "University of Birmimgham",
    location: "Bangalore, United Kingdom",
    year: "2024 - 2025",
    description: "Specialized in advanced algorithms, machine learning, and distributed systems. Focused on cutting-edge research in artificial intelligence and software engineering methodologies.",
    highlights: [
      "Human Computer Interaction",
      "Distributed Systems",
      "Intelligent Software Engineering",
      "Advanced Networking",
      "Designing and Managing Secured Systems",
      "Algorithms and Complexity"
    ]
  },
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science",
    university: "Dayanada Sagar Academy of Technology and Management",
    location: "Bengaluru, India", 
    year: "2018 - 2022",
    description: "Comprehensive foundation in computer science fundamentals, software development, data structures, algorithms, and system design. Graduated with strong technical expertise.",
    highlights: [
      "Web Development",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Big data",
      "Database Management Systems",
      "Python Programming"
    ]
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
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-500"></div>
            
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-950 z-10"></div>
                
                {/* Content card */}
                <div className="ml-16 bg-gray-800 rounded-lg p-6 w-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {education.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-indigo-400 mb-2">
                        {education.field}
                      </h4>
                    </div>
                    <FaGraduationCap className="text-indigo-400 text-2xl" />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <FaUniversity className="mr-2 text-indigo-400" />
                      <span>{education.university}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FaMapMarkerAlt className="mr-2 text-indigo-400" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FaCalendarAlt className="mr-2 text-indigo-400" />
                      <span>{education.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {education.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-900/50 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full"
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
