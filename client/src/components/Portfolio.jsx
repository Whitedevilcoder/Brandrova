// src/components/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const demos = [
    {
      title: 'The Chocolate Story',
      category: 'Premium Café & Restro',
      description: 'A luxurious, high-converting layout built for a premium café. Features a digital menu, interactive gallery, and seamless WhatsApp ordering integration.',
      // Updated to a premium dark-mode cafe interior image that matches the demo's vibe
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
      link: 'https://the-chocolate-story-demo.netlify.app/',
    },
    {
      title: 'City Clinic Demo',
      category: 'Healthcare / Services',
      description: 'A highly professional, clean design for clinics and hospitals. Includes appointment booking forms and Google Maps integration.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#', 
    },
    {
      title: 'Industrial Logistics',
      category: 'Manufacturing / B2B',
      description: 'A robust, heavy-duty architecture designed to showcase machinery, fleet capabilities, and secure client portals.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#', 
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-white dark:bg-brand-dark border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-2 block">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Don't Just Take Our Word For It.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore our premium demo layouts tailored specifically for your industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              
              {/* Real Image with Hover Zoom */}
              <div className="h-56 w-full relative overflow-hidden shrink-0">
                <img 
                  src={demo.image} 
                  alt={demo.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Image overlay clickable */}
                <a href={demo.link} target={demo.link !== '#' ? "_blank" : "_self"} rel="noreferrer" className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                  <span className="text-white font-bold tracking-wider uppercase text-sm border border-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {demo.link !== '#' ? 'View Live Site' : 'Coming Soon'}
                  </span>
                </a>
              </div>
              
              <div className="p-8 relative bg-white dark:bg-gray-800 transform transition-transform duration-500 flex flex-col flex-grow">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2 block">
                  {demo.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {demo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm line-clamp-3 flex-grow">
                  {demo.description}
                </p>
                
                {/* Launch Button */}
                <a 
                  href={demo.link} 
                  target={demo.link !== '#' ? "_blank" : "_self"} 
                  rel="noreferrer" 
                  className={`inline-flex items-center gap-2 font-semibold transition-colors group-hover:gap-3 w-fit ${demo.link !== '#' ? 'text-brand-primary hover:text-blue-700 dark:hover:text-blue-400' : 'text-gray-400 cursor-not-allowed'}`}
                >
                  {demo.link !== '#' ? 'Launch Demo' : 'In Development'} <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;