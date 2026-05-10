import React from "react";
import Link from "next/link";
import { Globe, Share2, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full px-margin-mobile md:px-margin-desktop py-24 border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6 group">
              <img src="/logo.png" alt="Heritage Rameshwaram" className="h-16 w-auto object-contain" />
            </div>
            <p className="font-body-md text-on-surface-variant max-w-sm mb-8 leading-relaxed">A sanctuary dedicated to preserving the majestic legacy of the Chola Empire while offering the zenith of contemporary luxury hospitality.</p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-on-primary transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-on-primary transition-all">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-on-primary transition-all">
                <Award className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-[11px] text-on-surface font-bold tracking-widest mb-8">DESTINATIONS</h4>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li><Link href="/rooms" className="hover:text-royal-gold transition-colors">Our Suites</Link></li>
              <li><Link href="/rooms" className="hover:text-royal-gold transition-colors">The Royal Villas</Link></li>
              <li><Link href="/dining" className="hover:text-royal-gold transition-colors">Dining Venues</Link></li>
              <li><Link href="/wellness" className="hover:text-royal-gold transition-colors">Vedic Wellness</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-[11px] text-on-surface font-bold tracking-widest mb-8">EXPERIENCES</h4>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li><Link href="/tours" className="hover:text-royal-gold transition-colors">Temple Tours</Link></li>
              <li><Link href="/art" className="hover:text-royal-gold transition-colors">Art Workshops</Link></li>
              <li><Link href="/weddings" className="hover:text-royal-gold transition-colors">Weddings</Link></li>
              <li><Link href="/events" className="hover:text-royal-gold transition-colors">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-[11px] text-on-surface font-bold tracking-widest mb-8">LEGACY</h4>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li><Link href="/sustainability" className="hover:text-royal-gold transition-colors">Sustainability</Link></li>
              <li><Link href="/heritage" className="hover:text-royal-gold transition-colors">Heritage Preservation</Link></li>
              <li><Link href="/careers" className="hover:text-royal-gold transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-royal-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-label-caps text-[10px] text-on-surface-variant tracking-widest">
            © {new Date().getFullYear()} HOTEL SAI SARAN, RAMESHWARAM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 font-label-caps text-[10px] text-on-surface-variant tracking-widest">
            <a href="#" className="hover:text-royal-gold">PRIVACY POLICY</a>
            <a href="#" className="hover:text-royal-gold">TERMS & CONDITIONS</a>
            <a href="#" className="hover:text-royal-gold">ACCESSIBILITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
