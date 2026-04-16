/**
 * @file services.js
 * @description Master data structure defining the agency's exact service offerings.
 * This file acts as a headless CMS payload. Editing text, images, or feature grids here
 * will instantly and globally update all Services Sections and individual Service Detail Pages.
 * 
 * @module Data/Services
 */

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    description: "Websites that work! Stylish, fast, and optimized to convert visitors into loyal customers.",
    num: "01",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    content: [
      "Your website is the digital storefront of your business. In today's competitive landscape, a poorly designed site costs you leads and credibility. We specialize in building custom, high-converting websites that visually stunning and functionally flawless.",
      "Our development process focuses heavily on user experience (UX) and performance. From intuitive navigation to lightning-fast load times, we ensure every interaction on your site guides the user seamlessly toward making a purchase or contacting you.",
      "Whether you need a robust e-commerce platform, a sleek corporate portfolio, or a dynamic web application, our modern, scalable architecture guarantees your site will grow effortlessly alongside your scaling business needs."
    ],
    features: [
      { icon: "🎨", title: "Custom UI/UX", description: "Bespoke designs tailored specifically for your target audience." },
      { icon: "⚡", title: "Optimized Speed", description: "Lightning-fast load times for superior user experience and SEO." },
      { icon: "📱", title: "Mobile Responsive", description: "Flawless performance across all smart devices and screen sizes." },
      { icon: "🔒", title: "Secure Framework", description: "Built with the latest security protocols and trusted architectures." }
    ]
  },
  {
    slug: "vehicle-branding",
    title: "Vehicle Branding",
    description: "Turn Heads on the Road! Eye-catching vehicle wraps that make your brand impossible to ignore.",
    num: "02",
    heroImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920&q=80",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    content: [
      "Transform your company vehicles into powerful, moving billboards. Vehicle branding is one of the most cost-effective forms of advertising, generating thousands of daily impressions while your fleet is simply driving or parked around the city.",
      "We design, print, and install high-quality, weather-resistant fleet graphics. Whether it's a subtle door logo, a half-wrap, or a completely transformative full vehicle wrap, our premium materials ensure your brand stands out vividly and permanently.",
      "Our expert design team ensures your messaging is clear, legible from a distance, and perfectly aligned with your broader corporate identity, maximizing the return on your mobile advertising investment every single day."
    ],
    features: [
      { icon: "🚙", title: "Full & Partial Wraps", description: "Customized coverage options to fit any budget or vehicle type." },
      { icon: "🛡️", title: "Premium Materials", description: "High-durability vinyl ensuring long-lasting, weather-proof vibrant colors." },
      { icon: "📏", title: "Precision Fitting", description: "Expert installation strictly guaranteeing zero bubbling or peeling." },
      { icon: "👁️", title: "Maximum Impressions", description: "Bold, legible designs engineered to catch the eye instantly." }
    ]
  },
  {
    slug: "printing-packaging",
    title: "Printing & Packaging",
    description: "Print. Pack. Impress! Quality printing and structural packaging that speaks volumes.",
    num: "03",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1920&q=80",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    content: [
      "Physical touchpoints remain overwhelmingly powerful in building brand trust. Our premium printing and packaging solutions ensure that every brochure, business card, and product box you hand a customer screams exceptional quality.",
      "We fuse structural integrity with stunning aesthetics to create packaging that not only protects your product but drastically elevates the unboxing experience. Superior packaging directly influences perceived value and drives repeat purchasing.",
      "Covering everything from corporate stationery and large-format banners to bespoke retail packaging, we utilize state-of-the-art print technology and luxurious finishing options (like foil stamping and embossing) to perfectly actualize your vision."
    ],
    features: [
      { icon: "📦", title: "Custom Packaging", description: "Tailored box designs and structural engineering for product safety." },
      { icon: "🖨️", title: "Luxury Print Finishes", description: "Embossing, foil stamping, and spot UV for ultimate premium feel." },
      { icon: "📄", title: "Corporate Collateral", description: "High-end brochures, business cards, and company letterheads." },
      { icon: "♻️", title: "Eco-Friendly Options", description: "Sustainable material choices without sacrificing physical aesthetics." }
    ]
  },
  {
    slug: "advertising-solutions",
    title: "Advertising Solutions",
    description: "Bold Ads, Big Impact! Creative campaigns to dominate both traditional and digital spheres.",
    num: "04",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    content: [
      "Effective advertising cuts through the noise and compels action. Our comprehensive advertising solutions bridge the gap between creative storytelling and analytical precision, ensuring your campaigns don't just look good, but drive measurable ROI.",
      "We orchestrate omnichannel campaigns spanning outdoor media (OOH), print, television, and advanced programmatic digital networks. We isolate exactly where your target demographic spends their time and deploy targeted messaging explicitly designed for that medium.",
      "By continuously analyzing campaign performance metrics, we pivot and optimize in real-time. This dynamic approach guarantees your advertising budget is always being channeled toward the highest-performing assets and most lucrative audience segments."
    ],
    features: [
      { icon: "🚀", title: "Omnichannel Campaigns", description: "Seamlessly integrated advertising across all offline and online media." },
      { icon: "💡", title: "Creative Concepting", description: "Memorable campaigns and copywriting that break through ad fatigue." },
      { icon: "📊", title: "Media Buying", description: "Strategic purchasing and ad placement to guarantee maximum reach." },
      { icon: "🎯", title: "Performance Tracking", description: "Real-time analytics and continuous ROI monitoring." }
    ]
  },
  {
    slug: "marketing-consultancy",
    title: "Marketing Consultancy",
    description: "Smarter Marketing starts here! Strategic guidance to scale your brand effectively.",
    num: "05",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    content: [
      "A great product without a great strategy will inevitably fail. Our marketing consultancy services are designed to act as your fractional CMO. We parachute in, audit your existing strategies, identify critical bottlenecks, and construct a comprehensive roadmap to scale.",
      "We start with profound market research and competitor analysis, pinpointing exact gaps in the industry that your brand can profitably fill. We establish clear KPIs, reposition your brand narrative, and optimize your pricing and distribution methodologies.",
      "From high-level brand strategy to granular tactical execution planning, we don't just hand you a report—we actively partner with your leadership team to implement these changes, train your internal staff, and ensure absolute market dominance."
    ],
    features: [
      { icon: "🧭", title: "Strategic Roadmapping", description: "Detailed, actionable step-by-step plans for explosive growth." },
      { icon: "🔎", title: "Market & Competitor Analysis", description: "Deep diving into industry trends to discover profitable gaps." },
      { icon: "📉", title: "Funnel Optimization", description: "Identifying and resolving the bottlenecks in your sales process." },
      { icon: "🤝", title: "Leadership Partnering", description: "Acting as an extension of your C-suite to drive executive goals." }
    ]
  },
  {
    slug: "photography-videography",
    title: "Photography & Videography",
    description: "Capture moments, create magic! High-end visual storytelling that captivates audiences.",
    num: "06",
    heroImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=80",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    content: [
      "In the visual-first digital era, stock photos will instantly compromise your brand's authenticity. Our elite photography and videography services provide you with a stunning arsenal of custom visual assets that tell your exclusive brand story.",
      "From highly stylized product photography and dynamic corporate profile videos to breathtaking drone footage and engaging social media reels, our production team handles every single aspect—from the initial storyboard conceptualization to final post-production editing and color grading.",
      "High-end visuals drastically increase conversion rates across your website and ad campaigns. We guarantee that your media not only looks spectacular but is structurally formatted to perform exceptionally well across all standard digital and print platforms."
    ],
    features: [
      { icon: "📸", title: "Commercial Photography", description: "High-resolution product, lifestyle, and corporate team visuals." },
      { icon: "🎬", title: "Cinematic Video Production", description: "Engaging brand films, interviews, and promotional commercials." },
      { icon: "✂️", title: "Post-Production", description: "Elite-level video editing, motion graphics, and color grading." },
      { icon: "📱", title: "Social-First Formats", description: "Content shot and formatted explicitly for TikTok and Instagram Reels." }
    ]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Digital Marketing that delivers! Data-driven campaigns engineered for explosive online growth.",
    num: "07",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1920&q=80",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    content: [
      "Our holistic Digital Marketing services serve as the ultimate growth engine for your brand. We fuse the power of Search Engine Optimization (SEO), Paid Media (PPC), Content Marketing, and Email nurturing into one unstoppable, synchronized funnel.",
      "Rather than treating these channels in isolation, we build interconnected ecosystems. A user might discover you via an SEO-optimized blog, get retargeted by a Meta Ad, and finally convert through a meticulously automated email sequence. This creates a relentless omnipresence that massively increases conversion.",
      "We rely on hard data, not intuition. Through rigorous A/B testing, heat mapping, and conversion rate optimization (CRO), we continuously refine your campaigns to relentlessly lower your Cost Per Acquisition (CPA) and boost your overall organic and paid revenues."
    ],
    features: [
      { icon: "🌐", title: "SEO & Traffic Growth", description: "Dominating search engine results pages to drive free organic traffic." },
      { icon: "💸", title: "Paid User Acquisition", description: "Highly profitable PPC campaigns across Google and Social Networks." },
      { icon: "📧", title: "Email Automation", description: "Sophisticated drip campaigns to continuously nurture and close leads." },
      { icon: "📈", title: "Conversion Optimization", description: "Scientific A/B testing to ensure maximum traffic converts to sales." }
    ]
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    description: "We create, post, and grow your brand! Complete platform management for ultimate engagement.",
    num: "08",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1920&q=80",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    content: [
      "Building a powerful social media presence requires agonizing consistency, incredible creative output, and deep platform knowledge. Our Social Media Management service takes this enormous burden entirely off your shoulders, allowing you to focus purely on closing the leads we generate.",
      "We develop comprehensive content calendars composed of highly engaging visuals, short-form video reels, and compelling copywriting. We manage all scheduling and actively execute community management, quickly responding to comments and direct messages to foster immense brand loyalty.",
      "By closely tracking shifting algorithms and trending audio/topics, we ensure your brand remains hyper-relevant. We provide total transparency via intricate monthly reports detailing your follower growth, overarching engagement rates, and exact inbound lead generation metrics."
    ],
    features: [
      { icon: "📅", title: "Content Consistency", description: "Reliable scheduling and posting perfectly timed for maximum reach." },
      { icon: "💬", title: "Community Management", description: "Active interaction with your followers, comments, and direct messages." },
      { icon: "🎨", title: "Trend Capitalization", description: "Fast-tracking reels and posts utilizing trending audio and viral formats." },
      { icon: "📊", title: "Analytics Reporting", description: "Detailed structural breakdowns of engagement and audience growth." }
    ]
  }
];
