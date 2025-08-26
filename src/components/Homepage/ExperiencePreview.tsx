import React from 'react';
import { Camera, Utensils, Palette, Music, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const ExperiencePreview: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Mumbai Street Food Tour',
      category: 'Culinary Adventure',
      duration: '4 hours',
      groupSize: '2-8 people',
      price: 2500,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: Utensils,
      description: 'Discover authentic flavors in hidden local gems with our expert food guide',
      highlights: ['5 Local Eateries', 'Traditional Recipes', 'Cultural Stories'],
      color: 'coral'
    },
    {
      id: 2,
      title: 'Heritage Art Walk',
      category: 'Cultural Immersion',
      duration: '3 hours',
      groupSize: '2-6 people',
      price: 1800,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: Palette,
      description: 'Explore Mumbai\'s vibrant art scene and meet local artists in their studios',
      highlights: ['Artist Studios', 'Gallery Visits', 'Art Workshop'],
      color: 'emerald'
    },
    {
      id: 3,
      title: 'Bollywood Behind Scenes',
      category: 'Entertainment',
      duration: '6 hours',
      groupSize: '2-10 people',
      price: 4200,
      image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: Music,
      description: 'Get exclusive access to film studios and witness movie magic in action',
      highlights: ['Studio Tour', 'Meet Actors', 'Dance Workshop'],
      color: 'royal-purple'
    },
    {
      id: 4,
      title: 'Photography Expedition',
      category: 'Creative Journey',
      duration: '5 hours',
      groupSize: '2-6 people',
      price: 3200,
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: Camera,
      description: 'Capture Mumbai\'s essence with professional photography guidance',
      highlights: ['Pro Tips', 'Hidden Spots', 'Photo Editing'],
      color: 'sunset-orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'coral': 'text-coral bg-coral/10 border-coral/20',
      'emerald': 'text-emerald bg-emerald/10 border-emerald/20',
      'royal-purple': 'text-royal-purple bg-royal-purple/10 border-royal-purple/20',
      'sunset-orange': 'text-sunset-orange bg-sunset-orange/10 border-sunset-orange/20'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  return (
    <section className="py-20 bg-light-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-coral absolute top-16 left-16 w-32 h-32 floating"></div>
        <div className="organic-blob bg-emerald absolute bottom-24 right-24 w-28 h-28 floating-delayed"></div>
        <div className="organic-blob bg-royal-purple absolute top-1/2 left-1/3 w-20 h-20 floating"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="script-accent text-emerald text-xl mb-2 block">Curated</span>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            Local Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in Mumbai's rich culture through carefully crafted experiences 
            designed to create lasting memories
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            const colorClasses = getColorClasses(experience.color);
            
            return (
              <div
                key={experience.id}
                className="card-artistic hover-lift fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Experience Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-dark opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-dark-gray">{experience.category}</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-coral">₹{experience.price.toLocaleString()}</span>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-3 left-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClasses}`}>
                      <Icon size={20} />
                    </div>
                  </div>
                </div>

                {/* Experience Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-card-title artistic-heading text-dark-gray mb-2 group-hover:text-coral transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  {/* Duration & Group Size */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{experience.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-${experience.color}`}></div>
                        <span className="text-xs text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book Button */}
                  <button className="w-full btn-secondary py-3 text-sm group-hover:bg-coral group-hover:text-white group-hover:border-coral transition-all duration-300">
                    Book Experience
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto card-floating">
            <div className="asymmetric-grid items-center">
              <div className="text-left">
                <h3 className="artistic-heading text-2xl text-dark-gray mb-3">
                  Create Your Perfect Mumbai Journey
                </h3>
                <p className="text-gray-600 mb-4">
                  Let our local experts craft a personalized itinerary that matches your interests and creates unforgettable memories.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} className="text-coral" />
                    <span>15+ Unique Locations</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} className="text-emerald" />
                    <span>Expert Local Guides</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <button className="btn-primary px-8 py-4 text-lg hover-lift mb-3">
                  <ArrowRight size={20} className="inline mr-2" />
                  Explore All Experiences
                </button>
                <p className="text-sm text-gray-500">
                  Custom packages available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview;