// src/components/ProblemSolution.jsx
import React from 'react';
import { FaSearch, FaStoreSlash, FaChartLine } from 'react-icons/fa';

const ProblemSolution = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-brand-dark/50 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            They Are Searching. <span className="text-red-500">Are You There?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Right now, your local customers are pulling out their phones to find places to eat, clinics to visit, and manufacturers to hire. If you aren't online, those clicks—and that revenue—are going straight to your competitors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-brand-light dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6">
              <FaStoreSlash className="text-2xl text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The Invisible Business</h3>
            <p className="text-gray-600 dark:text-gray-400">Relying only on foot traffic is risky. Without a website, new customers in your city literally don't know you exist.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-light dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all transform md:-translate-y-4">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
              <FaSearch className="text-2xl text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The Online Search</h3>
            <p className="text-gray-600 dark:text-gray-400">We build high-ranking, lightning-fast sites so when someone searches for your services locally, your business shows up first.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-light dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
              <FaChartLine className="text-2xl text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Captured Revenue</h3>
            <p className="text-gray-600 dark:text-gray-400">Turn online visitors into real-world foot traffic. We integrate WhatsApp and contact forms to drive direct inquiries.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;