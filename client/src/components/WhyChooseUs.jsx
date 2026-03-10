// src/components/WhyChooseUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaRocket, FaWallet, FaClock, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaServer />,
      title: 'Free Hosting Setup',
      description: 'We handle the deployment on reliable, lightning-fast servers so you don’t have to worry about the tech.',
    },
    {
      icon: <FaRocket />,
      title: 'Dynamic & Fast',
      description: 'Built with React and Node.js. Your website will load instantly, keeping your customers engaged.',
    },
    {
      icon: <FaWallet />,
      title: 'Pocket Friendly',
      description: 'Premium agency quality without the massive agency price tag. Perfect for bootstrapping local businesses.',
    },
    {
      icon: <FaClock />,
      title: 'On-Time Delivery',
      description: 'Strict timelines. We deliver your fully functional, responsive website exactly when we promise.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Architecture',
      description: 'Industry-standard security practices to ensure your data and your customers\' data is protected.',
    },
    {
      icon: <FaHeadset />,
      title: 'Ongoing Support',
      description: 'We don’t just build it and vanish. We provide ongoing maintenance to keep your site running smoothly.',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-brand-light dark:bg-brand-dark border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
      
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-2 block">Why Choose Us?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Top Web Developers for Your Business.
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-brand-primary dark:hover:border-brand-primary transition-all duration-300 group hover:shadow-2xl hover:shadow-brand-primary/10"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 text-brand-primary text-2xl group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;