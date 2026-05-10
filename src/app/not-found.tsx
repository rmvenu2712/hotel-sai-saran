"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10"
      >
        {/* Heritage Icon */}
        <div className="mb-12 inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/5 border border-primary/20 relative">
          <Compass className="w-16 h-16 text-primary animate-pulse" />
          <div className="absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
            404
          </div>
        </div>

        <h1 className="font-display-lg text-5xl md:text-7xl text-primary mb-6">
          Lost in the Legacy
        </h1>
        
        <p className="font-body-lg text-lg text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed">
          The path you seek has been lost to time. Even in the grandest palaces, one can sometimes lose their way. Let us guide you back to the main sanctuary.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/"
            className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-2xl font-label-caps text-sm font-bold tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 transition-all uppercase"
          >
            <Home className="w-4 h-4" />
            Return to Palace
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-3 border border-outline text-on-surface px-8 py-4 rounded-2xl font-label-caps text-sm font-bold tracking-widest hover:bg-surface-container-low transition-all uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>

      {/* Heritage Pattern Footer Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </main>
  );
}
