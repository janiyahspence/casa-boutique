import React, { useState } from 'react';
import { 
  Star, 
  Clock, 
  Users, 
  MapPin, 
  Calendar,
  Heart,
  Share2,
  Camera,
  Utensils,
  Palette,
  Music,
  Dumbbell,
  Compass
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

interface ExperienceGridProps {
  onExperienceSelect: (experience: Experience) => void;
  onBookingOpen: (experience: Experience) => void;
}

const ExperienceGrid: React.FC<ExperienceGridProps> = ({ onExperienceSelect, onBookingOpen }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Mumbai Street Food Safari',
      category: 'Culinary Adventure',
      description: 'Discover authentic flavors in hidden local gems with our expert food guide through Mumbai\'s bustling streets.',
      longDescription: 'Embark on a culinary journey through Mumbai\'s vibrant street food scene. Visit 6 iconic food spots, from the famous Chowpatty Beach to hidden gems in Bandra. Learn about spices, cooking techniques, and food culture while tasting over 15 different dishes.',
      price: 2500,
      originalPrice: 3000,
      duration: '4 hours',
      groupSize: '2-8 people',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Multiple locations across Mumbai',
      highlights: ['6 Food Stops', 'Traditional Recipes', 'Cultural Stories', 'Local Markets'],
      includes: ['Expert Guide', 'All Food Tastings', 'Cultural Commentary', 'Safety Briefing'],
      difficulty: 'Easy',
      languages: ['English', 'Hindi', 'Marathi'],
      availability: 'available',
      guide: {
        name: 'Ravi Kulkarni',
        experience: '8 years',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
      }
    },
    {
      id: 2,
      title: 'Heritage Art Walk',
      category: 'Cultural Immersion',
      description: 'Explore Mumbai\'s vibrant art scene and meet local artists in their studios while discovering street art.',
      longDescription: 'Dive deep into Mumbai\'s artistic heritage with visits to 4 artist studios, 2 galleries, and street art locations. Meet working artists, understand their techniques, and even try your hand at traditional Indian art forms.',
      price: 1800,
      originalPrice: 2200,
      duration: '3 hours',
      groupSize: '2-6 people',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Kala Ghoda & Bandra',
      highlights: ['Artist Studios', 'Gallery Visits', 'Art Workshop', 'Street Art Tour'],
      includes: ['Professional Guide', 'Studio Access', 'Art Materials', 'Refreshments'],
      difficulty: 'Easy',
      languages: ['English', 'Hindi'],
      availability: 'available',
      guide: {
        name: 'Priya Mehta',
        experience: '6 years',
        image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
      }
    },
    {
      id: 3,
      title: 'Bollywood Behind Scenes',
      category: 'Entertainment',
      description: 'Get exclusive access to film studios and witness movie magic in action with industry insiders.',
      longDescription: 'Experience the glamour of Bollywood with exclusive studio access, meet actors and directors, watch live shoots, and learn about India\'s film industry. Includes dance workshop and costume try-on session.',
      price: 4200,
      originalPrice: 5000,
      duration: '6 hours',
      groupSize: '2-10 people',
      rating: 4.9,
      reviews: 67,
      image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Film City, Goregaon',
      highlights: ['Studio Tour', 'Meet Actors', 'Dance Workshop', 'Costume Session'],
      includes: ['Studio Access', 'Industry Guide', 'Dance Class', 'Lunch', 'Photos'],
      difficulty: 'Easy',
      languages: ['English', 'Hindi'],
      availability: 'limited',
      guide: {
        name: 'Arjun Kapoor',
        experience: '12 years',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
      }
    },
    {
      id: 4,
      title: 'Photography Expedition',
      category: 'Creative Journey',
      description: 'Capture Mumbai\'s essence with professional photography guidance through iconic and hidden locations.',
      longDescription: 'Perfect for photography enthusiasts! Explore Mumbai\'s most photogenic spots with a professional photographer. Learn composition, lighting, and editing techniques while capturing the city\'s diverse architecture and street life.',
      price: 3200,
      originalPrice: 3800,
      duration: '5 hours',
      groupSize: '2-6 people',
      rating: 4.8,
      reviews: 43,
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Gateway of India, Colaba, Marine Drive',
      highlights: ['Pro Tips', 'Hidden Spots', 'Photo Editing', 'Portfolio Review'],
      includes: ['Professional Guide', 'Equipment Tips', 'Editing Session', 'Digital Photos'],
      difficulty: 'Moderate',
      languages: ['English'],
      availability: 'available',
      guide: {
        name: 'Vikram Singh',
        experience: '10 years',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
      }
    },
    {
      id: 5,
      title: 'Dharavi Community Tour',
      category: 'Cultural Immersion',
      description: 'Respectful community tour showcasing entrepreneurship, crafts, and daily life in Asia\'s largest slum.',
      longDescription: 'A respectful and educational tour of Dharavi, showcasing the incredible entrepreneurship, recycling industries, and community spirit. Meet local artisans, visit small businesses, and understand the real story behind the headlines.',
      price: 1500,
      duration: '2.5 hours',
      groupSize: '2-8 people',
      rating: 4.7,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Dharavi',
      highlights: ['Community Stories', 'Local Crafts', 'Recycling Industry', 'Entrepreneurship'],
      includes: ['Local Guide', 'Community Interaction', 'Craft Demonstration', 'Refreshments'],
      difficulty: 'Easy',
      languages: ['English', 'Hindi'],
      availability: 'available',
      guide: {
        name: 'Suresh Patil',
        experience: '15 years',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
      }
    },
    {
      id: 6,
      title: 'Sunset Sailing Experience',
      category: 'Adventure',
      description: 'Sail along Mumbai\'s coastline during golden hour with traditional boat and local crew.',
      longDescription: 'Experience Mumbai from the sea with a traditional sailing boat tour along the coastline. Watch the sunset over the Arabian Sea, see the city skyline from water, and enjoy local snacks and beverages onboard.',
      price: 2800,
      originalPrice: 3200,
      duration: '3 hours',
      groupSize: '2-12 people',
      rating: 4.9,
      reviews: 78,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      location: 'Gateway of India Marina',
      highlights: ['Sunset Views', 'City Skyline', 'Traditional Boat', 'Local Snacks'],
      includes: ['Sailing Boat', 'Experienced Crew', 'Snacks & Drinks', 'Safety Equipment'],
      difficulty: 'Easy',
      languages: ['English', 'Hindi'],
      availability: 'available',
      guide: {
        name: 'Captain Ramesh',
        experience: '20 years',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
      }
    }
  ];

  const categoryIcons: { [key: string]: any } = {
    'Culinary Adventure': Utensils,
    'Cultural Immersion': Palette,
    'Entertainment': Music,
    'Creative Journey': Camera,
    'Adventure': Compass,
    'Wellness': Dumbbell
  };

  const toggleFavorite = (experienceId: number) => {
    setFavorites(prev => 
      prev.includes(experienceId) 
        ? prev.filter(id => id !== experienceId)
        : [...prev, experienceId]
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
      case 'limited': return 'Few Spots Left';
      case 'booked': return 'Fully Booked';
      default: return 'Available';
    }
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Culinary Adventure': 'coral',
      'Cultural Immersion': 'emerald',
      'Entertainment': 'royal-purple',
      'Creative Journey': 'sunset-orange',
      'Adventure': 'electric-blue',
      'Wellness': 'magenta'
    };
    return colorMap[category] || 'coral';
  };

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-coral absolute top-16 left-16 w-36 h-36 floating"></div>
        <div className="organic-blob bg-emerald absolute bottom-24 right-24 w-28 h-28 floating-delayed"></div>
        <div className="organic-blob bg-royal-purple absolute top-1/2 left-1/2 w-20 h-20 floating"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="script-accent text-emerald text-xl mb-2 block">Discover</span>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            Mumbai Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in authentic Mumbai culture through expertly curated experiences 
            that connect you with local communities, traditions, and hidden gems
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => {
            const Icon = categoryIcons[experience.category] || Compass;
            const categoryColor = getCategoryColor(experience.category);
            
            return (
              <div
                key={experience.id}
                className="card-floating hover-lift fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onExperienceSelect(experience)}
              >
                {/* Experience Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  {/* Availability Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(experience.availability)}`}>
                      {getAvailabilityText(experience.availability)}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="text-center">
                      {experience.originalPrice && (
                        <p className="text-xs text-gray-500 line-through">₹{experience.originalPrice.toLocaleString()}</p>
                      )}
                      <p className="text-lg font-bold text-coral">₹{experience.price.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Favorite Button */}
                  <div className="absolute bottom-3 right-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(experience.id);
                      }}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Heart size={18} className={favorites.includes(experience.id) ? 'text-coral fill-current' : 'text-gray-600'} />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3">
                    <div className={`flex items-center space-x-2 bg-${categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      <Icon size={16} />
                      <span>{experience.category}</span>
                    </div>
                  </div>
                </div>

                {/* Experience Info */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-card-title artistic-heading text-dark-gray mb-1 group-hover:text-coral transition-colors">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={14} />
                          <span>{experience.groupSize}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="fill-gold text-gold" />
                      <span className="text-sm font-medium">{experience.rating}</span>
                      <span className="text-xs text-gray-500">({experience.reviews})</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {experience.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="bg-light-gray text-dark-gray px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                    {experience.highlights.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{experience.highlights.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Guide & Location */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={experience.guide.image}
                        alt={experience.guide.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-xs font-medium text-dark-gray">{experience.guide.name}</p>
                        <p className="text-xs text-gray-500">{experience.guide.experience} experience</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookingOpen(experience);
                      }}
                      className="text-coral hover:text-sunset-orange transition-colors flex items-center space-x-1 text-sm font-medium"
                      disabled={experience.availability === 'booked'}
                    >
                      <Calendar size={16} />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-royal rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="artistic-heading text-3xl mb-4">
              Create Your Perfect Mumbai Adventure
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? Our local experts can create a completely 
              personalized itinerary tailored to your interests, schedule, and group size.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-royal-purple px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors">
                Custom Itinerary Request
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-royal-purple transition-colors">
                Speak with Local Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;