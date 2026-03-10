// src/components/ProblemSolution.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaStoreSlash, FaChartLine } from 'react-icons/fa';

const ProblemSolution = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 relative bg-gray-50 dark:bg-brand-dark/50 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            They Are Searching. <span className="text-red-500">Are You There?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Right now, local customers are pulling out their phones to find places to eat, clinics to visit, and services to hire. If you aren't online, that revenue is going straight to your competitors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FaStoreSlash className="text-2xl text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The Invisible Business</h3>
            <p className="text-gray-600 dark:text-gray-400">Relying only on foot traffic is risky. Without a website, new customers in your city literally don't know you exist.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform md:-translate-y-4 group"
          >
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FaSearch className="text-2xl text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The Online Search</h3>
            <p className="text-gray-600 dark:text-gray-400">We build lightning-fast, SEO-optimized sites so when someone searches for your services locally, you show up first.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5 }}
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FaChartLine className="text-2xl text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Captured Revenue</h3>
            <p className="text-gray-600 dark:text-gray-400">Turn online visitors into real-world foot traffic. We integrate WhatsApp and contact forms to drive direct inquiries to your phone.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;