// src/components/Pricing.jsx
import React from 'react';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: 'The Digital Starter',
      price: '₹4,999',
      target: 'Perfect for local shops & bakeries.',
      features: [
        '1-3 Page Responsive Website',
        'Mobile-First Design',
        'Google Business Profile Linking',
        'Basic SEO Setup',
        'Delivery in 3 Days'
      ],
      isPopular: false,
      ctaText: 'Start Building',
      ctaLink: 'https://wa.me/919999999999?text=Hi,%20I%20want%20The%20Digital%20Starter%20package.'
    },
    {
      name: 'The Professional Front',
      price: '₹12,000',
      target: 'Perfect for established clinics & restaurants.',
      features: [
        '4-6 Page Premium Website',
        'Custom Contact Forms',
        'Direct WhatsApp Integration',
        'Advanced SEO & Speed Optimization',
        '1 Month Free Maintenance'
      ],
      isPopular: true, // We will use this to highlight the middle card
      ctaText: 'Get The Professional',
      ctaLink: 'https://wa.me/919999999999?text=Hi,%20I%20want%20The%20Professional%20Front%20package.'
    },
    {
      name: 'The Industrial Solution',
      price: 'Custom',
      target: 'Perfect for logistics & manufacturing.',
      features: [
        'Custom Backend Architecture',
        'Secure Client Portals',
        'Heavy-duty Server Setup',
        'Inventory/Fleet Showcase',
        'Dedicated 24/7 Support'
      ],
      isPopular: false,
      ctaText: 'Request a Quote',
      ctaLink: 'https://wa.me/919999999999?text=Hi,%20I%20need%20a%20custom%20Industrial%20Solution.'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transparent Pricing. <span className="text-brand-primary">No Hidden Fees.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the perfect growth engine for your business. We handle the tech so you can handle your customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 border ${
                plan.isPopular 
                  ? 'border-brand-primary ring-4 ring-brand-primary/20 shadow-2xl scale-100 md:scale-105 z-10' 
                  : 'border-gray-200 dark:border-gray-700 shadow-lg'
              } transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 h-10">{plan.target}</p>
                <div className="mt-6 flex justify-center items-baseline text-4xl font-extrabold text-gray-900 dark:text-white">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                    <FaCheckCircle className={`mt-1 mr-3 flex-shrink-0 ${plan.isPopular ? 'text-brand-primary' : 'text-brand-accent'}`} />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={plan.ctaLink}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  plan.isPopular
                    ? 'bg-brand-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}
              >
                {plan.ctaText} <FaWhatsapp className={plan.isPopular ? 'text-white' : 'text-brand-accent'} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;