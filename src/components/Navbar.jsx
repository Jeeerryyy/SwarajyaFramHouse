import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/data";

const links = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/enquire", label: "Enquire" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#F6F5F2]/80 border-b border-[#D5D1C4]"
          : "bg-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2" data-testid="brand-logo">
          <span className="font-serif text-2xl md:text-3xl leading-none text-[#1E3B2C]">
            Swarajya
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#5A6A61] hidden sm:inline">
            Farm House
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-xs uppercase tracking-[0.22em] text-[#1A2520] hover:text-[#C46549] transition-colors duration-300"
              data-testid={`nav-${l.label.toLowerCase()}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#amenities"
            className="text-xs uppercase tracking-[0.22em] text-[#1A2520] hover:text-[#C46549] transition-colors duration-300"
            data-testid="nav-amenities"
          >
            Amenities
          </a>
          <a
            href="#contact"
            className="text-xs uppercase tracking-[0.22em] text-[#1A2520] hover:text-[#C46549] transition-colors duration-300"
            data-testid="nav-contact"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BRAND.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#1E3B2C] text-[#F6F5F2] px-5 py-2.5 text-xs uppercase tracking-[0.22em] hover:bg-[#C46549] transition-colors duration-300"
            data-testid="nav-book-cta"
          >
            Book a stay
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#1E3B2C]"
            aria-label="Menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-[#D5D1C4] bg-[#F6F5F2]"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-[0.22em] text-[#1A2520]"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={BRAND.whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#1E3B2C] text-[#F6F5F2] px-5 py-3 text-xs uppercase tracking-[0.22em] w-fit"
            >
              Book a stay
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
