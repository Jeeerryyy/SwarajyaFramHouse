import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/data";

export default function FloatingCTAs() {
  return (
    <div className="fixed z-50 bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-8 md:right-8 flex flex-col gap-2 sm:gap-3 items-end"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href={BRAND.whatsappBooking}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-whatsapp-cta"
        className="pulse-ring group flex items-center gap-1.5 sm:gap-2 bg-[#1E3B2C] text-[#F6F5F2] p-3 sm:pl-4 sm:pr-5 sm:py-3 border border-[#1E3B2C] transition-colors duration-300 hover:bg-[#C46549] hover:border-[#C46549]"
      >
        <MessageCircle strokeWidth={1.5} className="w-5 h-5" />
        <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] font-medium">WhatsApp</span>
      </a>
      <a
        href={`tel:${BRAND.phone}`}
        data-testid="floating-call-cta"
        className="group flex items-center gap-1.5 sm:gap-2 bg-[#F6F5F2] text-[#1E3B2C] p-3 sm:pl-4 sm:pr-5 sm:py-3 border border-[#1E3B2C] transition-colors duration-300 hover:bg-[#1E3B2C] hover:text-[#F6F5F2]"
      >
        <Phone strokeWidth={1.5} className="w-5 h-5" />
        <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] font-medium">Call now</span>
      </a>
    </div>
  );
}
