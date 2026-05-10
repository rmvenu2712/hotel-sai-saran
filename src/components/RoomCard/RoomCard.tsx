"use client";

import React from "react";
import Link from "next/link";
import { Room } from "@/types";
import { formatPrice } from "@/utils/helpers";
import { useBooking } from "@/context/BookingContext";
import { Users, Bed, Maximize, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface RoomCardProps {
  room: Room;
  variant?: "default" | "featured";
}

export default function RoomCard({ room, variant = "default" }: RoomCardProps) {
  const { openBooking } = useBooking();
  const discount = Math.round(
    ((room.originalPrice - room.price) / room.originalPrice) * 100
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full ${variant === "featured" ? "md:flex-row md:col-span-2" : ""}`}
      id={`room-card-${room.slug}`}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden ${variant === "featured" ? "md:w-1/2 h-[400px] md:h-auto" : "h-[280px]"}`}>
        <img 
          src={room.images[0]} 
          alt={room.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {discount > 0 && (
          <div className="absolute top-4 left-4 bg-royal-gold text-on-primary px-3 py-1 rounded-full font-label-caps text-[10px] tracking-widest shadow-lg">
            {discount}% OFF
          </div>
        )}
        
        {room.featured && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full font-label-caps text-[10px] tracking-widest shadow-lg flex items-center gap-1">
            <Star className="w-3 h-3 fill-primary" />
            FEATURED
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={`p-8 flex flex-col flex-grow ${variant === "featured" ? "md:w-1/2" : ""}`}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-headline-md text-2xl text-on-surface group-hover:text-royal-gold transition-colors">{room.name}</h3>
          <div className="flex items-center gap-1 text-royal-gold">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-title-sm text-sm">{room.rating}</span>
          </div>
        </div>

        <p className="font-body-md text-on-surface-variant line-clamp-2 mb-6 leading-relaxed">
          {room.shortDescription}
        </p>

        {/* Meta Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-y border-outline-variant/10">
          <div className="flex flex-col items-center gap-1">
            <Users className="w-5 h-5 text-royal-gold/60" />
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">{room.capacity} Guests</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bed className="w-5 h-5 text-royal-gold/60" />
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">{room.bedType}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Maximize className="w-5 h-5 text-royal-gold/60" />
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">{room.size}</span>
          </div>
        </div>

        {/* Amenities Icons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full font-label-caps text-[9px] tracking-widest border border-outline-variant/10 uppercase">
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="px-3 py-1 bg-royal-gold/5 text-royal-gold rounded-full font-label-caps text-[9px] tracking-widest border border-royal-gold/10 uppercase">
              +{room.amenities.length - 3} MORE
            </span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/10">
          <div className="flex flex-col">
            <span className="font-label-caps text-[10px] text-on-surface-variant line-through opacity-50">{formatPrice(room.originalPrice)}</span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-md text-2xl text-primary">{formatPrice(room.price)}</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant">/ NIGHT</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Link 
              href={`/rooms/${room.slug}`}
              className="p-3 rounded-xl border border-outline-variant hover:bg-surface-container-high transition-all active:scale-95"
              title="View Details"
            >
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => openBooking(room)}
              className="bg-royal-gold text-on-primary px-6 py-3 rounded-xl font-label-caps text-xs tracking-widest hover:bg-primary-container transition-all shadow-md active:scale-95"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
