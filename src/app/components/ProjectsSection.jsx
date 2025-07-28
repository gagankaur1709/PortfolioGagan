"use client";

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project - 1",
    description: "Nunc tempor dolor placerat enim varius, sed dapibus nunc maximus. Aliquam malesuada non odio sit amet mollis. Morbi hendrerit mauris et massa viverra, iaculis varius neque varius. Maecenas quis semper tortor, sit amet interdum mauris. Suspendisse facilisis nisl nisl, eu facilisis est faucibus quis.",
    image: "https://placehold.co/600x400/1e293b/a5b4fc?text=Project+1",
    tags: ["a", "b", "c", "d"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project - 2",
    description: "Nunc tempor dolor placerat enim varius, sed dapibus nunc maximus. Aliquam malesuada non odio sit amet mollis. Morbi hendrerit mauris et massa viverra, iaculis varius neque varius. Maecenas quis semper tortor, sit amet interdum mauris. Suspendisse facilisis nisl nisl, eu facilisis est faucibus quis.",
    image: "https://placehold.co/600x400/1e293b/a5b4fc?text=Project+2",
    tags: ["a", "b", "c", "d"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project - 3",
    description: "Nunc tempor dolor placerat enim varius, sed dapibus nunc maximus. Aliquam malesuada non odio sit amet mollis. Morbi hendrerit mauris et massa viverra, iaculis varius neque varius. Maecenas quis semper tortor, sit amet interdum mauris. Suspendisse facilisis nisl nisl, eu facilisis est faucibus quis.",
    image: "https://placehold.co/600x400/1e293b/a5b4fc?text=Project+3",
    tags: ["a", "b", "c", "d"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const LinkIcon = ({ href, children }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
    >
        {children}
    </a>
);

const ProjectsSection = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section 
            id="projects" 
            className="py-20 md:py-28 bg-gray-950 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} 
            variants={sectionVariants}
        >
            <div className="container mx-auto px-6">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-indigo-400"
                    variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                >
                    My Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg shadow-indigo-900/10 flex flex-col"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.3 } }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
                                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-indigo-900/50 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-end gap-4">
                                    <LinkIcon href={project.repoUrl}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </LinkIcon>
                                    <LinkIcon href={project.liveUrl}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </LinkIcon>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;
