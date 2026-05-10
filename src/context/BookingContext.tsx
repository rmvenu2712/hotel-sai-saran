"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { BookingDetails, BookingContextType, Room } from "@/types";

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const openBooking = (room?: Room) => {
    if (room) setSelectedRoom(room);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedRoom(null);
  };

  return (
    <BookingContext.Provider
      value={{
        booking,
        setBooking,
        isBookingOpen,
        openBooking,
        closeBooking,
        selectedRoom,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking(): BookingContextType {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
