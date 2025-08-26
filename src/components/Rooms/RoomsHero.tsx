import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, Users, Bed, Wifi } from 'lucide-react';

interface RoomsHeroProps {
  onFilterChange: (filters: any) => void;
  onViewChange: (view: 'grid' | 'list') => void;
  currentView: 'grid' | 'list';
}

const RoomsHero: React.FC<RoomsHeroProps> = ({ onFilterChange, onViewChange, currentView }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([5000, 20000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [guestCount, setGuestCount] = useState(2);

  const amenityOptions = [
    { id: 'wifi', label: 'Free WiFi', icon: Wifi },
    { id: 'balcony', label: 'Balcony', icon: Grid },
    { id: 'cityview', label: 'City View', icon: Star },
    { id: 'kingbed', label: 'King Bed', icon: Bed },
  ];

  const handleAmenityToggle = (amenityId: string) => {
    const updated = selectedAmenities.includes(amenityId)
      ? selectedAmenities.filter(id => id !== amenityId)
      : [...selectedAmenities, amenityId];
    setSelectedAmenities(updated);
    onFilterChange({ searchTerm, priceRange, amenities: updated, guestCount });
  };

  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Casa Boutique Rooms"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="organic-blob bg-coral/20 absolute top-20 left-16 w-32 h-32 floating"></div>
        <div className="organic-blob bg-emerald/20 absolute bottom-32 right-20 w-24 h-24 floating-delayed"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[60vh] flex items-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12 fade-in-up">
            <h1 className="text-hero artistic-heading text-white mb-6">
              Rooms & <span className="text-coral">Suites</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Each room is a unique sanctuary, thoughtfully designed to celebrate Mumbai's rich heritage 
              while providing modern luxury and comfort
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="card-floating max-w-5xl mx-auto fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-dark-gray mb-2">Search Rooms</label>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coral" />
                  <input
                    type="text"
                    placeholder="Room name or type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-dark-gray mb-2">Price Range</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent">
                  <option>₹5,000 - ₹10,000</option>
                  <option>₹10,000 - ₹15,000</option>
                  <option>₹15,000 - ₹20,000</option>
                  <option>₹20,000+</option>
                </select>
              </div>

              {/* Guests */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-dark-gray mb-2">Guests</label>
                <div className="relative">
                  <Users size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coral" />
                  <select 
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                  </select>
                </div>
              </div>

              {/* View Toggle */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-dark-gray mb-2">View</label>
                <div className="flex rounded-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => onViewChange('grid')}
                    className={`flex-1 px-4 py-3 flex items-center justify-center space-x-2 transition-colors ${
                      currentView === 'grid' 
                        ? 'bg-coral text-white' 
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Grid size={18} />
                    <span>Grid</span>
                  </button>
                  <button
                    onClick={() => onViewChange('list')}
                    className={`flex-1 px-4 py-3 flex items-center justify-center space-x-2 transition-colors ${
                      currentView === 'list' 
                        ? 'bg-coral text-white' 
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <List size={18} />
                    <span>List</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-3">
                <span className="text-sm font-medium text-dark-gray">Quick Filters:</span>
                {amenityOptions.map((amenity) => {
                  const Icon = amenity.icon;
                  return (
                    <button
                      key={amenity.id}
                      onClick={() => handleAmenityToggle(amenity.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedAmenities.includes(amenity.id)
                          ? 'bg-coral text-white'
                          : 'bg-light-gray text-dark-gray hover:bg-coral hover:text-white'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{amenity.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsHero;