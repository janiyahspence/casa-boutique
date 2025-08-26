import React from 'react';
import { Wifi, Coffee, Car, Users, Star, ArrowRight } from 'lucide-react';

const FeaturedRooms: React.FC = () => {
  const rooms = [
    {
      id: 1,
      name: 'Heritage Suite',
      type: 'Luxury Suite',
      price: 12500,
      originalPrice: 15000,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['King Bed', 'City View', 'Balcony', 'Marble Bath'],
      amenities: [Wifi, Coffee, Car],
      rating: 4.9,
      reviews: 45,
      description: 'Elegant suite with traditional Indian décor and modern amenities',
      size: '45 sqm'
    },
    {
      id: 2,
      name: 'Cultural Deluxe',
      type: 'Deluxe Room',
      price: 8500,
      originalPrice: 10000,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Queen Bed', 'Garden View', 'Work Desk', 'Rain Shower'],
      amenities: [Wifi, Coffee],
      rating: 4.8,
      reviews: 67,
      description: 'Thoughtfully designed room celebrating local artistry',
      size: '32 sqm'
    },
    {
      id: 3,
      name: 'Artist\'s Loft',
      type: 'Premium Room',
      price: 9800,
      originalPrice: 11500,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Double Bed', 'Art Studio', 'High Ceiling', 'Skylight'],
      amenities: [Wifi, Coffee, Car],
      rating: 4.9,
      reviews: 32,
      description: 'Creative space with curated local artwork and natural light',
      size: '38 sqm'
    }
  ];

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-emerald absolute top-10 right-10 w-40 h-40"></div>
        <div className="organic-blob bg-royal-purple absolute bottom-20 left-20 w-32 h-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block">
            <span className="script-accent text-coral text-xl mb-2 block">Discover</span>
            <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
              Featured Rooms & Suites
            </h2>
            <div className="w-24 h-1 bg-gradient-sunset mx-auto mb-6"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each room tells a unique story, blending contemporary comfort with authentic Indian heritage
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`card-floating hover-lift fade-in-up group cursor-pointer ${
                index === 1 ? 'lg:transform lg:scale-105 lg:z-10' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Room Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 line-through">₹{room.originalPrice.toLocaleString()}</p>
                    <p className="text-lg font-bold text-coral">₹{room.price.toLocaleString()}</p>
                  </div>
                </div>

                {/* Room Type Badge */}
                <div className="absolute top-4 left-4 bg-emerald text-white px-3 py-1 rounded-full text-sm font-medium">
                  {room.type}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-coral px-6 py-3 rounded-full font-semibold hover:bg-coral hover:text-white transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Room Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-card-title artistic-heading text-dark-gray mb-1">
                      {room.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{room.size} • {room.description}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="fill-gold text-gold" />
                    <span className="text-sm font-medium">{room.rating}</span>
                    <span className="text-xs text-gray-500">({room.reviews})</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-light-gray text-dark-gray px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Amenities */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {room.amenities.map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="w-8 h-8 bg-coral/10 rounded-full flex items-center justify-center"
                      >
                        <Icon size={16} className="text-coral" />
                      </div>
                    ))}
                  </div>
                  <button className="text-coral hover:text-sunset-orange transition-colors flex items-center space-x-1 text-sm font-medium">
                    <span>Book Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Rooms CTA */}
        <div className="text-center mt-12 fade-in-up">
          <button className="btn-secondary px-8 py-4 text-lg hover-lift">
            <Users size={20} className="inline mr-2" />
            View All Rooms & Suites
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;