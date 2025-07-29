"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "I have had the opportunity to work closely with Gagandeep during her time at Sixt and I am confident that she has the skills, knowledge and determination essential for advancing her career. As SDE-1, she consistently demonstrated remarkable technical and professional abilities. Her passion towards software engineering was evident in the high quality of work she delivered as well as her eagerness to explore complex topics beyond the basic requirements. One of her most notable qualities is her ability to work both independently and collaboratively. Gagandeep demonstrated leadership, clear communication, and critical, innovative thinking, which resulted in successful project deliverables. These skills will undoubtedly contribute to her success in the demanding environment of graduate studies",
    name: "Manisha Paswan",
    title: "Lead Engineer",
    image: "https://placehold.co/100x100/a5b4fc/1e293b?text=MP",
  },
  {
    quote: "I’ve worked with Gagandeep in the same team for over two years, and I can genuinely say she’s a standout professional. She picks up new skills rapidly and has a solid technical background, making her a competent engineer. She’s also curious and proactive, constantly exploring new technologies and taking the initiative to solve complex problems. Her collaborative spirit and dedication make her a valuable asset to any team.",
    name: "Navneetha Rajan",
    title: "Software Engineer",
    image: "https://placehold.co/100x100/a5b4fc/1e293b?text=NR",
  },
];


const TestimonialsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="testimonials"
      className="py-20 md:py-28 bg-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-zinc-200"
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
        >
          What Others Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-8 rounded-lg shadow-lg relative"
              variants={cardVariants}
            >
           
              <p className="text-white-300 italic mb-6 z-10 relative">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-indigo-500 object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-100">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
