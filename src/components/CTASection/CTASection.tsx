"use client";

import React from "react";
import { useBooking } from "@/context/BookingContext";
import { Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  const { openBooking } = useBooking();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-primary group" id="cta">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-label-caps text-[10px] tracking-widest border border-white/20"
          >
            <Sparkles className="w-3 h-3 text-royal-gold" />
            START YOUR JOURNEY
          </motion.div>

          <h2 className="font-display-lg text-4xl md:text-6xl text-white leading-tight">
            Ready for an Unforgettable<br />Stay in Rameswaram?
          </h2>

          <p className="font-body-lg text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Book your room today and experience the perfect blend of
            spiritual serenity and premium comfort at Hotel Sai Saran.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
            <button
              className="w-full md:w-auto bg-white text-primary px-10 py-5 rounded-xl font-label-caps text-sm font-bold tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all"
              onClick={() => openBooking()}
              id="cta-book-now"
            >
              Book Now — Best Rates Guaranteed
            </button>
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-3 text-white font-label-caps text-sm tracking-widest hover:text-royal-gold transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
