import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Star } from "lucide-react";

export default function TestimonialsMarquee() {
  return (
    <section
      className="relative bg-[#1E3B2C] text-[#F6F5F2] py-10 sm:py-12 md:py-20 overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 mb-8 sm:mb-14">
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#C46549] mb-2 sm:mb-3">
          Word of mouth
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1]">
          What guests <span className="italic">carry home</span>.
        </h2>
      </div>

      {/* Slow editorial marquee (CSS animated) */}
      <div className="relative w-full overflow-hidden py-3 sm:py-4 border-y border-[#F6F5F2]/10">
        <div className="flex w-max animate-marquee-scroll pause-hover">
          {/* Set 1 */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`editorial-1-${i}`}
              className="flex items-center gap-6 sm:gap-16 md:gap-24 px-4 sm:px-8 md:px-16 py-4 sm:py-6 whitespace-nowrap"
            >
              <span className="font-serif italic text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-[#F6F5F2]/95 leading-none">
                "{t.title}"
              </span>
              <span className="w-8 sm:w-16 md:w-24 h-[1px] bg-[#C46549]" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#F6F5F2]/70">
                — {t.name}
              </span>
            </div>
          ))}
          {/* Set 2 (Duplicate for seamless loop) */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`editorial-2-${i}`}
              className="flex items-center gap-6 sm:gap-16 md:gap-24 px-4 sm:px-8 md:px-16 py-4 sm:py-6 whitespace-nowrap"
            >
              <span className="font-serif italic text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-[#F6F5F2]/95 leading-none">
                "{t.title}"
              </span>
              <span className="w-8 sm:w-16 md:w-24 h-[1px] bg-[#C46549]" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#F6F5F2]/70">
                — {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Scrolling Review Cards (CSS animated) */}
      <div className="mt-10 sm:mt-16 md:mt-24 relative w-full overflow-hidden">
        {/* Soft fading gradients on edges */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#1E3B2C] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#1E3B2C] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-scroll pause-hover py-4">
          {/* Set 1 */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`card-1-${i}`}
              className="bg-[#152e21] border border-[#F6F5F2]/10 p-5 sm:p-6 md:p-8 rounded-lg mx-3 sm:mx-4 md:mx-6 w-[260px] sm:w-[320px] md:w-[420px] flex-shrink-0 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] md:min-h-[220px] hover:border-[#C46549]/30 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4 text-[#C46549]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-serif text-base sm:text-lg md:text-xl leading-relaxed text-[#F6F5F2]/90 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#F6F5F2]/10 flex justify-between items-end">
                <div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C46549]">
                    {t.title}
                  </p>
                  <p className="mt-1 font-semibold text-xs sm:text-sm text-[#F6F5F2]">
                    {t.name}
                  </p>
                </div>
                <span className="text-[10px] sm:text-xs text-[#F6F5F2]/45 font-serif italic">Verified Guest</span>
              </div>
            </div>
          ))}
          {/* Set 2 (Duplicate for seamless loop) */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`card-2-${i}`}
              className="bg-[#152e21] border border-[#F6F5F2]/10 p-5 sm:p-6 md:p-8 rounded-lg mx-3 sm:mx-4 md:mx-6 w-[260px] sm:w-[320px] md:w-[420px] flex-shrink-0 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] md:min-h-[220px] hover:border-[#C46549]/30 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4 text-[#C46549]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-serif text-base sm:text-lg md:text-xl leading-relaxed text-[#F6F5F2]/90 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#F6F5F2]/10 flex justify-between items-end">
                <div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C46549]">
                    {t.title}
                  </p>
                  <p className="mt-1 font-semibold text-xs sm:text-sm text-[#F6F5F2]">
                    {t.name}
                  </p>
                </div>
                <span className="text-[10px] sm:text-xs text-[#F6F5F2]/45 font-serif italic">Verified Guest</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
