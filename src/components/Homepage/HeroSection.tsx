import React, { useEffect, useState } from 'react';
import { Play, Star, MapPin, Calendar, Users } from 'lucide-react';

interface HeroSectionProps {
  onBookingOpen: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookingOpen }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Casa Boutique ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-dark opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="organic-blob bg-coral/20 absolute top-20 left-10 w-32 h-32 floating"></div>
        <div className="organic-blob bg-emerald/20 absolute bottom-32 right-20 w-24 h-24 floating-delayed"></div>
        <div className="organic-blob bg-royal-purple/20 absolute top-1/2 left-1/4 w-16 h-16 floating"></div>
        <div className="organic-blob bg-sunset-orange/20 absolute top-1/3 right-1/3 w-20 h-20 floating"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="asymmetric-grid">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="fade-in-up">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin size={20} className="text-emerald" />
                  <span className="text-emerald font-medium">Mumbai, India</span>
                </div>
                <h1 className="text-hero artistic-heading mb-6">
                  Welcome to{' '}
                  <span className="text-coral">Casa</span>{' '}
                  <span className="script-accent text-emerald block sm:inline">Boutique</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                  Where modern luxury meets authentic Indian culture. Experience curated stays, 
                  local immersion, and unforgettable moments in the heart of Mumbai.
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 fade-in-up">
                <div className="text-center">
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-white/80">4.9 Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald">127+</p>
                  <p className="text-sm text-white/80">Happy Guests</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-coral">15+</p>
                  <p className="text-sm text-white/80">Experiences</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
                <button 
                  onClick={onBookingOpen}
                  className="btn-primary text-lg px-8 py-4 hover-lift"
                >
                  <Calendar size={20} className="inline mr-2" />
                  Book Your Stay
                </button>
                <button className="btn-secondary text-lg px-8 py-4 hover-lift">
                  <Play size={20} className="inline mr-2" />
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Right Content - Floating Booking Card */}
            <div className="fade-in-up">
              <div className="card-floating max-w-sm ml-auto">
                <div className="text-center mb-6">
                  <h3 className="artistic-heading text-2xl text-dark-gray mb-2">
                    Quick Booking
                  </h3>
                  <p className="text-gray-600">Check availability instantly</p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-dark-gray mb-1">
                        Check-in
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-gray mb-1">
                        Check-out
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-dark-gray mb-1">
                        Guests
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-sm">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-gray mb-1">
                        Rooms
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-sm">
                        <option>1 Room</option>
                        <option>2 Rooms</option>
                        <option>3 Rooms</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-light-gray rounded-lg p-3 text-center">
                    <p className="text-sm text-gray-600">Starting from</p>
                    <p className="text-2xl font-bold text-coral">₹8,500</p>
                    <p className="text-xs text-gray-500">per night</p>
                  </div>

                  <button
                    type="button"
                    onClick={onBookingOpen}
                    className="w-full btn-primary py-3"
                  >
                    <Users size={18} className="inline mr-2" />
                    Check Availability
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;