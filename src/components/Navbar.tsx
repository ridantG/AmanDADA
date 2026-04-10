import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for mobile menu icons

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1c1f1c] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-yellow-500">ANCHOR</h1>
          <span className="text-2xl font-bold text-white">AMAN SHINDE</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wide">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/about" className="hover:text-yellow-500">About</Link>
          <Link to="/services" className="hover:text-yellow-500">Services</Link>
          <Link to="/gallery" className="hover:text-yellow-500">Gallery</Link>

          <Link
            to="/contact"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1c1f1c] px-8 pb-6 space-y-4 text-lg font-semibold uppercase tracking-wide">

          <Link
            to="/"
            className="block hover:text-yellow-500"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block hover:text-yellow-500"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          <Link
            to="/services"
            className="block hover:text-yellow-500"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/gallery"
            className="block hover:text-yellow-500"
            onClick={() => setMobileOpen(false)}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className="block bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
