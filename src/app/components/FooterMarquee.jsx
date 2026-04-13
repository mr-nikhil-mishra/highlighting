import React from 'react';
import { motion } from 'motion/react';

export default function FooterMarquee() {
  const words = ["MARKETING", "SEO", "WEBSITE DESIGN", "GOOGLE ADS", "SOCIAL MEDIA", "VIDEO EDITING"];
  
  return (
    <div className="relative py-24 bg-black overflow-hidden border-t border-[#1a1a1a]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap items-center"
        >
          {/* Double the words to create seamless loop */}
          {[...words, ...words, ...words, ...words].map((word, i) => (
            <div key={i} className="flex items-center mx-8">
              <span 
                className="text-6xl md:text-8xl font-black text-transparent px-4"
                style={{ 
                  WebkitTextStroke: "1.5px #333",
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {word}
              </span>
              <span className="text-[#dfff00] text-4xl">✽</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col md:flex-row items-center justify-between border-t border-[#262626] pt-8 text-gray-500 font-medium">
        <p>© 2026 Digital By Zia. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#dfff00] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#dfff00] transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}
