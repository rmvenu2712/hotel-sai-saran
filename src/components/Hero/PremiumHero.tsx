"use client";

import React from "react";
import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

export default function PremiumHero() {
  const { openBooking } = useBooking();

  return (
    <header className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBtvNYbsfxIRB8xKcai7jM4X70_1Q3J3fNyTZwbVx06I_XrSFbTiYp5y9wEoSI2JtZRkUFC3ZraG1BL4L9iVDz8y5mF4Bw6caiVfbWSX3Dp5zOSuVwXydPdiryiROxVJTeu1C5sS0pWwLKu1ap-Z4D7EzjpNNAE-Yxvgt9mKsf7JfyToQb6Oi98gp_ccbKMpUa3H5kM5OE0uG9yNGy8UtVNv3Sc4i575lMlUhMpetTSGLc2SeoKcagvrJU4njI4c4sZ8AEGkuvrg2P"
          alt="A grand heritage suite with ornate stone carvings"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop pb-32 max-w-container-max mx-auto w-full text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-label-caps text-label-caps text-royal-gold mb-4 block tracking-[0.4em]"
        >
          RESIDE IN MAJESTY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display-lg text-5xl md:text-7xl text-on-surface leading-[1.1] max-w-5xl mx-auto drop-shadow-lg mb-16"
        >
          Sovereign Luxury Amidst<br className="hidden md:block" />Timeless Dravidian Heritage
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-12"
        >
          <button
            onClick={() => openBooking()}
            className="bg-royal-gold text-on-primary px-10 py-5 rounded-xl font-label-caps text-sm tracking-widest hover:bg-primary-container transition-all hover:shadow-2xl active:scale-95 shadow-xl"
          >
            RESERVE YOUR SANCTUARY
          </button>

          {/* Integrated Booking Bar */}
          <div className="bg-surface-container-lowest/90 p-gutter rounded-2xl shadow-[0_20px_60px_rgba(184,134,11,0.15)] border border-royal-gold/10 max-w-5xl w-full backdrop-blur-md">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-gutter items-end" onSubmit={(e) => { e.preventDefault(); openBooking(); }}>
              <div className="flex flex-col text-left">
                <label className="font-label-caps text-[10px] text-on-surface-variant mb-2 opacity-70">CHECK-IN</label>
                <div className="relative group">
                  <input
                    className="w-full bg-transparent border-b border-outline-variant focus:border-royal-gold px-0 py-3 outline-none font-body-md transition-colors"
                    placeholder="Select Date"
                    type="text"
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => e.target.type = 'text'}
                  />
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-royal-gold/60 group-hover:text-royal-gold transition-colors">calendar_today</span>
                </div>
              </div>

              <div className="flex flex-col text-left">
                <label className="font-label-caps text-[10px] text-on-surface-variant mb-2 opacity-70">CHECK-OUT</label>
                <div className="relative group">
                  <input
                    className="w-full bg-transparent border-b border-outline-variant focus:border-royal-gold px-0 py-3 outline-none font-body-md transition-colors"
                    placeholder="Select Date"
                    type="text"
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => e.target.type = 'text'}
                  />
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-royal-gold/60 group-hover:text-royal-gold transition-colors">calendar_today</span>
                </div>
              </div>

              <div className="flex flex-col text-left">
                <label className="font-label-caps text-[10px] text-on-surface-variant mb-2 opacity-70">GUESTS</label>
                <div className="relative group">
                  <select className="w-full bg-transparent border-b border-outline-variant focus:border-royal-gold px-0 py-3 outline-none font-body-md appearance-none transition-colors cursor-pointer">
                    <option>2 Adults, 0 Children</option>
                    <option>1 Adult</option>
                    <option>2 Adults, 1 Child</option>
                    <option>Family (4+)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-royal-gold/60 group-hover:text-royal-gold transition-colors pointer-events-none">group</span>
                </div>
              </div>

              <button
                type="submit"
                className="bg-royal-gold text-on-primary h-[56px] rounded-lg font-label-caps text-label-caps hover:bg-primary/90 transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">search</span>
                CHECK AVAILABILITY
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
