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
  { name: "Java", icon: <FaJava className="w-full h-full" /> },
  { name: "C++", icon: <BiLogoCPlusPlus className="w-full h-full"/> },
  { name: "Python", icon: <IoLogoPython className="w-full h-full"/> },
  { name: "JavaScript", icon: <IoLogoJavascript className="w-full h-full"/> },
  { name: "SQL", icon: <BsFiletypeSql className="w-full h-full"/>},
  { name: "Kafka", icon: <SiApachekafka className="w-full h-full"/>},
  { name: "Spring Boot", icon: <BiLogoSpringBoot className="w-full h-full"/>},
  { name: "React", icon: <FaReact className="w-full h-full"/>},
  { name: "Next.js", icon: <SiNextdotjs className="w-full h-full"/> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-full h-full"/>},
  { name: "Docker", icon: <FaDocker className="w-full h-full"/>},
  { name: "Kubernetes", icon: <SiKubernetes className="w-full h-full"/>},
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
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-200"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          <motion.div className="md:w-1/2 space-y-6" variants={sectionVariants}>
            <motion.p className="text-lg text-zinc-200 leading-relaxed" variants={itemVariants}>
            I'm a systems engineer who translates legacy code into the future. By day, I build and scale robust Java microservices for global platforms, ensuring they're fast, efficient, and ready for whatever comes next. Think of me as a digital archaeologist, modernizing the past to power tomorrow.            </motion.p>
            <motion.p className="text-lg text-zinc-200 leading-relaxed" variants={itemVariants}>
            When I'm not wrangling enterprise systems, I'm in my digital lab teaching AI new tricks. From building apps that connect students to deploying intelligent bug-classifiers, I love crafting smart solutions. It’s all about finding elegant code for complex, real-world puzzles.             
            </motion.p>
             <motion.p className="text-lg text-zinc-200 leading-relaxed" variants={itemVariants}>
             Ultimately, I'm driven by a relentless curiosity to explore the tech frontier. From the depths of distributed systems to the nuances of prompt engineering, I'm constantly tinkering and learning. I believe the best way to predict the future is to build it, one line of code at a time.             </motion.p>
          </motion.div>

          <motion.div className="md:w-1/2" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-zinc-100">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-gray-800/50 p-4 rounded-lg flex items-center gap-4 hover:bg-gray-700/70 transition-colors duration-300"
                  variants={itemVariants}
                >
                  <div className="text-green-400">{skill.icon}</div>
                  <span className="font-medium text-white-100">{skill.name}</span>
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
