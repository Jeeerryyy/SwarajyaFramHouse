import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

export default function EnquirePage() {
  const [params] = useSearchParams();
  const pkg = params.get("pkg") || "";

  useEffect(() => {
    document.title = "Enquire — Swarajya Farm House | Book Your Stay near Sinhagad Fort";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "Send an enquiry to Swarajya Farm House. Our host will get back to you personally with dates, rooms and menu options within 12 hours."
    );
  }, []);


  return (
    <main data-testid="enquire-page">
      <Navbar />
      <div className="pt-28 sm:pt-40 md:pt-48 pb-4 sm:pb-6">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#5A6A61] mb-2 sm:mb-3">
            We'd love to host you
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl tracking-tighter leading-[0.95] text-[#1A2520] max-w-4xl">
            Send us a note. <span className="italic text-[#1E3B2C]">We'll write back.</span>
          </h1>
        </div>
      </div>
      <EnquiryForm defaultPackage={pkg} />
      <Footer />
    </main>
  );
}
