import React from "react";
import { motion } from "framer-motion";
import { AMENITIES } from "@/lib/data";

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="relative bg-[#EAE7DE] py-10 sm:py-12 md:py-20"
      data-testid="amenities-section"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 md:mb-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5A6A61] mb-2 sm:mb-3">
              What awaits
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter text-[#1A2520] leading-[1] max-w-3xl">
              Every amenity, considered.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#1A2520]/80 leading-relaxed max-w-sm">
            A pool that reflects the sky. A hall that changes moods. Food that
            tastes like it was made for family. Nothing extra, nothing missing.
          </p>
        </div>

        {/* Bento grid — single column on mobile, 3 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 auto-rows-[200px] sm:auto-rows-[240px] md:auto-rows-[320px]">
          {AMENITIES.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden group border border-[#D5D1C4] ${
                /* Only apply span classes on lg+ screens */
                a.span
              }`}
              data-testid={`amenity-${a.id}`}
            >
              <motion.img
                src={a.image}
                alt={a.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C46549] mb-1">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white leading-tight">
                  {a.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-white/85 mt-1 max-w-xs">
                  {a.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
