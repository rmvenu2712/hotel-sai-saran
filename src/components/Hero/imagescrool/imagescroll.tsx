"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDBtvNYbsfxIRB8xKcai7jM4X70_1Q3J3fNyTZwbVx06I_XrSFbTiYp5y9wEoSI2JtZRkUFC3ZraG1BL4L9iVDz8y5mF4Bw6caiVfbWSX3Dp5zOSuVwXydPdiryiROxVJTeu1C5sS0pWwLKu1ap-Z4D7EzjpNNAE-Yxvgt9mKsf7JfyToQb6Oi98gp_ccbKMpUa3H5kM5OE0uG9yNGy8UtVNv3Sc4i575lMlUhMpetTSGLc2SeoKcagvrJU4njI4c4sZ8AEGkuvrg2P",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8rzxhU84dkpC3HfyS1LtYnCWZdyvjLyvf3n3h1p9uk8g6peGE_VMWOA2p-ZDjzptptx0FBoLxAphim7MmIbIKRQg2efrL3rNzJKhJEcoaJE5i9JMI51tJ164PbEZPvM2_cOD9aHT_fOvSoNzrPTepi3UXsDOFn0ODZBARtnvr8dbwgbM-YgBfQskAHFmszMHY1mFbVOTaH-6vNbOzLhZNA1TlTjdS6pHZVTxCdyjqMJloUMGaQ34_nxtgJ3FiEUuTNCfAR8Zon1Xe",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAkn-jUmg3hvu8_Sus-_KA0p463b5n-xQaSKSghtu4Pr6OIZHpoIq_AXg7E5fQNLiSJLeAGrBDYHuqkgfsMx0YzsCI2ft89ZUC4gIEoxHULrt-lhc4TF1XuCCAQrR_5GgjCTnT1arYOKQKNhDkYNTn-xbpFV4_QKhOgRQqZWB22yMFSW94Iz7_UFSYnRSZbI663U7hBzSWLQl0UDoD0b6uwPArBVfnAVb34LCd3tvYKi4sVG7L0eJf0YzpHkMFbWuv-5F3fCfiFCKSk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCE3qalykryRJGeYGngvlcnTmPy-yiMvo-fIqhToEkBmBopNtprg2g3kW_exnV6IwAG42Vs4byOFmgG2XSeAaVyUv7xk6kQrqc5R_49kKW7lqnbCuiH4GXn2zgdbmyViPrYtl7WzdNwxLm5LWAkFfeeMOPpDB97--SDHCjaVvYMNVOcVa1TLiASDdgIFhylcR0fL9fDGIbopIqP91kX0rARRmoX6QepWFfgNE9SdxJ4OU0z5yIJmdf_zeQ5aUGHvVbyUJ3bgBY3HaqK",
];

export default function ImageScrollHero() {
  // Duplicate images for seamless loop
  const marqueeImages = [...images, ...images, ...images];

  return (
    <section className="py-20 bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <h2 className="font-display-lg text-4xl text-primary text-center">Visual Sanctuaries</h2>
      </div>
      
      <div className="relative flex whitespace-nowrap">
        <motion.div
          className="flex px-4"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeImages.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] md:w-[500px] h-[200px] md:h-[350px]  overflow-hidden shadow-2xl group ">
              <img
                src={src}
                alt="Heritage Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
