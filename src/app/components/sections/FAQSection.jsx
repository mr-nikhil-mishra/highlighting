import React, { useState } from "react";
import AnimatedReveal from "../AnimatedReveal";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { SITE_CONFIG } from "../../../config/site.config";

const EASE = [0.16, 1, 0.3, 1];

const faqs = [
  {
    q: "What digital marketing services do you offer?",
    a: "We offer a comprehensive suite of digital services: Technical SEO, Local SEO, PPC & Paid Media, Social Media Marketing, Content Marketing, Email Marketing, Programmatic Advertising, and bespoke Web Design & Development.",
  },
  {
    q: "How do you develop a strategy for my business?",
    a: "We begin with an in-depth discovery session and a full audit of your current digital ecosystem. We then reverse-engineer your top competitors and build a data-backed, bespoke growth blueprint tailored to your specific goals.",
  },
  {
    q: "How quickly can I expect measurable results?",
    a: "Paid campaigns (PPC, social ads) typically generate traction within days to weeks. SEO builds compounding organic growth over a 3–6 month runway. Long-term content and brand strategies deliver the most sustainable results over time.",
  },
  {
    q: "Which industries do you have experience in?",
    a: "We've delivered results across e-commerce, healthcare, real estate, automotive, travel, finance, hospitality, tech SaaS, and professional services — adapting our strategy to each sector's unique dynamics.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "We don't believe in locking clients in. We operate on flexible retainers and transparent month-over-month agreements, with the philosophy that our results should earn your continued business — not a contract.",
  },
  {
    q: "Can you work alongside our internal team?",
    a: "Absolutely. We frequently act as a strategic extension of in-house marketing teams — filling gaps, providing specialist expertise, or managing specific channels while you retain overall brand control.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section
      id="faq"
      style={{ background: "#050505", padding: "9rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — sticky */}
          <div className="lg:sticky lg:top-32">
            <AnimatedReveal>
              <span
                className="inline-block font-black text-[#EDF406] border border-[#EDF406]/35 uppercase mb-8"
                style={{ fontSize: "11px", letterSpacing: "0.22em", padding: "0.45rem 1.2rem", borderRadius: "9999px" }}
              >
                FAQs
              </span>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <h2
                className="font-black text-white mt-3"
                style={{ fontSize: "clamp(44px, 5.5vw, 76px)", letterSpacing: "-0.05em", lineHeight: 0.92, fontWeight: 600 }}
              >
                Frequently <br /> Asked <br />
                <span style={{ color: "#EDF406", fontWeight: 600, fontSize: "40px" }}>
                  Questions.
                </span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <p className="text-[#a3a3a3] mt-8 font-medium max-w-xs" style={{ fontSize: "17px", lineHeight: 1.65 }}>
                Everything you need to know about working with HIGHLIGHT Marketing Management.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-10 font-black text-black bg-[#EDF406] hover:bg-white transition-colors duration-300"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "1rem 2.2rem",
                  borderRadius: "9999px",
                  display: "inline-block",
                }}
              >
                Ask a Question
              </button>
            </AnimatedReveal>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <AnimatedReveal key={i} delay={i * 0.07}>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      border: isOpen ? "1px solid rgba(237,244,6,0.35)" : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "20px",
                    }}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-5 text-left"
                      style={{ padding: "1.4rem 1.6rem" }}
                    >
                      <span
                        className="font-black transition-colors duration-300"
                        style={{
                          fontSize: "17px",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.3,
                          color: isOpen ? "#EDF406" : "#ffffff",
                        }}
                      >
                        {faq.q}
                      </span>
                      <span
                        className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          border: isOpen ? "1px solid #EDF406" : "1px solid rgba(255,255,255,0.18)",
                          background: isOpen ? "#EDF406" : "transparent",
                          color: isOpen ? "#000" : "#fff",
                        }}
                      >
                        {isOpen ? <Minus size={17} strokeWidth={3} /> : <Plus size={17} strokeWidth={3} />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p
                            className="text-[#a3a3a3]"
                            style={{ padding: "0 1.6rem 1.6rem", fontSize: "16px", lineHeight: 1.72 }}
                          >
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
