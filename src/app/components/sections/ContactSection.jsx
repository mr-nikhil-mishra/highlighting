import React, { useState } from "react";
import AnimatedReveal from "../AnimatedReveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { SITE_CONFIG } from "../../../config/site.config";

const contactDetails = [
  { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: MapPin, label: "Location", value: SITE_CONFIG.address, href: "#" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      style={{ background: "#050505", padding: "clamp(4rem, 5vw, 6.5rem) 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — info */}
          <div>
            <AnimatedReveal>
              <span
                className="inline-block font-black text-[#EDF406] border border-[#EDF406]/35 uppercase mb-8"
                style={{ fontSize: "11px", letterSpacing: "0.22em", padding: "0.45rem 1.2rem", borderRadius: "9999px" }}
              >
                Contact Us
              </span>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <h2
                className="font-black text-white mt-3"
                style={{ fontSize: "clamp(52px, 7.5vw, 105px)", letterSpacing: "-0.05em", lineHeight: 0.88,fontWeight: 600 }}
              >
                Let's Work <br />
                <span style={{ color: "#EDF406", fontWeight: 600, fontSize: "40px" }}>
                  Together.
                </span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <p
                className="text-[#a3a3a3] font-medium mt-8 max-w-sm"
                style={{ fontSize: "18px", lineHeight: 1.65 }}
              >
                Ready to accelerate your digital growth? Send us a message and let's build something exceptional.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <div className="flex flex-col gap-8 mt-12">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-5 no-underline"
                  >
                    <div
                      className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.03)",
                        color: "#EDF406",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#EDF406";
                        e.currentTarget.style.color = "#000";
                        e.currentTarget.style.border = "1px solid #EDF406";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                        e.currentTarget.style.color = "#EDF406";
                        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                      }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div
                        className="font-bold text-[#555] uppercase mb-1"
                        style={{ fontSize: "10px", letterSpacing: "0.2em" }}
                      >
                        {label}
                      </div>
                      <div
                        className="font-bold text-white group-hover:text-[#EDF406] transition-colors duration-300"
                        style={{ fontSize: "17px" }}
                      >
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedReveal>
          </div>

          {/* Right — form */}
          <AnimatedReveal delay={0.15} direction="left">
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "40px",
                padding: "3rem 2.75rem",
              }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                  <div
                    className="flex items-center justify-center font-black text-black bg-[#EDF406]"
                    style={{ width: "64px", height: "64px", borderRadius: "50%", fontSize: "28px" }}
                  >
                    ✓
                  </div>
                  <h3 className="font-black text-white" style={{ fontSize: "24px", letterSpacing: "-0.03em" }}>
                    Message Sent!
                  </h3>
                  <p className="text-[#a3a3a3]" style={{ fontSize: "16px" }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {[
                      { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                      { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                    ].map((field) => (
                      <div key={field.name} className="flex flex-col gap-2">
                        <label
                          className="font-bold text-[#555] uppercase"
                          style={{ fontSize: "10px", letterSpacing: "0.2em" }}
                        >
                          {field.label}
                        </label>
                        <input
                          name={field.name}
                          type={field.type}
                          value={form[field.name]}
                          onChange={onChange}
                          placeholder={field.placeholder}
                          required
                          className="bg-transparent text-white font-medium outline-none placeholder-[#444] transition-colors duration-300"
                          style={{
                            borderBottom: "2px solid rgba(255,255,255,0.1)",
                            padding: "0.85rem 0.25rem",
                            fontSize: "16px",
                          }}
                          onFocus={(e) => { e.target.style.borderBottomColor = "#EDF406"; }}
                          onBlur={(e) => { e.target.style.borderBottomColor = "rgba(255,255,255,0.1)"; }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#555] uppercase" style={{ fontSize: "10px", letterSpacing: "0.2em" }}>
                      Service Interested In
                    </label>
                    <input
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={onChange}
                      placeholder="e.g. SEO, Paid Ads, Website Design…"
                      required
                      className="bg-transparent text-white font-medium outline-none placeholder-[#444] transition-colors duration-300"
                      style={{ borderBottom: "2px solid rgba(255,255,255,0.1)", padding: "0.85rem 0.25rem", fontSize: "16px" }}
                      onFocus={(e) => { e.target.style.borderBottomColor = "#EDF406"; }}
                      onBlur={(e) => { e.target.style.borderBottomColor = "rgba(255,255,255,0.1)"; }}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-[#555] uppercase" style={{ fontSize: "10px", letterSpacing: "0.2em" }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell us about your project and goals…"
                      required
                      className="bg-transparent text-white font-medium outline-none placeholder-[#444] resize-none transition-colors duration-300"
                      style={{ borderBottom: "2px solid rgba(255,255,255,0.1)", padding: "0.85rem 0.25rem", fontSize: "16px" }}
                      onFocus={(e) => { e.target.style.borderBottomColor = "#EDF406"; }}
                      onBlur={(e) => { e.target.style.borderBottomColor = "rgba(255,255,255,0.1)"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 font-black text-black bg-[#EDF406] hover:bg-white transition-all duration-300 mt-2"
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "1.2rem",
                      borderRadius: "9999px",
                      boxShadow: "0 0 24px rgba(237,244,6,0.14)",
                    }}
                  >
                    <span>Send Message</span>
                    <Send size={17} strokeWidth={2.5} />
                  </button>
                </form>
              )}
            </div>
          </AnimatedReveal>

        </div>
      </div>
    </section>
  );
}
