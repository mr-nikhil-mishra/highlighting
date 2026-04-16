/**
 * @file translations/index.js
 * @description Centralized linguistic payload for the application.
 * All text rendered on the UI should strictly pull from this dictionary using 
 * the LanguageContext to ensure the App remains scalable for future localized variants (e.g., Arabic).
 * 
 * @module Data/Translations
 */

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      blog: "Blogs",
    },
    hero: {
      badge: "DIGITAL MARKETING AGENCY",
      prefixes: ["FUEL YOUR GROWTH WITH", "RESULTS-DRIVEN"],
      words: ["DIGITAL MARKETING", "STRATEGIES"],
      subtitle: "We help businesses like yours attract more traffic, generate qualified leads, and increase sales—using strategies that actually work.",
      cta1: "See Our Work",
      cta2: "Let's Talk",
      trustText: "Trusted by businesses",
      trustHighlight: "Worldwide",
      scroll: "SCROLL DOWN",
    },
    services: {
      badge: "WHAT WE DO",
      titleMain: "OUR CORE",
      titleAccent: "SERVICES",
      titleEnd: "TO SCALE YOUR BUSINESS",
      subtitle: "Whether you’re looking to design a stunning website, optimize your SEO, engage your audience on social media, or launch a high-impact ad campaign, we’ve got you covered.",
      learnMore: "View More",
      items: [
        { title: "Website Designing", desc: "Custom, responsive website designs that convert visitors into loyal customers." },
        { title: "SEO Services", desc: "Rank higher on search engines and dominate your industry's search results." },
        { title: "Local SEO Services", desc: "Attract nearby customers and dominate local search rankings.", },
        { title: "Social Media Marketing", desc: "Engage your audience and build brand loyalty across all platforms.", },
        { title: "Content Marketing", desc: "High-quality content strategies that tell your brand's unique story.", },
        { title: "Paid Media Advertising", desc: "Targeted PPC campaigns designed to maximize ROI and generate instant leads.", },
        { title: "Email Marketing", desc: "Automated, personalized email campaigns that nurture and close leads.", },
        { title: "Programmatic Ads", desc: "Automated, data-driven ad buying to reach your audience at the perfect moment.", }
      ],
    },
    whyChooseUs: {
      badge: "WHY HIGHLIGHT Marketing Management?",
      titleMain: "THE RIGHT",
      titleAccent: "CHOICE",
      subtitle: "We blend creativity with proven tactics to boost visibility and drive action.",
      reasons: [
        { number: "01", title: "Full-Service Expertise", desc: "From SEO and PPC to social media and content marketing, we cover every aspect of digital growth." },
        { number: "02", title: "Customized Strategies", desc: "No cookie-cutter plans—everything is tailored to your unique goals and audience." },
        { number: "03", title: "Data-Driven Results", desc: "We use analytics and performance tracking to optimize campaigns for maximum ROI." },
        { number: "04", title: "Transparent Communication", desc: "Clear reporting, honest insights, and consistent updates keep you in the loop." },
        { number: "05", title: "Creative & Conversion-Focused", desc: "We blend creativity with proven tactics to boost visibility and drive action." },
        { number: "06", title: "Proven Track Record", desc: "Trusted by startups, SMBs, and enterprises across industries to scale their businesses." }
      ],
    },
    footer: {
      desc: "Partner with a top digital marketing agency that delivers measurable results through SEO, PPC, content marketing, branding, and web development.",
      quickLinks: "Quick Links",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "HIGHLIGHT Marketing Management. All Rights Reserved. 2025"
    },
    cta: {
      badge: "LET'S WORK TOGETHER",
      titleMain: "READY TO",
      titleAccent: "GROW",
      titleEnd: "YOUR BUSINESS?",
      subtitle: "Join the hundreds of businesses that trust us to scale their marketing and drive revenue.",
      btn1: "Start a Project",
      btn2: "Contact Us",
      trust: [
        { icon: "⭐", text: "5-Star Rated" },
        { icon: "📈", text: "Data-Driven" },
        { icon: "🛡️", text: "Results Guaranteed" }
      ]
    },
    pages: {
      about: {
        title: "About Us",
        subtitle: "We Listen, We Strategize, We Deliver — Let’s Get Started Together.",
        content: "We're Not Just an Agency — We're Your Strategic Partner. Work with certified professionals and digital strategists who know how to scale businesses."
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive digital solutions tailored for your business."
      },
      blog: {
        title: "Latest Insights",
        subtitle: "Read our latest articles, case studies, and digital marketing tips."
      },
      contact: {
        title: "Contact Us",
        subtitle: "Have a Project in Mind? Let's Connect.",
        bookBtn: "Enquire Now"
      }
    }
  }
};
