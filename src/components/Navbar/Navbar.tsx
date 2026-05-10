"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBooking } = useBooking();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/facility", label: "Facility" },
    { href: "/gallery", label: "Gallery" },
    { href: "/rooms", label: "Rooms" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || !isHome ? "h-20 bg-surface/95 backdrop-blur-2xl shadow-lg" : "h-24 bg-transparent"
      }`}
    >
      <div className="max-w-container-max mx-auto h-full flex justify-between items-center px-margin-mobile md:px-margin-desktop border-b border-royal-gold/10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <img src="/logo.png" alt="Hotel Sai Saran" className="h-12 md:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-stack-md">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`font-body-lg text-body-lg transition-all duration-300 hover:scale-105 px-2 ${
                scrolled || !isHome ? "text-on-surface-variant hover:text-royal-gold" : "text-white hover:text-royal-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => openBooking()}
            className="hidden md:block bg-royal-gold text-on-primary px-8 py-2.5 rounded-lg font-label-caps text-label-caps hover:bg-primary-container transition-all active:scale-95 border border-royal-gold/20 shadow-md"
          >
            Book Now
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-royal-gold p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-surface-container-lowest border-b border-royal-gold/10 shadow-xl md:hidden z-40 overflow-hidden"
          >
            <nav className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-title-sm text-2xl text-on-surface hover:text-royal-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                className="w-full bg-royal-gold text-on-primary py-4 rounded-xl font-label-caps text-label-caps mt-4 shadow-lg"
                onClick={() => {
                  setMobileOpen(false);
                  openBooking();
                }}
              >
                Book Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

