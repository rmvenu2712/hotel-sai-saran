"use client";

import React from "react";
import { motion } from "framer-motion";
import { History, Heart, Gem, Leaf, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4dFhWRj-H-ylAFP3b1tHKSMoufXCHja76PUWLy8NowTU9JRk2A6Gr30Ion2t5Y8y8yO6aB-ZxDQvmvguSUm_C6xgRheD1Ch58SwV120HALL9UYNPpp9RebMsnYuFl3xFm4CQeR01SwTWS_9ZxFAXPWloIgyCoGWL_0taKzvRc6GMN_vg76_8mnBlKHkhIzzA_99N-3o6VRBritDDGPwpVSzcku5luks-0KvEt7w-PvvckhEsivdhCQnj8pLr57mbvgFQQC0HQy0zl" 
            className="w-full h-full object-cover"
            alt="Heritage View"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label-caps text-label-caps text-royal-gold tracking-[0.4em] mb-4 block uppercase"
          >
            OUR STORY
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display-lg text-4xl md:text-6xl text-white mb-6"
          >
            The Soul of Rameswaram
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-body-lg text-white/80 max-w-2xl mx-auto italic"
          >
            A legacy of warm hospitality in the sacred city since 2010.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="font-label-caps text-label-caps text-royal-gold uppercase tracking-[0.3em]">
                Our Heritage
              </span>
              <h2 className="font-headline-md text-4xl md:text-5xl text-primary leading-tight">
                Where Spirituality Meets Luxury
              </h2>
              <div className="h-0.5 w-16 bg-royal-gold"></div>
            </div>
            <div className="space-y-6 font-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Founded in 2010, Hotel Sai Saran was born from a simple vision — to provide
                pilgrims and travelers visiting the sacred city of Rameswaram with an accommodation
                experience that honors both the spiritual significance of this holy land and the
                modern comforts that today&apos;s discerning travelers expect.
              </p>
              <p>
                Located just steps from the magnificent Ramanathaswamy Temple, our hotel has
                grown from a modest guesthouse into one of Rameswaram&apos;s most beloved heritage
                properties, serving thousands of guests each year with our signature blend of
                traditional Tamil hospitality.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVjWVWWDuNPyzBqeBs7-aQc_vJRiGqd0QHtLnyglbGbQbZcA1iwT8wIQHQttOp9OJbF0x1qkYO1N4yzRx3Mf3I-I15qf20UfZ9giTPdli-sZC7Ya8yf1T_Ya2_tc9ax4_CiEGfx9vbdjnWdGPsZw3vczedTWUfaNDXPa2f7ruHfVocEGojzRgbG8Q8qrUOQMB6fCuoWQbKQBh8rsg-Ultu17g58ig8xUbIKLBBqAIG3hEehdl6lHq0s26xfEJrnhPUkS0k2S8vnlg2" 
                className="w-full h-full object-cover" 
                alt="Heritage Architecture" 
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-royal-gold p-10 rounded-2xl shadow-xl hidden md:block">
              <span className="font-display-lg text-4xl text-white block">15+</span>
              <span className="font-label-caps text-xs text-white/80 tracking-widest uppercase">Years of Service</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="max-w-3xl mx-auto mb-20 space-y-4">
            <span className="font-label-caps text-label-caps text-royal-gold uppercase tracking-[0.3em]">Our Essence</span>
            <h2 className="font-headline-md text-4xl md:text-5xl text-on-surface">What Makes Us Special</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Spiritual Hospitality",
                description: "We understand the sacred nature of your journey and provide services that complement your spiritual experience.",
              },
              {
                icon: <History className="w-10 h-10" />,
                title: "Cultural Heritage",
                description: "Our décor, cuisine, and service reflect the rich cultural heritage of Tamil Nadu and the temple city of Rameswaram.",
              },
              {
                icon: <Gem className="w-10 h-10" />,
                title: "Premium Comfort",
                description: "Modern amenities meet traditional warmth — we ensure every guest experiences the finest in comfort and care.",
              },
              {
                icon: <Leaf className="w-10 h-10" />,
                title: "Sustainable Practices",
                description: "We are committed to eco-friendly operations, from water conservation to locally sourced ingredients.",
              },
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-royal-gold mb-6 flex justify-center">{value.icon}</div>
                <h3 className="font-title-sm text-xl mb-4">{value.title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { number: "15+", label: "Years of Service" },
              { number: "10,000+", label: "Happy Guests" },
              { number: "6", label: "Room Categories" },
              { number: "4.8", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <span className="font-display-lg text-4xl md:text-6xl block text-royal-gold">{stat.number}</span>
                <span className="font-label-caps text-xs tracking-[0.2em] opacity-70 uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
