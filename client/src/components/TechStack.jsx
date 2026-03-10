// src/components/TechStack.jsx
import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techs = [
    { icon: <FaReact />, name: 'React UI' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaDatabase />, name: 'Custom Databases' },
    { icon: <FaMobileAlt />, name: 'Mobile-First' },
    { icon: <FaCode />, name: 'Clean Architecture' },
  ];

  return (
    <div className="bg-white dark:bg-brand-dark border-y border-gray-100 dark:border-gray-800 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Built With Industry-Standard Technology
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {techs.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-300 group cursor-pointer"
            >
              <div className="text-4xl md:text-5xl mb-2 transform group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-sm">
                {tech.icon}
              </div>
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;