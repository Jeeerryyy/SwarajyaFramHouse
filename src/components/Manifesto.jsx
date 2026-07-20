import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { MANIFESTO, IMAGES } from "@/lib/data";
import { Trees, ShieldCheck, Heart, Sparkles, Award, Star, Users, MapPin } from "lucide-react";

const STATS = [
  { icon: Trees, value: "16+", label: "Acres of Serene Greenery", color: "#1E3B2C" },
  { icon: Star, value: "4.0★", label: "Google Rated Resort", color: "#C46549" },
  { icon: Users, value: "10,000+", label: "Delighted Guests Hosted", color: "#1E3B2C" },
  { icon: MapPin, value: "Ghera Sinhagad", label: "Donje Gaon, Pune", color: "#C46549" },
];

const TICKER_ITEMS = [
  "16-ACRE SANCTUARY",
  "SWIMMING POOL & RAIN DANCE",
  "SINHAGAD FORT VIEWS",
  "HOMEMADE MAHARASHTRIAN FOOD",
  "AC BANQUET & LAWNS",
  "FAMILY PICNICS & STAYS",
  "BONFIRE NIGHTS",
];

function ChapterCard({ ch, idx }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const flip = idx % 2 === 1;

  const imageSrc =
    idx === 0
      ? "/gallery/sahyadri-landscape.jpeg"
      : idx === 1
      ? "/gallery/building-lawn-exterior.jpeg"
      : "/gallery/pool-swarajya-mural.jpeg";

  const badgeText =
    idx === 0
      ? "🌿 Sahyadri Foothills"
      : idx === 1
      ? "❤️ 100% Family Hospitality"
      : "🎉 Memorable Celebrations";

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center py-6 md:py-12"
    >
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`md:col-span-6 relative z-10 order-1 ${
          flip ? "md:order-2 md:col-start-7" : "md:order-1 md:col-start-1"
        }`}
      >
        <div className="group relative rounded-2xl overflow-hidden shadow-2xl border border-[#1E3B2C]/10 bg-[#1A2520]">
          <div className="aspect-[4/3] md:aspect-[16/11] overflow-hidden relative">
            <motion.img
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              src={imageSrc}
              alt={ch.title}
              className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02]"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
          </div>

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: flip ? 20 : -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 bg-[#1E3B2C]/90 backdrop-blur-md text-[#F6F5F2] border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-lg flex items-center gap-1.5"
          >
            {badgeText}
          </motion.div>

          {/* Card Bottom Tagline */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20 flex items-center justify-between text-white/90">
            <span className="text-xs font-serif italic text-white/90">
              Swarajya Experience
            </span>
          </div>

          {/* Decorative Corner Borders */}
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/30 rounded-tr group-hover:border-[#C46549] transition-colors duration-500" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/30 rounded-bl group-hover:border-[#C46549] transition-colors duration-500" />
        </div>
      </motion.div>

      {/* Text Content Side */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={`md:col-span-6 flex flex-col justify-center relative z-10 order-2 ${
          flip ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-7"
        }`}
      >
        <div className="space-y-4 md:space-y-5 max-w-xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#C46549]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C46549]">
              {ch.kicker}
            </span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1E3B2C] leading-[1.08]">
            {ch.title}
          </h3>

          <p className="text-base sm:text-lg text-[#1E3B2C]/80 leading-relaxed font-light">
            {ch.body}
          </p>

          <div className="pt-2 flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#C46549]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-medium tracking-wide uppercase">
                Pure Serenity Guarantee
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Manifesto() {
  const targetRef = useRef(null);

  return (
    <section
      ref={targetRef}
      id="about"
      className="relative bg-[#F6F5F2] py-16 sm:py-24 md:py-32 overflow-hidden"
      data-testid="manifesto-section"
    >
      {/* Background Subtle Mesh Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E3B2C 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#1E3B2C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#C46549]/5 rounded-full blur-3xl pointer-events-none" />

      {/* ─── CONTINUOUS RUNNING TICKER BAND ─── */}
      <div className="w-full bg-[#1E3B2C] text-[#F6F5F2] py-3.5 mb-16 sm:mb-24 overflow-hidden border-y border-[#C46549]/20 shadow-md">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <div key={index} className="flex items-center gap-6 mx-4">
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#F6F5F2]/90">
                {item}
              </span>
              <span className="text-[#C46549] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-px w-6 bg-[#C46549]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C46549] font-semibold">
              The Swarajya Story
            </span>
            <span className="h-px w-6 bg-[#C46549]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-[#1E3B2C] leading-[1.05]"
          >
            Three quiet promises we <span className="italic text-[#C46549]">keep</span>.
          </motion.h2>
          <p className="mt-4 text-sm sm:text-base text-[#1E3B2C]/70 max-w-xl mx-auto font-light leading-relaxed">
            Nestled under the shadow of historic Sinhagad, Swarajya Farm House is built on authenticity, warm hospitality, and timeless memories.
          </p>
        </div>

        {/* ─── STATS COUNTER BAR ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 md:mb-28"
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/80 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-[#1E3B2C]/10 shadow-lg shadow-[#1E3B2C]/[0.03] flex flex-col items-start relative overflow-hidden group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3B2C]/5 flex items-center justify-center mb-4 text-[#C46549] group-hover:bg-[#C46549] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1E3B2C]">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-[#1E3B2C]/70 mt-1 font-medium">
                  {stat.label}
                </span>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-[#C46549]/5 rounded-bl-full pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ─── CHAPTER CARDS ─── */}
        <div className="space-y-16 sm:space-y-24 md:space-y-36">
          {MANIFESTO.map((ch, idx) => (
            <ChapterCard key={ch.number} ch={ch} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
