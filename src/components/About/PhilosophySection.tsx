import React from 'react';
import { Heart, Users, Leaf, Star, Globe, Palette } from 'lucide-react';

const PhilosophySection: React.FC = () => {
  const philosophies = [
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'We believe travel should touch your soul. Every experience we curate connects you with the real Mumbai - its people, traditions, and hidden stories.',
      color: 'coral',
      stats: { number: '25+', label: 'Local Partners' }
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our success is measured by the positive impact we create in local communities. We partner with artisans, guides, and businesses to ensure tourism benefits everyone.',
      color: 'emerald',
      stats: { number: '100+', label: 'Local Jobs Created' }
    },
    {
      icon: Leaf,
      title: 'Sustainable Tourism',
      description: 'Responsible travel is the only way forward. We implement eco-friendly practices and support conservation efforts to preserve Mumbai\'s heritage for future generations.',
      color: 'royal-purple',
      stats: { number: '50%', label: 'Carbon Reduction' }
    },
    {
      icon: Star,
      title: 'Excellence in Service',
      description: 'Luxury isn\'t about opulence - it\'s about thoughtful details, personalized attention, and creating moments that exceed expectations.',
      color: 'sunset-orange',
      stats: { number: '4.9/5', label: 'Guest Rating' }
    },
    {
      icon: Globe,
      title: 'Cultural Bridge',
      description: 'We serve as a bridge between cultures, helping international guests understand and appreciate Indian traditions while sharing global perspectives with our local community.',
      color: 'magenta',
      stats: { number: '40+', label: 'Countries Served' }
    },
    {
      icon: Palette,
      title: 'Artistic Expression',
      description: 'Art is the language of the soul. Our spaces showcase local artists and craftsmen, turning every corner into a gallery that celebrates Mumbai\'s creative spirit.',
      color: 'electric-blue',
      stats: { number: '15+', label: 'Featured Artists' }
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'coral': 'text-coral bg-coral/10 border-coral/20',
      'emerald': 'text-emerald bg-emerald/10 border-emerald/20',
      'royal-purple': 'text-royal-purple bg-royal-purple/10 border-royal-purple/20',
      'sunset-orange': 'text-sunset-orange bg-sunset-orange/10 border-sunset-orange/20',
      'magenta': 'text-magenta bg-magenta/10 border-magenta/20',
      'electric-blue': 'text-electric-blue bg-electric-blue/10 border-electric-blue/20'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-magenta absolute top-20 right-20 w-40 h-40 floating"></div>
        <div className="organic-blob bg-electric-blue absolute bottom-32 left-16 w-32 h-32 floating-delayed"></div>
        <div className="organic-blob bg-coral absolute top-1/2 left-1/2 w-24 h-24 floating"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="script-accent text-royal-purple text-xl mb-2 block">Beliefs</span>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            Our Philosophy
          </h2>
          <div className="w-24 h-1 bg-gradient-royal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The core values and beliefs that guide everything we do at Casa Boutique, 
            shaping every guest experience and community interaction
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => {
            const Icon = philosophy.icon;
            const colorClasses = getColorClasses(philosophy.color);
            
            return (
              <div
                key={index}
                className="card-artistic hover-lift fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon & Title */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colorClasses} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-card-title artistic-heading text-dark-gray mb-2 group-hover:text-coral transition-colors">
                      {philosophy.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {philosophy.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className={`text-2xl font-bold text-${philosophy.color}`}>
                      {philosophy.stats.number}
                    </p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {philosophy.stats.label}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClasses} opacity-20`}>
                    <Icon size={20} />
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
              Experience Our Philosophy
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              These aren't just words on a page - they're the foundation of every interaction, 
              every experience, and every moment you'll have at Casa Boutique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-royal-purple px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors">
                Book Your Experience
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-royal-purple transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;