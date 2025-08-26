import React, { useState } from 'react';
import { Calendar, MapPin, Users, Award, Heart, Lightbulb } from 'lucide-react';

const StoryTimeline: React.FC = () => {
  const [activeYear, setActiveYear] = useState(2019);

  const timelineEvents = [
    {
      year: 2019,
      title: 'The Vision',
      subtitle: 'A Dream Takes Shape',
      description: 'Founded by cultural enthusiasts Arjun and Priya Sharma, Casa Boutique began as a vision to create authentic Mumbai experiences for discerning travelers.',
      icon: Lightbulb,
      color: 'coral',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Heritage Building Acquired', 'Design Concept Finalized', 'Local Artist Partnerships']
    },
    {
      year: 2020,
      title: 'The Transformation',
      subtitle: 'Building Dreams',
      description: 'Despite global challenges, we transformed a 1920s heritage building into a modern boutique hotel while preserving its architectural soul and cultural significance.',
      icon: MapPin,
      color: 'emerald',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Heritage Restoration', 'Sustainable Design', 'Local Craftsman Collaboration']
    },
    {
      year: 2021,
      title: 'The Opening',
      subtitle: 'Doors Open Wide',
      description: 'Casa Boutique welcomed its first guests with 15 uniquely designed rooms, each telling a different story of Mumbai\'s rich cultural tapestry.',
      icon: Users,
      color: 'royal-purple',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Grand Opening', 'First 100 Guests', 'Local Media Recognition']
    },
    {
      year: 2022,
      title: 'The Recognition',
      subtitle: 'Excellence Acknowledged',
      description: 'Our commitment to authentic experiences and sustainable tourism earned recognition from leading travel publications and hospitality awards.',
      icon: Award,
      color: 'sunset-orange',
      image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Travel + Leisure Award', '500+ Happy Guests', 'TripAdvisor Excellence']
    },
    {
      year: 2023,
      title: 'The Community',
      subtitle: 'Growing Together',
      description: 'Expanded our local partnerships to include 25+ artisans, restaurants, and cultural guides, creating a true ecosystem of authentic Mumbai experiences.',
      icon: Heart,
      color: 'magenta',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['25+ Local Partners', 'Cultural Programs', 'Sustainability Initiatives']
    },
    {
      year: 2024,
      title: 'The Future',
      subtitle: 'Continuing the Journey',
      description: 'Today, we continue to evolve while staying true to our core mission: creating meaningful connections between travelers and Mumbai\'s authentic culture.',
      icon: Calendar,
      color: 'electric-blue',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Digital Innovation', 'Expanded Experiences', 'Global Recognition']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'coral': 'text-coral bg-coral/10 border-coral',
      'emerald': 'text-emerald bg-emerald/10 border-emerald',
      'royal-purple': 'text-royal-purple bg-royal-purple/10 border-royal-purple',
      'sunset-orange': 'text-sunset-orange bg-sunset-orange/10 border-sunset-orange',
      'magenta': 'text-magenta bg-magenta/10 border-magenta',
      'electric-blue': 'text-electric-blue bg-electric-blue/10 border-electric-blue'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const activeEvent = timelineEvents.find(event => event.year === activeYear) || timelineEvents[0];
  const Icon = activeEvent.icon;

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-royal-purple absolute top-20 right-20 w-40 h-40 floating"></div>
        <div className="organic-blob bg-emerald absolute bottom-32 left-16 w-32 h-32 floating-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="script-accent text-coral text-xl mb-2 block">Journey</span>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            Our Story Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From vision to reality - discover how Casa Boutique evolved into Mumbai's premier cultural destination
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          {timelineEvents.map((event) => {
            const colorClasses = getColorClasses(event.color);
            return (
              <button
                key={event.year}
                onClick={() => setActiveYear(event.year)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                  activeYear === event.year
                    ? `${colorClasses} border-2`
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-coral'
                }`}
              >
                {event.year}
              </button>
            );
          })}
        </div>

        {/* Active Timeline Content */}
        <div className="fade-in-up">
          <div className="asymmetric-grid items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(activeEvent.color)}`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="artistic-heading text-3xl text-dark-gray">
                    {activeEvent.title}
                  </h3>
                  <p className="script-accent text-xl text-coral">
                    {activeEvent.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {activeEvent.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-dark-gray">Key Achievements:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {activeEvent.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-${activeEvent.color}`}></div>
                      <span className="text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className={`px-4 py-2 rounded-full ${getColorClasses(activeEvent.color)}`}>
                  <span className="font-semibold">{activeEvent.year}</span>
                </div>
                <div className="text-sm text-gray-500">
                  {timelineEvents.indexOf(activeEvent) + 1} of {timelineEvents.length}
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="card-floating overflow-hidden">
                <img
                  src={activeEvent.image}
                  alt={activeEvent.title}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{activeEvent.year}</p>
                  <p className="text-sm opacity-90">{activeEvent.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 fade-in-up">
          <div className="flex justify-center">
            <div className="flex space-x-2">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    event.year === activeYear
                      ? `bg-${activeEvent.color}`
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;