import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Star } from "lucide-react";

export default function TestimonialsMarquee() {
  return (
    <section
      className="relative bg-[#1E3B2C] text-[#F6F5F2] py-12 md:py-20 overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mb-14">
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#C46549] mb-3">
          Word of mouth
        </p>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1]">
          What guests <span className="italic">carry home</span>.
        </h2>
      </div>

      {/* Slow editorial marquee (CSS animated) */}
      <div className="relative w-full overflow-hidden py-4 border-y border-[#F6F5F2]/10">
        <div className="flex w-max animate-marquee-scroll pause-hover">
          {/* Set 1 */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`editorial-1-${i}`}
              className="flex items-center gap-16 md:gap-24 px-8 md:px-16 py-6 whitespace-nowrap"
            >
              <span className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-[#F6F5F2]/95 leading-none">
                "{t.title}"
              </span>
              <span className="w-16 md:w-24 h-[1px] bg-[#C46549]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#F6F5F2]/70">
                — {t.name}
              </span>
            </div>
          ))}
          {/* Set 2 (Duplicate for seamless loop) */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`editorial-2-${i}`}
              className="flex items-center gap-16 md:gap-24 px-8 md:px-16 py-6 whitespace-nowrap"
            >
              <span className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-[#F6F5F2]/95 leading-none">
                "{t.title}"
              </span>
              <span className="w-16 md:w-24 h-[1px] bg-[#C46549]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#F6F5F2]/70">
                — {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Scrolling Review Cards (CSS animated) */}
      <div className="mt-16 md:mt-24 relative w-full overflow-hidden">
        {/* Soft fading gradients on edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1E3B2C] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1E3B2C] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-scroll pause-hover py-4">
          {/* Set 1 */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`card-1-${i}`}
              className="bg-[#152e21] border border-[#F6F5F2]/10 p-8 rounded-lg mx-6 w-[350px] md:w-[420px] flex-shrink-0 flex flex-col justify-between min-h-[220px] hover:border-[#C46549]/30 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#C46549]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4 h-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-serif text-lg md:text-xl leading-relaxed text-[#F6F5F2]/90 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F6F5F2]/10 flex justify-between items-end">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#C46549]">
                    {t.title}
                  </p>
                  <p className="mt-1 font-semibold text-sm text-[#F6F5F2]">
                    {t.name}
                  </p>
                </div>
                <span className="text-xs text-[#F6F5F2]/45 font-serif italic">Verified Guest</span>
              </div>
            </div>
          ))}
          {/* Set 2 (Duplicate for seamless loop) */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`card-2-${i}`}
              className="bg-[#152e21] border border-[#F6F5F2]/10 p-8 rounded-lg mx-6 w-[350px] md:w-[420px] flex-shrink-0 flex flex-col justify-between min-h-[220px] hover:border-[#C46549]/30 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#C46549]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4 h-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-serif text-lg md:text-xl leading-relaxed text-[#F6F5F2]/90 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F6F5F2]/10 flex justify-between items-end">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#C46549]">
                    {t.title}
                  </p>
                  <p className="mt-1 font-semibold text-sm text-[#F6F5F2]">
                    {t.name}
                  </p>
                </div>
                <span className="text-xs text-[#F6F5F2]/45 font-serif italic">Verified Guest</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
