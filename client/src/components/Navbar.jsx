// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed w-full z-50 top-0 transition-colors duration-300 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
              Brand<span className="text-brand-primary">rova</span>.
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-brand-primary dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-600 hover:text-brand-primary dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Portfolio</a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-primary dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-brand-primary dark:text-gray-300 dark:hover:text-white font-medium transition-colors">Contact</a>
            
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>

            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-brand-accent hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105">
              <FaWhatsapp className="text-xl" /> Let's Chat
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-gray-600 dark:text-gray-300">
              {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 dark:text-gray-300">
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-6 space-y-3 shadow-lg absolute w-full`}>
        <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 dark:text-gray-300 font-medium hover:text-brand-primary">Services</a>
        <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 dark:text-gray-300 font-medium hover:text-brand-primary">Portfolio</a>
        <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 dark:text-gray-300 font-medium hover:text-brand-primary">Pricing</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 dark:text-gray-300 font-medium hover:text-brand-primary">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;