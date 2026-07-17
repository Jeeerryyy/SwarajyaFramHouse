import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { PACKAGES, BRAND, IMAGES } from "@/lib/data";
import { Link } from "react-router-dom";

function PackageRow({ pkg, index }) {
  const flip = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-12 gap-8 md:gap-14 items-start py-16 md:py-24 border-t border-[#D5D1C4]"
      data-testid={`package-row-${pkg.id}`}
    >
      {/* Visuals: Photo */}
      <div className={`col-span-12 md:col-span-6 space-y-4 ${flip ? "md:order-2 md:col-start-7" : ""}`}>
        <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10] shadow-md border border-[#D5D1C4]/50">
          <motion.img
            src={pkg.image}
            alt={pkg.title}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-white/95 bg-[#1E3B2C] backdrop-blur-sm px-3 py-1.5 font-semibold">
            {pkg.number} / Stay Package
          </div>
        </div>
      </div>

      {/* Content details */}
      <div className={`col-span-12 md:col-span-6 ${flip ? "md:order-1 md:col-start-1" : ""}`}>
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#C46549] mb-3 font-semibold">
          {pkg.subtitle}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1] text-[#1A2520]">
          {pkg.title}
        </h2>
        <p className="mt-4 text-sm text-[#5A6A61] italic">{pkg.accent}</p>

        {/* Pricing & Timing Matrix */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4 border-y border-[#D5D1C4]/40 py-6 my-6">
          <Meta label="Mon - Fri" value={pkg.priceWeekday} sub={pkg.unit} />
          <Meta label="Sat - Sun" value={pkg.priceWeekend} sub={pkg.unit} />
          <Meta label="Timing" value={pkg.duration} />
        </div>

        {/* Meal Inclusions Badges */}
        {pkg.meals && (
          <div className="mb-6 flex flex-wrap gap-2 items-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#5A6A61] mr-2">Meals Included:</span>
            {pkg.meals.map((meal, idx) => (
              <span key={idx} className="bg-[#1E3B2C]/10 text-[#1E3B2C] border border-[#1E3B2C]/20 text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 font-semibold rounded-sm">
                {meal}
              </span>
            ))}
          </div>
        )}

        {/* Details and Inclusions list */}
        <ul className="mt-6 space-y-3.5 max-w-xl">
          {pkg.inclusions.map((inc) => (
            <li key={inc} className="flex items-start gap-3.5 text-sm text-[#1A2520] leading-relaxed">
              <Check
                strokeWidth={2}
                className="w-4.5 h-4.5 text-[#C46549] mt-[2px] shrink-0"
              />
              <span>{inc}</span>
            </li>
          ))}
        </ul>

        {/* CTA Actions */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to={`/enquire?pkg=${encodeURIComponent(pkg.title)}`}
            data-testid={`enquire-${pkg.id}`}
            className="inline-flex items-center gap-3 bg-[#C46549] hover:bg-[#1E3B2C] text-white px-6 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-500 font-semibold"
          >
            Enquire Now
          </Link>
          <a
            href={`${BRAND.whatsappBase}?text=Hello,%20I%20want%20to%20know%20more%20about%20the%20${encodeURIComponent(
              pkg.title
            )}%20package%20at%20Swarajya%20Farm%20House.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#1E3B2C] text-[#1E3B2C] px-5 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#1E3B2C] hover:text-[#F6F5F2] transition-colors duration-500 font-semibold"
          >
            <MessageCircle strokeWidth={1.5} className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex items-center gap-2 text-[#1E3B2C] px-5 py-4 text-xs uppercase tracking-[0.28em] hover:text-[#C46549] transition-colors font-semibold"
          >
            <Phone strokeWidth={1.5} className="w-4 h-4" />
            Call
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Meta({ label, value, sub }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.3em] text-[#5A6A61]">{label}</p>
      <p className="font-serif text-xl text-[#1A2520] mt-1 leading-tight font-bold">{value}</p>
      {sub && <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A6A61] mt-0.5">{sub}</p>}
    </div>
  );
}

export default function PackagesPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    document.title = "Stay Packages — Swarajya Farm House | Sinhagad Fort, Pune";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "Explore stay packages at Swarajya Farm House. One-night stays from ₹1,400/person, 24-hour stays from ₹1,800/person. Includes meals, pool, rain dance & more."
    );
  }, []);

  return (
    <main data-testid="packages-page">
      <Navbar />

      {/* Editorial hero */}
      <section className="relative pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden">
        <motion.div style={{ y }} className="absolute -top-32 right-0 -z-10 opacity-30">
          <img
            src={IMAGES.landscape}
            alt=""
            className="w-[80vw] max-w-[900px] object-cover h-[70vh]"
          />
        </motion.div>
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.32em] text-[#5A6A61] mb-3"
          >
            The Offering
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-[9vw] tracking-tighter leading-[0.92] text-[#1A2520] max-w-5xl"
          >
            Packages, curated for <span className="italic text-[#1E3B2C]">every mood</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 max-w-lg text-sm md:text-base text-[#1A2520]/80 leading-relaxed"
          >
            From a barefoot day-picnic to a candle-lit banquet, our packages are
            hand-built by the owner. Choose one, or ask us to design yours.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        {PACKAGES.map((p, i) => (
          <PackageRow key={p.id} pkg={p} index={i} />
        ))}
      </section>

      <EnquiryForm />
      <Footer />
    </main>
  );
}
