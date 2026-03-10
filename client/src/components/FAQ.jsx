// src/components/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "For our Digital Starter package, we typically deliver within 3-5 days. Professional and Industrial custom solutions take between 2 to 4 weeks depending on the complexity and features required."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Absolutely. 100% of our websites are built with a 'mobile-first' approach. We ensure your site looks perfect and loads instantly on all smartphones, tablets, and desktops."
    },
    {
      question: "Do I own the website once it's finished?",
      answer: "Yes! Once the project is paid in full, you own all the rights to the code, the design, and the content. We simply act as your technical partners to keep it running smoothly."
    },
    {
      question: "What if I need updates to the site later?",
      answer: "We offer ongoing maintenance packages. If you just need a one-off text or image update, just WhatsApp us, and we handle it quickly at a standard hourly rate."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-brand-dark/50 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-gray-900 dark:text-white text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-brand-primary flex-shrink-0"
                >
                  <FaChevronDown />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;