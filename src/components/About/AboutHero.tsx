import React from 'react';
import { MapPin, Heart, Users, Award } from 'lucide-react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Casa Boutique Heritage"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="organic-blob bg-coral/20 absolute top-32 left-16 w-40 h-40 floating"></div>
        <div className="organic-blob bg-emerald/20 absolute bottom-40 right-20 w-32 h-32 floating-delayed"></div>
        <div className="organic-blob bg-royal-purple/20 absolute top-1/2 left-1/3 w-24 h-24 floating"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="asymmetric-grid">
            {/* Left Content */}
            <div className="text-white space-y-8 fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin size={20} className="text-emerald" />
                <span className="text-emerald font-medium">Mumbai's Cultural Heart</span>
              </div>
              
              <h1 className="text-hero artistic-heading mb-6">
                Our <span className="text-coral">Story</span>{' '}
                <span className="script-accent text-emerald block sm:inline">Begins Here</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Born from a passion for authentic experiences and cultural immersion, 
                Casa Boutique represents the perfect harmony between Mumbai's rich heritage 
                and contemporary luxury hospitality.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mb-2">
                    <Heart size={24} className="text-coral" />
                  </div>
                  <p className="text-sm text-white/80">Passion Driven</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mb-2">
                    <Users size={24} className="text-emerald" />
                  </div>
                  <p className="text-sm text-white/80">Community Focused</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-royal-purple/20 rounded-full flex items-center justify-center mb-2">
                    <Award size={24} className="text-royal-purple" />
                  </div>
                  <p className="text-sm text-white/80">Award Winning</p>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Card */}
            <div className="fade-in-up">
              <div className="card-floating max-w-sm ml-auto">
                <div className="text-center mb-6">
                  <h3 className="artistic-heading text-2xl text-dark-gray mb-2">
                    Casa Boutique
                  </h3>
                  <p className="text-gray-600">Since 2019</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-coral">500+</p>
                      <p className="text-sm text-gray-600">Happy Guests</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-emerald">25+</p>
                      <p className="text-sm text-gray-600">Local Partners</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-royal-purple">15+</p>
                      <p className="text-sm text-gray-600">Unique Rooms</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-sunset-orange">4.9</p>
                      <p className="text-sm text-gray-600">Guest Rating</p>
                    </div>
                  </div>

                  <div className="bg-light-gray rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-600 mb-1">Recognized by</p>
                    <p className="font-semibold text-dark-gray">Travel + Leisure India</p>
                    <p className="text-xs text-gray-500">Best Boutique Hotel 2023</p>
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

export default AboutHero;