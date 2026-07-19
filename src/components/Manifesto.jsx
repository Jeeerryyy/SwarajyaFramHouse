import React from "react";
import { motion } from "framer-motion";
import { MANIFESTO, IMAGES } from "@/lib/data";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const animateFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

export default function Manifesto() {
  return (
    <section
      id="about"
      className="relative bg-[#F6F5F2] py-10 sm:py-12 md:py-20"
      data-testid="manifesto-section"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[10px] uppercase tracking-[0.32em] text-[#5A6A61] mb-3"
        >
          The Manifesto
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter text-[#1A2520] leading-[1] max-w-4xl"
        >
          Three quiet promises we <span className="italic text-[#1E3B2C]">keep</span>.
        </motion.h2>

        <div className="mt-10 sm:mt-16 md:mt-24 space-y-10 sm:space-y-16 md:space-y-28">
          {MANIFESTO.map((ch, idx) => {
            const flip = idx % 2 === 1;
            return (
              <div
                key={ch.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center"
              >
                {/* Image side — always first on mobile for visual impact */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`md:col-span-5 order-1 ${
                    flip ? "md:order-1 md:col-start-2" : "md:order-2 md:col-start-7"
                  }`}
                >
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[4/5] shadow-md border border-[#D5D1C4]/40">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      src={
                        idx === 0
                          ? IMAGES.landscape
                          : idx === 1
                          ? IMAGES.restaurant
                          : IMAGES.party
                      }
                      alt={ch.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Number + text (Staggered Animation) */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`md:col-span-5 flex flex-col justify-center order-2 ${
                    flip ? "md:order-2 md:col-start-7" : "md:order-1 md:col-start-2"
                  }`}
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Heading */}
                    <motion.h3
                      variants={animateFadeUp}
                      className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#1A2520] leading-[1.08]"
                    >
                      {ch.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      variants={animateFadeUp}
                      className="text-sm md:text-base text-[#1A2520]/80 leading-relaxed max-w-md pt-1 sm:pt-2"
                    >
                      {ch.body}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
