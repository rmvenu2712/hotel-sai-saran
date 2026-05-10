"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flower2, Waves, ScrollText } from "lucide-react";

export default function RoyalAmenities() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 border-t border-outline-variant/20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-headline-md text-headline-md text-center mb-16"
      >
        Royal Amenities & Traditions
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
        {/* Main Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 md:row-span-2 bg-secondary-container rounded-2xl p-stack-lg flex flex-col justify-end relative overflow-hidden group min-h-[400px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-110 transition-transform duration-[2s]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJfaNzE0ppapcFNniAz53R79d_k_R_wWPR6aAMnUPCGJzNBPBczXnnnW9zTClsfk3KZMZ-yyUvHuOW8lmXnsSF5_FsC6Br1evJdXsHv2iKMzc8PkRECSuxR05i6bklzQ0PCMdvnT3yYBk4C30DvPKAKqIsFvIDAzWWaYiPTedA6Fr-gxtvxzYywOfWaKUGYxwUPXKgb2tHkBZOy9seb5k9XC28R3H3eQi9ZABYy5ivOrFkfrb78d6RcUxGwU9tFQf-bYGKlbaFc_In"
            alt="The Rajaraja Kitchen"
          />
          <div className="relative z-10 text-on-primary">
            <span className="font-label-caps text-label-caps mb-2 block tracking-widest opacity-80">GASTRONOMY</span>
            <h3 className="font-headline-md text-3xl mb-4">The Rajaraja Kitchen</h3>
            <p className="font-body-lg max-w-sm opacity-90">An exquisite journey through ancestral recipes served on silver platters, echoing the royal banquets of old.</p>
          </div>
        </motion.div>

        {/* Small Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-surface-container-high rounded-2xl p-stack-md flex flex-col justify-between hover:bg-royal-gold/5 transition-all duration-500 cursor-pointer group border border-outline-variant/10"
        >
          <Flower2 className="w-12 h-12 text-royal-gold group-hover:scale-110 transition-transform" />
          <div>
            <h4 className="font-title-sm text-title-sm mb-2">Vedic Spa</h4>
            <p className="font-body-md text-on-surface-variant opacity-80">Ancient Ayurvedic rituals and soul-cleansing therapies.</p>
          </div>
        </motion.div>

        {/* Small Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-surface-container-high rounded-2xl p-stack-md flex flex-col justify-between hover:bg-royal-gold/5 transition-all duration-500 cursor-pointer group border border-outline-variant/10"
        >
          <Waves className="w-12 h-12 text-royal-gold group-hover:scale-110 transition-transform" />
          <div>
            <h4 className="font-title-sm text-title-sm mb-2">The Lotus Pool</h4>
            <p className="font-body-md text-on-surface-variant opacity-80">An emerald water sanctuary overlooking temple spires.</p>
          </div>
        </motion.div>

        {/* Horizontal Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 bg-primary-container/10 rounded-2xl p-stack-md flex items-center justify-between group overflow-hidden relative border border-royal-gold/20"
        >
          <div className="relative z-10">
            <h4 className="font-title-sm text-title-sm text-royal-gold mb-2">Cultural Concierge</h4>
            <p className="font-body-md text-on-surface-variant max-w-xs">Curated historical explorations led by renowned temple scholars and traditional artisans.</p>
          </div>
          <ScrollText className="w-48 h-48 text-royal-gold/10 absolute -right-8 -bottom-12 group-hover:rotate-12 transition-transform duration-700 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
