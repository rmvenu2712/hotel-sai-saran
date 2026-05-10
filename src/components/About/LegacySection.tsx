"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function LegacySection() {
  const { openBooking } = useBooking();

  return (
    <section className="relative pt-40 md:pt-32 pb-32 overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-10"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPuhw-mDUcAJ6Twu0ukxr8pzlcuyqLh_8V8NwChLq07UwDtEtNa2-VlKpDCc-HxGd-g7QOOMwOmTYNK3vpha4yD9mOKNr91u-ttOV3AXhaYcXONQ7M3slI8uBkqWJ5iMKOZqJJU5OqpJ-gSXGo06lgczr_VXUqbeqFubY8zpKc_rjaXHz6Kk_vz4cnTxy5c1sPAEoGYbjCQYCBtgu3mmZcRwtTsI9bWa0_yPBOuyeY7GdCOGQ00o4LMvRtrW0VkaeBedVR9c2ZLj4r"
          alt="Intricate Dravidian stone architectural details"
        />
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col md:flex-row items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <span className="font-label-caps text-label-caps text-royal-gold tracking-widest mb-4 block">OUR HERITAGE</span>
          <h2 className="font-headline-md text-4xl md:text-5xl text-on-surface mb-8">A Legacy Carved in Time</h2>
          <p className="font-body-lg text-on-surface-variant mb-6 leading-relaxed">
            Heritage Rameshwaram is more than a luxury destination; it is a living tribute to the architectural brilliance of the Great Chola Empire. Our foundation rests upon the same principles of grandeur and precision that erected the Brihadisvara Temple over a millennium ago.
          </p>
          <p className="font-body-lg text-on-surface-variant mb-10 leading-relaxed">
            Every stone in our sanctuary has been hand-selected and carved by master craftsmen whose lineage traces back to the royal architects of the 10th century. Here, history is not observed—it is inhabited.
          </p>
          <button 
            onClick={() => openBooking()}
            className="group flex items-center gap-4 text-royal-gold font-label-caps tracking-widest border border-royal-gold/30 px-8 py-4 rounded-xl hover:bg-royal-gold hover:text-white transition-all duration-500"
          >
            DISCOVER OUR STORY
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPuhw-mDUcAJ6Twu0ukxr8pzlcuyqLh_8V8NwChLq07UwDtEtNa2-VlKpDCc-HxGd-g7QOOMwOmTYNK3vpha4yD9mOKNr91u-ttOV3AXhaYcXONQ7M3slI8uBkqWJ5iMKOZqJJU5OqpJ-gSXGo06lgczr_VXUqbeqFubY8zpKc_rjaXHz6Kk_vz4cnTxy5c1sPAEoGYbjCQYCBtgu3mmZcRwtTsI9bWa0_yPBOuyeY7GdCOGQ00o4LMvRtrW0VkaeBedVR9c2ZLj4r"
              alt="Traditional Dravidian architecture detail"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-surface-container-highest p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-royal-gold/10">
            <p className="font-title-sm text-royal-gold mb-2 italic">"Preserving the soul of an empire through the art of luxury."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
