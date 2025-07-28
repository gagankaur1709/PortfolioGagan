"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon = ({ children }) => (
  <div className="bg-gray-800 p-2 rounded-full">
    {children}
  </div>
);

const skills = [
  { name: "Java", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.39 6.25a.86.86 0 0 1-.87-.86c0-.47.4-.85.86-.85s.86.38.86.85c0 .48-.39.86-.85.86m-1.3 11.23c-1.39 0-2.52-1.13-2.52-2.52s1.13-2.52 2.52-2.52 2.52 1.13 2.52 2.52c0 1.39-1.13 2.52-2.52 2.52M9.82 2.99A.85.85 0 0 1 9 2.14c0-.48.39-.86.86-.86s.86.38.86.86a.85.85 0 0 1-.86.85m5.42 16.5c-1.85 0-3.35-1.5-3.35-3.35s1.5-3.35 3.35-3.35 3.35 1.5 3.35 3.35c0 1.85-1.5 3.35-3.35 3.35M17 10.18c-1.85 0-3.35-1.5-3.35-3.35S15.15 3.48 17 3.48s3.35 1.5 3.35 3.35-1.5 3.35-3.35 3.35m-9.01.21c-1.28 0-2.32-1.04-2.32-2.32s1.04-2.32 2.32-2.32 2.32 1.04 2.32 2.32c0 1.28-1.04 2.32-2.32 2.32m2.4-7.58c-.9 0-1.63-.73-1.63-1.63s.73-1.63 1.63-1.63 1.63.73 1.63 1.63c0 .9-.73 1.63-1.63 1.63m-1.9 14.7c-1.85 0-3.35-1.5-3.35-3.35s1.5-3.35 3.35-3.35 3.35 1.5 3.35 3.35-1.5 3.35-3.35 3.35m11.25-10.33c-.9 0-1.63-.73-1.63-1.63s.73-1.63 1.63-1.63 1.63.73 1.63 1.63c0 .9-.73 1.63-1.63 1.63z"/></svg> },
  { name: "Spring Boot", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.16 3.34A12.56 12.56 0 0 0 12 1.5a12.18 12.18 0 0 0-7.16 1.84 12.37 12.37 0 0 0-3.62 10.45 12.15 12.15 0 0 0 5.43 6.94A12.37 12.37 0 0 0 12 22.5a12.18 12.18 0 0 0 7.16-1.84 12.37 12.37 0 0 0 3.62-10.45 12.15 12.15 0 0 0-3.62-6.87zM8.28 17.2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4.4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm4.83.5c-1.14 0-2.3-.57-2.3-2.18v-2.72c0-1.61 1.16-2.18 2.3-2.18s2.3.57 2.3 2.18v2.72c0 1.61-1.16 2.18-2.3 2.18zm4.84 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4.4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/></svg> },
  { name: "React", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.83a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg> },
  { name: "Next.js", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.633 11.428L8.855 18.26l-1.041.52L15.145 5h1.71v13.26l-1.189-.595-2.033-6.237zM8.348 5l-3.34 6.136L8.348 18.26V5z"/></svg> },
  { name: "Tailwind CSS", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.5C7.524,4.5,3.921,8.07,3.921,12.5c0,4.43,3.603,7.999,8.08,7.999 c4.478,0,8.08-3.569,8.08-7.999C20.081,8.07,16.479,4.5,12.001,4.5z M12.001,18.499c-3.32,0-6.01-2.68-6.01-5.999 s2.69-5.999,6.01-5.999s6.01,2.68,6.01,5.999S15.321,18.499,12.001,18.499z M8.073,11.5h2.476c0.606,0,1.099,0.48,1.099,1.079 s-0.493,1.079-1.099,1.079H8.073V11.5z M13.452,11.5h2.476c0.606,0,1.099,0.48,1.099,1.079s-0.493,1.079-1.099,1.079h-2.476V11.5z"/></svg> }
];

const AboutSection = () => {
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
      id="about"
      className="py-20 md:py-28 bg-gray-900 text-white"
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-400"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          <motion.div className="md:w-1/2 space-y-6" variants={sectionVariants}>
            <motion.p className="text-lg text-gray-300 leading-relaxed" variants={itemVariants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis lacus, sit amet porta risus. Donec ultricies, dolor vel fringilla ultrices, metus nulla posuere ligula, a placerat ex est ac felis. Cras blandit purus vel orci viverra eleifend. Nam faucibus tortor augue, at luctus elit efficitur at. Donec a ullamcorper purus, eu tristique orci. Cras ultricies tristique pulvinar. Etiam posuere quam et ligula elementum, sed posuere est auctor. Suspendisse pretium purus et leo pretium aliquet. Donec in tellus at tortor blandit vestibulum in quis tortor. Nam fermentum diam quis ante finibus tempus nec vel erat.            </motion.p>
            <motion.p className="text-lg text-gray-300 leading-relaxed" variants={itemVariants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis lacus, sit amet porta risus. Donec ultricies, dolor vel fringilla ultrices, metus nulla posuere ligula, a placerat ex est ac felis. Cras blandit purus vel orci viverra eleifend. Nam faucibus tortor augue, at luctus elit efficitur at. Donec a ullamcorper purus, eu tristique orci. Cras ultricies tristique pulvinar. Etiam posuere quam et ligula elementum, sed posuere est auctor. Suspendisse pretium purus et leo pretium aliquet. Donec in tellus at tortor blandit vestibulum in quis tortor. Nam fermentum diam quis ante finibus tempus nec vel erat.            </motion.p>
             <motion.p className="text-lg text-gray-300 leading-relaxed" variants={itemVariants}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis lacus, sit amet porta risus. Donec ultricies, dolor vel fringilla ultrices, metus nulla posuere ligula, a placerat ex est ac felis. Cras blandit purus vel orci viverra eleifend. Nam faucibus tortor augue, at luctus elit efficitur at. Donec a ullamcorper purus, eu tristique orci. Cras ultricies tristique pulvinar. Etiam posuere quam et ligula elementum, sed posuere est auctor. Suspendisse pretium purus et leo pretium aliquet. Donec in tellus at tortor blandit vestibulum in quis tortor. Nam fermentum diam quis ante finibus tempus nec vel erat.            </motion.p>
          </motion.div>

          <motion.div className="md:w-1/2" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-100">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-gray-800/50 p-4 rounded-lg flex items-center gap-4 hover:bg-gray-700/70 transition-colors duration-300"
                  variants={itemVariants}
                >
                  <div className="text-indigo-400">{skill.icon}</div>
                  <span className="font-medium text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
