import React, { useState } from 'react';
import AnimatedReveal from '../AnimatedReveal';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setIndex] = useState(0);

  const faqs = [
    {
      q: "What specific marketing vectors do you manage?",
      a: "We deploy end-to-end digital solutions including Technical SEO, PPC Advertising, Social Media Growth, Programmatic Media Buying, Content/Email Loops, and bespoke Web Development."
    },
    {
      q: "How is your strategy engineered?",
      a: "We initiate with a deep-dive audit of your digital ecosystem, reverse-engineering your competitors to structure a data-backed blueprint tailored for explosive growth."
    },
    {
      q: "What is the expected timeline for measurable ROI?",
      a: "Aggressive paid campaigns yield traction within days, while foundational SEO scales into compounding organic growth over a realistic 3-6 month runway."
    },
    {
      q: "Do you enforce rigid long-term contracts?",
      a: "We operate on absolute performance and trust. We offer flexible retainers mapped to your growth cadence, focusing entirely on earning your retention month over month."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-24 flex flex-col items-center">
          <AnimatedReveal>
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95]">
               Frequently Asked<br/>Questions.
             </h2>
          </AnimatedReveal>
        </div>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedReveal key={index} delay={index * 0.1}>
                <div 
                  className={`border-b border-[#1a1a1a] pb-8 transition-colors duration-300`}
                >
                  <button 
                    onClick={() => setIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between text-left py-4 group"
                  >
                    <span className={`text-2xl md:text-3xl font-black tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#dfff00]' : 'text-white group-hover:text-[#dfff00]'}`}>
                      {faq.q}
                    </span>
                    <span className={`ml-6 p-3 rounded-full border transition-all duration-300 ${isOpen ? 'border-[#dfff00] text-[#dfff00] bg-[#dfff00]/10' : 'border-[#333] text-gray-500 group-hover:border-[#dfff00] group-hover:text-[#dfff00]'}`}>
                      {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 text-xl leading-relaxed pt-4 pb-4 font-medium max-w-3xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedReveal>
            )
          })}
        </div>

      </div>
    </section>
  );
}
