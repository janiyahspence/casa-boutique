import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Heart,
  Wifi,
  Car,
  Coffee,
  Dumbbell,
  Utensils
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Spa & Wellness', href: '#spa' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const experiences = [
    { name: 'City Tours', href: '#city-tours' },
    { name: 'Cultural Immersion', href: '#culture' },
    { name: 'Food Tours', href: '#food-tours' },
    { name: 'Art Workshops', href: '#workshops' },
    { name: 'Local Markets', href: '#markets' },
    { name: 'Heritage Walks', href: '#heritage' },
  ];

  const amenities = [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Car, name: 'Valet Parking' },
    { icon: Coffee, name: '24/7 Room Service' },
    { icon: Dumbbell, name: 'Fitness Center' },
    { icon: Utensils, name: 'Restaurant & Bar' },
  ];

  return (
    <footer className="bg-deep-black text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-coral absolute top-10 left-10 w-32 h-32"></div>
        <div className="organic-blob bg-emerald absolute bottom-20 right-20 w-24 h-24"></div>
        <div className="organic-blob bg-royal-purple absolute top-1/2 left-1/3 w-16 h-16"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="bg-gradient-sunset py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="artistic-heading text-3xl text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, local insights, and curated experiences
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-charcoal focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-coral px-6 py-3 rounded-full font-semibold hover:bg-cream transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand & Contact */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h2 className="artistic-heading text-3xl text-coral mb-2">
                    Casa
                  </h2>
                  <span className="script-accent text-xl text-emerald">
                    Boutique
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A curated lifestyle experience in the heart of Mumbai, where modern luxury meets authentic Indian culture.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-coral" />
                    <span className="text-gray-300">
                      123 Heritage Lane, Colaba<br />
                      Mumbai, Maharashtra 400001
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-coral" />
                    <span className="text-gray-300">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-coral" />
                    <span className="text-gray-300">hello@casaboutique.in</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-serif text-xl text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-coral transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experiences */}
              <div>
                <h4 className="font-serif text-xl text-white mb-6">Experiences</h4>
                <ul className="space-y-3">
                  {experiences.map((experience) => (
                    <li key={experience.name}>
                      <a
                        href={experience.href}
                        className="text-gray-300 hover:text-emerald transition-colors duration-300"
                      >
                        {experience.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities & Social */}
              <div>
                <h4 className="font-serif text-xl text-white mb-6">Amenities</h4>
                <ul className="space-y-3 mb-8">
                  {amenities.map((amenity) => (
                    <li key={amenity.name} className="flex items-center space-x-3">
                      <amenity.icon size={16} className="text-royal-purple" />
                      <span className="text-gray-300">{amenity.name}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <h5 className="font-semibold text-white mb-4">Follow Us</h5>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-coral rounded-full flex items-center justify-center hover:bg-sunset-orange transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center hover:bg-teal transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-royal-purple rounded-full flex items-center justify-center hover:bg-magenta transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
                <span>© 2024 Casa Boutique. Made with</span>
                <Heart size={16} className="text-coral" />
                <span>in Mumbai</span>
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-coral transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-coral transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-coral transition-colors">
                  Booking Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;