export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice: number;
  capacity: number;
  bedType: string;
  size: string;
  amenities: string[];
  images: string[];
  rating: number;
  reviews: number;
  featured: boolean;
  isAvailable?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

export interface BookingDetails {
  roomId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}

export interface BookingContextType {
  booking: BookingDetails | null;
  setBooking: (booking: BookingDetails | null) => void;
  isBookingOpen: boolean;
  openBooking: (room?: Room) => void;
  closeBooking: () => void;
  selectedRoom: Room | null;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}
