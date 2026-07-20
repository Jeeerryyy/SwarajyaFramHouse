import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import PackagesPreview from "@/components/PackagesPreview";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const PAGE_TITLE = "Swarajya Farm House — Resort & Event Farmhouse near Sinhagad Fort, Pune";

export default function HomePage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "16-acre family-run resort at Ghera Sinhagad, Pune. Swimming pool, rain dance, AC banquet hall, in-house restaurant. Perfect for weekends, weddings & parties."
    );
  }, []);

  return (
    <main data-testid="home-page">
      <Navbar />
      <Hero />
      <Manifesto />
      <Amenities />
      <Gallery />
      <PackagesPreview />
      <TestimonialsMarquee />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
