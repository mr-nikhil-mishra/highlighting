import React from "react";
import { StaggerContainer, StaggerItem } from "../AnimatedReveal";
import AnimatedReveal from "../AnimatedReveal";

const testimonials = [
  {
    name: "Baris Aslan",
    role: "Owner, Cafe",
    initial: "B",
    stars: 5,
    quote:
      "The team at this agency has been incredibly helpful in improving the marketing aspects of my café. They are dedicated, professional, and always go the extra mile to deliver the best results. I truly appreciate their support and expertise. Highly recommended!.",
  },
  {
    name: "Aezaz Ahmed",
    role: "Founder, Bloom Retail",
    initial: "A",
    stars: 5,
    quote:
      "Great experience! They managed social media for my business at an affordable price. Consistent posts, good engagement, and results. Staff helped me a lot. I highly recommend.",
  },
  {
    name: "Ricky Robins",
    role: "Marketing Head, Rickey Media",
    initial: "R",
    stars: 5,
    quote:
      "Very professional, very patient with getting everything perfect👌 Thank you so much for the amazing work.",
  },
  {
    name: "Shayan Ahmed",
    role: "Owner, Online Store",
    initial: "S",
    stars: 5,
    quote:
      "Highlight Marketing ran a paid online campaign for us for one month. We got quality leads, and many even became customers. Impressed with their strategy!",
  },
  {
    name: "Syed Sultan",
    role: "Owner, Online Store",
    initial: "S",
    stars: 5,
    quote:
      "I wanted some content done for our social media platforms for Eid. Although it was a last minute request, they got it done super fast!",
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="bg-black"
      style={{ padding: "clamp(4rem, 5vw, 6.5rem) 0", borderTop: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>

        {/* Header */}
        <div className="mb-20 relative z-10">
          <AnimatedReveal>
            <span
              className="inline-block font-black text-[#EDF406] border border-[#EDF406]/35 uppercase mb-7"
              style={{ fontSize: "11px", letterSpacing: "0.22em", padding: "0.45rem 1.2rem", borderRadius: "9999px" }}
            >
              Testimonials
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h2
              className="font-black text-white"
              style={{ fontSize: "clamp(52px, 8vw, 110px)", letterSpacing: "-0.05em", lineHeight: 0.9,fontWeight: 600 }}
            >
              What Clients <br />
              <span style={{ color: "#EDF406", fontWeight: 600, fontSize: "40px" }}>Say.</span>
            </h2>
          </AnimatedReveal>
        </div>

        {/* Cards */}
        <div className="relative w-full pb-10">
          <style>{`
            @keyframes smooth-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 12px)); } /* 12px is exactly half of gap-6 (24px) for perfect loop math */
            }
            .animate-smooth-marquee {
              animation: smooth-marquee 35s linear infinite;
            }
            .animate-smooth-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex gap-6 w-max animate-smooth-marquee">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={t.name + idx}
                className="w-[85vw] md:w-[360px] lg:w-[400px] flex-shrink-0"
              >
                <div
                  className="group flex flex-col gap-6 h-full transition-all duration-500 whitespace-normal"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "24px",
                    padding: "2.5rem 2.25rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = "1px solid rgba(237,244,6,0.3)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <span key={i} className="text-[#EDF406]" style={{ fontSize: "18px" }}>★</span>
                    ))}
                  </div>

                  <p
                    className="text-[#c5c5c5] flex-1"
                    style={{ fontSize: "16px", lineHeight: 1.75 }}
                  >
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div
                    className="flex items-center gap-4 pt-6"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="flex-shrink-0 flex items-center justify-center font-black text-black bg-[#EDF406]"
                      style={{ width: "48px", height: "48px", borderRadius: "50%", fontSize: "18px" }}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <div
                        className="font-black text-white"
                        style={{ fontSize: "15px", letterSpacing: "-0.02em" }}
                      >
                        {t.name}
                      </div>
                      <div className="text-[#555]" style={{ fontSize: "13px", marginTop: "2px" }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
