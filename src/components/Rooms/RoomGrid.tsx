import React, { useState } from 'react';
import { 
  Star, 
  Users, 
  Maximize, 
  Wifi, 
  Coffee, 
  Car, 
  Bath, 
  Tv, 
  Wind,
  ArrowRight,
  Heart,
  Share2,
  Eye,
  Calendar
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

interface RoomGridProps {
  view: 'grid' | 'list';
  onRoomSelect: (room: Room) => void;
  onBookingOpen: (room: Room) => void;
}

const RoomGrid: React.FC<RoomGridProps> = ({ view, onRoomSelect, onBookingOpen }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const rooms: Room[] = [
    {
      id: 1,
      name: 'Heritage Suite',
      type: 'Luxury Suite',
      price: 12500,
      originalPrice: 15000,
      images: [
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      size: '45 sqm',
      maxGuests: 3,
      bedType: 'King Bed',
      view: 'City View',
      rating: 4.9,
      reviews: 45,
      description: 'Elegant suite with traditional Indian décor, marble bathroom, and panoramic city views. Features handcrafted furniture and local artwork.',
      amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Room Service', 'Balcony', 'Work Desk'],
      features: ['Marble Bathroom', 'City View', 'Balcony', 'Traditional Décor', 'Handcrafted Furniture'],
      availability: 'available'
    },
    {
      id: 2,
      name: 'Cultural Deluxe',
      type: 'Deluxe Room',
      price: 8500,
      originalPrice: 10000,
      images: [
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      size: '32 sqm',
      maxGuests: 2,
      bedType: 'Queen Bed',
      view: 'Garden View',
      rating: 4.8,
      reviews: 67,
      description: 'Thoughtfully designed room celebrating local artistry with curated Indian textiles, modern amenities, and serene garden views.',
      amenities: ['Free WiFi', 'Air Conditioning', 'Coffee Maker', 'Room Service', 'Garden View'],
      features: ['Local Artwork', 'Garden View', 'Rain Shower', 'Work Desk', 'Indian Textiles'],
      availability: 'limited'
    },
    {
      id: 3,
      name: 'Artist\'s Loft',
      type: 'Premium Room',
      price: 9800,
      originalPrice: 11500,
      images: [
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      size: '38 sqm',
      maxGuests: 2,
      bedType: 'Double Bed',
      view: 'Art Studio View',
      rating: 4.9,
      reviews: 32,
      description: 'Creative space with curated local artwork, high ceilings, natural light through skylights, and inspiring artistic ambiance.',
      amenities: ['Free WiFi', 'Air Conditioning', 'Art Supplies', 'Room Service', 'Skylight'],
      features: ['High Ceiling', 'Skylight', 'Art Studio', 'Local Artwork', 'Creative Space'],
      availability: 'available'
    },
    {
      id: 4,
      name: 'Mumbai Classic',
      type: 'Standard Room',
      price: 6500,
      originalPrice: 8000,
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      size: '28 sqm',
      maxGuests: 2,
      bedType: 'Queen Bed',
      view: 'Street View',
      rating: 4.7,
      reviews: 89,
      description: 'Comfortable and stylish room with modern amenities, local touches, and authentic Mumbai street views.',
      amenities: ['Free WiFi', 'Air Conditioning', 'Coffee Maker', 'Room Service'],
      features: ['Street View', 'Modern Design', 'Local Touches', 'Comfortable Seating'],
      availability: 'available'
    },
    {
      id: 5,
      name: 'Penthouse Suite',
      type: 'Presidential Suite',
      price: 25000,
      originalPrice: 30000,
      images: [
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      size: '75 sqm',
      maxGuests: 4,
      bedType: 'King Bed + Sofa Bed',
      view: 'Panoramic City View',
      rating: 5.0,
      reviews: 12,
      description: 'Ultimate luxury with panoramic city views, private terrace, separate living area, and premium amenities.',
      amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Room Service', 'Private Terrace', 'Butler Service'],
      features: ['Panoramic Views', 'Private Terrace', 'Separate Living Area', 'Premium Amenities', 'Butler Service'],
      availability: 'limited'
    },
    {
      id: 6,
      name: 'Zen Garden Room',
      type: 'Wellness Room',
      price: 11000,
      originalPrice: 13000,
      images: [
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      size: '35 sqm',
      maxGuests: 2,
      bedType: 'King Bed',
      view: 'Garden View',
      rating: 4.8,
      reviews: 28,
      description: 'Tranquil space designed for wellness with meditation corner, yoga mats, and serene garden views.',
      amenities: ['Free WiFi', 'Air Conditioning', 'Yoga Mats', 'Meditation Corner', 'Aromatherapy'],
      features: ['Meditation Corner', 'Garden View', 'Wellness Amenities', 'Tranquil Design', 'Aromatherapy'],
      availability: 'available'
    }
  ];

  const toggleFavorite = (roomId: number) => {
    setFavorites(prev => 
      prev.includes(roomId) 
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'text-emerald bg-emerald/10';
      case 'limited': return 'text-sunset-orange bg-sunset-orange/10';
      case 'booked': return 'text-gray-500 bg-gray-100';
      default: return 'text-emerald bg-emerald/10';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available': return 'Available';
      case 'limited': return 'Few Left';
      case 'booked': return 'Booked';
      default: return 'Available';
    }
  };

  if (view === 'list') {
    return (
      <div className="space-y-6">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className="card-floating hover-lift fade-in-up group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-64 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(room.availability)}`}>
                    {getAvailabilityText(room.availability)}
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(room.id);
                    }}
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart size={16} className={favorites.includes(room.id) ? 'text-coral fill-current' : 'text-gray-600'} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-card-title artistic-heading text-dark-gray group-hover:text-coral transition-colors">
                        {room.name}
                      </h3>
                      <span className="text-sm text-gray-500">• {room.type}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Maximize size={14} />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>Up to {room.maxGuests} guests</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="fill-gold text-gold" />
                        <span>{room.rating} ({room.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 line-through">₹{room.originalPrice.toLocaleString()}</p>
                    <p className="text-2xl font-bold text-coral">₹{room.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">per night</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{room.description}</p>

                <div className="flex flex-wrap gap-2">
                  {room.features.slice(0, 4).map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-light-gray text-dark-gray px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                  {room.features.length > 4 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{room.features.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => onRoomSelect(room)}
                      className="text-coral hover:text-sunset-orange transition-colors flex items-center space-x-1 text-sm font-medium"
                    >
                      <Eye size={16} />
                      <span>View Details</span>
                    </button>
                    <button className="text-gray-500 hover:text-coral transition-colors flex items-center space-x-1 text-sm">
                      <Share2 size={16} />
                      <span>Share</span>
                    </button>
                  </div>
                  <button
                    onClick={() => onBookingOpen(room)}
                    className="btn-primary px-6 py-2 flex items-center space-x-2"
                    disabled={room.availability === 'booked'}
                  >
                    <Calendar size={16} />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms.map((room, index) => (
        <div
          key={room.id}
          className="card-floating hover-lift fade-in-up group cursor-pointer"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => onRoomSelect(room)}
        >
          {/* Room Image */}
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img
              src={room.images[0]}
              alt={room.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            
            {/* Availability Badge */}
            <div className="absolute top-3 left-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(room.availability)}`}>
                {getAvailabilityText(room.availability)}
              </span>
            </div>

            {/* Price Badge */}
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
              <div className="text-center">
                <p className="text-xs text-gray-500 line-through">₹{room.originalPrice.toLocaleString()}</p>
                <p className="text-lg font-bold text-coral">₹{room.price.toLocaleString()}</p>
              </div>
            </div>

            {/* Favorite Button */}
            <div className="absolute bottom-3 right-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(room.id);
                }}
                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <Heart size={18} className={favorites.includes(room.id) ? 'text-coral fill-current' : 'text-gray-600'} />
              </button>
            </div>

            {/* Room Type Badge */}
            <div className="absolute bottom-3 left-3 bg-emerald text-white px-3 py-1 rounded-full text-sm font-medium">
              {room.type}
            </div>
          </div>

          {/* Room Info */}
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-card-title artistic-heading text-dark-gray mb-1 group-hover:text-coral transition-colors">
                  {room.name}
                </h3>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Maximize size={14} />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{room.maxGuests} guests</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Star size={16} className="fill-gold text-gold" />
                <span className="text-sm font-medium">{room.rating}</span>
                <span className="text-xs text-gray-500">({room.reviews})</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
              {room.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {room.features.slice(0, 3).map((feature, featureIndex) => (
                <span
                  key={featureIndex}
                  className="bg-light-gray text-dark-gray px-3 py-1 rounded-full text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
              {room.features.length > 3 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{room.features.length - 3} more
                </span>
              )}
            </div>

            {/* Amenities Icons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-coral/10 rounded-full flex items-center justify-center">
                  <Wifi size={14} className="text-coral" />
                </div>
                <div className="w-8 h-8 bg-emerald/10 rounded-full flex items-center justify-center">
                  <Wind size={14} className="text-emerald" />
                </div>
                <div className="w-8 h-8 bg-royal-purple/10 rounded-full flex items-center justify-center">
                  <Coffee size={14} className="text-royal-purple" />
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBookingOpen(room);
                }}
                className="text-coral hover:text-sunset-orange transition-colors flex items-center space-x-1 text-sm font-medium"
                disabled={room.availability === 'booked'}
              >
                <span>Book Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomGrid;