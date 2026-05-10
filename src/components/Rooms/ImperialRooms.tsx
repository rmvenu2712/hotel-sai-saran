"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getFeaturedRooms } from "@/data/rooms";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Bed,
  ArrowRight,
} from "lucide-react";

const swipeVariants:any = {
  enter: (direction: number) => ({
    x: direction > 0 ? 140 : -140,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: {
        type: "spring",
        stiffness: 220,
        damping: 28,
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -140 : 140,
    opacity: 0,
    transition: {
      x: {
        type: "spring",
        stiffness: 220,
        damping: 28,
      },
      opacity: {
        duration: 0.2,
      },
    },
  }),
};

export default function ImperialRooms() {
  const rooms = getFeaturedRooms();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setIndex((prev) => (prev + newDirection + rooms.length) % rooms.length);
    },
    [rooms.length]
  );

  const next = useCallback(() => paginate(1), [paginate]);
  const prev = useCallback(() => paginate(-1), [paginate]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [paginate]);

  const visibleRooms = useMemo(() => {
    return [0, 1, 2].map((offset) => rooms[(index + offset) % rooms.length]);
  }, [index, rooms]);

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-caps text-label-caps text-royal-gold tracking-widest mb-4 block"
          >
            STAY WITH ROYALTY
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-headline-md text-4xl md:text-5xl text-on-surface mb-6"
          >
            Imperial Sanctuaries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-body-lg text-on-surface-variant"
          >
            Each suite is a masterpiece of design, where hand-carved granite
            meets the finest Mysore silks, recreating the living standards of
            Chola emperors.
          </motion.p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={prev}
            className="w-14 h-14 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-royal-gold hover:text-white hover:border-royal-gold transition-all active:scale-90 shadow-sm"
            aria-label="Previous room"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="w-14 h-14 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-royal-gold hover:text-white hover:border-royal-gold transition-all active:scale-90 shadow-sm"
            aria-label="Next room"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative cursor-grab active:cursor-grabbing">
        <div className="overflow-hidden">
          <div className="relative min-h-[700px] md:min-h-[760px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={index}
                custom={direction}
                variants={swipeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;

                  if (offset.x < -80 || swipe < -10000) {
                    next();
                  } else if (offset.x > 80 || swipe > 10000) {
                    prev();
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full"
              >
                {visibleRooms.map((room) => (
                  <div
                    key={room.id}
                    className="group flex flex-col h-full bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden"
                  >
                    <div className="h-[300px] md:h-[400px] overflow-hidden relative">
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        src={room.images[0]}
                        alt={room.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute bottom-6 left-6 text-on-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="font-label-caps text-[10px] tracking-widest mb-1 block">
                          STARTING FROM
                        </span>
                        <div className="text-2xl font-headline-md text-white">
                          ₹{room.price.toLocaleString("en-IN")}{" "}
                          <span className="text-sm font-body-md opacity-70">
                            / NIGHT
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow border-t border-outline-variant/10">
                      <h3 className="font-headline-md text-2xl mb-4 text-on-surface group-hover:text-royal-gold transition-colors">
                        {room.name}
                      </h3>

                      <div className="flex gap-6 mb-6 text-on-surface-variant/80 border-b border-outline-variant/10 pb-6">
                        <div className="flex items-center gap-2">
                          <Maximize2 className="w-5 h-5 text-royal-gold" />
                          <span className="text-sm">{room.size}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Bed className="w-5 h-5 text-royal-gold" />
                          <span className="text-sm">{room.bedType}</span>
                        </div>
                      </div>

                      <p className="font-body-md text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                        {room.shortDescription}
                      </p>

                      <Link
                        href={`/rooms/${room.slug}`}
                        className="mt-auto group/btn flex items-center justify-between w-full border border-royal-gold/30 py-4 px-6 rounded-xl font-label-caps text-label-caps text-royal-gold hover:bg-royal-gold hover:text-on-primary transition-all duration-300"
                      >
                        EXPLORE SUITE
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}