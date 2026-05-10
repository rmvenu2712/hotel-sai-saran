"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2, Sparkles } from "lucide-react";

const galleryItems = [
  // ... (keeping galleryItems)
  { 
    id: "1", 
    category: "Lobby & Lounges", 
    title: "A Royal Reception", 
    desc: "Architecture that honors the legacy of emperors.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWS_Q43nbZIFD7_v2LC_cM86raJqm-0Tf_LtSOVgOhy5YjJOSvLvuUs-7tjILu5tV6os2i0HZm0NtP1pPnN9hN_i19Qph7hrzDCjC1pIGG_NWM4SPAIbBiDaeZe7LtXgOeGMbYtA5SKfspjf-HucOlsHog97NRhRsQi-2JzzQPbx6Zo4Cwoc0MPNSyUWgDqVWrMHxOm-3InP3ElqDFryYtAReBG88MxOekhyuPa8z7O_UfTGefvoV73z0NaLPKd3nnbfYTDY62ZZSI"
  },
  { 
    id: "2", 
    category: "Suites", 
    title: "The Maharaja's Quarters", 
    desc: "Sanctuaries of teak, silk, and stone.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8rzxhU84dkpC3HfyS1LtYnCWZdyvjLyvf3n3h1p9uk8g6peGE_VMWOA2p-ZDjzptptx0FBoLxAphim7MmIbIKRQg2efrL3rNzJKhJEcoaJE5i9JMI51tJ164PbEZPvM2_cOD9aHT_fOvSoNzrPTepi3UXsDOFn0ODZBARtnvr8dbwgbM-YgBfQskAHFmszMHY1mFbVOTaH-6vNbOzLhZNA1TlTjdS6pHZVTxCdyjqMJloUMGaQ34_nxtgJ3FiEUuTNCfAR8Zon1Xe"
  },
  { 
    id: "3", 
    category: "Wellness", 
    title: "The Lotus Sanctum", 
    desc: "Traditional Ayurvedic therapies in absolute quietude.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkn-jUmg3hvu8_Sus-_KA0p463b5n-xQaSKSghtu4Pr6OIZHpoIq_AXg7E5fQNLiSJLeAGrBDYHuqkgfsMx0YzsCI2ft89ZUC4gIEoxHULrt-lhc4TF1XuCCAQrR_5GgjCTnT1arYOKQKNhDkYNTn-xbpFV4_QKhOgRQqZWB22yMFSW94Iz7_UFSYnRSZbI663U7hBzSWLQl0UDoD0b6uwPArBVfnAVb34LCd3tvYKi4sVG7L0eJf0YzpHkMFbWuv-5F3fCfiFCKSk"
  },
  { 
    id: "4", 
    category: "Fine Dining", 
    title: "Imperial Banquets", 
    desc: "Epicurean journeys served with Chola hospitality.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhYtgNC2K2ZX5jcGZUDQwcIdyx-jwM_jEHTMHcgDGWr3atOWKDqrrlDN29qVrkydq5vB9VlkcCjpjOFk7vt20-F5UUAOi0vsrSwF2iZsfQjNV1CyGlBP3KNLhMJdN5CmYjgijfsPd5Y1b_Ye_iWkqAn_Oo6NbK0hg6tmGL8-Id5Ex0Ooc3Dpffjx2dOyRdFK-sc7f3mEtFzRKlJSzeXZaSC2KNMhFmhfuoNSDewLS6gY5jV6iLvTNMX_rw4_R5BDXCS6oPBk2d6DLv"
  },
  { 
    id: "5", 
    category: "Courtyards", 
    title: "Echoes of Silence", 
    desc: "Intimate spaces where light and shadow dance.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE3qalykryRJGeYGngvlcnTmPy-yiMvo-fIqhToEkBmBopNtprg2g3kW_exnV6IwAG42Vs4byOFmgG2XSeAaVyUv7xk6kQrqc5R_49kKW7lqnbCuiH4GXn2zgdbmyViPrYtl7WzdNwxLm5LWAkFfeeMOPpDB97--SDHCjaVvYMNVOcVa1TLiASDdgIFhylcR0fL9fDGIbopIqP91kX0rARRmoX6QepWFfgNE9SdxJ4OU0z5yIJmdf_zeQ5aUGHvVbyUJ3bgBY3HaqK"
  },
];

const categories = ["Full Estate", "Lobby & Lounges", "Suites", "Courtyards", "Fine Dining", "Wellness"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Full Estate");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "Full Estate" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <main className="pt-32 pb-stack-lg bg-surface min-h-screen">
      {/* Header */}
      <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-label-caps text-label-caps text-primary tracking-widest block mb-4 uppercase"
        >
          The Art of Heritage Living
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display-lg text-5xl md:text-7xl text-on-surface mb-6"
        >
          The Boutique Gallery
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          Step into a world where ancient Chola craftsmanship meets modern luxury. Discover the curated details of our grand lobby, secluded courtyards, and imperial suites.
        </motion.p>
      </header>

      {/* Filters */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-md flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-label-caps text-[11px] tracking-widest py-3 px-8 rounded-full transition-all border ${
              activeCategory === cat 
                ? "bg-primary text-on-primary border-primary shadow-lg scale-105" 
                : "text-on-surface-variant border-outline-variant hover:border-royal-gold hover:text-royal-gold"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl bg-surface-container shadow-md border border-outline-variant/20 aspect-[4/5] cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="bg-royal-gold w-10 h-10 rounded-full flex items-center justify-center mb-4 self-end -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Maximize2 className="w-5 h-5 text-on-primary" />
                  </div>
                  <span className="text-royal-gold font-label-caps text-[10px] mb-2 tracking-widest uppercase font-bold">
                    {item.category}
                  </span>
                  <h3 className="text-white font-headline-md text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-2 line-clamp-2 font-body-md">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </motion.button>

            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110] hidden md:block"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-16 h-16" />
            </button>

            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110] hidden md:block"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-16 h-16" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={filteredItems[selectedImage].src} 
                alt={filteredItems[selectedImage].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-8 md:p-12">
                <span className="text-royal-gold font-label-caps text-[12px] tracking-widest uppercase mb-2 block">
                  {filteredItems[selectedImage].category}
                </span>
                <h2 className="text-white font-headline-md text-3xl md:text-5xl mb-4">
                  {filteredItems[selectedImage].title}
                </h2>
                <p className="text-white/60 font-body-lg max-w-3xl">
                  {filteredItems[selectedImage].desc}
                </p>
              </div>
            </motion.div>

            {/* Mobile Controls */}
            <div className="absolute bottom-8 flex gap-8 md:hidden">
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="text-white"><ChevronLeft className="w-10 h-10" /></button>
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="text-white"><ChevronRight className="w-10 h-10" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="mt-32 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24">
        <div className="bg-primary text-on-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Sparkles className="w-64 h-64" />
          </div>
          <h2 className="font-display-lg text-4xl md:text-6xl mb-8 relative z-10">Step Into Our Story</h2>
          <p className="font-body-lg text-on-primary/80 max-w-2xl mx-auto mb-12 relative z-10">
            Reserve your sanctuary at Heritage Rameshwaram. Experience the quiet grandeur and meticulous artistry that defines our private world.
          </p>
          <div className="relative z-10">
            <button className="bg-royal-gold text-on-primary px-12 py-5 rounded-xl font-label-caps text-sm tracking-widest shadow-xl hover:-translate-y-1 transition-all active:scale-95">
              BOOK YOUR DISPATCH
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

