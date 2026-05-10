"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Temple Sunset Tour",
    label: "CHOLA LEGACY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVjWVWWDuNPyzBqeBs7-aQc_vJRiGqd0QHtLnyglbGbQbZcA1iwT8wIQHQttOp9OJbF0x1qkYO1N4yzRx3Mf3I-I15qf20UfZ9giTPdli-sZC7Ya8yf1T_Ya2_tc9ax4_CiEGfx9vbdjnWdGPsZw3vczedTWUfaNDXPa2f7ruHfVocEGojzRgbG8Q8qrUOQMB6fCuoWQbKQBh8rsg-Ultu17g58ig8xUbIKLBBqAIG3hEehdl6lHq0s26xfEJrnhPUkS0k2S8vnlg2",
  },
  {
    title: "Ancestral Cooking",
    label: "CULINARY ARTS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWS_Q43nbZIFD7_v2LC_cM86raJqm-0Tf_LtSOVgOhy5YjJOSvLvuUs-7tjILu5tV6os2i0HZm0NtP1pPnN9hN_i19Qph7hrzDCjC1pIGG_NWM4SPAIbBiDaeZe7LtXgOeGMbYtA5SKfspjf-HucOlsHog97NRhRsQi-2JzzQPbx6Zo4Cwoc0MPNSyUWgDqVWrMHxOm-3InP3ElqDFryYtAReBG88MxOekhyuPa8z7O_UfTGefvoV73z0NaLPKd3nnbfYTDY62ZZSI",
  },
  {
    title: "Temple Dance Recital",
    label: "SACRED DANCE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8rzxhU84dkpC3HfyS1LtYnCWZdyvjLyvf3n3h1p9uk8g6peGE_VMWOA2p-ZDjzptptx0FBoLxAphim7MmIbIKRQg2efrL3rNzJKhJEcoaJE5i9JMI51tJ164PbEZPvM2_cOD9aHT_fOvSoNzrPTepi3UXsDOFn0ODZBARtnvr8dbwgbM-YgBfQskAHFmszMHY1mFbVOTaH-6vNbOzLhZNA1TlTjdS6pHZVTxCdyjqMJloUMGaQ34_nxtgJ3FiEUuTNCfAR8Zon1Xe",
  },
];

export default function LivingTraditions() {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto text-center mb-16 space-y-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-label-caps text-label-caps text-royal-gold uppercase tracking-[0.4em]"
        >
          BEYOND THE STAY
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-headline-md text-4xl md:text-5xl text-on-surface"
        >
          Curated Living Traditions
        </motion.h2>
      </div>

      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative h-[600px] overflow-hidden rounded-xl cursor-pointer"
          >
            <img
              alt={exp.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={exp.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="font-label-caps text-[10px] text-white/70 uppercase tracking-[0.3em] mb-2 block">
                {exp.label}
              </span>
              <h3 className="font-title-sm text-2xl text-white mb-4">{exp.title}</h3>
              <div className="w-12 h-0.5 bg-royal-gold transition-all duration-300 group-hover:w-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
