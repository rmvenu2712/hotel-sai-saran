"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bed,
  Wind,
  Wifi,
  Waves,
  Utensils,
  ParkingCircle,
  Bell,
  ShieldCheck,
  ArrowRight,
  Gem,
  LocateFixed
} from "lucide-react";

export default function FacilityPage() {
  const facilities = [
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Spacious Rooms",
      desc: "Grand suites designed with heritage aesthetics and modern space.",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Air Conditioning",
      desc: "Full climate control for a serene escape from the tropical warmth.",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Free WiFi",
      desc: "High-speed connectivity seamless integrated into historic walls.",
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "24/7 Hot Water",
      desc: "Continuous supply of warm water for your absolute rejuvenation.",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "In-house Dining",
      desc: "Authentic Chola recipes and global favorites served with grace.",
    },
    {
      icon: <ParkingCircle className="w-8 h-8" />,
      title: "Private Parking",
      desc: "Secure and ample space for your vehicles within the grounds.",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Room Service",
      desc: "Round-the-clock assistance and gourmet dining delivered to your door.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure Stay",
      desc: "Advanced safety protocols and 24-hour surveillance for peace of mind.",
    },
  ];

  return (
    <main className="bg-surface">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10 }}
            alt="Atmospheric courtyard view"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4dFhWRj-H-ylAFP3b1tHKSMoufXCHja76PUWLy8NowTU9JRk2A6Gr30Ion2t5Y8y8yO6aB-ZxDQvmvguSUm_C6xgRheD1Ch58SwV120HALL9UYNPpp9RebMsnYuFl3xFm4CQeR01SwTWS_9ZxFAXPWloIgyCoGWL_0taKzvRc6GMN_vg76_8mnBlKHkhIzzA_99N-3o6VRBritDDGPwpVSzcku5luks-0KvEt7w-PvvckhEsivdhCQnj8pLr57mbvgFQQC0HQy0zl"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label-caps text-label-caps text-primary-fixed tracking-[0.4em] mb-6 block uppercase"
          >
            Facilities & Experiences
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display-lg text-4xl  md:text-display-lg text-white mb-8"
          >
            Curated for the Connoisseur
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5 }}
            className="h-1 bg-primary-fixed mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* About & Facilities Section */}
      <section className="relative py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column: About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="font-label-caps text-label-caps text-royal-gold uppercase tracking-[0.3em]">
                Our Essence
              </span>
              <h2 className="font-headline-md text-headline-md text-primary leading-tight">
                Experience Comfort & Tradition
              </h2>
              <div className="h-0.5 w-16 bg-royal-gold"></div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Embrace the soul of Tamil Nadu hospitality at Heritage Rameshwaram.
              Our sanctuary offers a peaceful stay where ancient architectural
              wisdom meets modern luxury, creating an ideal retreat for
              families, couples seeking romance, and solo travelers on a journey
              of discovery.
            </p>
            <div className="pt-4">
              <button className="group flex items-center gap-4 bg-royal-gold text-white px-10 py-4 rounded-full font-label-caps text-label-caps tracking-widest transition-all duration-300 hover:shadow-xl hover:bg-primary active:scale-95">
                EXPLORE ROOMS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Facilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-royal-gold mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-title-sm text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-on-surface-variant">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 px-margin-mobile relative overflow-hidden bg-surface-container-low border-t border-outline-variant/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-5">
          <LocateFixed className="w-[300px] h-[300px] text-primary" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Gem className="w-16 h-16 text-primary mx-auto mb-12" />
          <h2 className="font-label-caps text-label-caps text-primary tracking-[0.5em] uppercase mb-12">
            THE MANIFESTO
          </h2>
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-display-lg text-lg md:text-4xl lg:text-5xl text-on-surface leading-tight font-light italic"
            >
              "We do not merely provide shelter; we curate a portal to the
              eternal. Our mission is to honor the architectural soul of the
              Chola Dynasty, creating a living bridge between a majestic past
              and a discerning present."
            </motion.p>
            <p className="font-body-lg text-sm md:text-lg text-secondary max-w-2xl mx-auto">
              In every hand-carved stone and every ritual of service, we
              preserve the spirit of Rameshwaram for the modern global citizen.
              This is our sacred pledge.
            </p>
          </div>
          <div className="mt-20 flex flex-col items-center gap-6">
            <div className="w-32 h-px bg-outline-variant"></div>
            <span className="font-label-caps text-label-caps text-primary text-sm tracking-widest">
              ESTABLISHED 2024 • THE GUARDIANS OF CHOLA GRANDEUR
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
