"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function GuestVoices() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="py-24 md:py-32 bg-surface-container-low px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-left"
          >
            <span className="font-label-caps text-label-caps text-royal-gold uppercase tracking-[0.3em]">GUEST VOICES</span>
            <h2 className="font-headline-md text-4xl md:text-5xl text-on-surface">Reflections of Excellence</h2>
            <div className="flex gap-1 text-royal-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </motion.div>
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-royal-gold hover:text-on-primary transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-royal-gold hover:text-on-primary transition-all active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.05, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white p-12 md:p-16 rounded-xl shadow-xl relative z-10 border border-outline-variant/10"
            >
              <div className="absolute top-8 right-12 opacity-10">
                <Quote className="w-24 h-24 text-royal-gold rotate-180" />
              </div>
              <p className="font-display-lg text-sm md:text-2xl lg:text-3xl text-on-surface italic leading-relaxed mb-12 relative z-20">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold font-bold text-xl border-2 border-royal-gold/20">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-title-sm text-md md:text-lg text-on-surface">{t.name}</div>
                  <div className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">{t.location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
