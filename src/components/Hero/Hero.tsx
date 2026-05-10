import React, { useState } from "react";
import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import { Calendar, Bed, Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { openBooking } = useBooking();
  const router = useRouter();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Hero Search Submission:", { checkIn, checkOut, roomType });
    const params = new URLSearchParams();
    if (checkIn) params.append("checkIn", checkIn);
    if (checkOut) params.append("checkOut", checkOut);
    if (roomType !== "all") params.append("type", roomType);
    
    router.push(`/rooms?${params.toString()}`);
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBtvNYbsfxIRB8xKcai7jM4X70_1Q3J3fNyTZwbVx06I_XrSFbTiYp5y9wEoSI2JtZRkUFC3ZraG1BL4L9iVDz8y5mF4Bw6caiVfbWSX3Dp5zOSuVwXydPdiryiROxVJTeu1C5sS0pWwLKu1ap-Z4D7EzjpNNAE-Yxvgt9mKsf7JfyToQb6Oi98gp_ccbKMpUa3H5kM5OE0uG9yNGy8UtVNv3Sc4i575lMlUhMpetTSGLc2SeoKcagvrJU4njI4c4sZ8AEGkuvrg2P"
          alt="Heritage Suite"
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: "linear-gradient(to bottom, rgba(27, 28, 23, 0.6) 0%, rgba(27, 28, 23, 0.2) 40%, rgba(251, 249, 241, 1) 95%)" 
          }}
        ></div>
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop pb-32 max-w-container-max mx-auto w-full text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 md:mt-0 font-label-caps text-label-caps text-primary-fixed-dim mb-4 block tracking-[0.4em]"
        >
          RESIDE IN MAJESTY
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display-lg text-3xl md:text-7xl text-white leading-[1.2] max-w-5xl mx-auto drop-shadow-2xl mb-12 px-4"
        >
          Sovereign Luxury Amidst<br className="hidden md:block"/> Timeless Dravidian Heritage
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-5xl mx-auto"
        >
          <button 
            onClick={() => openBooking()}
            className="bg-royal-gold text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-xl font-label-caps text-xs md:text-sm tracking-widest hover:bg-primary-container transition-all hover:shadow-2xl active:scale-95 shadow-xl"
          >
            RESERVE YOUR SANCTUARY
          </button>

          {/* Integrated Booking Bar */}
          <div className="bg-white/95 p-6 md:p-8 rounded-3xl shadow-[0_30px_70px_rgba(120,86,0,0.15)] border border-royal-gold/10 w-full backdrop-blur-xl">
            <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-end" onSubmit={handleSearch}>
              <div className="flex flex-col text-left group">
                <label className="font-label-caps text-[10px] text-primary font-bold mb-2 tracking-widest uppercase">Check-In</label>
                <div className="relative">
                  <input 
                    className="premium-input !py-3 !px-4 text-sm" 
                    placeholder="Arrival Date" 
                    type="text"
                    value={checkIn}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-royal-gold transition-transform group-hover:scale-110 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col text-left group">
                <label className="font-label-caps text-[10px] text-primary font-bold mb-2 tracking-widest uppercase">Check-Out</label>
                <div className="relative">
                  <input 
                    className="premium-input !py-3 !px-4 text-sm" 
                    placeholder="Departure Date" 
                    type="text"
                    value={checkOut}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-royal-gold transition-transform group-hover:scale-110 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col text-left group">
                <label className="font-label-caps text-[10px] text-primary font-bold mb-2 tracking-widest uppercase">Room Type</label>
                <div className="relative">
                  <select 
                    className="premium-select !py-3 !px-4 text-sm"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                  >
                    <option value="all">All Sanctuaries</option>
                    <option value="Heritage Suite">Heritage Suites</option>
                    <option value="Curated Sanctuary">Curated Sanctuaries</option>
                    <option value="Presidential Suite">Presidential Suites</option>
                    <option value="Temple View">Temple View Rooms</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="bg-royal-gold text-on-primary h-[52px] rounded-xl font-label-caps text-[11px] tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-2 transform active:scale-95 shadow-lg shadow-royal-gold/20 font-bold sm:col-span-2 md:col-span-1"
              >
                <SearchIcon className="w-4 h-4" />
                CHECK AVAILABILITY
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-royal-gold/60"
      >
        <span className="font-label-caps text-[10px] tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-royal-gold/60 to-transparent"></div>
      </motion.div>
    </header>
  );
}

