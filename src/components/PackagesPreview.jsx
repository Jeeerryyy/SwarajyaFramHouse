import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PACKAGES } from "@/lib/data";

export default function PackagesPreview() {
  return (
    <section
      className="relative bg-[#F6F5F2] py-10 sm:py-12 md:py-20"
      data-testid="packages-preview-section"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 md:mb-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5A6A61] mb-2 sm:mb-3">
              Choose your rhythm
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1] text-[#1A2520] max-w-3xl">
              Four ways to <span className="italic text-[#1E3B2C]">stay</span>.
            </h2>
          </div>
          <Link
            to="/packages"
            data-testid="see-all-packages"
            className="group inline-flex items-center gap-2 sm:gap-3 text-xs uppercase tracking-[0.28em] text-[#1A2520] hover:text-[#C46549] transition-colors bg-[#EAE7DE] sm:bg-transparent px-4 py-3 sm:p-0 w-fit"
          >
            View all packages
            <ArrowUpRight strokeWidth={1.5} className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border border-[#D5D1C4] bg-[#EAE7DE] aspect-[4/3] sm:aspect-[4/3]"
              data-testid={`package-preview-${p.id}`}
            >
              <motion.img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/85">
                {p.number} / {p.subtitle}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex items-end justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#C46549] mt-1.5 sm:mt-2">
                    From {p.priceWeekday} · {p.unit}
                  </p>
                </div>
                <Link
                  to="/packages"
                  className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 border border-white/60 text-white hover:bg-[#C46549] hover:border-[#C46549] transition-colors shrink-0"
                  aria-label={`View ${p.title}`}
                >
                  <ArrowUpRight strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
