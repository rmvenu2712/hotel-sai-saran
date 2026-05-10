"use client";

import React from "react";
import "./Amenities.css";

const amenities = [
  {
    icon: "🕌",
    title: "Temple Proximity",
    description: "Steps away from the sacred Ramanathaswamy Temple for convenient darshan.",
  },
  {
    icon: "🌊",
    title: "Ocean Views",
    description: "Wake up to stunning panoramic views of the Bay of Bengal from select rooms.",
  },
  {
    icon: "🍽️",
    title: "South Indian Cuisine",
    description: "Authentic Tamil Nadu flavors with complimentary breakfast including filter coffee.",
  },
  {
    icon: "📶",
    title: "Free High-Speed Wi-Fi",
    description: "Stay connected with complimentary high-speed internet throughout the hotel.",
  },
  {
    icon: "🚗",
    title: "Travel Assistance",
    description: "Guided tours to Dhanushkodi, Pamban Bridge, and other local attractions.",
  },
  {
    icon: "🧘",
    title: "Wellness & Peace",
    description: "Serene atmosphere perfect for meditation and spiritual rejuvenation.",
  },
];

export default function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <div className="amenities__container container">
        <div className="amenities__header">
          <span className="section-label">Our Amenities</span>
          <h2 className="section-title">
            Everything for Your <span className="text-gold">Perfect Stay</span>
          </h2>
          <p className="section-subtitle">
            From spiritual convenience to modern luxury, we&apos;ve thoughtfully
            curated every detail of your experience.
          </p>
        </div>

        <div className="amenities__grid">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="amenities__card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="amenities__icon">{amenity.icon}</div>
              <h3 className="amenities__title">{amenity.title}</h3>
              <p className="amenities__description">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
