import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const revealVariant = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 + i * 0.12,
    },
  }),
};

function MaskedLine({ children, i = 0 }) {
  return (
    <span className="mask-line">
      <motion.span
        variants={revealVariant}
        initial="hidden"
        animate="visible"
        custom={i}
        className="block will-change-transform"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const bgScale = useTransform(scrollY, [0, 1000], [1.0, 1.3]);
  const bgOpacity = useTransform(scrollY, [0, 1000], [1.0, 0.2]);

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center items-center pt-20 pb-12 bg-[#131d19]"
      data-testid="hero-section"
    >
      {/* Background image with Scroll-linked Zoom & Fade (Premium Feature) */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <motion.img
          style={{
            scale: bgScale,
            opacity: bgOpacity,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          src="/bg-pool.jpg"
          alt="Swarajya Farm House Pool View"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-[1280px] w-full px-4 md:px-8 z-10 flex items-center justify-center">
        {/* Floating Glassmorphic Container (Clear Blur for Premium Sharpness) */}
        <div className="relative w-full bg-[#1A2520]/25 border border-white/10 rounded-2xl p-6 md:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

          {/* Top meta strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center text-[10px] md:text-xs uppercase tracking-[0.28em] text-white/70 mb-6 md:mb-8 relative z-10"
          >
            <span>Est. Ghera Sinhagad · Pune</span>
          </motion.div>

          {/* Kinetic headline */}
          <div className="grid grid-cols-12 gap-6 items-end relative z-10">
            <motion.h1
              className="col-span-12 font-serif tracking-tighter text-white leading-[0.92] font-light"
            >
              <span
                className="block text-[12vw] md:text-[8vw] lg:text-[7vw]"
                data-testid="hero-headline"
              >
                <MaskedLine i={0}>Where the</MaskedLine>
              </span>
              <span className="block text-[12vw] md:text-[8vw] lg:text-[7vw] italic text-[#C46549]">
                <MaskedLine i={1}>Sahyadris</MaskedLine>
              </span>
              <span className="block text-[12vw] md:text-[8vw] lg:text-[7vw]">
                <MaskedLine i={2}>hold you still.</MaskedLine>
              </span>
            </motion.h1>
          </div>

          {/* Bottom row */}
          <div className="mt-6 md:mt-10 grid grid-cols-12 gap-8 items-end border-t border-white/10 pt-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="col-span-12 md:col-span-6 lg:col-span-5"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#C46549] mb-3 font-semibold">
                A Resort & Event Farmhouse
              </p>
              <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed">
                Sixteen acres of unhurried air, framed by the fort's shadow.
                Family-run hospitality that makes room for weekends, weddings and
                first birthdays.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-8 bg-white/70"
        />
      </motion.div>
    </section>
  );
}
