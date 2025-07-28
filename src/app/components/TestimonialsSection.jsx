"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sagittis lacus, sit amet porta risus. Donec ultricies, dolor vel fringilla ultrices, metus nulla posuere ligula, a placerat ex est ac felis. Cras blandit purus vel orci viverra eleifend. Nam faucibus tortor augue, at luctus elit efficitur at. Donec a ullamcorper purus, eu tristique orci.",
    name: "Jane Doe",
    title: "Lead Engineer",
    image: "https://placehold.co/100x100/a5b4fc/1e293b?text=JD",
  },
  {
    quote: "Cras ultricies tristique pulvinar. Etiam posuere quam et ligula elementum, sed posuere est auctor. Suspendisse pretium purus et leo pretium aliquet. Donec in tellus at tortor blandit vestibulum in quis tortor. Nam fermentum diam quis ante finibus tempus nec vel erat.",
    name: "John Smith",
    title: "Product Manager",
    image: "https://placehold.co/100x100/a5b4fc/1e293b?text=JS",
  },
];

const QuoteIcon = () => (
    <svg width="44" height="44" viewBox="0 0 24 24" className="absolute top-0 left-0 -mt-2 -ml-2 text-gray-800" fill="currentColor">
        <path d="M6.5 10c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm11 0c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM6 15c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6zm11 0c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"></path>
    </svg>
);


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
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-indigo-400"
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
        >
          What Others Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-8 rounded-lg shadow-lg relative"
              variants={cardVariants}
            >
              <QuoteIcon />
              <p className="text-gray-300 italic mb-6 z-10 relative">
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
