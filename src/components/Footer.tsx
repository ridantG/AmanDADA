import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaYoutube, FaTwitter } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "918871871143";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 pt-16 pb-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-yellow-500">ANCHOR</span>
            <span className="text-white">AMAN SHINDE</span>
          </h1>
          <p className="text-gray-400 mt-3">
            India’s premium event anchor with 17+ years of experience in
            weddings, corporate shows, concerts & international events.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <a
              href="https://www.instagram.com/anchor_shinde?igsh=MXJ4NnE3NGgzazg1ZQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-300 hover:text-yellow-500 text-2xl transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Aman, I want to book you for an event.")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-300 hover:text-green-400 text-2xl transition-transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://youtube.com/@anchorfromdelhi?si=dRkvJWnPMnslOgi3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-300 hover:text-red-500 text-2xl transition-transform hover:scale-110"
            >
              <FaYoutube />
            </a>

            <a
              href="https://x.com/anchoramanmp07?s=21"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-gray-300 hover:text-blue-400 text-2xl transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-yellow-500 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-500 shrink-0" /> Pan India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-500 shrink-0" />
              <a href="tel:+918871871143" className="hover:text-yellow-500 transition">
                +91 8871871143
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-500 shrink-0" />
              <a href="mailto:themicmagician@gmail.com" className="hover:text-yellow-500 transition">
                themicmagician@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* WHATSAPP CTA */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Book Me Now</h3>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Aman, I want to book you for an event.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold block text-center hover:bg-yellow-400 hover:scale-105 transition"
          >
            WhatsApp Message
          </a>
        </div>

      </div>

      <hr className="border-gray-700 my-8" />

      {/* COPYRIGHT */}
      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Anchor Aman Shinde. All Rights Reserved.
      </p>
    </footer>
  );
}
