import React, { useState } from 'react';
import { Search, Filter, MapPin, Clock, Users, Star, Calendar } from 'lucide-react';

interface ExperiencesHeroProps {
  onFilterChange: (filters: any) => void;
  onBookingOpen: (experience: any) => void;
}

const ExperiencesHero: React.FC<ExperiencesHeroProps> = ({ onFilterChange, onBookingOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [duration, setDuration] = useState('all');

  const categories = [
    { id: 'all', label: 'All Experiences', color: 'coral' },
    { id: 'culinary', label: 'Food & Culinary', color: 'emerald' },
    { id: 'cultural', label: 'Art & Culture', color: 'royal-purple' },
    { id: 'entertainment', label: 'Entertainment', color: 'sunset-orange' },
    { id: 'wellness', label: 'Wellness', color: 'electric-blue' },
    { id: 'adventure', label: 'Adventure', color: 'magenta' }
  ];

  const featuredExperience = {
    title: 'Mumbai Heritage Walk',
    description: 'Discover the architectural marvels and hidden stories of colonial Mumbai',
    price: 1500,
    duration: '3 hours',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Mumbai Cultural Experiences"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="organic-blob bg-emerald/20 absolute top-32 left-16 w-40 h-40 floating"></div>
        <div className="organic-blob bg-magenta/20 absolute bottom-40 right-20 w-32 h-32 floating-delayed"></div>
        <div className="organic-blob bg-electric-blue/20 absolute top-1/2 left-1/3 w-24 h-24 floating"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="asymmetric-grid">
            {/* Left Content */}
            <div className="text-white space-y-8 fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin size={20} className="text-emerald" />
                <span className="text-emerald font-medium">Authentic Mumbai</span>
              </div>
              
              <h1 className="text-hero artistic-heading mb-6">
                Cultural <span className="text-coral">Experiences</span>{' '}
                <span className="script-accent text-emerald block sm:inline">& Adventures</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Immerse yourself in Mumbai's vibrant culture through carefully curated experiences 
                designed by local experts who know the city's hidden gems and authentic stories.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-coral">25+</p>
                  <p className="text-sm text-white/80">Unique Experiences</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald">50+</p>
                  <p className="text-sm text-white/80">Local Partners</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-royal-purple">4.9</p>
                  <p className="text-sm text-white/80">Average Rating</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-lg px-8 py-4 hover-lift">
                  <Calendar size={20} className="inline mr-2" />
                  Browse All Experiences
                </button>
                <button className="btn-secondary text-lg px-8 py-4 hover-lift">
                  <Users size={20} className="inline mr-2" />
                  Custom Itinerary
                </button>
              </div>
            </div>

            {/* Right Content - Featured Experience Card */}
            <div className="fade-in-up">
              <div className="card-floating max-w-sm ml-auto">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={featuredExperience.image}
                    alt={featuredExperience.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-emerald text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="fill-gold text-gold" />
                      <span className="text-sm font-medium">{featuredExperience.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="artistic-heading text-xl text-dark-gray mb-2">
                      {featuredExperience.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{featuredExperience.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{featuredExperience.duration}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-coral">₹{featuredExperience.price.toLocaleString()}</p>
                      <p className="text-xs">per person</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onBookingOpen(featuredExperience)}
                    className="w-full btn-primary py-3"
                  >
                    Book This Experience
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-16 fade-in-up">
            <div className="card-floating max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Search */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-dark-gray mb-2">Search Experiences</label>
                  <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coral" />
                    <input
                      type="text"
                      placeholder="Food tours, art walks..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-dark-gray mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.label}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-dark-gray mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                  >
                    <option value="all">All Prices</option>
                    <option value="budget">Under ₹2,000</option>
                    <option value="mid">₹2,000 - ₹5,000</option>
                    <option value="premium">₹5,000+</option>
                  </select>
                </div>

                {/* Duration */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-dark-gray mb-2">Duration</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                  >
                    <option value="all">Any Duration</option>
                    <option value="short">1-3 hours</option>
                    <option value="half">Half Day (4-6 hours)</option>
                    <option value="full">Full Day (7+ hours)</option>
                  </select>
                </div>
              </div>

              {/* Category Pills */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  <span className="text-sm font-medium text-dark-gray">Popular Categories:</span>
                  {categories.slice(1, 5).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? `bg-${category.color} text-white`
                          : 'bg-light-gray text-dark-gray hover:bg-coral hover:text-white'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesHero;