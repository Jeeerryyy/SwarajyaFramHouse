import React from "react";
import { motion } from "framer-motion";
import { AMENITIES } from "@/lib/data";
import { Sparkles, Waves, PartyPopper, Utensils, Building2, Flame } from "lucide-react";

const AMENITY_ICONS = {
  pool: Waves,
  rain: PartyPopper,
  banquet: Building2,
  restaurant: Utensils,
};

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="relative bg-[#EAE7DE] py-16 sm:py-24 md:py-32 overflow-hidden"
      data-testid="amenities-section"
    >
      {/* Background Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E3B2C 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span className="h-px w-6 bg-[#C46549]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C46549] font-semibold">
                Resort Experiences
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-[#1E3B2C] leading-[1]"
            >
              Every amenity, <span className="italic text-[#C46549]">considered</span>.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-[#1E3B2C]/75 leading-relaxed max-w-md font-light"
          >
            A pool that reflects the Sahyadris. A hall that changes moods for celebrations. Farm-fresh Maharashtrian delicacies cooked with warmth. Nothing extra, nothing missing.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px] md:auto-rows-[340px]">
          {AMENITIES.map((a, i) => {
            const IconComponent = AMENITY_ICONS[a.id] || Sparkles;
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl group border border-[#1E3B2C]/15 shadow-xl bg-[#1A2520] ${a.span}`}
                data-testid={`amenity-${a.id}`}
              >
                <motion.img
                  src={a.image}
                  alt={a.title}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.9] group-hover:brightness-[0.98]"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:via-black/20 transition-all duration-500" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center justify-between right-4 sm:right-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    0{i + 1} / Feature
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-[#C46549] group-hover:bg-[#C46549] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-8 z-10">
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                    {a.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-1.5 max-w-sm font-light">
                    {a.caption}
                  </p>
                  <div className="w-0 group-hover:w-16 h-0.5 bg-[#C46549] mt-3 transition-all duration-500" />
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-[#C46549] transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
