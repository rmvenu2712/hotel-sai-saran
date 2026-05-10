"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ChevronRight 
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submission:", formData);
    setSubmitted(true);
    // Hide toast after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] pt-32 pb-24">
      {/* Premium Toast Notification */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%" }}
            className="fixed bottom-12 left-1/2 z-[100] w-max"
          >
            <div className="flex items-center gap-4 px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-royal-gold/20 bg-primary/95 backdrop-blur-xl">
              <CheckCircle2 className="w-6 h-6 text-royal-gold" />
              <div className="flex flex-col">
                <span className="font-label-caps text-[11px] font-bold tracking-[0.2em] text-white uppercase">Message Transmitted</span>
                <span className="text-white/80 text-sm font-body-md">Our concierge will reach out to your spirit soon.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label-caps text-royal-gold tracking-[0.4em] uppercase mb-4 block"
          >
            Connect with Majesty
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display-lg text-4xl md:text-6xl text-on-surface mb-8"
          >
            Our Doors are Always Open
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            className="h-1 bg-royal-gold mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h3 className="font-headline-md text-2xl text-on-surface">Inquiries & Assistance</h3>
              
              <div className="space-y-6">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center text-royal-gold border border-outline-variant/10 group-hover:bg-royal-gold group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">The Address</span>
                    <p className="font-body-lg text-on-surface">12/4-A, Temple View Road,<br/>Rameshwaram, Tamil Nadu 623526</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center text-royal-gold border border-outline-variant/10 group-hover:bg-royal-gold group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">Voice Assistance</span>
                    <p className="font-body-lg text-on-surface">+91 98765 43210<br/>+91 4567 234567</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center text-royal-gold border border-outline-variant/10 group-hover:bg-royal-gold group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">Electronic Mail</span>
                    <p className="font-body-lg text-on-surface">reservations@hotelsaisaran.com<br/>concierge@hotelsaisaran.com</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center text-royal-gold border border-outline-variant/10 group-hover:bg-royal-gold group-hover:text-white transition-all duration-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">Concierge Hours</span>
                    <p className="font-body-lg text-on-surface">Available 24 Hours, 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder/Iframe */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border border-outline-variant/20 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15735.688537542988!2d79.30391244301555!3d9.283184656114131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0199464e83f06b%3A0x3344d189196b0542!2sRamanathaswamy%20Temple!5e0!3m2!1sen!2sin!4v1715243831234!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[1.1] grayscale-[0.2]"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50 rounded-3xl" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_20px_60px_rgba(120,86,0,0.1)] border border-outline-variant/30">
            <div className="mb-12">
              <h3 className="font-headline-md text-3xl text-on-surface mb-4">Send a Direct Message</h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Whether you have a special request for your stay or wish to provide feedback on your experience, our team is eager to hear from you.
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    required
                    className="premium-input"
                    placeholder="E.g. Vikram Adithya"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    required
                    className="premium-input"
                    placeholder="traveler@luxury.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Subject of Inquiry</label>
                <input
                  type="text"
                  required
                  className="premium-input"
                  placeholder="E.g. Temple View Suite Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Your Message</label>
                <textarea
                  required
                  rows={6}
                  className="premium-input resize-none"
                  placeholder="How may we serve you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-royal-gold text-on-primary py-5 rounded-2xl font-label-caps text-sm font-bold tracking-widest hover:bg-primary transition-all shadow-xl shadow-royal-gold/20 flex items-center justify-center gap-3 active:scale-95 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                TRANSMIT MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
