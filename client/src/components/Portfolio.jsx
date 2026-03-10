// src/components/Portfolio.jsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const demos = [
    {
      title: 'Bhilai Bakery Demo',
      category: 'Local Shop / E-commerce',
      description: 'A warm, inviting layout perfect for local bakeries, cafes, and sweet shops. Features a dynamic menu and direct WhatsApp ordering.',
      imageColor: 'from-orange-400 to-red-500', // Placeholder gradient since we don't have images yet
    },
    {
      title: 'City Clinic Demo',
      category: 'Healthcare / Services',
      description: 'A highly professional, clean design for clinics and hospitals. Includes appointment booking forms and Google Maps integration.',
      imageColor: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Industrial Logistics',
      category: 'Manufacturing / B2B',
      description: 'A robust, heavy-duty architecture designed to showcase machinery, fleet capabilities, and secure client portals.',
      imageColor: 'from-gray-600 to-slate-800',
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Don't Just Take Our Word For It.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore our premium demo sites tailored for your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              
              {/* Image Placeholder using Gradients */}
              <div className={`h-48 w-full bg-gradient-to-br ${demo.imageColor} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <span className="text-white font-bold tracking-wider uppercase text-sm opacity-80">Premium Layout</span>
              </div>
              
              <div className="p-6">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2 block">
                  {demo.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {demo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm line-clamp-3">
                  {demo.description}
                </p>
                
                <button className="flex items-center gap-2 text-brand-primary font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  View Live Demo <FaExternalLinkAlt className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;