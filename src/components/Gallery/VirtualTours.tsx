import React, { useState } from 'react';
import { 
  Play, 
  Maximize, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Eye, 
  Clock,
  Users,
  Star,
  ChevronRight,
  Headphones,
  Smartphone,
  Monitor
} from 'lucide-react';

const VirtualTours: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [isMuted, setIsMuted] = useState(false);

  const virtualTours = [
    {
      id: 1,
      title: 'Heritage Suite - Complete Tour',
      category: 'Rooms & Suites',
      duration: '5 minutes',
      views: 12500,
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Immersive 360° tour of our flagship Heritage Suite showcasing traditional Indian décor and modern amenities',
      highlights: ['Living Area', 'Bedroom', 'Marble Bathroom', 'Private Balcony'],
      narrator: 'Aanya Mehta, Creative Director',
      languages: ['English', 'Hindi'],
      featured: true,
      color: 'coral'
    },
    {
      id: 2,
      title: 'Restaurant & Kitchen Tour',
      category: 'Dining',
      duration: '7 minutes',
      views: 8900,
      rating: 4.8,
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Behind-the-scenes tour of our award-winning restaurant and kitchen with Chef Meera Patel',
      highlights: ['Main Dining', 'Chef\'s Kitchen', 'Wine Cellar', 'Private Dining'],
      narrator: 'Chef Kiara Sharma',
      languages: ['English', 'Hindi'],
      featured: true,
      color: 'emerald'
    },
    {
      id: 3,
      title: 'Cultural Art Walk Experience',
      category: 'Experiences',
      duration: '10 minutes',
      views: 6700,
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Virtual journey through Mumbai\'s art galleries and artist studios with our cultural guide',
      highlights: ['Kala Ghoda Gallery', 'Artist Studios', 'Street Art', 'Cultural Stories'],
      narrator: 'Arjun Sinha, Cultural Guide',
      languages: ['English', 'Hindi', 'Marathi'],
      featured: false,
      color: 'royal-purple'
    },
    {
      id: 4,
      title: 'Artist\'s Loft - Creative Space',
      category: 'Rooms & Suites',
      duration: '4 minutes',
      views: 5400,
      rating: 4.7,
      thumbnail: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Explore our unique Artist\'s Loft with high ceilings, natural light, and curated local artwork',
      highlights: ['Art Studio Setup', 'Skylight Views', 'Creative Corner', 'Local Artwork'],
      narrator: 'Local Artist Collaboration',
      languages: ['English'],
      featured: false,
      color: 'sunset-orange'
    },
    {
      id: 5,
      title: 'Bollywood Studio Experience',
      category: 'Experiences',
      duration: '12 minutes',
      views: 15600,
      rating: 5.0,
      thumbnail: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Exclusive virtual access to Bollywood film studios and behind-the-scenes movie magic',
      highlights: ['Film Sets', 'Costume Department', 'Dance Studio', 'Celebrity Meetings'],
      narrator: 'Film Industry Expert',
      languages: ['English', 'Hindi'],
      featured: true,
      color: 'magenta'
    },
    {
      id: 6,
      title: 'Hotel Architecture & Heritage',
      category: 'Architecture',
      duration: '6 minutes',
      views: 4200,
      rating: 4.6,
      thumbnail: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Discover the architectural beauty and heritage story of our 1920s building restoration',
      highlights: ['Heritage Facade', 'Restoration Process', 'Architectural Details', 'Historical Context'],
      narrator: 'Architecture Historian',
      languages: ['English'],
      featured: false,
      color: 'electric-blue'
    }
  ];

  const getCategoryColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'coral': 'bg-coral',
      'emerald': 'bg-emerald',
      'royal-purple': 'bg-royal-purple',
      'sunset-orange': 'bg-sunset-orange',
      'magenta': 'bg-magenta',
      'electric-blue': 'bg-electric-blue'
    };
    return colorMap[color] || 'bg-coral';
  };

  const openTourPlayer = (tour: any) => {
    setSelectedTour(tour);
  };

  const closeTourPlayer = () => {
    setSelectedTour(null);
  };

  return (
    <>
      <section className="py-20 bg-light-gray relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="organic-blob bg-electric-blue absolute top-16 left-16 w-36 h-36 floating"></div>
          <div className="organic-blob bg-magenta absolute bottom-24 right-24 w-28 h-28 floating-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <span className="script-accent text-electric-blue text-xl mb-2 block">Immersive</span>
            <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
              Virtual Tours
            </h2>
            <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience Casa Boutique from anywhere in the world with our immersive 360° virtual tours, 
              narrated by our expert team and local cultural guides
            </p>
          </div>

          {/* Featured Tour */}
          <div className="mb-16 fade-in-up">
            <div className="bg-gradient-royal rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <div className="asymmetric-grid items-center">
                <div>
                  <h3 className="artistic-heading text-2xl mb-3">
                    Most Popular Virtual Experience
                  </h3>
                  <p className="text-white/90 mb-4">
                    Take our comprehensive Heritage Suite tour and discover why guests fall in love 
                    with Casa Boutique before they even arrive.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-white/80 mb-6">
                    <div className="flex items-center space-x-1">
                      <Eye size={16} />
                      <span>12,500+ views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="fill-current" />
                      <span>4.9 rating</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>5 minutes</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => openTourPlayer(virtualTours[0])}
                    className="bg-white text-royal-purple px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors flex items-center space-x-2"
                  >
                    <Play size={20} />
                    <span>Start Virtual Tour</span>
                  </button>
                </div>
                <div className="relative">
                  <img
                    src={virtualTours[0].thumbnail}
                    alt="Heritage Suite Virtual Tour"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Virtual Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualTours.map((tour, index) => {
              const categoryColor = getCategoryColor(tour.color);
              
              return (
                <div
                  key={tour.id}
                  className="card-floating hover-lift fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openTourPlayer(tour)}
                >
                  {/* Tour Thumbnail */}
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={tour.thumbnail}
                      alt={tour.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Featured Badge */}
                    {tour.featured && (
                      <div className="absolute top-3 left-3 bg-electric-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}

                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span className="text-sm font-medium">{tour.duration}</span>
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-3 left-3">
                      <div className={`${categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {tour.category}
                      </div>
                    </div>
                  </div>

                  {/* Tour Info */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-card-title artistic-heading text-dark-gray mb-1 group-hover:text-electric-blue transition-colors">
                          {tour.title}
                        </h3>
                        <p className="text-gray-600 text-sm">Narrated by {tour.narrator}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star size={16} className="fill-gold text-gold" />
                        <span className="text-sm font-medium">{tour.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {tour.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-dark-gray">Tour Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tour.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="bg-light-gray text-dark-gray px-2 py-1 rounded-full text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                        {tour.highlights.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{tour.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats & Languages */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye size={14} />
                          <span>{tour.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={14} />
                          <span>{tour.languages.join(', ')}</span>
                        </div>
                      </div>
                      <button className="text-electric-blue hover:text-magenta transition-colors flex items-center space-x-1 text-sm font-medium">
                        <Play size={16} />
                        <span>Watch</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Device Compatibility */}
          <div className="mt-16 text-center fade-in-up">
            <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto card-floating">
              <h3 className="artistic-heading text-2xl text-dark-gray mb-6">
                Experience on Any Device
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor size={24} className="text-electric-blue" />
                  </div>
                  <h4 className="font-semibold text-dark-gray mb-2">Desktop & Laptop</h4>
                  <p className="text-gray-600 text-sm">Full HD experience with mouse navigation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-magenta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone size={24} className="text-magenta" />
                  </div>
                  <h4 className="font-semibold text-dark-gray mb-2">Mobile & Tablet</h4>
                  <p className="text-gray-600 text-sm">Touch-friendly interface with gyroscope support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Headphones size={24} className="text-emerald" />
                  </div>
                  <h4 className="font-semibold text-dark-gray mb-2">VR Headsets</h4>
                  <p className="text-gray-600 text-sm">Immersive VR experience for supported devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Player Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full max-h-[90vh] relative">
            {/* Tour Player */}
            <div className="bg-black rounded-2xl overflow-hidden">
              {/* Video/360 Player Area */}
              <div className="relative h-96 bg-gradient-dark flex items-center justify-center">
                <img
                  src={selectedTour.thumbnail}
                  alt={selectedTour.title}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play size={32} className="ml-1" />
                    </div>
                    <p className="text-lg font-semibold mb-2">360° Virtual Tour</p>
                    <p className="text-white/80">Click to start immersive experience</p>
                  </div>
                </div>

                {/* Player Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Play size={18} />
                    </button>
                    <button 
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <RotateCcw size={18} />
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Maximize size={18} />
                    </button>
                    <button 
                      onClick={closeTourPlayer}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>

              {/* Tour Information */}
              <div className="bg-white p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="artistic-heading text-2xl text-dark-gray mb-2">
                      {selectedTour.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{selectedTour.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Narrated by {selectedTour.narrator}</span>
                      <span>Duration: {selectedTour.duration}</span>
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="fill-gold text-gold" />
                        <span>{selectedTour.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-3">Tour Highlights</h4>
                    <div className="space-y-2">
                      {selectedTour.highlights.map((highlight: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <ChevronRight size={16} className="text-electric-blue" />
                          <span className="text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-3">Available Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTour.languages.map((language: string, index: number) => (
                        <span
                          key={index}
                          className="bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VirtualTours;