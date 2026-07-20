import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { PACKAGES } from "@/lib/data";

export default function PackagesPreview() {
  return (
    <section
      className="relative bg-[#F6F5F2] py-16 sm:py-24 md:py-32 overflow-hidden"
      data-testid="packages-preview-section"
    >
      {/* Background Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E3B2C 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
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
                Stay & Picnic Experiences
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1] text-[#1E3B2C] max-w-3xl"
            >
              Four ways to <span className="italic text-[#C46549]">stay</span>.
            </motion.h2>
          </div>

          <Link
            to="/packages"
            data-testid="see-all-packages"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] font-semibold text-[#1E3B2C] hover:text-[#C46549] transition-colors bg-white/80 backdrop-blur-md px-6 py-4 rounded-xl border border-[#1E3B2C]/10 shadow-md hover:shadow-lg w-fit"
          >
            Explore all packages
            <ArrowUpRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-[#1E3B2C]/15 bg-[#1A2520] aspect-[16/11] sm:aspect-[16/10] shadow-xl"
              data-testid={`package-preview-${p.id}`}
            >
              <motion.img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88] group-hover:brightness-[0.98]"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/30 transition-all duration-500" />

              {/* Top Details */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-10">
                <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  Package {p.number}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#C46549]" />
                  {p.duration}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-8 z-10 flex items-end justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C46549]">
                    {p.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs text-white/70">From</span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {p.priceWeekday}
                    </span>
                    <span className="text-xs text-white/70">/ {p.unit}</span>
                  </div>
                </div>

                <Link
                  to="/packages"
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:bg-[#C46549] group-hover:border-[#C46549] transition-all duration-300 shrink-0 shadow-lg"
                  aria-label={`View ${p.title}`}
                >
                  <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C46549] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
