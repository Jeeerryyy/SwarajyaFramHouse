import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#F6F5F2]/80 border-b border-[#D5D1C4]"
          : "bg-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" data-testid="brand-logo">
          <img
            src="/logo.png"
            alt="Swarajya Farm House & Resort Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-full border border-[#1E3B2C]/15 shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl leading-none text-[#1E3B2C]">
              Swarajya
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#5A6A61] mt-0.5 font-medium">
              Farm House & Resort
            </span>
          </div>
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
            href="#gallery"
            className="text-xs uppercase tracking-[0.22em] text-[#1A2520] hover:text-[#C46549] transition-colors duration-300"
            data-testid="nav-gallery"
          >
            Gallery
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
            className="md:hidden p-2 text-[#1E3B2C] relative z-[60]"
            aria-label="Menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 bg-[#F6F5F2] z-50 flex flex-col"
          >
            {/* Header spacer to match navbar height */}
            <div className="h-14 sm:h-16 shrink-0" />

            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={l.to}
                    className="block font-serif text-4xl sm:text-5xl tracking-tight text-[#1A2520] hover:text-[#C46549] transition-colors py-2"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              {/* Anchor links also in mobile menu */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.34, duration: 0.4 }}
              >
                <a
                  href="#amenities"
                  className="block font-serif text-4xl sm:text-5xl tracking-tight text-[#1A2520] hover:text-[#C46549] transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Amenities
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.38, duration: 0.4 }}
              >
                <a
                  href="#gallery"
                  className="block font-serif text-4xl sm:text-5xl tracking-tight text-[#1A2520] hover:text-[#C46549] transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Gallery
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.46, duration: 0.4 }}
              >
                <a
                  href="#contact"
                  className="block font-serif text-4xl sm:text-5xl tracking-tight text-[#1A2520] hover:text-[#C46549] transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </motion.div>

              {/* Divider */}
              <div className="h-[1px] bg-[#D5D1C4] my-2" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <a
                  href={BRAND.whatsappBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#1E3B2C] text-[#F6F5F2] px-6 py-4 text-xs uppercase tracking-[0.22em] w-fit hover:bg-[#C46549] transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  Book a stay
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
