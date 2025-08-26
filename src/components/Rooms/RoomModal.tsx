import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Users, 
  Maximize, 
  Wifi, 
  Coffee, 
  Car, 
  Bath, 
  Tv, 
  Wind,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Heart,
  Share2,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react';

interface Room {
  id: number;
  name: string;
  type: string;
  price: number;
  originalPrice: number;
  images: string[];
  size: string;
  maxGuests: number;
  bedType: string;
  view: string;
  rating: number;
  reviews: number;
  description: string;
  amenities: string[];
  features: string[];
  availability: 'available' | 'limited' | 'booked';
}

interface RoomModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  onBookingOpen: (room: Room) => void;
}

const RoomModal: React.FC<RoomModalProps> = ({ room, isOpen, onClose, onBookingOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'reviews'>('overview');

  if (!isOpen || !room) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const amenityIcons: { [key: string]: any } = {
    'Free WiFi': Wifi,
    'Air Conditioning': Wind,
    'Mini Bar': Coffee,
    'Room Service': Clock,
    'Balcony': MapPin,
    'Work Desk': Tv,
    'Coffee Maker': Coffee,
    'Garden View': MapPin,
    'Private Terrace': MapPin,
    'Butler Service': Clock,
    'Yoga Mats': CheckCircle,
    'Meditation Corner': CheckCircle,
    'Aromatherapy': CheckCircle,
    'Art Supplies': CheckCircle,
    'Skylight': CheckCircle
  };

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      date: '2 days ago',
      comment: 'Absolutely stunning room with incredible attention to detail. The local artwork and cultural elements made our stay truly memorable.',
      verified: true
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      rating: 5,
      date: '1 week ago',
      comment: 'Perfect blend of modern luxury and traditional Indian design. The staff was exceptional and the room exceeded our expectations.',
      verified: true
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Beautiful room with amazing city views. The cultural immersion aspect of the hotel is what sets it apart from others.',
      verified: true
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          {/* Image Gallery */}
          <div className="relative h-80 overflow-hidden rounded-t-2xl">
            <img
              src={room.images[currentImageIndex]}
              alt={`${room.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-dark opacity-20"></div>
            
            {/* Navigation Arrows */}
            {room.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {room.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {room.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Room Info Overlay */}
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="artistic-heading text-3xl mb-2">{room.name}</h2>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  {room.type}
                </span>
                <div className="flex items-center space-x-1">
                  <Star size={16} className="fill-gold text-gold" />
                  <span>{room.rating} ({room.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-light-gray rounded-lg">
                  <Maximize size={24} className="mx-auto mb-2 text-coral" />
                  <p className="text-sm text-gray-600">Size</p>
                  <p className="font-semibold">{room.size}</p>
                </div>
                <div className="text-center p-4 bg-light-gray rounded-lg">
                  <Users size={24} className="mx-auto mb-2 text-emerald" />
                  <p className="text-sm text-gray-600">Guests</p>
                  <p className="font-semibold">Up to {room.maxGuests}</p>
                </div>
                <div className="text-center p-4 bg-light-gray rounded-lg">
                  <Bath size={24} className="mx-auto mb-2 text-royal-purple" />
                  <p className="text-sm text-gray-600">Bed</p>
                  <p className="font-semibold">{room.bedType}</p>
                </div>
                <div className="text-center p-4 bg-light-gray rounded-lg">
                  <MapPin size={24} className="mx-auto mb-2 text-sunset-orange" />
                  <p className="text-sm text-gray-600">View</p>
                  <p className="font-semibold">{room.view}</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'amenities', label: 'Amenities' },
                    { id: 'reviews', label: `Reviews (${room.reviews})` }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-coral text-coral'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-dark-gray mb-3">About This Room</h3>
                      <p className="text-gray-600 leading-relaxed">{room.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {room.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-emerald" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-sunset rounded-lg p-6 text-white">
                      <h4 className="font-semibold mb-2">Virtual Tour Available</h4>
                      <p className="text-white/90 mb-4">
                        Experience this room in 360° before you book. Take a virtual walkthrough to see every detail.
                      </p>
                      <button className="bg-white text-coral px-6 py-2 rounded-full font-semibold hover:bg-cream transition-colors">
                        Start Virtual Tour
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-dark-gray mb-4">Room Amenities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {room.amenities.map((amenity, index) => {
                          const Icon = amenityIcons[amenity] || CheckCircle;
                          return (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-light-gray rounded-lg">
                              <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                                <Icon size={20} className="text-coral" />
                              </div>
                              <span className="font-medium text-dark-gray">{amenity}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-light-gray rounded-lg p-6">
                      <h4 className="font-semibold text-dark-gray mb-3">Additional Services</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <CheckCircle size={14} className="text-emerald" />
                          <span>24/7 Concierge Service</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle size={14} className="text-emerald" />
                          <span>Daily Housekeeping</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle size={14} className="text-emerald" />
                          <span>Laundry & Dry Cleaning</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle size={14} className="text-emerald" />
                          <span>Airport Transfer (on request)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-dark-gray">Guest Reviews</h3>
                      <div className="flex items-center space-x-2">
                        <Star size={20} className="fill-gold text-gold" />
                        <span className="text-lg font-semibold">{room.rating}</span>
                        <span className="text-gray-500">({room.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white font-semibold">
                                {review.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium text-dark-gray">{review.name}</p>
                                <div className="flex items-center space-x-2">
                                  <div className="flex items-center space-x-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                      <Star key={i} size={14} className="fill-gold text-gold" />
                                    ))}
                                  </div>
                                  <span className="text-xs text-gray-500">{review.date}</span>
                                  {review.verified && (
                                    <span className="text-xs bg-emerald/10 text-emerald px-2 py-1 rounded-full">
                                      Verified Stay
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                        </div>
                      ))}
                    </div>

                    <button className="w-full btn-secondary py-3">
                      View All Reviews
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Pricing Card */}
                <div className="card-floating">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-lg text-gray-500 line-through">₹{room.originalPrice.toLocaleString()}</span>
                      <span className="text-3xl font-bold text-coral">₹{room.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-500">per night (including taxes)</p>
                    <div className="bg-emerald/10 text-emerald px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block">
                      Save ₹{(room.originalPrice - room.price).toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-dark-gray mb-1">Check-in</label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-gray mb-1">Check-out</label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-gray mb-1">Guests</label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-sm">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                      </select>
                    </div>

                    <button
                      onClick={() => onBookingOpen(room)}
                      className="w-full btn-primary py-4 text-lg font-semibold"
                      disabled={room.availability === 'booked'}
                    >
                      <Calendar size={20} className="inline mr-2" />
                      {room.availability === 'booked' ? 'Fully Booked' : 'Book This Room'}
                    </button>

                    <div className="flex items-center justify-center space-x-4 pt-2">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-coral transition-colors">
                        <Heart size={16} />
                        <span className="text-sm">Save</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-coral transition-colors">
                        <Share2 size={16} />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-ocean rounded-lg p-6 text-white">
                  <h4 className="font-semibold mb-2">Need Help?</h4>
                  <p className="text-white/90 text-sm mb-4">
                    Our concierge team is available 24/7 to assist with your booking and answer any questions.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>Call: +91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>WhatsApp: +91 98765 43210</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;