import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS, BRAND } from "@/lib/data";
import { Star, CheckCircle2, MessageSquare, ExternalLink } from "lucide-react";

// Google G logo SVG
function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.24v3.15C3.25 21.32 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.24C.45 8.18 0 9.98 0 12s.45 3.82 1.24 5.39l4.04-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.68 1.24 6.61l4.04 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
      />
    </svg>
  );
}

function ReviewCard({ t }) {
  return (
    <div className="bg-[#152E21] border border-[#F6F5F2]/10 hover:border-[#C46549]/40 p-6 rounded-2xl mx-3 w-[300px] sm:w-[380px] md:w-[420px] shrink-0 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C46549]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Header with Avatar + Google Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md text-sm"
              style={{ backgroundColor: t.avatarBg || "#1E3B2C" }}
            >
              {t.avatar || t.name[0]}
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#F6F5F2] leading-tight flex items-center gap-1.5">
                {t.name}
                <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853]" />
              </h4>
              <span className="text-[10px] text-[#F6F5F2]/50 font-medium">
                {t.time || "Verified Guest"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-black/30 border border-white/10 px-2.5 py-1 rounded-full">
            <GoogleIcon />
            <span className="text-xs font-bold text-white ml-0.5">{t.rating}/5</span>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-3 text-[#FBBC05]">
          {Array.from({ length: t.rating || 5 }).map((_, k) => (
            <Star key={k} className="w-4 h-4 fill-current stroke-none" />
          ))}
        </div>

        {/* Title & Quote */}
        <h5 className="text-sm font-semibold text-[#C46549] mb-1.5 line-clamp-1">
          {t.title}
        </h5>
        <p className="font-serif italic text-sm sm:text-base text-[#F6F5F2]/90 leading-relaxed line-clamp-4 font-light">
          "{t.quote}"
        </p>
      </div>

      {/* Footer info */}
      <div className="mt-5 pt-3 border-t border-[#F6F5F2]/10 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#F6F5F2]/50">
        <span>Verified Google Review</span>
        <span className="text-[#C46549] group-hover:underline">Swarajya Farm House</span>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4);

  return (
    <section
      id="reviews"
      className="relative bg-[#101A16] text-[#F6F5F2] py-16 sm:py-24 md:py-32 overflow-hidden"
      data-testid="testimonials-section"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1E3B2C]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 mb-12 sm:mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#C46549]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C46549] font-semibold">
                Real Guest Experiences
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1]">
              What guests <span className="italic text-[#C46549]">carry home</span>.
            </h2>
          </div>

          {/* Google Badge Card */}
          <a
            href="https://maps.google.com/?q=Swarajya+Farm+House+Donje+Gaon+Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[#152E21] border border-white/10 hover:border-[#C46549]/50 p-4 rounded-2xl backdrop-blur-md shadow-xl transition-all duration-300 w-fit"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <GoogleIcon />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white">4.0 / 5.0</span>
                <div className="flex text-[#FBBC05]">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-[#F6F5F2]/70 group-hover:text-[#C46549] transition-colors flex items-center gap-1">
                Read all verified Google reviews
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* ─── DUAL MARQUEE STREAMS ─── */}
      <div className="space-y-6 relative z-10">
        {/* Stream 1: Moving Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-2">
            {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
              <ReviewCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Stream 2: Moving Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] py-2">
            {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
              <ReviewCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
