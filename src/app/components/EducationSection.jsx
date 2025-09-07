"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaTrophy, FaMedal, FaUsers, FaCode, FaLaptopCode, FaRocket, FaBrain, FaAward, FaCertificate, FaGlobe, FaLightbulb, FaCogs } from 'react-icons/fa';

const timelineEvents = [
  {
    type: "education",
    title: "Master of Science",
    subtitle: "Advanced Computer Science",
    organization: "University of Birmingham",
    location: "Birmingham, United Kingdom",
    year: "2024 - 2025",
    icon: <FaGraduationCap className="text-2xl" />,
    highlights: [ "Human Computer Interaction",
      "Distributed Systems",
      "Intelligent Software Engineering",
      "Advanced Networking",
      "Designing and Managing Secured Systems",
      "Algorithms and Complexity" ],
  },
  {
    type: "experience",
    title: "Software Development Engineer I",
    organization: "Sixt Research and Development",
    location: "Bengaluru, India",
    year: "2022 - 2024",
    icon: <FaLaptopCode className="text-2xl" />,
    highlights: [ "Microservices Architecture",
      "Java Development",
      "API Design & Development",
      "System Optimization",
      "CI/CD Implementation" ],
  },
  {
    type: "education",
    title: "Bachelor of Engineering",
    subtitle: "Computer Science",
    organization: "Dayananda Sagar Academy of Technology and Management",
    location: "Bengaluru, India", 
    year: "2018 - 2022",
    icon: <FaRocket className="text-2xl" />,
    highlights: [ "Web Development",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Big Data",
      "Database Management Systems",
      "Python Programming"],
  }
];

const extraDetails = [
  {
    type: "profile",
    title: "LeetCode Profile",
    description: "Actively solving data structure and algorithm problems, continuously honing my problem-solving skills.",
    link: "https://leetcode.com/u/gaganKaur/",
    icon: <FaCogs />
  },
  {
    type: "profile",
    title: "Blog",
    description: "A blog for software engineers looking to improve their testing and monitoring practices. Learn how to build more reliable integration tests with Testcontainers.",
    link: "https://www.sixt.tech/authors/gagandeepkaur",
    icon: <FaGlobe />
  },
  {
    type: "achievement",
    title: "People's Choice Award",
    description: "Won for building StudySync, an AI-powered app that matches students with ideal study partners at Birminghack 1.0.",
    icon: <FaTrophy />
  },
  {
    type: "achievement",
    title: "Department Topper",
    description: "Awarded the gold medal for academic excellence in the Department of Computer Science (Batch of 2022).",
    icon: <FaMedal />
  },
  {
    type: "achievement",
    title: "Student Coordinator",
    description: "Led the 33rd state-level Computer Science Society of India convention during undergraduate studies.",
    icon: <FaUsers />
  }
];

const EducationSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const typeStyles = {
    education: { dot: 'bg-indigo-500', icon: 'text-indigo-400', tagBg: 'bg-indigo-900/50', tagText: 'text-indigo-300' },
    experience: { dot: 'bg-emerald-500', icon: 'text-emerald-400', tagBg: 'bg-green-900/50', tagText: 'text-emerald-300' },
    achievement: { dot: 'bg-amber-500', icon: 'text-amber-400' },
    profile: { dot: 'bg-cyan-500', icon: 'text-cyan-400' },
  };

  return (
    <motion.section
      id="education"
      className="py-20 md:py-28 bg-gray-950 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-indigo-400"
          variants={itemVariants}
        >
          My Journey
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-500/30"></div>
            {timelineEvents.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
                variants={itemVariants}
              >
                <div className={`absolute left-2 w-4 h-4 rounded-full border-4 border-gray-950 z-10 ${typeStyles[item.type]?.dot}`}></div>
                <div className="ml-12 w-full">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  {item.subtitle && <h4 className={`text-lg font-semibold ${typeStyles[item.type]?.icon} mb-2`}>{item.subtitle}</h4>}
                  <div className="space-y-1 mt-2">
                    <div className="flex items-center text-sm text-gray-400"><FaUniversity className="mr-2" /><span>{item.organization}</span></div>
                    <div className="flex items-center text-sm text-gray-400"><FaMapMarkerAlt className="mr-2" /><span>{item.location}</span></div>
                    <div className="flex items-center text-sm text-gray-400"><FaCalendarAlt className="mr-2" /><span>{item.year}</span></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${typeStyles[item.type]?.tagBg} ${typeStyles[item.type]?.tagText}`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="space-y-8" variants={sectionVariants}>
            {extraDetails.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 border border-white/5 rounded-lg p-6 flex items-start gap-6"
                variants={itemVariants}
              >
                <div className={`text-3xl mt-1 ${typeStyles[item.type]?.icon}`}>{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.description}</p>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline mt-2 inline-block">
                      View Profile &rarr;
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;