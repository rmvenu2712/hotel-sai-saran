"use client";

import React, { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive(
      (p) => (p - 1 + testimonials.length) % testimonials.length
    );

  const t = testimonials[active];

  return (
    <section className="py-24 md:py-32 bg-surface-container-low overflow-hidden" id="testimonials">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20 space-y-4">
          <span className="font-label-caps text-label-caps text-royal-gold uppercase tracking-[0.3em] font-bold">GUEST DISPATCHES</span>
          <h2 className="font-display-lg text-4xl md:text-5xl text-primary">Echoes of Grandeur</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 -left-12 opacity-5 text-primary">
            <Quote className="w-48 h-48 fill-current" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-surface-container-lowest p-10 md:p-16 rounded-[40px] shadow-2xl border border-outline-variant/10 relative z-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8 text-royal-gold">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < t.rating ? "fill-current" : "opacity-20"}`} 
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display-lg text-2xl md:text-4xl text-on-surface leading-tight mb-12 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display-lg text-2xl">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-title-sm text-xl text-on-surface">{t.name}</h4>
                    <p className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase opacity-70">{t.location}</p>
                  </div>
                </div>
                <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase opacity-50">{t.date}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-90"
              onClick={prev}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-12 bg-royal-gold" : "w-1.5 bg-outline-variant hover:bg-royal-gold/40"}`}
                  onClick={() => setActive(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-90"
              onClick={next}
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
