import React from 'react';
import AnimatedReveal from '../AnimatedReveal';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#050505] relative border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <AnimatedReveal direction="right">
             <div className="bg-[#050505] border border-[#1a1a1a] p-10 md:p-14 rounded-[40px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#dfff00]/5 blur-3xl pointer-events-none"></div>
                <h3 className="text-4xl font-black text-white mb-10 tracking-tight">Initiate Your Growth Phase.</h3>
                <form className="flex flex-col gap-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Full Name *" 
                        className="w-full bg-transparent border-b-2 border-[#1a1a1a] focus:border-[#dfff00] text-white py-4 px-2 outline-none transition-colors rounded-none placeholder-gray-600 font-medium"
                        required
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address *" 
                        className="w-full bg-transparent border-b-2 border-[#1a1a1a] focus:border-[#dfff00] text-white py-4 px-2 outline-none transition-colors rounded-none placeholder-gray-600 font-medium"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Target Objective *" 
                      className="w-full bg-transparent border-b-2 border-[#1a1a1a] focus:border-[#dfff00] text-white py-4 px-2 outline-none transition-colors rounded-none placeholder-gray-600 font-medium"
                      required
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Message Details" 
                      rows="4"
                      className="w-full bg-transparent border-b-2 border-[#1a1a1a] focus:border-[#dfff00] text-white py-4 px-2 outline-none transition-colors resize-none rounded-none placeholder-gray-600 font-medium"
                      required
                    ></textarea>
                  </div>
                  <button className="bg-[#dfff00] text-black font-black text-sm uppercase tracking-widest py-6 mt-6 hover:bg-white transition-colors duration-300 w-full rounded-none shadow-[0_0_20px_rgba(223,255,0,0.15)]">
                    Submit Proposal Request
                  </button>
                </form>
             </div>
          </AnimatedReveal>

          <div className="flex flex-col justify-center py-10">
            <AnimatedReveal delay={0.2}>
              <h2 className="text-7xl md:text-8xl lg:text-[100px] font-black text-white leading-[0.9] tracking-tighter mb-16">
                Have a <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: "2px #dfff00" }}>Project</span><br/>
                in Mind?
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.4}>
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-[#111] rounded-full flex items-center justify-center border border-[#333] text-[#dfff00] group-hover:bg-[#dfff00] group-hover:text-black group-hover:border-[#dfff00] transition-colors duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-[#dfff00] uppercase tracking-widest text-xs font-bold mb-2">Call Us</p>
                    <p className="text-white font-black text-3xl tracking-tight group-hover:text-[#dfff00] transition-colors">+44 (74) 5906-8207</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-[#111] rounded-full flex items-center justify-center border border-[#333] text-[#dfff00] group-hover:bg-[#dfff00] group-hover:text-black group-hover:border-[#dfff00] transition-colors duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-[#dfff00] uppercase tracking-widest text-xs font-bold mb-2">Email</p>
                    <p className="text-white font-black text-3xl tracking-tight group-hover:text-[#dfff00] transition-colors">Contact@mediapulse360.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-[#111] rounded-full flex items-center justify-center border border-[#333] text-[#dfff00] group-hover:bg-[#dfff00] group-hover:text-black group-hover:border-[#dfff00] transition-colors duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-[#dfff00] uppercase tracking-widest text-xs font-bold mb-2">Location</p>
                    <p className="text-white font-black text-3xl tracking-tight group-hover:text-[#dfff00] transition-colors">London, United Kingdom</p>
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
