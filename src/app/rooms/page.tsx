"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { rooms } from "@/data/rooms";
import { useBooking } from "@/context/BookingContext";
import {
  Star,
  MapPin,
  Wifi,
  Filter,
  X,
  Search,
  ChevronDown,
  AirVent,
  Tv,
  CheckCircle2,
  Calendar,
  ArrowUpDown,
  Zap
} from "lucide-react";

import { Suspense } from "react";

function RoomsContent() {
  const searchParams = useSearchParams();
  
  // Initial filter states from URL
  const initialType = searchParams.get("type") || "all";
  const initialCheckIn = searchParams.get("checkIn") || "";
  const initialCheckOut = searchParams.get("checkOut") || "";

  const [priceRange, setPriceRange] = useState(30000);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [roomType, setRoomType] = useState(initialType);
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [sortBy, setSortBy] = useState("recommended");

  const { openBooking } = useBooking();

  // Filtering & Sorting Logic
  const filteredRooms = useMemo(() => {
    let result = [...rooms];

    // Filter by Type
    if (roomType !== "all") {
      result = result.filter(room => room.name.includes(roomType) || room.description.includes(roomType));
    }

    // Filter by Price
    result = result.filter(room => room.price <= priceRange);

    // Sorting
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [roomType, priceRange, sortBy]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-label-caps text-primary uppercase tracking-widest text-[10px] font-bold">Filters</h2>
        <button 
          onClick={() => {
            setPriceRange(30000);
            setRoomType("all");
          }}
          className="text-primary font-label-caps text-[10px] hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Dates Filter */}
      <div className="space-y-4">
        <label className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest block">Stay Period</label>
        <div className="space-y-3">
          <div className="relative">
            <input 
              className="premium-input !py-2.5 !px-3 text-xs" 
              type="text" 
              placeholder="Check-in" 
              value={checkIn}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-royal-gold opacity-50" />
          </div>
          <div className="relative">
            <input 
              className="premium-input !py-2.5 !px-3 text-xs" 
              type="text" 
              placeholder="Check-out" 
              value={checkOut}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              onChange={(e) => setCheckOut(e.target.value)}
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-royal-gold opacity-50" />
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="font-label-caps text-[10px] text-on-surface-variant mb-4 block uppercase tracking-widest">Price per Night</label>
        <input 
          className="w-full accent-royal-gold h-1 bg-outline-variant rounded-lg appearance-none cursor-pointer" 
          type="range" 
          min="2000" 
          max="30000" 
          step="500"
          value={priceRange}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
        />
        <div className="flex justify-between text-[10px] mt-3 font-body-md text-on-surface-variant uppercase tracking-widest font-bold">
          <span>₹2,000</span>
          <span className="text-royal-gold">UP TO ₹{priceRange.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Categories */}
      <div>
        <label className="font-label-caps text-[10px] text-on-surface-variant mb-4 block uppercase tracking-widest">Sanctuary Type</label>
        <div className="space-y-2">
          {["all", "Heritage Suite", "Presidential Suite", "Temple View", "Curated Sanctuary"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="radio" 
                name="roomType"
                checked={roomType === type}
                onChange={() => setRoomType(type)}
                className="rounded-full text-royal-gold focus:ring-royal-gold/20 border-outline-variant w-4 h-4" 
              />
              <span className={`text-xs font-label-caps tracking-widest uppercase transition-colors ${roomType === type ? 'text-royal-gold font-bold' : 'text-on-surface-variant group-hover:text-primary'}`}>
                {type === "all" ? "All Collections" : type}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-32 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop bg-surface min-h-screen">
      {/* Header & Sort */}
      <header className="mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-outline-variant/30">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-label-caps text-royal-gold tracking-[0.3em] uppercase mb-4 block"
            >
              The Collection
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-primary mb-4"
            >
              Sanctuaries in Rameshwaram
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body-lg text-on-surface-variant max-w-xl"
            >
              A curation of {filteredRooms.length} divine living spaces, where ancient architectural soul meets contemporary grace.
            </motion.p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort Options */}
            <div className="relative group min-w-[200px]">
              <label className="absolute -top-6 left-0 font-label-caps text-[9px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Sort By</label>
              <select 
                className="premium-select !py-3 !px-4 text-xs font-bold uppercase tracking-widest"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Mobile Filter Trigger */}
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center justify-center gap-2 bg-royal-gold text-on-primary px-6 py-3.5 rounded-xl font-label-caps text-[10px] font-bold shadow-xl shadow-royal-gold/20 active:scale-95 transition-all"
            >
              <Filter className="w-3.5 h-3.5" />
              FILTER
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Filters - Desktop Only */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm">
            <FilterContent />
          </div>
        </aside>

        {/* Listings Area */}
        <section className="lg:col-span-9 space-y-12">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room, index) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-outline-variant/30 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-700 relative"
              >
                {/* Availability Badge */}
               

                {/* Image Showcase */}
                <div className="md:w-5/12 relative h-72 md:h-auto overflow-hidden">
                  <img 
                    src={room.images[0]} 
                    alt={room.name}
                    className={`h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 ${room.isAvailable === false ? 'grayscale opacity-60' : ''}`} 
                  />
                   <div className="absolute top-6 right-6 z-10">
                  <div className={`flex items-center gap-2 ${room.isAvailable !== false ? 'bg-emerald-500/90' : 'bg-red-500/90'} text-white px-3 py-1.5 rounded-full text-[10px] font-bold font-label-caps tracking-widest shadow-lg backdrop-blur-sm`}>
                    <CheckCircle2 className="w-3 h-3" />
                    {room.isAvailable !== false ? "AVAILABLE" : "SOLD OUT"}
                  </div>
                </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1.5 rounded-lg text-[9px] font-bold font-label-caps tracking-widest shadow-lg">
                      {room.bedType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-7/12 p-8 md:p-12 flex flex-col justify-between ${room.isAvailable === false ? 'opacity-75' : ''}`}>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-headline-md text-3xl text-on-surface group-hover:text-royal-gold transition-colors mb-2">
                          {room.name}
                        </h3>
                        <p className="text-sm text-on-surface-variant flex items-center gap-2 opacity-70 italic font-medium">
                          <MapPin className="w-3.5 h-3.5 text-royal-gold" />
                          Historic Sacred Quarter, Rameshwaram
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-royal-gold/5 px-3 py-2 rounded-xl border border-royal-gold/20">
                        <span className="text-sm font-bold text-royal-gold">{room.rating}</span>
                        <Star className="w-3.5 h-3.5 text-royal-gold fill-current" />
                      </div>
                    </div>
                    
                    <p className="text-on-surface-variant line-clamp-2 mb-8 text-sm leading-relaxed">
                      {room.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
                      <div className="flex items-center gap-2.5 text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">
                        <Wifi className="w-4 h-4 text-royal-gold" />
                        Free WiFi
                      </div>
                      <div className="flex items-center gap-2.5 text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">
                        <AirVent className="w-4 h-4 text-royal-gold" />
                        AC Control
                      </div>
                      <div className="flex items-center gap-2.5 text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">
                        <Tv className="w-4 h-4 text-royal-gold" />
                        Smart TV
                      </div>
                      <div className="flex items-center gap-2.5 text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">
                        <Zap className="w-4 h-4 text-royal-gold" />
                        24/7 Power
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-outline-variant/30">
                    <div className="space-y-1">
                      <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold opacity-60">Starting from</span>
                      <p className="text-3xl font-display-lg text-primary flex items-baseline gap-1">
                        ₹{room.price.toLocaleString('en-IN')}
                        <span className="text-xs font-label-caps text-on-surface-variant font-bold tracking-widest">/ NIGHT</span>
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <Link 
                        href={`/rooms/${room.slug}`}
                        className="px-8 py-4 rounded-xl bg-royal-gold/10 text-royal-gold border border-royal-gold/30 font-label-caps text-[10px] font-bold hover:bg-royal-gold/20 transition-all uppercase tracking-[0.2em] active:scale-95"
                      >
                        View Details
                      </Link>
                      {room.isAvailable !== false ? (
                        <button 
                          onClick={() => openBooking(room)}
                          className="px-8 py-4 rounded-xl bg-primary text-on-primary font-label-caps text-[10px] font-bold shadow-xl shadow-primary/20 hover:bg-royal-gold transition-all uppercase tracking-[0.2em] active:scale-95"
                        >
                          Select Sanctuary
                        </button>
                      ) : (
                        <button 
                          disabled
                          className="px-8 py-4 rounded-xl bg-outline-variant text-on-surface-variant font-label-caps text-[10px] font-bold uppercase tracking-[0.2em] cursor-not-allowed opacity-50"
                        >
                          Sold Out
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 bg-surface-container-low rounded-[3rem] border-2 border-dashed border-outline-variant/30">
              <h3 className="font-display-lg text-2xl text-on-surface mb-4">No Sanctuaries Match Your Criteria</h3>
              <p className="text-on-surface-variant">Try adjusting your filters or search parameters.</p>
              <button 
                onClick={() => {
                  setRoomType("all");
                  setPriceRange(30000);
                }}
                className="mt-8 text-royal-gold font-label-caps text-xs font-bold underline tracking-widest"
              >
                RESET ALL FILTERS
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-surface rounded-t-[3rem] p-8 z-[70] shadow-2xl border-t border-outline-variant/30 max-h-[90vh] overflow-y-auto"
            >
              <div className="w-12 h-1.5 bg-outline-variant/30 rounded-full mx-auto mb-10" />
              <FilterContent />
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-royal-gold text-on-primary py-5 rounded-2xl font-label-caps text-[11px] font-bold tracking-[0.2em] uppercase mt-12 shadow-xl shadow-royal-gold/20"
              >
                Explore Matches
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default function RoomsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-royal-gold"></div>
      </div>
    }>
      <RoomsContent />
    </Suspense>
  );
}