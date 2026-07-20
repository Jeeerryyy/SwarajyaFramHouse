import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react";

/* ───────────────────────── Gallery Data ───────────────────────── */
const TABS = [
  {
    id: "resort",
    label: "Resort & Outdoors",
    images: [
      { src: "/gallery/pool-swarajya-mural.jpeg", caption: "The Swarajya Pool", tag: "Signature" },
      { src: "/gallery/sahyadri-landscape.jpeg", caption: "Sahyadri Panorama", tag: "Views" },
      { src: "/gallery/pool-mountain-view.jpeg", caption: "Mountain-Framed Pool", tag: "Pool" },
      { src: "/gallery/cottage-lawn-pathway.jpeg", caption: "Garden Cottages", tag: "Lawns" },
      { src: "/gallery/terrace-rooftop.jpeg", caption: "Rooftop Terrace", tag: "Terrace" },
      { src: "/gallery/building-lawn-exterior.jpeg", caption: "Resort Building", tag: "Exterior" },
      { src: "/resort-entrance-gate.jpg", caption: "The Grand Entrance", tag: "Entrance" },
      { src: "/resort-exterior-night.jpg", caption: "Night Ambiance", tag: "Evening" },
      { src: "/garden-water-fountain.jpg", caption: "Garden Fountain", tag: "Garden" },
      { src: "/outdoor-garden-seating.jpg", caption: "Outdoor Seating", tag: "Lawns" },
      { src: "/pathway-decorative-lights.jpg", caption: "Lit Pathways", tag: "Evening" },
      { src: "/lawn-gazebo-seating.jpg", caption: "Gazebo Lounge", tag: "Lawns" },
      { src: "/swimming-pool-night.jpg", caption: "Pool After Dark", tag: "Pool" },
      { src: "/rain-dance.jpg", caption: "Rain Dance Arena", tag: "Activities" },
      { src: "/bonfire-night-lawn.jpg", caption: "Bonfire Night", tag: "Evening" },
      { src: "/sinhagad-fort-distant-view.jpg", caption: "Fort in the Distance", tag: "Views" },
      { src: "/reception-lobby-sofa.jpg", caption: "Reception Lobby", tag: "Lobby" },
      { src: "/spacious-banquet-hall.jpg", caption: "Banquet Hall", tag: "Events" },
      { src: "/indoor-dining-area.jpg", caption: "Indoor Dining", tag: "Dining" },
      { src: "/terrace-dining-tables.jpg", caption: "Terrace Dining", tag: "Dining" },
      { src: "/buffet-food-counter.jpg", caption: "Buffet Counter", tag: "Dining" },
      { src: "/dining.jpg", caption: "Restaurant View", tag: "Dining" },
      { src: "/terrace-sunset-view.jpg", caption: "Sunset from Terrace", tag: "Views" },
    ],
  },
  {
    id: "rooms",
    label: "Rooms",
    images: [
      { src: "/gallery/laterite-room-double.jpeg", caption: "Laterite Heritage Room", tag: "Deluxe" },
      { src: "/gallery/laterite-room-triple.jpeg", caption: "Family Suite", tag: "Suite" },
      { src: "/gallery/room-bed-tv.jpeg", caption: "Private Quarters", tag: "Standard" },
      { src: "/gallery/standard-room.jpeg", caption: "Standard Room", tag: "Standard" },
      { src: "/suite-room-seating.jpg", caption: "Suite Lounge", tag: "Suite" },
      { src: "/modern-bathroom-shower.jpg", caption: "Modern Bathroom", tag: "Amenity" },
      { src: "/room-balcony-view.jpg", caption: "Balcony View", tag: "Views" },
    ],
  },
];

const INITIAL_SHOW_COUNT = 6;

/* ───────── Editorial Card with 3D Tilt ───────── */
function EditorialCard({ image, index, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 30 };
  const sRotateX = useSpring(rotateX, springConfig);
  const sRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * 8);
    rotateX.set(-((e.clientY - cy) / (rect.height / 2)) * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      className="editorial-card group"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.05, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(image, index)}
      style={{
        rotateX: sRotateX,
        rotateY: sRotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <span className="editorial-number">{num}</span>
      <div className="editorial-img-container">
        <img src={image.src} alt={image.caption} loading="lazy" className="editorial-img" />
        <div className="editorial-overlay" />
      </div>
      <div className="editorial-caption">
        <span className="editorial-tag">{image.tag}</span>
        <h4 className="editorial-title">{image.caption}</h4>
        <div className="editorial-line" />
      </div>
      <div className="editorial-corner editorial-corner--tl" />
      <div className="editorial-corner editorial-corner--br" />
    </motion.div>
  );
}

/* ───────── Lightbox ───────── */
function Lightbox({ image, images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  const img = images[current];
  const num = String(current + 1).padStart(2, "0");
  const total = String(images.length).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="lightbox-backdrop"
      onClick={onClose}
    >
      <div className="lightbox-counter">
        <span className="lightbox-counter-current">{num}</span>
        <span className="lightbox-counter-sep">/</span>
        <span className="lightbox-counter-total">{total}</span>
      </div>
      <button onClick={onClose} className="lightbox-close" aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="4" y1="4" x2="20" y2="20" />
          <line x1="20" y1="4" x2="4" y2="20" />
        </svg>
      </button>
      <button
        className="lightbox-arrow lightbox-arrow--left"
        onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p - 1 + images.length) % images.length); }}
        aria-label="Previous"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="lightbox-arrow lightbox-arrow--right"
        onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p + 1) % images.length); }}
        aria-label="Next"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      <AnimatePresence mode="wait">
        <motion.div
          key={img.src}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lightbox-image-wrap"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={img.src} alt={img.caption} className="lightbox-image" />
          <div className="lightbox-info">
            <span className="lightbox-tag">{img.tag}</span>
            <h3 className="lightbox-title">{img.caption}</h3>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════ MAIN GALLERY COMPONENT ═══════════════════ */
export default function Gallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { image, index }
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const currentTab = TABS[activeTab];

  // Reset expansion state when changing tabs
  const handleTabChange = (index) => {
    setActiveTab(index);
    setIsExpanded(false);
  };

  const visibleImages = isExpanded
    ? currentTab.images
    : currentTab.images.slice(0, INITIAL_SHOW_COUNT);

  const openLightbox = (image, index) => setLightbox({ image, index });

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        className="gallery-section"
        data-testid="gallery-section"
      >
        {/* Ambient BG */}
        <div className="gallery-ambient gallery-ambient--1" />
        <div className="gallery-ambient gallery-ambient--2" />

        <div className="gallery-container">
          {/* ═══ HEADER ═══ */}
          <div className="gallery-header flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={sectionInView ? { width: 48 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="gallery-header-line"
              />
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="gallery-kicker"
              >
                The Gallery
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="gallery-heading"
              >
                Every corner tells{" "}
                a <span className="gallery-heading-accent">story</span>.
              </motion.h2>
            </div>

            {/* Total Photo Counter Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 bg-[#1A2520] border border-white/10 px-4 py-2 rounded-full text-xs text-white/80 w-fit"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#C46549]" />
              <span>{currentTab.images.length} Photos in Album</span>
            </motion.div>
          </div>

          {/* ═══ TAB BAR ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="gallery-tabs"
          >
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(i)}
                className={`gallery-tab ${activeTab === i ? "gallery-tab--active" : ""}`}
              >
                <span className="gallery-tab-label">{tab.label}</span>
                <span className="gallery-tab-count">{tab.images.length}</span>
                {activeTab === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="gallery-tab-indicator"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* ═══ IMAGE GRID (Compact Default View) ═══ */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentTab.id}-${isExpanded ? "expanded" : "compact"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="editorial-grid"
            >
              {visibleImages.map((img, i) => (
                <EditorialCard
                  key={img.src}
                  image={img}
                  index={i}
                  onClick={openLightbox}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ═══ EXPAND / COLLAPSE ACTION BUTTON ═══ */}
          {currentTab.images.length > INITIAL_SHOW_COUNT && (
            <div className="flex justify-center mt-6 md:mt-8 pb-10">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#1A2520] border border-white/15 text-white text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#C46549] hover:border-[#C46549] transition-all duration-400 shadow-xl"
              >
                <span>
                  {isExpanded
                    ? "Show Highlights Only"
                    : `View Full Album (${currentTab.images.length} Photos)`}
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-[#C46549] group-hover:text-white transition-colors" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#C46549] group-hover:text-white transition-colors" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Bottom gradient to next section */}
        <div className="gallery-bottom-fade" />
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            image={lightbox.image}
            images={currentTab.images}
            startIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
