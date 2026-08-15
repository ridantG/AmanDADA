import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import SEO from "../components/SEO";
import heroImage from "../assets/background.jpeg";
import aboutImage from "../assets/about.jpeg";

const photos = [
  { src: heroImage, alt: "Aman Shinde hosting a live event on stage" },
  { src: aboutImage, alt: "Aman Shinde at an event venue" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div className="bg-gray-50 pt-24 pb-16 px-6 md:px-16">
      <SEO
        title="Wedding & Event Gallery"
        description="Photos from live events hosted by wedding anchor Aman Shinde — sangeet nights, weddings, corporate galas and celebrity shows across Delhi, Gwalior, Indore and beyond."
        path="/gallery"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h3 className="text-sm font-semibold text-yellow-500 uppercase mb-2">Gallery</h3>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#737874]">
          Moments On Stage
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A look at the energy, the crowds, and the celebrations — more coming soon.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setActive(i)}
            className="group relative overflow-hidden rounded-xl aspect-square"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </motion.button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-yellow-500 transition"
          >
            <X size={32} />
          </button>
          <img
            src={photos[active].src}
            alt={photos[active].alt}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
