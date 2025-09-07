"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaJava } from "react-icons/fa6";
import { BiLogoCPlusPlus, BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { SiApachekafka, SiNextdotjs, SiKubernetes} from "react-icons/si";
import { FaReact, FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "Java", icon: <FaJava className="w-full h-full text-orange-500" /> },
  { name: "C++", icon: <BiLogoCPlusPlus className="w-full h-full text-blue-600"/> },
  { name: "Python", icon: <IoLogoPython className="w-full h-full text-yellow-500"/> },
  { name: "JavaScript", icon: <IoLogoJavascript className="w-full h-full text-yellow-400"/> },
  { name: "SQL", icon: <BsFiletypeSql className="w-full h-full text-blue-500"/>},
  { name: "Kafka", icon: <SiApachekafka className="w-full h-full text-red-500"/>},
  { name: "SpringBoot", icon: <BiLogoSpringBoot className="w-full h-full text-green-500"/>},
  { name: "React", icon: <FaReact className="w-full h-full text-blue-400"/>},
  { name: "Next.js", icon: <SiNextdotjs className="w-full h-full text-gray-800"/> },
  { name: "Docker", icon: <FaDocker className="w-full h-full text-blue-500"/>},
  { name: "Kubernetes", icon: <SiKubernetes className="w-full h-full text-blue-600"/>},
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
      <div className="mx-4 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-left mb-12 text-zinc-200"
          variants={itemVariants}
        >
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div className="lg:w-1/2 bg-gray-900 rounded-lg p-8" variants={sectionVariants}>
            <motion.h3 
              className="text-2xl font-bold mb-6 text-indigo-400"
              variants={itemVariants}
            >
              About Me
            </motion.h3>
            <div className="space-y-4">
              <motion.p className="text-lg text-zinc-200 leading-relaxed" variants={itemVariants}>
              As a Software Development Engineer, I specialize in architecting and scaling robust backend systems. My core expertise lies in building enterprise-level microservices for global platforms, with a focus on modernizing legacy codebases to improve efficiency, performance, and maintainability for future demands.
             </motion.p>
              <motion.p className="text-lg text-zinc-200 leading-relaxed" variants={itemVariants}>
              While my primary focus is backend engineering, I am passionate about applying my skills to the field of Artificial Intelligence. I enjoy diving into complex challenges to create intelligent, data-driven solutions, from developing AI-powered applications to deploying effective bug-classification tools.
              </motion.p>
               <motion.p className="text-lg text-zinc-200 leading-relaxed" variants={itemVariants}>
               I am driven by a commitment to continuous learning and exploring the intersection of new technologies. Whether it's mastering the complexities of distributed systems or leveraging prompt engineering, my goal is to apply cutting-edge techniques to build impactful and innovative software.     
               </motion.p>
            </div>
          </motion.div>

          {/* Skills Container */}
          <motion.div className="lg:w-1/2 bg-gray-800 rounded-lg p-8" variants={sectionVariants}>
            <motion.h3 
              className="text-2xl text-center font-bold mb-6 text-indigo-400"
              variants={itemVariants}
            >
              What I Build With
            </motion.h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group flex flex-col items-center justify-center gap-3 p-4 bg-gray-900 rounded-lg aspect-square"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                    {skill.name}
                  </span>
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
