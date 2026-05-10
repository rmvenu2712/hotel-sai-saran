"use client";

import React, { use, useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rooms } from "@/data/rooms";
import { notFound } from "next/navigation";
import { 
  Star, 
  Wifi, 
  AirVent, 
  CheckCircle2, 
  ArrowRight, 
  Diamond, 
  Calendar, 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Image as ImageIcon,
  Tv2,
  MapPin,
  Clock,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import Lightbox from "@/components/Gallery/Lightbox";
import { useBooking } from "@/context/BookingContext";

export default function RoomDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const { openBooking } = useBooking();
  
  // State for reviews
  const [localReviews, setLocalReviews] = useState([
    {
      user: "Arjun Mehta",
      date: "December 2023",
      rating: 5,
      comment: "An absolute sanctuary. The Chola pillars in the room made me feel like I was staying in a living museum. Truly divine service.",
      images: [room.images[1], room.images[2]]
    },
    {
      user: "Sarah Jenkins",
      date: "November 2023",
      rating: 5,
      comment: "The temple view at dawn is something I will never forget. The staff treated us like royalty. Worth every rupee.",
      images: [room.images[3]]
    }
  ]);

  // Toast State
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: "",
    type: 'success'
  });

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ ...toast, show: false }), 4000);
  };

  // Form Handlers
  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Review Form Data:", data);

    const newReview = {
      user: (data.name as string) || "Guest Seeker",
      date: "Just now",
      rating: 5,
      comment: (data.comment as string) || "A tranquil experience.",
      images: []
    };

    setLocalReviews([newReview, ...localReviews]);
    triggerToast("Your reflection has been shared with the sanctuary.");
    e.currentTarget.reset();
  };

  const handleBookingRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Request for:", room.name);
    if (room.isAvailable === false) {
      triggerToast("This sanctuary is currently fully booked.", "error");
      return;
    }
    openBooking(room);
  };

  // Gallery/Slider Logic
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % room.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [room.images.length]);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults, 1 Room");

  const nights = 3;
  const luxuryTax = Math.floor(room.price * nights * 0.12);
  const totalPrice = room.price * nights + luxuryTax;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8]">
      {/* Premium Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%" }}
            className="fixed bottom-12 left-1/2 z-[100] w-max"
          >
            <div className={`flex items-center gap-4 px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border backdrop-blur-xl ${
              toast.type === 'success' ? 'bg-primary/95 border-royal-gold/20' : 'bg-red-900/95 border-red-500/20'
            }`}>
              {toast.type === 'success' ? (
                <CheckCircle2 className="w-6 h-6 text-royal-gold" />
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
        {/* Breadcrumbs */}
        <nav className="mb-8 flex items-center gap-2 text-[10px] font-label-caps tracking-widest text-on-surface-variant uppercase font-bold">
          <Link href="/" className="hover:text-royal-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/rooms" className="hover:text-royal-gold transition-colors">Sanctuaries</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-royal-gold">{room.name}</span>
        </nav>

        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Gallery & Details */}
          <div className="col-span-12 lg:col-span-8 space-y-16">
            {/* Gallery Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden group shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide}
                    src={room.images[activeSlide]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-cover"
                    alt={room.name}
                  />
                </AnimatePresence>
                
                {/* Availability Overlays */}
                {room.isAvailable === false && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="bg-red-600/90 text-white px-8 py-3 rounded-full font-label-caps tracking-[0.3em] text-sm font-bold shadow-2xl border border-white/20">
                      FULLY BOOKED
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Thumbnails Overlay */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 p-2 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10">
                  {room.images.slice(0, 5).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                        activeSlide === i ? "border-royal-gold scale-110 shadow-lg" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Header Info */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 flex-wrap">
                <span className={`px-4 py-1.5 rounded-full font-label-caps text-[10px] tracking-widest border uppercase font-bold ${
                  room.isAvailable !== false 
                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                  : "bg-red-500/10 text-red-600 border-red-500/20"
                }`}>
                  {room.isAvailable !== false ? "Sanctuary Available" : "Reservation Closed"}
                </span>
                <div className="flex items-center gap-1.5 text-royal-gold bg-royal-gold/5 px-3 py-1.5 rounded-full border border-royal-gold/10">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-label-caps text-[10px] tracking-widest uppercase font-bold">{room.rating} Divine Rating</span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="font-display-lg text-4xl md:text-6xl text-on-surface leading-tight">
                  {room.name}
                </h1>
                <p className="font-body-lg text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                  {room.description}
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-outline-variant/30">
                <div className="space-y-1">
                  <span className="font-label-caps text-[9px] text-on-surface-variant uppercase tracking-widest block opacity-60">Dimensions</span>
                  <p className="font-title-sm text-on-surface flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-royal-gold" />
                    {room.size}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-label-caps text-[9px] text-on-surface-variant uppercase tracking-widest block opacity-60">Capacity</span>
                  <p className="font-title-sm text-on-surface flex items-center gap-2">
                    <Users className="w-4 h-4 text-royal-gold" />
                    Up to {room.capacity} Seekers
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-label-caps text-[9px] text-on-surface-variant uppercase tracking-widest block opacity-60">Rest</span>
                  <p className="font-title-sm text-on-surface flex items-center gap-2">
                    <Clock className="w-4 h-4 text-royal-gold" />
                    {room.bedType}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-label-caps text-[9px] text-on-surface-variant uppercase tracking-widest block opacity-60">Location</span>
                  <p className="font-title-sm text-on-surface flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-royal-gold" />
                    Temple View
                  </p>
                </div>
              </div>
            </section>

            {/* Amenities */}
            <section className="space-y-8">
              <h3 className="font-display-lg text-3xl text-on-surface">Modern Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-outline-variant/20 shadow-sm hover:border-royal-gold/30 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-royal-gold/5 flex items-center justify-center text-royal-gold group-hover:scale-110 transition-transform">
                      {amenity.includes("Wi-Fi") ? <Wifi className="w-5 h-5" /> : 
                       amenity.includes("AC") ? <AirVent className="w-5 h-5" /> : 
                       amenity.includes("TV") ? <Tv2 className="w-5 h-5" /> :
                       <ShieldCheck className="w-5 h-5" />}
                    </div>
                    <span className="font-body-md text-sm text-on-surface-variant font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="space-y-12 pt-16 border-t border-outline-variant/30">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h3 className="font-display-lg text-4xl text-on-surface mb-2">Guest Reflections</h3>
                  <p className="text-on-surface-variant font-body-lg">Authentic experiences from fellow seekers.</p>
                </div>
                <div className="bg-white px-8 py-5 rounded-[2rem] border border-outline-variant/30 shadow-sm flex items-center gap-6">
                   <div className="text-center border-r border-outline-variant/30 pr-6">
                    <span className="block text-3xl font-display-lg text-royal-gold leading-none mb-1">{room.rating}</span>
                    <span className="block text-[8px] font-label-caps text-on-surface-variant uppercase tracking-[0.2em] font-bold">Divine Score</span>
                  </div>
                  <div>
                    <div className="flex text-royal-gold mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <span className="text-[9px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">{localReviews.length} Reflections</span>
                  </div>
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-8">
                {localReviews.map((rev, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i} 
                    className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-outline-variant/20 shadow-sm space-y-6 relative"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold font-display-lg text-xl border border-royal-gold/20">
                          {rev.user[0]}
                        </div>
                        <div>
                          <h4 className="font-title-md text-on-surface mb-1">{rev.user}</h4>
                          <span className="text-[10px] text-on-surface-variant font-label-caps uppercase tracking-[0.2em] font-bold opacity-60">{rev.date}</span>
                        </div>
                      </div>
                      <div className="flex text-royal-gold">
                        {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                      </div>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed italic text-lg font-body-lg">"{rev.comment}"</p>
                    {rev.images && rev.images.length > 0 && (
                      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {rev.images.map((img, idx) => (
                          <img key={idx} src={img} className="w-40 h-24 object-cover rounded-2xl border border-outline-variant/10 shadow-lg hover:scale-105 transition-transform cursor-pointer" />
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Post Review Form */}
              <div className="bg-[#F9F7F0] p-8 md:p-16 rounded-[4rem] border border-royal-gold/10 space-y-12">
                <div className="text-center max-w-xl mx-auto space-y-4">
                  <h4 className="font-display-lg text-3xl text-on-surface">Leave Your Reflection</h4>
                  <p className="text-on-surface-variant font-body-md leading-relaxed">Your journey helps others find their way to Sai Saran.</p>
                </div>

                <form className="space-y-8" onSubmit={handleReviewSubmit}>
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">How divine was your stay?</span>
                    <div className="flex gap-3">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button key={s} type="button" className="text-royal-gold/20 hover:text-royal-gold transition-colors focus:text-royal-gold">
                          <Star className="w-10 h-10 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Full Name</label>
                      <input name="name" type="text" required className="premium-input bg-white" placeholder="E.g. Vikram Adithya" />
                    </div>
                    <div className="space-y-3">
                      <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Email Address</label>
                      <input name="email" type="email" required className="premium-input bg-white" placeholder="traveler@heritage.com" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-[0.2em]">The Soul of Your Experience</label>
                    <textarea name="comment" required rows={5} className="premium-input bg-white resize-none" placeholder="Describe the tranquility..."></textarea>
                  </div>

                  <div className="space-y-4">
                    <label className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-[0.2em] block">Visual Memories</label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-royal-gold/10 border-dashed rounded-[2rem] cursor-pointer bg-white hover:bg-royal-gold/[0.02] transition-all group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <ImageIcon className="w-10 h-10 mb-4 text-royal-gold/40 group-hover:text-royal-gold transition-colors" />
                          <p className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">Select High-Res Images</p>
                        </div>
                        <input type="file" className="hidden" multiple accept="image/*" />
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-royal-gold text-on-primary py-6 rounded-2xl font-label-caps font-bold tracking-[0.25em] text-sm shadow-2xl shadow-royal-gold/20 hover:bg-primary transition-all active:scale-[0.98]">
                    POST REFLECTION
                  </button>
                </form>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <aside className="col-span-12 lg:col-span-4 h-fit lg:sticky lg:top-28">
            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-[0_40px_100px_rgba(120,86,0,0.08)] border border-royal-gold/10 space-y-10">
              <div className="space-y-6">
                <div className="flex items-baseline justify-between border-b border-outline-variant/30 pb-6">
                  <div className="space-y-1">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest font-bold block opacity-60">Investment Per Night</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-display-lg text-primary">₹{room.price.toLocaleString()}</span>
                      <span className="text-on-surface-variant font-label-caps text-[11px] uppercase tracking-[0.2em] font-bold">/ Night</span>
                    </div>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-[9px] font-label-caps font-bold tracking-widest border uppercase ${
                    room.isAvailable !== false ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' : 'bg-red-500/10 text-red-600 border-red-500/20'
                  }`}>
                    {room.isAvailable !== false ? 'Available' : 'Sold Out'}
                  </div>
                </div>

                {/* Date/Guest Selection */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <label className="block font-label-caps text-[10px] text-primary font-bold tracking-widest uppercase">Arrival</label>
                      <input 
                        type="date" 
                        className="premium-select !px-4 !py-3 text-xs" 
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block font-label-caps text-[10px] text-primary font-bold tracking-widest uppercase">Departure</label>
                      <input 
                        type="date" 
                        className="premium-select !px-4 !py-3 text-xs" 
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="block font-label-caps text-[10px] text-primary font-bold tracking-widest uppercase">Seekers</label>
                    <select 
                      className="premium-select !px-4 !py-3 text-xs"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      <option>1 Adult, Sanctuary</option>
                      <option>2 Adults, Sanctuary</option>
                      <option>2 Adults + 1 Child</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  <button
                    onClick={handleBookingRequest}
                    disabled={room.isAvailable === false}
                    className={`w-full py-6 rounded-2xl font-label-caps tracking-[0.3em] text-sm font-bold transition-all shadow-2xl active:scale-[0.98] ${
                      room.isAvailable !== false 
                      ? 'bg-primary text-on-primary shadow-primary/20 hover:bg-royal-gold' 
                      : 'bg-outline-variant text-on-surface-variant cursor-not-allowed opacity-50'
                    }`}
                  >
                    {room.isAvailable !== false ? 'RESERVE EXPERIENCE' : 'NO VACANCY'}
                  </button>
                  <div className="flex items-center justify-center gap-2 text-[9px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold opacity-60">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Best Price Guaranteed
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="pt-8 border-t border-outline-variant/30 space-y-4">
                   <div className="flex justify-between font-body-md text-sm text-on-surface-variant">
                    <span className="opacity-70 font-medium">₹{room.price.toLocaleString()} x {nights} Nights</span>
                    <span className="text-on-surface font-bold">₹{(room.price * nights).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-body-md text-sm text-on-surface-variant">
                    <span className="opacity-70 font-medium">Luxury Heritage Tax (12%)</span>
                    <span className="text-on-surface font-bold">₹{luxuryTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-end pt-6 border-t border-royal-gold/10">
                    <div className="space-y-1">
                      <span className="font-label-caps text-[10px] text-primary font-bold uppercase tracking-widest block">Total Investment</span>
                      <span className="text-xs text-on-surface-variant opacity-60">All inclusive of divine amenities</span>
                    </div>
                    <span className="text-primary font-display-lg text-3xl tracking-tight">₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* Heritage Note */}
                <div className="bg-royal-gold/5 p-6 rounded-3xl border border-royal-gold/10 flex items-start gap-4">
                  <Diamond className="w-5 h-5 text-royal-gold shrink-0 mt-1" />
                  <p className="font-body-md text-[11px] text-primary leading-relaxed">
                    <strong>Heritage Advantage:</strong> Your stay includes a complimentary heritage temple walk and morning yoga by the Bay of Bengal.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Lightbox for Gallery */}
      <Lightbox 
        isOpen={isLightboxOpen} 
        onClose={() => setIsLightboxOpen(false)} 
        images={room.images} 
        initialIndex={currentImageIndex} 
      />
    </main>
  );
}

// Helper Link component
import Link from "next/link";
