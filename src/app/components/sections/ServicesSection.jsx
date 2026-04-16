import React from "react";
import { useNavigate } from "react-router";
import { StaggerContainer, StaggerItem } from "../AnimatedReveal";
import AnimatedReveal from "../AnimatedReveal";
import { services } from "../../data/services";

export default function ServicesSection() {
  const navigate = useNavigate();
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
                  We&nbsp;Do.
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
                  onClick={() => navigate(`/services/${svc.slug}`)}
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
