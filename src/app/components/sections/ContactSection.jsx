import React from 'react';
import AnimatedReveal from '../AnimatedReveal';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-start">
          
          <AnimatedReveal direction="right">
             <div className="bg-[#050505] border border-[#1a1a1a] p-10 md:p-12 rounded-3xl">
                <h3 className="text-3xl font-black text-white mb-8">Send a message</h3>
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Name *" 
                        className="w-full bg-transparent border-b border-[#333] focus:border-[#dfff00] text-white py-4 px-2 outline-none transition-colors rounded-none placeholder-gray-600"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email *" 
                        className="w-full bg-transparent border-b border-[#333] focus:border-[#dfff00] text-white py-4 px-2 outline-none transition-colors rounded-none placeholder-gray-600"
                      />
                    </div>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Looking For *" 
                      className="w-full bg-transparent border-b border-[#333] focus:border-[#dfff00] text-white py-4 px-2 outline-none transition-colors rounded-none placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Message" 
                      rows="4"
                      className="w-full bg-transparent border-b border-[#333] focus:border-[#dfff00] text-white py-4 px-2 outline-none transition-colors resize-none rounded-none placeholder-gray-600"
                    ></textarea>
                  </div>
                  <button className="bg-[#dfff00] text-black font-bold text-lg py-5 mt-4 hover:bg-white transition-colors duration-300 w-full rounded-md shadow-lg">
                    Submit Message
                  </button>
                </form>
             </div>
          </AnimatedReveal>

          <div className="flex flex-col justify-center">
            <AnimatedReveal delay={0.2}>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-[-0.04em] mb-12">
                Let's make <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: "1px #dfff00" }}>something</span><br/>
                great together.
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.4}>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center border border-[#333] text-[#dfff00]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-1">Email Me</p>
                    <p className="text-white font-bold text-xl hover:text-[#dfff00] cursor-pointer transition-colors">hello@dbz.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center border border-[#333] text-[#dfff00]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-1">Call Me</p>
                    <p className="text-white font-bold text-xl hover:text-[#dfff00] cursor-pointer transition-colors">+971 54277-6589</p>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
