import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Car, Plane } from 'lucide-react';

const ContactHero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Casa Boutique Location"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="organic-blob bg-electric-blue/20 absolute top-32 left-16 w-40 h-40 floating"></div>
        <div className="organic-blob bg-emerald/20 absolute bottom-40 right-20 w-32 h-32 floating-delayed"></div>
        <div className="organic-blob bg-coral/20 absolute top-1/2 left-1/3 w-24 h-24 floating"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="asymmetric-grid">
            {/* Left Content */}
            <div className="text-white space-y-8 fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin size={20} className="text-electric-blue" />
                <span className="text-electric-blue font-medium">Mumbai, India</span>
              </div>
              
              <h1 className="text-hero artistic-heading mb-6">
                Get in <span className="text-coral">Touch</span>{' '}
                <span className="script-accent text-emerald block sm:inline">& Visit Us</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Located in the heart of Mumbai's cultural district, Casa Boutique is easily accessible 
                and surrounded by the city's most vibrant attractions, galleries, and authentic experiences.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mb-2">
                    <Phone size={24} className="text-electric-blue" />
                  </div>
                  <p className="text-sm text-white/80">24/7 Support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mb-2">
                    <Mail size={24} className="text-emerald" />
                  </div>
                  <p className="text-sm text-white/80">Quick Response</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mb-2">
                    <MapPin size={24} className="text-coral" />
                  </div>
                  <p className="text-sm text-white/80">Prime Location</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-lg px-8 py-4 hover-lift">
                  <Navigation size={20} className="inline mr-2" />
                  Get Directions
                </button>
                <button className="btn-secondary text-lg px-8 py-4 hover-lift">
                  <Phone size={20} className="inline mr-2" />
                  Call Now
                </button>
              </div>
            </div>

            {/* Right Content - Quick Contact Card */}
            <div className="fade-in-up">
              <div className="card-floating max-w-sm ml-auto">
                <div className="text-center mb-6">
                  <h3 className="artistic-heading text-2xl text-dark-gray mb-2">
                    Quick Contact
                  </h3>
                  <p className="text-gray-600">We're here to help</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-light-gray rounded-lg">
                      <Phone size={20} className="text-coral" />
                      <div>
                        <p className="font-semibold text-dark-gray">+91 98765 43210</p>
                        <p className="text-sm text-gray-600">24/7 Reception</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-light-gray rounded-lg">
                      <Mail size={20} className="text-emerald" />
                      <div>
                        <p className="font-semibold text-dark-gray">hello@casaboutique.in</p>
                        <p className="text-sm text-gray-600">General Inquiries</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-light-gray rounded-lg">
                      <Clock size={20} className="text-royal-purple" />
                      <div>
                        <p className="font-semibold text-dark-gray">Check-in: 3:00 PM</p>
                        <p className="text-sm text-gray-600">Check-out: 12:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-ocean rounded-lg p-4 text-white text-center">
                    <p className="text-sm mb-1">Average Response Time</p>
                    <p className="text-2xl font-bold">{'<'} 15 minutes</p>
                    <p className="text-xs text-white/70">During business hours</p>
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

export default ContactHero;