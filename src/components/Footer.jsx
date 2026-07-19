import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { BRAND } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#1E3B2C] text-[#F6F5F2] pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-10"
      data-testid="site-footer"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#C46549] mb-3 sm:mb-4">
              Ready to visit
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-[#F6F5F2]">
              Come as guests, <span className="italic">leave as family</span>.
            </h2>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${BRAND.phone}`}
                data-testid="footer-call-cta"
                className="inline-flex items-center justify-center sm:justify-start gap-3 bg-[#C46549] text-white px-5 sm:px-6 py-3.5 sm:py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#F6F5F2] hover:text-[#1E3B2C] transition-colors duration-500"
              >
                <Phone strokeWidth={1.5} className="w-4 h-4" />
                {BRAND.phoneDisplay}
              </a>
              <a
                href={BRAND.whatsappBooking}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-cta"
                className="inline-flex items-center justify-center sm:justify-start gap-3 border border-[#F6F5F2]/40 text-[#F6F5F2] px-5 sm:px-6 py-3.5 sm:py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#F6F5F2] hover:text-[#1E3B2C] transition-colors duration-500"
              >
                <MessageCircle strokeWidth={1.5} className="w-4 h-4" />
                WhatsApp us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-4 md:col-start-9 space-y-6 sm:space-y-8"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F6F5F2]/50 mb-2 sm:mb-3">
                Address
              </p>
              <p className="text-sm md:text-base text-[#F6F5F2]/90 leading-relaxed break-words">
                {BRAND.address}
              </p>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C46549] hover:text-[#F6F5F2] transition-colors"
                data-testid="footer-maps-link"
              >
                <MapPin strokeWidth={1.5} className="w-3.5 h-3.5" />
                Open on Google Maps
                <ExternalLink strokeWidth={1.5} className="w-3.5 h-3.5" />
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F6F5F2]/50 mb-2 sm:mb-3">
                Hours
              </p>
              <p className="text-sm text-[#F6F5F2]/90 leading-relaxed">
                Day picnics · 9 AM – 6 PM<br />
                Stays · 12 PM check-in, 11 AM check-out
              </p>
            </div>
          </motion.div>
        </div>

        <div className="hatched h-[6px] w-full opacity-30 mt-12 sm:mt-20" />

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#F6F5F2]/50">
          <span>© {new Date().getFullYear()} Swarajya Farm House — Ghera Sinhagad, Pune</span>
          <span>{BRAND.nameDevanagari}</span>
        </div>
      </div>
    </footer>
  );
}
