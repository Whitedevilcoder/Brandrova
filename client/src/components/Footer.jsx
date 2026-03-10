// src/components/Footer.jsx
import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-brand-dark border-t border-gray-200 dark:border-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          
          {/* Left Side: Pitch & Direct Contact */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Dominate Your Local Market?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Stop losing customers. Let's build a digital presence that actually drives foot traffic and revenue to your business.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-brand-primary shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <a href="mailto:hello@brandrova.onrender.com" className="hover:text-brand-primary transition-colors text-lg break-all">
                  hello@brandrova.onrender.com
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-brand-accent shrink-0">
                  <FaWhatsapp className="text-xl" />
                </div>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors text-lg">
                  +91 99999 99999
                </a>
              </div>
            </div>

            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/30 w-full sm:w-auto">
              <FaWhatsapp className="text-2xl" /> Message on WhatsApp
            </a>
          </div>

          {/* Right Side: Contact Form Placeholder */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
            
            {/* Form prevents default submission so it doesn't refresh the page before you build your backend */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Backend integration pending!'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">How can we help?</label>
                <textarea rows="4" placeholder="Tell us about your business goals..." className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-primary hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Brand<span className="text-brand-primary">rova</span>.
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Brandrova Digital Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;