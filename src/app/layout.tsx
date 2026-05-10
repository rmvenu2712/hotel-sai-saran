import type { Metadata } from "next";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BookingModal from "@/components/BookingModal/BookingModal";

export const metadata: Metadata = {
  title: "Hotel Sai Saran, Rameshwaram | A Royal Legacy of Heritage Grandeur",
  description:
    "Experience the pinnacle of Dravidian luxury at Hotel Sai Saran, Rameshwaram. Authentic heritage suites, Vedic wellness, and imperial dining.",
  keywords:
    "Hotel Sai Saran, luxury hotel Rameshwaram, Rameshwaram heritage stay, Ramanathaswamy Temple stay",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BookingProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
