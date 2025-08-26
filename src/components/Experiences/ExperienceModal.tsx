import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Clock, 
  Users, 
  MapPin, 
  Calendar,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Award,
  Globe,
  Shield
} from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  location: string;
  highlights: string[];
  includes: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  languages: string[];
  availability: 'available' | 'limited' | 'booked';
  guide: {
    name: string;
    experience: string;
    image: string;
  };
}

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
  onBookingOpen: (experience: Experience) => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, isOpen, onClose, onBookingOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'reviews'>('overview');

  if (!isOpen || !experience) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % experience.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + experience.gallery.length) % experience.gallery.length);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-emerald bg-emerald/10';
      case 'Moderate': return 'text-sunset-orange bg-sunset-orange/10';
      case 'Challenging': return 'text-coral bg-coral/10';
      default: return 'text-emerald bg-emerald/10';
    }
  };

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '3 days ago',
      comment: 'Absolutely incredible experience! Our guide was knowledgeable and passionate. Learned so much about Mumbai\'s culture and history.',
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: 'Raj Patel',
      rating: 5,
      date: '1 week ago',
      comment: 'Best cultural tour I\'ve ever taken. The local insights and authentic experiences made this unforgettable. Highly recommend!',
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: 'Emma Wilson',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Great experience overall. Well organized and our guide was fantastic. Would definitely book another experience with Casa Boutique.',
      verified: true,
      helpful: 5
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
              src={experience.gallery[currentImageIndex] || experience.image}
              alt={`${experience.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-dark opacity-20"></div>
            
            {/* Navigation Arrows */}
            {experience.gallery.length > 1 && (
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
            {experience.gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {experience.gallery.map((_, index) => (
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

            {/* Experience Info Overlay */}
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="artistic-heading text-3xl mb-2">{experience.title}</h2>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  {experience.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star size={16} className="fill-gold text-gold" />
                  <span>{experience.rating} ({experience.reviews} reviews)</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(experience.difficulty)}`}>
                  {experience.difficulty}
                </span>
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
                  <Clock size={24} className="mx-auto mb-2 text-coral" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{experience.duration}</p>
                </div>
                <div className="text-center p-4 bg-light-gray rounded-lg">
                  <Users size={24} className="mx-auto mb-2 text-emerald" />
                  <p className="text-sm text-gray-600">Group Size</p>
                  <p className="font-semibold">{experience.groupSize}</p>
                </div>
                <div className="text-center p-4 bg-light-gray rounded-lg">
                  <MapPin size={24} className="mx-auto mb-2 text-royal-purple" />
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold text-xs">{experience.location}</p>
                </div>
                <div className="text-center p-4 bg-light-gray rounded-lg">
                  <Globe size={24} className="mx-auto mb-2 text-sunset-orange" />
                  <p className="text-sm text-gray-600">Languages</p>
                  <p className="font-semibold text-xs">{experience.languages.join(', ')}</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'itinerary', label: 'What\'s Included' },
                    { id: 'reviews', label: `Reviews (${experience.reviews})` }
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
                      <h3 className="text-xl font-semibold text-dark-gray mb-3">About This Experience</h3>
                      <p className="text-gray-600 leading-relaxed">{experience.longDescription}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-3">Experience Highlights</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {experience.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-emerald" />
                            <span className="text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Guide Info */}
                    <div className="bg-light-gray rounded-lg p-6">
                      <h4 className="font-semibold text-dark-gray mb-4">Your Expert Guide</h4>
                      <div className="flex items-center space-x-4">
                        <img
                          src={experience.guide.image}
                          alt={experience.guide.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-semibold text-dark-gray">{experience.guide.name}</h5>
                          <p className="text-gray-600 text-sm">{experience.guide.experience} of guiding experience</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Award size={14} className="text-gold" />
                            <span className="text-xs text-gray-500">Certified Local Expert</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-dark-gray mb-4">What's Included</h3>
                      <div className="space-y-3">
                        {experience.includes.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-light-gray rounded-lg">
                            <CheckCircle size={20} className="text-emerald" />
                            <span className="font-medium text-dark-gray">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-ocean rounded-lg p-6 text-white">
                      <h4 className="font-semibold mb-3 flex items-center space-x-2">
                        <Shield size={20} />
                        <span>Safety & Comfort</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle size={14} />
                          <span>Small group sizes for personalized attention</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle size={14} />
                          <span>Licensed and insured guides</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle size={14} />
                          <span>24/7 emergency support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle size={14} />
                          <span>Flexible cancellation policy</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-dark-gray mb-3">Important Information</h4>
                      <div className="bg-light-gray rounded-lg p-4 text-sm text-gray-600">
                        <ul className="space-y-2">
                          <li>• Comfortable walking shoes recommended</li>
                          <li>• Experience operates in all weather conditions</li>
                          <li>• Minimum age requirement: 12 years</li>
                          <li>• Vegetarian and dietary restrictions accommodated</li>
                          <li>• Photography allowed at most locations</li>
                        </ul>
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
                        <span className="text-lg font-semibold">{experience.rating}</span>
                        <span className="text-gray-500">({experience.reviews} reviews)</span>
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
                                      Verified Experience
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed mb-2">{review.comment}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <button className="hover:text-coral transition-colors">
                              Helpful ({review.helpful})
                            </button>
                            <button className="hover:text-coral transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full btn-secondary py-3">
                      View All {experience.reviews} Reviews
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
                      {experience.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">₹{experience.originalPrice.toLocaleString()}</span>
                      )}
                      <span className="text-3xl font-bold text-coral">₹{experience.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-500">per person (including all fees)</p>
                    {experience.originalPrice && (
                      <div className="bg-emerald/10 text-emerald px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block">
                        Save ₹{(experience.originalPrice - experience.price).toLocaleString()}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-dark-gray mb-1">Date</label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-gray mb-1">Time</label>
                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-sm">
                          <option>9:00 AM</option>
                          <option>2:00 PM</option>
                          <option>6:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-gray mb-1">Participants</label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent text-sm">
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5+ People</option>
                      </select>
                    </div>

                    <button
                      onClick={() => onBookingOpen(experience)}
                      className="w-full btn-primary py-4 text-lg font-semibold"
                      disabled={experience.availability === 'booked'}
                    >
                      <Calendar size={20} className="inline mr-2" />
                      {experience.availability === 'booked' ? 'Fully Booked' : 'Book This Experience'}
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
                <div className="bg-gradient-sunset rounded-lg p-6 text-white">
                  <h4 className="font-semibold mb-2">Questions?</h4>
                  <p className="text-white/90 text-sm mb-4">
                    Our local experience experts are here to help you plan the perfect Mumbai adventure.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>Call: +91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>WhatsApp: Available 24/7</span>
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

export default ExperienceModal;