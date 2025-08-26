import React, { useState, useEffect } from 'react';
import { Camera, Play, Grid, List, Filter, Search, Eye, Heart, Share2 } from 'lucide-react';

const GalleryHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const galleryStats = {
    photos: '500+',
    virtualTours: '15+',
    guestMoments: '1000+',
    awards: '8+'
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark">
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
              alt={`Casa Boutique Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-dark opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="organic-blob bg-magenta/20 absolute top-32 left-16 w-40 h-40 floating"></div>
        <div className="organic-blob bg-electric-blue/20 absolute bottom-40 right-20 w-32 h-32 floating-delayed"></div>
        <div className="organic-blob bg-emerald/20 absolute top-1/2 left-1/3 w-24 h-24 floating"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="asymmetric-grid">
            {/* Left Content */}
            <div className="text-white space-y-8 fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <Camera size={20} className="text-magenta" />
                <span className="text-magenta font-medium">Visual Stories</span>
              </div>
              
              <h1 className="text-hero artistic-heading mb-6">
                Gallery & <span className="text-coral">Virtual</span>{' '}
                <span className="script-accent text-emerald block sm:inline">Experiences</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Immerse yourself in Casa Boutique's visual story through stunning photography, 
                360° virtual tours, and authentic guest moments that capture the essence of Mumbai's culture.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-magenta/20 rounded-full flex items-center justify-center mb-2">
                    <Camera size={24} className="text-magenta" />
                  </div>
                  <p className="text-sm text-white/80">Photography</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mb-2">
                    <Play size={24} className="text-electric-blue" />
                  </div>
                  <p className="text-sm text-white/80">Virtual Tours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mb-2">
                    <Heart size={24} className="text-emerald" />
                  </div>
                  <p className="text-sm text-white/80">Guest Moments</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-lg px-8 py-4 hover-lift">
                  <Play size={20} className="inline mr-2" />
                  Start Virtual Tour
                </button>
                <button className="btn-secondary text-lg px-8 py-4 hover-lift">
                  <Camera size={20} className="inline mr-2" />
                  View All Photos
                </button>
              </div>
            </div>

            {/* Right Content - Stats Card */}
            <div className="fade-in-up">
              <div className="card-floating max-w-sm ml-auto">
                <div className="text-center mb-6">
                  <h3 className="artistic-heading text-2xl text-dark-gray mb-2">
                    Visual Collection
                  </h3>
                  <p className="text-gray-600">Capturing every moment</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-light-gray rounded-lg">
                      <p className="text-3xl font-bold text-magenta">{galleryStats.photos}</p>
                      <p className="text-sm text-gray-600">Photos</p>
                    </div>
                    <div className="text-center p-4 bg-light-gray rounded-lg">
                      <p className="text-3xl font-bold text-electric-blue">{galleryStats.virtualTours}</p>
                      <p className="text-sm text-gray-600">Virtual Tours</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-light-gray rounded-lg">
                      <p className="text-3xl font-bold text-emerald">{galleryStats.guestMoments}</p>
                      <p className="text-sm text-gray-600">Guest Moments</p>
                    </div>
                    <div className="text-center p-4 bg-light-gray rounded-lg">
                      <p className="text-3xl font-bold text-coral">{galleryStats.awards}</p>
                      <p className="text-sm text-gray-600">Photo Awards</p>
                    </div>
                  </div>

                  <div className="bg-gradient-royal rounded-lg p-4 text-white text-center">
                    <p className="text-sm mb-1">Featured in</p>
                    <p className="font-semibold">Architectural Digest India</p>
                    <p className="text-xs text-white/70">Best Hotel Photography 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mt-16 fade-in-up">
            <div className="card-floating max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Search */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-dark-gray mb-2">Search Gallery</label>
                  <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coral" />
                    <input
                      type="text"
                      placeholder="Rooms, experiences..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-dark-gray mb-2">Category</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent">
                    <option>All Categories</option>
                    <option>Rooms & Suites</option>
                    <option>Dining & Cuisine</option>
                    <option>Experiences</option>
                    <option>Architecture</option>
                    <option>Guest Moments</option>
                  </select>
                </div>

                {/* Type */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-dark-gray mb-2">Media Type</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent">
                    <option>All Media</option>
                    <option>Photography</option>
                    <option>Virtual Tours</option>
                    <option>Videos</option>
                    <option>360° Views</option>
                  </select>
                </div>

                {/* View Toggle */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-dark-gray mb-2">View</label>
                  <div className="flex rounded-lg border border-gray-200 overflow-hidden">
                    <button className="flex-1 px-4 py-3 flex items-center justify-center space-x-2 bg-coral text-white">
                      <Grid size={18} />
                      <span>Grid</span>
                    </button>
                    <button className="flex-1 px-4 py-3 flex items-center justify-center space-x-2 bg-white text-gray-600 hover:bg-gray-50">
                      <List size={18} />
                      <span>List</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;