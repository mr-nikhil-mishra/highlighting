import React from "react";
import { StaggerContainer, StaggerItem } from "../AnimatedReveal";
import AnimatedReveal from "../AnimatedReveal";

const tabs = ["Social Media Management", "Website Designing", "Google / Meta Ads", "SEO Content Writing"];

const portfolioData = {
  "Social Media Management": [
    {
      title: "",
      image: "/seo/printingAndPackaging1.mp4",
    },
    {
      title: "",
      image: "/seo/printingAndPackaging2.mp4",
    },
    {
      title: "",
      image: "/seo/printingAndPackaging3.mp4",
    },
  ],
  "Website Designing": [
    {
      title: "",
      image: "/website/nahdimandi.png",
    },

    {
      title: "",
      image: "/website/maisonhaniel.png",
    },
    {
      title: "",
      image: "/website/wazirone.png",
    },
    {
      title: "",
      image: "/website/coffee.png",
    },
    {
      title: "",
      image: "/website/threesquares.png",
    },

  ],
  "Google Ads": [
    {
      title: "Google Ads Growth",
      image: "/ads/g1.jpeg",
    },
    {
      title: "Google Ads Performance",
      image: "/ads/g2.jpeg",
    },
  ],
  "Meta Ads": [
    {
      title: "Meta Campaigns Setup",
      image: "/ads/m1.jpeg",
    },
  ],
  "Printing and Packaging": [
    {
      title: "",
      image: "/pandp/p1.mp4",
    },
    {
      title: "",
      image: "/pandp/p2.mp4",
    },
    {
      title: "",
      image: "/pandp/p3.mp4",
    },
    {
      title: "",
      image: "/pandp/p4.mp4",
    },
    {
      title: "",
      image: "/pandp/p5.mp4",
    },
    {
      title: "",
      image: "/pandp/p6.mp4",
    },
  ],
};

function CustomCarousel({ items, imageFit = "cover", aspectRatio = "3/4", overlay = true, playbackRate = 1.0 }) {
  const scrollRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Auto-scroll runs when not strictly hovered (or customize based on preference)
      // The user requested: "automatic scroll or and one can do with button"
      if (scrollRef.current && !isHovered) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });

  return (
    <div 
      className="relative group w-full pt-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={scrollRef} 
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
        style={{ scrollBehavior: 'smooth' }}
      >
        {items.map((item, idx) => (
          <div key={item.title + idx} className="snap-center sm:snap-start flex-shrink-0 w-[85%] sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
            <div className="group/card relative overflow-hidden rounded-2xl cursor-pointer border border-white/5 flex items-center justify-center" style={{ aspectRatio, background: "#0a0a0a" }}>
              {item.image?.endsWith('.mp4') ? (
                <video
                  src={item.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  ref={(el) => { if (el) el.playbackRate = playbackRate; }}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ${imageFit === "contain" ? "object-contain opacity-95 group-hover/card:opacity-100 p-2" : "object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105"}`}
                />
              ) : (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ${imageFit === "contain" ? "object-contain opacity-95 group-hover/card:opacity-100 p-2" : "object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105"}`} 
                />
              )}
              {overlay && item.title && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-8 left-8 right-8 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-400 pointer-events-none">
                    <h4 className="font-black text-white" style={{ fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>{item.title}</h4>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={scrollLeft} 
        className="absolute left-[-20px] lg:left-[-25px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#EDF406] text-black font-black opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(237,244,6,0.2)]"
      >
        ←
      </button>
      <button 
        onClick={scrollRight} 
        className="absolute right-[-20px] lg:right-[-25px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#EDF406] text-black font-black opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(237,244,6,0.2)]"
      >
        →
      </button>
    </div>
  );
}

function WebsiteDesignCard({ item }) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl w-full cursor-pointer"
      style={{
        height: "450px",
        background: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="absolute inset-x-0 w-full" style={{ height: "100%", overflow: "hidden" }}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto block transition-transform ease-linear duration-[5000ms]"
          style={{
            transform: isActive ? "translateY(calc(450px - 100%))" : "translateY(0)",
          }}
        />
      </div>
      
      {/* Gradient fixed at bottom */}
      <div className="absolute left-0 right-0 bottom-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent h-24" />
      
      {item.title && (
        <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
          <div
            className="inline-block px-4 py-2 font-black text-black bg-[#EDF406] uppercase rounded-full shadow-[0_0_20px_rgba(237,244,6,0.2)]"
            style={{ fontSize: "10px", letterSpacing: "0.15em" }}
          >
            {item.title}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section
      id="portfolio"
      className="bg-black"
      style={{ padding: "clamp(4rem, 5vw, 6.5rem) 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* Header */}
        <div className="mb-32">
          <AnimatedReveal>
            <span
              className="inline-block font-black text-[#EDF406] border border-[#EDF406]/35 uppercase mb-7"
              style={{ fontSize: "11px", letterSpacing: "0.22em", padding: "0.45rem 1.2rem", borderRadius: "9999px" }}
            >
              MY WORKS
            </span>
          </AnimatedReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <AnimatedReveal delay={0.1}>
              <h2
                className="font-black text-white w-full max-w-none"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  fontWeight: 600,
                  paddingBottom: "30px"
                }}
              >
                Where Ideas Turn Into Impact
              </h2>
            </AnimatedReveal>
          </div>
        </div>

        {/* Vertically Stacked Categories */}
        <div className="flex flex-col gap-28 pt-4">
          {Object.entries(portfolioData).map(([category, items], sectionIdx) => (
            <div key={category} className="flex flex-col gap-10">
              
              <AnimatedReveal>
                <h3 
                  className="font-black text-[#EDF406]"
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    letterSpacing: "-0.02em"
                  }}
                >
                  {category}
                </h3>
              </AnimatedReveal>

              {category === "Social Media Management" ? (
                <AnimatedReveal delay={0.2}>
                  <CustomCarousel items={items} imageFit="cover" aspectRatio="9/16" overlay={true} />
                </AnimatedReveal>
              ) : category === "Printing and Packaging" ? (
                <AnimatedReveal delay={0.2}>
                  <CustomCarousel items={items} imageFit="cover" aspectRatio="9/16" overlay={false} playbackRate={0.90} />
                </AnimatedReveal>
              ) : (
                <StaggerContainer 
                  stagger={0.1} 
                  className={category === "Google Ads" || category === "Meta Ads" ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}
                >
                  {items.map((item, idx) => {
                    
                    // Website Designing specific hover-to-scroll implementation
                    if (category === "Website Designing") {
                      return (
                        <StaggerItem key={idx}>
                          <WebsiteDesignCard item={item} />
                        </StaggerItem>
                      );
                    }

                    // Specific rendering for Ads to prevent zooming
                    if (category === "Google Ads" || category === "Meta Ads") {
                      return (
                        <StaggerItem key={item.title + idx} className="lg:col-span-1">
                          <div 
                            className="group rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] flex items-center justify-center cursor-pointer"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            />
                          </div>
                        </StaggerItem>
                      );
                    }

                    return null;
                  })}
                </StaggerContainer>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
