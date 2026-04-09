import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Search, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const postImages = [
  "https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBidXNpbmVzcyUyMG1vZGVybnxlbnwxfHx8fDE3NzU3MTI4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1758691736490-03d39c292d7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMG1hcmtldGluZyUyMGFkdmVydGlzaW5nJTIwUk9JJTIwZ3Jvd3RofGVufDF8fHx8MTc3NTcxMjgzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzU3MTI4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBjb250ZW50JTIwc3RyYXRlZ3klMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc1NzEyODMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudCUyMGNyZWF0aXZlJTIwdGVhbXxlbnwxfHx8fDE3NzU3MTI4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1619105182220-b2bb0459c53e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjaW5lbWF0aWMlMjBicmFuZCUyMGZpbG18ZW58MXx8fHwxNzc1NzEyODM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
];

const categoryColors: Record<string, string> = {
  Strategy: "#d4ff00",
  Performance: "#00ff88",
  "Social Media": "#d4ff00",
  SEO: "#00ff88",
  "Web Design": "#d4ff00",
  Video: "#00ff88",
  // Arabic
  "الاستراتيجية": "#d4ff00",
  "الأداء": "#00ff88",
  "وسائل التواصل": "#d4ff00",
  "تحسين محركات البحث": "#00ff88",
  "تصميم الويب": "#d4ff00",
  "الفيديو": "#00ff88",
};

function BlogCard({ post, image, index, colors }: {
  post: { category: string; title: string; excerpt: string; author: string; date: string; readTime: number };
  image: string;
  index: number;
  colors: import("../contexts/ThemeContext").ThemeColors;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { language } = useLanguage();
  const t = translations[language].pages.blog;
  const color = categoryColors[post.category] || "#d4ff00";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      className="group rounded-3xl overflow-hidden cursor-pointer"
      style={{ background: colors.card, border: `1px solid ${colors.border}` }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <ImageWithFallback
          src={image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: "brightness(0.85)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5))" }} />
        <span
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: `${color}20`, color, border: `1px solid ${color}40`, backdropFilter: "blur(10px)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="mb-3 group-hover:text-yellow-300 transition-colors duration-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.4, transition: "color 0.3s ease" }}
        >
          {post.title}
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "16px", transition: "color 0.3s ease" }}>
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
              style={{ background: "rgba(212,255,0,0.1)", border: "1px solid rgba(212,255,0,0.2)" }}>
              👤
            </div>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.text, fontSize: "0.75rem", fontWeight: 500, transition: "color 0.3s ease" }}>
                {post.author}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textDim, fontSize: "0.7rem", transition: "color 0.3s ease" }}>
                {post.date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5" style={{ color: colors.textDim }}>
            <Clock size={12} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem" }}>
              {post.readTime} {t.minRead}
            </span>
          </div>
        </div>

        {/* Read more */}
        <div
          className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
          style={{ color: "#d4ff00" }}
        >
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", fontWeight: 600 }}>
            {t.readMore}
          </span>
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.article>
  );
}

export function BlogPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const { isDark, colors } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].pages.blog;

  const filteredPosts = t.posts.filter((post) => {
    const matchesCategory = activeCategory === 0 || post.category === t.categories[activeCategory];
    const matchesSearch = !searchQuery || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: colors.bg, transition: "background-color 0.4s ease" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(212,255,0,0.07) 0%, transparent 60%)" }} />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: colors.badgeBg, border: `1px solid ${colors.badgeBorder}` }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#d4ff00" }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#d4ff00", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                {t.badge}
              </span>
            </div>

            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, color: colors.text, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "24px", transition: "color 0.3s ease" }}>
              {t.hero}{" "}
              <span style={{ color: "#d4ff00", textShadow: isDark ? "0 0 40px rgba(212,255,0,0.5)" : "none" }}>
                {t.heroAccent}
              </span>
            </h1>

            <p style={{ fontFamily: "'Inter', sans-serif", color: colors.textMuted, fontSize: "1.15rem", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 40px", transition: "color 0.3s ease" }}>
              {t.heroSub}
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: colors.textDim }} />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full outline-none"
                style={{
                  background: colors.inputBg,
                  border: `1px solid ${colors.inputBorder}`,
                  color: colors.text,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem",
                  transition: "all 0.3s ease",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-24 relative" style={{ background: colors.bgAlt, transition: "background-color 0.4s ease" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {t.categories.map((cat, i) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(i)}
                className="px-5 py-2 rounded-full"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  background: activeCategory === i ? "linear-gradient(135deg, #d4ff00, #a3c900)" : colors.card,
                  color: activeCategory === i ? "#050505" : colors.textMuted,
                  border: `1px solid ${activeCategory === i ? "transparent" : colors.border}`,
                  boxShadow: activeCategory === i ? "0 0 20px rgba(212,255,0,0.3)" : "none",
                  transition: "all 0.3s",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Blog grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => {
              const originalIndex = t.posts.indexOf(post);
              return (
                <BlogCard
                  key={`${post.title}-${index}`}
                  post={post}
                  image={postImages[originalIndex] || postImages[0]}
                  index={index}
                  colors={colors}
                />
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: colors.textMuted, fontSize: "1.1rem" }}>
                No articles found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
