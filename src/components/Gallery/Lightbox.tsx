"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}

export default function Lightbox({ isOpen, onClose, images, initialIndex = 0 }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, initialIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Left */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Main Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="w-full h-full object-contain select-none"
            />
            
            {/* Image Info */}
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <p className="text-white/60 font-label-caps text-xs tracking-widest uppercase">
                Frame {currentIndex + 1} of {images.length}
              </p>
            </div>
          </motion.div>

          {/* Navigation - Right */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Thumbnails (Mobile Optimized) */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-2 bg-white/5 rounded-full backdrop-blur-md max-w-[90vw] overflow-x-auto scrollbar-hide">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === idx ? "border-primary scale-110" : "border-transparent opacity-40"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
