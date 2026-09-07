import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react"; // for mobile menu icons
import { FaInstagram, FaWhatsapp, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import { PHONE, PHONE_HREF, EMAIL, SOCIALS, whatsappLink } from "../data/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/why-aman-shinde", label: "Why Aman" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
];


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1c1f1c] text-white shadow-md z-50">
      {/* Top contact/social bar */}
      <div className="hidden md:block bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-2 text-xs text-gray-300">
          <div className="flex items-center gap-6">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 hover:text-yellow-500 transition">
              <Phone size={13} /> {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 hover:text-yellow-500 transition"
            >
              <Mail size={13} /> {EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-500 transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-400 transition-transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
            <a
              href={SOCIALS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-500 transition-transform hover:scale-110"
            >
              <FaYoutube />
            </a>
            <a
              href={SOCIALS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-blue-400 transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <p className="text-2xl font-bold text-yellow-500">ANCHOR</p>
          <span className="text-2xl font-bold text-white">AMAN SHINDE</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors ${
                pathname === link.to ? "text-yellow-500" : "hover:text-yellow-500"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 hover:scale-105 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#1c1f1c] overflow-hidden"
          >
            <div className="px-8 pb-6 space-y-4 text-lg font-semibold uppercase tracking-wide">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block transition-colors ${
                    pathname === link.to ? "text-yellow-500" : "hover:text-yellow-500"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className="block bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition w-fit"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
