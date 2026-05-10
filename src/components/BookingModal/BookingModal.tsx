"use client";

import React, { useState, useEffect } from "react";
import { useBooking } from "@/context/BookingContext";
import { rooms } from "@/data/rooms";
import {
  formatPrice,
  calculateNights,
  getTodayDate,
  getTomorrowDate,
} from "@/utils/helpers";
import { X, CheckCircle2, Calendar, Users, Mail, Phone, CreditCard, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingModal() {
  const { isBookingOpen, closeBooking, selectedRoom, setBooking } = useBooking();

  const [formData, setFormData] = useState({
    roomId: "",
    checkIn: getTodayDate(),
    checkOut: getTomorrowDate(),
    guests: 1,
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedRoom) {
      setFormData((prev) => ({ ...prev, roomId: selectedRoom.id }));
    }
  }, [selectedRoom]);

  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBookingOpen]);

  const currentRoom =
    selectedRoom || rooms.find((r) => r.id === formData.roomId) || rooms[0];
  const nights = calculateNights(formData.checkIn, formData.checkOut);
  const totalPrice = currentRoom.price * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Modal Submission:", { ...formData, room: currentRoom.name, totalPrice });
    setBooking({
      roomId: currentRoom.id,
      roomName: currentRoom.name,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      totalPrice,
    });
    setSubmitted(true);
  };

  const handleClose = () => {
    closeBooking();
    setSubmitted(false);
    setFormData({
      roomId: "",
      checkIn: getTodayDate(),
      checkOut: getTomorrowDate(),
      guests: 1,
      name: "",
      email: "",
      phone: "",
    });
  };

  if (!isBookingOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm" 
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-surface-container-lowest w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Handle / Top Bar */}
        <div 
          className="w-full flex justify-center py-4 cursor-pointer group"
          onClick={handleClose}
        >
          <div className="w-16 h-1.5 bg-outline-variant/30 rounded-full group-hover:bg-royal-gold/40 transition-colors" />
        </div>

        {/* Close Button (Hidden on Mobile, use handle instead) */}
        <button
          className="hidden md:block absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container-high transition-colors z-20 text-on-surface-variant"
          onClick={handleClose}
          aria-label="Close"
          id="booking-close"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          /* Success State */
          <div className="p-8 md:p-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-8">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-display-lg text-3xl text-primary mb-4">Booking Confirmed!</h2>
            <p className="font-body-md text-on-surface-variant mb-12 max-w-sm mx-auto text-sm md:text-base">
              Thank you for choosing Hotel Sai Saran. Your reservation for{" "}
              <strong className="text-on-surface">{currentRoom.name}</strong> has been received.
            </p>
            
            <div className="w-full bg-surface-container-low rounded-2xl p-6 md:p-8 space-y-6 mb-12 text-left">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase opacity-70 tracking-widest">Check-in</span>
                  <p className="font-title-sm text-md md:text-lg">{formData.checkIn}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase opacity-70 tracking-widest">Check-out</span>
                  <p className="font-title-sm text-md md:text-lg">{formData.checkOut}</p>
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-end">
                <div className="space-y-1">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase opacity-70 tracking-widest">Total Amount</span>
                  <p className="font-display-lg text-2xl text-primary">{formatPrice(totalPrice)}</p>
                </div>
              </div>
            </div>

            <button 
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-caps text-sm tracking-widest hover:bg-primary/90 transition-all shadow-lg active:scale-95" 
              onClick={handleClose}
            >
              Back to Palace
            </button>
          </div>
        ) : (
          /* Form State */
          <div className="p-0">
            <div className="bg-primary/5 p-8 md:p-12 border-b border-outline-variant/30">
              <span className="font-label-caps text-[10px] text-royal-gold tracking-[0.3em] mb-4 block uppercase font-bold">RESERVATION</span>
              <h2 className="font-display-lg text-3xl md:text-4xl text-primary mb-4">Secure Your Sanctuary</h2>
              <p className="font-body-md text-on-surface-variant max-w-md text-sm md:text-base leading-relaxed">
                Experience the zenith of Chola-inspired luxury at Rameswaram's most prestigious address.
              </p>
            </div>

            <form className="p-8 md:p-12 space-y-8" onSubmit={handleSubmit}>
              {/* Room Selection */}
              <div className="space-y-3">
                <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Room Type</label>
                <div className="relative group">
                  <select
                    className="premium-select text-md md:text-lg font-title-sm"
                    value={formData.roomId || currentRoom.id}
                    onChange={(e) => setFormData({ ...formData, roomId: e.target.value })}
                  >
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id} className="text-on-surface">
                        {room.name} — {formatPrice(room.price)}/night
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Check-in</label>
                  <div className="relative">
                    <input
                      type="date"
                      className="premium-input text-md md:text-lg font-title-sm"
                      value={formData.checkIn}
                      min={getTodayDate()}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Check-out</label>
                  <div className="relative">
                    <input
                      type="date"
                      className="premium-input text-md md:text-lg font-title-sm"
                      value={formData.checkOut}
                      min={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Guests Selection */}
              <div className="space-y-3">
                <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Guests</label>
                <div className="relative group">
                  <select
                    className="premium-select text-md md:text-lg font-title-sm"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n} className="text-on-surface">
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-8 pt-4">
                <div className="space-y-3">
                  <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    className="premium-input"
                    placeholder="E.g. Rajaraja Chola"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      className="premium-input"
                      placeholder="you@regency.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest">Phone Number</label>
                    <input
                      type="tel"
                      className="premium-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 space-y-4 border border-outline-variant/30">
                <div className="flex justify-between items-center text-[10px] font-label-caps tracking-widest text-on-surface-variant font-bold">
                  <span>STAY DURATION</span>
                  <span>{nights} NIGHT{nights > 1 ? "S" : ""}</span>
                </div>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase opacity-70 tracking-widest">Total Amount</span>
                    <p className="font-display-lg text-2xl md:text-3xl text-primary">{formatPrice(totalPrice)}</p>
                  </div>
                  <div className="text-right text-[9px] font-label-caps text-on-surface-variant opacity-60 tracking-widest">
                    INCLUSIVE OF ALL TAXES
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-royal-gold text-on-primary py-5 rounded-xl font-label-caps text-sm font-bold tracking-widest hover:bg-primary transition-all shadow-xl shadow-royal-gold/20 active:scale-95 flex items-center justify-center gap-3"
                id="booking-submit"
              >
                <CreditCard className="w-5 h-5" />
                RESERVE NOW — {formatPrice(totalPrice)}
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
