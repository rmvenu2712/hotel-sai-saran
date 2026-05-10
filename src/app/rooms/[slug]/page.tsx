"use client";

import React, { use, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { rooms } from "@/data/rooms";
import { notFound } from "next/navigation";
import {
  Star,
  Wifi,
  AirVent,
  CheckCircle2,
  Diamond,
  Calendar,
  Users,
  ChevronRight,
  ChevronLeft,
  Tv2,
  MapPin,
  Clock,
  ShieldCheck,
  AlertCircle,
  Zap,
  Droplet,
  Shirt,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  Users as UsersIcon,
  Lock,
  Utensils,
  Mountain,
  X,
  Send,
  Image as ImageIcon
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function RoomDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const { openBooking } = useBooking();

  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: "",
    type: 'success'
  });

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ ...toast, show: false }), 4000);
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Vikram Adithya",
      date: "Dec 2023",
      rating: 5,
      comment: "A sanctuary unlike any other. The divine atmosphere, combined with impeccable service and stunning architecture, made my stay truly unforgettable.",
      image: "V"
    },
    {
      id: 2,
      name: "Priya Sharma",
      date: "Nov 2023",
      rating: 5,
      comment: "Every detail was perfection. The staff went above and beyond to make our stay memorable. Highly recommended for anyone seeking spiritual and luxury combined.",
      image: "P"
    }
  ]);

  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 5
  });

  // Gallery Navigation
  const nextImage = () => {
    setActiveSlide((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveSlide((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const selectImage = (index: number) => {
    setActiveSlide(index);
  };

  // Gallery Modal Navigation
  const nextGalleryImage = () => {
    setGalleryIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevGalleryImage = () => {
    setGalleryIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const selectGalleryImage = (index: number) => {
    setGalleryIndex(index);
  };

  // Keyboard Navigation for Gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      if (e.key === "ArrowRight") nextGalleryImage();
      if (e.key === "ArrowLeft") prevGalleryImage();
      if (e.key === "Escape") setIsGalleryOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen]);

  // Review Form Handler
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      name: reviewForm.name,
      date: "Just now",
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      image: reviewForm.name[0]?.toUpperCase() || "G"
    };
    setReviews([newReview, ...reviews]);
    setReviewForm({ name: "", email: "", comment: "", rating: 5 });
    setIsReviewModalOpen(false);
    triggerToast("Your review has been shared with the sanctuary.");
  };

  const [checkIn, setCheckIn] = useState("Jan 15, 2024");
  const [checkOut, setCheckOut] = useState("Jan 18, 2024");
  const [guests, setGuests] = useState("2 Adults, Sanctuary");

  const nights = 3;
  const luxuryTax = Math.floor(room.price * nights * 0.12);
  const totalPrice = room.price * nights + luxuryTax;

  const amenityIcons: { [key: string]: React.ReactNode } = {
    "Free WiFi": <Wifi className="w-5 h-5" />,
    "AC Control": <AirVent className="w-5 h-5" />,
    "Smart TV": <Tv2 className="w-5 h-5" />,
    "24/7 Power": <Zap className="w-5 h-5" />,
    "Hot Water": <Droplet className="w-5 h-5" />,
    "Laundry": <Shirt className="w-5 h-5" />,
    "Parking": <MapPinIcon className="w-5 h-5" />,
    "Security": <Lock className="w-5 h-5" />,
  };

  const handleBookingRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (room.isAvailable === false) {
      triggerToast("This sanctuary is currently fully booked.", "error");
      return;
    }
    openBooking(room);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f1]">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%" }}
            className="fixed bottom-12 left-1/2 z-[100] w-max"
          >
            <div className={`flex items-center gap-4 px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border backdrop-blur-xl ${
              toast.type === 'success' ? 'bg-primary/95 border-primary/20' : 'bg-red-900/95 border-red-500/20'
            }`}>
              {toast.type === 'success' ? (
                <CheckCircle2 className="w-6 h-6 text-on-primary" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-400" />
              )}
              <div className="flex flex-col">
                <span className="font-label-caps text-[11px] font-bold tracking-[0.2em] text-white uppercase">
                  {toast.type === 'success' ? 'Experience Captured' : 'Sanctuary Alert'}
                </span>
                <span className="text-white/80 text-sm font-body-md">{toast.message}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-24 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">


        {/* Gallery Section */}
        <section className="space-y-6 mb-16">
          {/* Main Gallery */}
          <div className="grid grid-cols-12 gap-4 ">
            {/* Main Image */}
            <div className="col-span-12 md:col-span-7 h-full relative overflow-hidden rounded-3xl group shadow-2xl cursor-pointer" onClick={() => {
              setGalleryIndex(activeSlide);
              setIsGalleryOpen(true);
            }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  src={room.images[activeSlide]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt={room.name}
                />
              </AnimatePresence>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-title-sm text-2xl">{room.name}</span>
              </div>
            </div>

            {/* Side Gallery - Desktop */}
            <div className="hidden md:flex md:col-span-5 flex-col gap-4">
              <div 
                className="h-1/2 relative overflow-hidden rounded-3xl group shadow-xl cursor-pointer transition-all hover:scale-105" 
                onClick={() => selectImage(activeSlide + 1 < room.images.length ? activeSlide + 1 : 0)}
              >
                <img
                  src={room.images[activeSlide + 1] || room.images[0]}
                  className="w-full h-full object-cover transition-all duration-1000"
                  alt="Next Gallery"
                />
              </div>
              <div className="h-1/2 grid grid-cols-2 gap-4">
                <div 
                  className="relative overflow-hidden rounded-3xl group shadow-lg cursor-pointer transition-all hover:scale-105"
                  onClick={() => selectImage(activeSlide + 2 < room.images.length ? activeSlide + 2 : activeSlide + 2 - room.images.length)}
                >
                  <img
                    src={room.images[activeSlide + 2] || room.images[0]}
                    className="w-full h-full object-cover transition-all duration-1000"
                    alt="Next Next Gallery"
                  />
                </div>
                <button 
                  onClick={() => {
                    setGalleryIndex(activeSlide);
                    setIsGalleryOpen(true);
                  }}
                  className="relative overflow-hidden rounded-3xl group shadow-lg bg-primary/10 border-2 border-primary/20 flex flex-col items-center justify-center gap-2 hover:bg-primary/20 transition-all"
                >
                  <span className="text-primary text-4xl">📷</span>
                  <span className="font-label-caps text-label-caps text-primary text-[9px]">View Gallery</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Thumbnail Gallery */}
          <div className="md:hidden flex gap-2 overflow-x-auto pb-2">
            {room.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => selectImage(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all ${
                  activeSlide === idx ? 'border-primary ring-2 ring-primary' : 'border-outline-variant/30'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`Slide ${idx}`} />
              </button>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8 space-y-16">

            {/* Header Info */}
            <section className="space-y-6">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-caps text-[10px] tracking-widest border border-primary/20 uppercase">
                  {room.isAvailable !== false ? "SANCTUARY AVAILABLE" : "FULLY BOOKED"}
                </span>
                <div className="flex items-center gap-1.5 text-primary">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-label-caps text-label-caps text-[10px]">{room.rating} Divine Rating</span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="font-display-lg text-5xl md:text-6xl text-on-surface leading-tight">
                  {room.name}
                </h1>
                <p className="font-body-lg text-lg text-on-surface-variant  leading-relaxed">
                  {room.description}
                </p>
              </div>
            </section>

            {/* Amenities Section */}
            <section className="space-y-6">
              <h3 className="font-headline-md text-3xl text-on-surface">Modern Comforts & Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-8 bg-surface-container-low rounded-3xl border border-outline-variant/30">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="text-primary/70 flex-shrink-0">
                      {amenityIcons[amenity] || <ShieldCheck className="w-5 h-5" />}
                    </div>
                    <span className="font-body-md text-sm text-on-surface-variant">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Architectural Details Section */}
            <div className="bg-surface-container-high rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[500px]">
              <div className="p-8  flex flex-col justify-center space-y-6">
                <span className="font-label-caps text-primary tracking-[0.2em] text-[10px] uppercase">The Architectural Soul</span>
                <h2 className="font-headline-md text-3xl text-on-surface">The Spiritual Legacy in Design</h2>
                <div className="space-y-4 font-body-lg text-on-surface-variant leading-relaxed">
                  <p>
                    Inspired by the sacred temples of Rameshwaram, each sanctuary features authentic architectural elements that honor the region's divine heritage. Hand-carved details and traditional craftsmanship create a space where spirituality meets modern luxury.
                  </p>
                  {/* <p>
                    Every room tells a story of devotion and artistry, reflecting the intricate balance between ancient wisdom and contemporary comfort. The design invites you to experience the tranquility of a pilgrimage while enjoying world-class amenities.
                  </p> */}
                </div>
                <button className="flex items-center gap-2 text-primary font-label-caps text-label-caps group/btn w-fit">
                  Explore the Design Archive
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative h-64 md:h-full min-h-[300px] md:min-h-[400px]">
                <img
                  alt="Architectural detail"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={room.images[3] || room.images[0]}
                />
              </div>
            </div>

            {/* Guest Reviews Section */}
            <section className="space-y-8 pt-8 border-t border-outline-variant/30">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="font-headline-md text-3xl text-on-surface mb-2">Voices of the Guests</h3>
                  <p className="text-on-surface-variant font-body-md">Authentic experiences from fellow seekers.</p>
                </div>
                <button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="px-8 py-3 bg-primary text-on-primary rounded-2xl font-label-caps text-[10px] font-bold tracking-widest uppercase shadow-lg hover:bg-primary-container transition-all w-full md:w-auto"
                >
                  Add Review
                </button>
              </div>

              {/* Reviews List */}
              <div className="space-y-6">
                {reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-surface-container-low p-8 md:p-10 rounded-3xl border border-outline-variant/30 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display-lg text-lg">
                          {review.image}
                        </div>
                        <div>
                          <h4 className="font-title-sm text-on-surface">{review.name}</h4>
                          <p className="text-[9px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex text-primary gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed italic">{review.comment}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Sticky Booking Card */}
          <aside className="col-span-12 lg:col-span-4 h-fit lg:sticky lg:top-28">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(120,86,0,0.08)] border border-outline-variant/40 space-y-8">
              {/* Price Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-display-lg text-on-surface">₹{room.price.toLocaleString()}</span>
                      <span className="text-on-surface-variant font-label-caps text-[11px] uppercase tracking-wider">/ Night</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-label-caps text-on-surface-variant font-semibold tracking-widest uppercase">{room.rating} Divine Rating</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full text-[9px] font-label-caps font-bold tracking-widest border uppercase ${
                    room.isAvailable !== false ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' : 'bg-red-500/10 text-red-600 border-red-500/20'
                  }`}>
                    {room.isAvailable !== false ? 'Available' : 'Sold Out'}
                  </div>
                </div>

                {/* Date & Guest Selection */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 rounded-xl border border-outline-variant/60 overflow-hidden">
                    <div className="p-4 border-r border-outline-variant/60">
                      <label className="block font-label-caps text-[10px] text-primary font-bold tracking-widest mb-2 uppercase">Check-in</label>
                      <input
                        type="text"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-sm text-on-surface"
                      />
                    </div>
                    <div className="p-4">
                      <label className="block font-label-caps text-[10px] text-primary font-bold tracking-widest mb-2 uppercase">Checkout</label>
                      <input
                        type="text"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-sm text-on-surface"
                      />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-outline-variant/60">
                    <label className="block font-label-caps text-[10px] text-primary font-bold tracking-widest mb-2 uppercase">Seekers</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-sm text-on-surface cursor-pointer"
                    >
                      <option>1 Adult, Sanctuary</option>
                      <option>2 Adults, Sanctuary</option>
                      <option>2 Adults + 1 Child</option>
                    </select>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 space-y-4">
                  <button
                    onClick={handleBookingRequest}
                    disabled={room.isAvailable === false}
                    className={`w-full py-5 rounded-2xl font-label-caps tracking-[0.15em] text-sm font-bold transition-all shadow-xl ${
                      room.isAvailable !== false
                        ? 'bg-primary text-on-primary shadow-primary/20 hover:bg-primary-container hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
                        : 'bg-outline-variant text-on-surface-variant cursor-not-allowed opacity-50'
                    }`}
                  >
                    {room.isAvailable !== false ? 'RESERVE YOUR EXPERIENCE' : 'NO VACANCY'}
                  </button>
                  <p className="text-center font-label-caps text-[9px] text-on-surface-variant uppercase tracking-widest font-medium">
                    No immediate payment required
                  </p>
                </div>

                {/* Price Breakdown */}
                <div className="pt-6 border-t border-outline-variant/30 space-y-3">
                  <div className="flex justify-between font-body-md text-sm text-on-surface-variant">
                    <span>₹{room.price.toLocaleString()} x {nights} Nights</span>
                    <span>₹{(room.price * nights).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-body-md text-sm text-on-surface-variant">
                    <span className="underline underline-offset-4 decoration-primary/20 cursor-help">Luxury Heritage Tax (12%)</span>
                    <span>₹{luxuryTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-title-sm text-lg pt-4 border-t border-outline-variant">
                    <span>Total</span>
                    <span className="text-primary font-display-lg text-2xl tracking-tight">₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* VIP Info */}
                {/* <div className="bg-primary/5 p-5 rounded-2xl flex items-start gap-4 border border-primary/10">
                  <Diamond className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="font-label-caps text-[10px] text-primary leading-tight font-bold tracking-tight uppercase">
                    Divine Privilege: Includes complimentary temple access, wellness sessions & spiritual consultations.
                  </p>
                </div> */}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Divider */}
      <div className="relative w-full h-px bg-outline-variant/30 my-24 flex items-center justify-center">
        <div className="bg-background px-4 text-primary">⬥</div>
      </div>

      {/* Full Screen Gallery Modal - NO ARROWS */}
      <AnimatePresence>
        {isGalleryOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGalleryOpen(false)}
              className="fixed inset-0 bg-black/90 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-6xl h-[80vh] md:h-[85vh] bg-black rounded-3xl overflow-hidden shadow-2xl">
                {/* Main Gallery Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={galleryIndex}
                    src={room.images[galleryIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-contain"
                    alt={`Gallery ${galleryIndex + 1}`}
                  />
                </AnimatePresence>

                {/* Close Button */}
                <button
                  onClick={() => setIsGalleryOpen(false)}
                  className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/30 z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Thumbnail Navigation */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-3 overflow-x-auto pb-2 px-4 bg-black/40 rounded-full backdrop-blur-md border border-white/10 py-3">
                  {room.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectGalleryImage(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        galleryIndex === idx
                          ? 'border-white ring-2 ring-white scale-110'
                          : 'border-white/30 hover:border-white/70'
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Review Modal - Perfectly Centered */}
      <AnimatePresence>
        {isReviewModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReviewModalOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-outline-variant/30 p-8 flex items-center justify-between rounded-t-3xl">
                <div>
                  <h2 className="font-headline-md text-3xl text-on-surface">Share Your Reflection</h2>
                  <p className="text-on-surface-variant text-sm font-body-md mt-1">Help others discover the divine sanctuary</p>
                </div>
                <button
                  onClick={() => setIsReviewModalOpen(false)}
                  className="p-2 hover:bg-surface-container-low rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <form onSubmit={handleReviewSubmit} className="p-8 space-y-8">
                {/* Rating */}
                <div className="space-y-4">
                  <label className="font-label-caps text-[10px] text-primary font-bold tracking-widest uppercase block text-center">How divine was your stay?</label>
                  <div className="flex gap-4 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                        className={`transition-all ${
                          reviewForm.rating >= star ? 'text-primary scale-110' : 'text-primary/30'
                        }`}
                      >
                        <Star className="w-8 h-8 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="font-label-caps text-[10px] text-primary font-bold tracking-widest uppercase">Full Name</label>
                    <input
                      type="text"
                      required
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      className="w-full px-4 py-3 border border-outline-variant/60 rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="font-label-caps text-[10px] text-primary font-bold tracking-widest uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      value={reviewForm.email}
                      onChange={(e) => setReviewForm({ ...reviewForm, email: e.target.value })}
                      className="w-full px-4 py-3 border border-outline-variant/60 rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Review Comment */}
                <div className="space-y-3">
                  <label className="font-label-caps text-[10px] text-primary font-bold tracking-widest uppercase">Your Experience</label>
                  <textarea
                    required
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-outline-variant/60 rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md resize-none"
                    placeholder="Share your divine experience at our sanctuary..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setIsReviewModalOpen(false)}
                    className="flex-1 px-6 py-3 border border-outline-variant/60 text-on-surface rounded-2xl font-label-caps text-[10px] font-bold tracking-widest uppercase hover:bg-surface-container-low transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary text-on-primary rounded-2xl font-label-caps text-[10px] font-bold tracking-widest uppercase shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Review
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}