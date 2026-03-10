// src/components/Hero.jsx
import React from 'react';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
          <span className="text-xs sm:text-sm font-semibold text-brand-primary tracking-wide uppercase">
            Premium Digital Agency
          </span>
        </div>

        {/* Responsive Typography */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Bring Your Business <span className="text-brand-primary block mt-2">Online Today.</span>
        </h1>
        
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed px-2">
          Professional, fast, and affordable websites designed for local shops, restaurants, and heavy industries in India. Stop losing customers to your competitors.
        </p>
        
        {/* Buttons stack on mobile, side-by-side on tablet+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
            View Packages <FaArrowRight />
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-brand-accent dark:hover:border-brand-accent rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:text-brand-accent dark:hover:text-brand-accent">
            <FaWhatsapp className="text-xl text-brand-accent" /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Abstract background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-brand-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;