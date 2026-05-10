"use client";

import React from "react";
import Hero from "@/components/Hero/Hero";
import LegacySection from "@/components/About/LegacySection";
import ImperialRooms from "@/components/Rooms/ImperialRooms";
import RoyalAmenities from "@/components/Amenities/RoyalAmenities";
import GuestVoices from "@/components/Testimonials/GuestVoices";
import LivingTraditions from "@/components/Experiences/LivingTraditions";
import ImageScrollHero from "@/components/Hero/imagescrool/imagescroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      {/* Hero Section with Integrated Booking */}
      <Hero />

      {/* About Our Legacy */}
      <LegacySection />

      {/* Imperial Accommodations */}
      <ImperialRooms />

      {/* Royal Amenities & Traditions */}
      <RoyalAmenities />

      <ImageScrollHero/>

      {/* Testimonials - Guest Voices */}
      <GuestVoices />

      {/* Experiences - Curated Living Traditions */}
      <LivingTraditions />
    </main>
  );
}
