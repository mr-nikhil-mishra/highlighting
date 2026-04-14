import React from "react";
import { StaggerContainer, StaggerItem } from "../AnimatedReveal";
import AnimatedReveal from "../AnimatedReveal";

const services = [
  {
    title: "Website Designing",
    description: "Bespoke, high-converting web experiences built for performance and seamless UX.",
    num: "01",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "SEO Services",
    description: "Data-driven search engine optimization for sustainable organic traffic and top rankings.",
    num: "02",
    image: "https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Local SEO",
    description: "Dominate local search results and capture ready-to-buy customers in your market.",
    num: "03",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Social Media Marketing",
    description: "Platform-native campaigns that build communities and drive measurable engagement.",
    num: "04",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Content Marketing",
    description: "Authority-building content strategies that attract and convert your ideal audience.",
    num: "05",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Paid Media Advertising",
    description: "High-yield PPC campaigns engineered for maximum return across Google and Meta.",
    num: "06",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Email Marketing",
    description: "Automated email sequences that nurture leads and grow recurring revenue.",
    num: "07",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Programmatic Advertising",
    description: "AI-powered media buying to reach your exact audience across premium networks.",
    num: "08",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{ background: "#050505", padding: "9rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Section header */}
        <div style={{ marginBottom: "5rem" }}>
          <AnimatedReveal>
            <span
              style={{
                display: "inline-block",
                fontWeight: 600,
                color: "#EDF406",
                border: "1px solid rgba(237,244,6,0.35)",
                textTransform: "uppercase",
                fontSize: "11px",
                letterSpacing: "0.22em",
                padding: "0.45rem 1.2rem",
                borderRadius: "9999px",
                marginBottom: "1.75rem",
              }}
            >
              What We Do
            </span>
          </AnimatedReveal>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <AnimatedReveal delay={0.1}>
              <h2
                style={{
                  fontWeight: 600,
                  color: "#ffffff",
                  fontSize: "clamp(52px, 8.5vw, 115px)",
                  letterSpacing: "-0.055em",
                  lineHeight: 0.88,
                  margin: 0,
                }}
              >
                Here's What{" "}
                <br />
                <span style={{ color: "#EDF406", fontWeight: 600, fontSize: "40px" }}>
                  We Do.
                </span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <p
                style={{
                  color: "#a3a3a3",
                  fontSize: "17px",
                  lineHeight: 1.65,
                  fontWeight: 500,
                  maxWidth: "280px",
                  margin: 0,
                }}
              >
                Full-spectrum digital services engineered to scale your brand and dominate your market.
              </p>
            </AnimatedReveal>
          </div>
        </div>

        {/* 4-column card grid with images */}
        <StaggerContainer stagger={0.07}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.25rem",
            }}
            className="services-grid"
          >
            {services.map((svc) => (
              <StaggerItem key={svc.title}>
                <div
                  className="service-card group"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "rgba(237,244,6,0.4)";
                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Card image */}
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                        display: "block",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                    {/* Number tag */}
                    <span
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "12px",
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(8px)",
                        color: "#EDF406",
                        fontWeight: 600,
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        padding: "3px 9px",
                        borderRadius: "9999px",
                        border: "1px solid rgba(237,244,6,0.3)",
                      }}
                    >
                      {svc.num}
                    </span>
                  </div>

                  {/* Card content */}
                  <div style={{ padding: "1.5rem 1.4rem" }}>
                    <h3
                      style={{
                        fontWeight: 600,
                        color: "#ffffff",
                        fontSize: "17px",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                        marginBottom: "0.6rem",
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "13.5px",
                        lineHeight: 1.65,
                        margin: 0,
                        transition: "color 0.3s",
                      }}
                    >
                      {svc.description}
                    </p>

                    {/* Arrow */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        marginTop: "1.1rem",
                        fontWeight: 600,
                        color: "#EDF406",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      <span>Learn More</span>
                      <span style={{ fontSize: "14px", transform: "rotate(-45deg)", display: "inline-block" }}>→</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      {/* Responsive grid breakpoints */}
      <style>{`
        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: repeat(1, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
