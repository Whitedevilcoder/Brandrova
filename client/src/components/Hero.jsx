// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { siteData } from '../config'; // <-- Add this

const Hero = () => {
  // Framer Motion Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Animated Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
              <span className="text-xs sm:text-sm font-semibold text-brand-primary tracking-wide uppercase">
                Premium Web Agency in India
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              Bring Your Business <span className="text-brand-primary block mt-2">Online Today.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Professional, lightning-fast, and affordable websites designed for local shops, restaurants, and heavy industries. Stop losing customers to your competitors.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
                View Packages <FaArrowRight />
              </a>
              <a href={siteData.whatsappLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-brand-accent dark:hover:border-brand-accent rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:text-brand-accent dark:hover:text-brand-accent">
                <FaWhatsapp className="text-xl text-brand-accent" /> WhatsApp Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Floating Premium Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Smooth continuous floating animation */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Web Development Dashboard"
                className="w-full h-auto rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 object-cover"
              />

              {/* Floating aesthetic badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-gray-900 dark:text-white">100% Responsive</span>
              </div>
            </motion.div>

            {/* Glowing background blur behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>

      {/* Abstract background blur for the whole section */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl -z-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;