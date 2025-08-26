import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Car, 
  Plane, 
  Train, 
  Clock,
  Star,
  Coffee,
  Camera,
  Utensils,
  ShoppingBag
} from 'lucide-react';

const LocationMap: React.FC = () => {
  const nearbyAttractions = [
    {
      name: 'Gateway of India',
      distance: '0.5 km',
      walkTime: '6 mins',
      type: 'Historic Monument',
      icon: Camera,
      color: 'coral'
    },
    {
      name: 'Colaba Causeway',
      distance: '0.3 km',
      walkTime: '4 mins',
      type: 'Shopping Street',
      icon: ShoppingBag,
      color: 'emerald'
    },
    {
      name: 'Taj Mahal Palace Hotel',
      distance: '0.4 km',
      walkTime: '5 mins',
      type: 'Historic Hotel',
      icon: Star,
      color: 'royal-purple'
    },
    {
      name: 'Regal Cinema',
      distance: '0.2 km',
      walkTime: '3 mins',
      type: 'Entertainment',
      icon: Camera,
      color: 'sunset-orange'
    },
    {
      name: 'Cafe Mondegar',
      distance: '0.1 km',
      walkTime: '2 mins',
      type: 'Restaurant',
      icon: Coffee,
      color: 'magenta'
    },
    {
      name: 'Leopold Cafe',
      distance: '0.2 km',
      walkTime: '3 mins',
      type: 'Historic Cafe',
      icon: Utensils,
      color: 'electric-blue'
    }
  ];

  const transportOptions = [
    {
      method: 'Mumbai Airport (Domestic)',
      distance: '26 km',
      time: '45-60 mins',
      cost: '₹800-1200',
      icon: Plane,
      color: 'coral'
    },
    {
      method: 'Mumbai Airport (International)',
      distance: '30 km',
      time: '60-75 mins',
      cost: '₹1000-1500',
      icon: Plane,
      color: 'emerald'
    },
    {
      method: 'Chhatrapati Shivaji Terminus',
      distance: '3 km',
      time: '15-20 mins',
      cost: '₹200-400',
      icon: Train,
      color: 'royal-purple'
    },
    {
      method: 'Churchgate Station',
      distance: '2 km',
      time: '10-15 mins',
      cost: '₹150-300',
      icon: Train,
      color: 'sunset-orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'coral': 'text-coral bg-coral/10',
      'emerald': 'text-emerald bg-emerald/10',
      'royal-purple': 'text-royal-purple bg-royal-purple/10',
      'sunset-orange': 'text-sunset-orange bg-sunset-orange/10',
      'magenta': 'text-magenta bg-magenta/10',
      'electric-blue': 'text-electric-blue bg-electric-blue/10'
    };
    return colorMap[color] || colorMap.coral;
  };

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-electric-blue absolute top-20 right-20 w-40 h-40 floating"></div>
        <div className="organic-blob bg-coral absolute bottom-32 left-16 w-32 h-32 floating-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="script-accent text-coral text-xl mb-2 block">Location</span>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            Find Us in Mumbai
          </h2>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Perfectly positioned in Colaba, Mumbai's cultural heart, Casa Boutique offers 
            easy access to the city's most iconic attractions and authentic experiences
          </p>
        </div>

        {/* Map and Address */}
        <div className="asymmetric-grid mb-16 fade-in-up">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="card-floating overflow-hidden">
              <div className="h-96 bg-gradient-ocean relative flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Casa Boutique Location Map"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                    <p className="text-white/90">Click to open in Google Maps</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <Navigation size={16} className="text-coral" />
                    <span className="text-sm font-medium">Get Directions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Details */}
          <div className="space-y-6">
            <div className="card-floating">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-coral" />
                </div>
                <div>
                  <h3 className="artistic-heading text-xl text-dark-gray mb-2">Our Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    123 Heritage Lane, Colaba<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-light-gray rounded-lg">
                  <Clock size={24} className="mx-auto mb-2 text-emerald" />
                  <p className="text-sm text-gray-600">Check-in</p>
                  <p className="font-semibold">3:00 PM</p>
                </div>
                <div className="text-center p-4 bg-light-gray rounded-lg">
                  <Clock size={24} className="mx-auto mb-2 text-royal-purple" />
                  <p className="text-sm text-gray-600">Check-out</p>
                  <p className="font-semibold">12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-royal rounded-lg p-6 text-white">
              <h4 className="font-semibold mb-3">Location Highlights</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Star size={14} />
                  <span>Heart of Mumbai's cultural district</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={14} />
                  <span>Walking distance to major attractions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car size={14} />
                  <span>Easy access to transport hubs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee size={14} />
                  <span>Surrounded by cafes and restaurants</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-16 fade-in-up">
          <h3 className="artistic-heading text-2xl text-dark-gray text-center mb-12">
            Nearby Attractions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyAttractions.map((attraction, index) => {
              const Icon = attraction.icon;
              const colorClasses = getColorClasses(attraction.color);
              
              return (
                <div
                  key={index}
                  className="card-floating hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClasses}`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark-gray mb-1">{attraction.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{attraction.type}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin size={12} />
                          <span>{attraction.distance}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{attraction.walkTime} walk</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transportation */}
        <div className="fade-in-up">
          <h3 className="artistic-heading text-2xl text-dark-gray text-center mb-12">
            How to Reach Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportOptions.map((transport, index) => {
              const Icon = transport.icon;
              const colorClasses = getColorClasses(transport.color);
              
              return (
                <div
                  key={index}
                  className="card-floating hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${colorClasses}`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark-gray mb-2">{transport.method}</h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Distance</p>
                          <p className="font-medium">{transport.distance}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Time</p>
                          <p className="font-medium">{transport.time}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Cost</p>
                          <p className="font-medium">{transport.cost}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Airport Transfer CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-sunset rounded-2xl p-8 text-white max-w-3xl mx-auto">
              <Car size={48} className="mx-auto mb-4" />
              <h3 className="artistic-heading text-2xl mb-4">
                Complimentary Airport Transfer
              </h3>
              <p className="text-white/90 mb-6">
                Enjoy hassle-free arrival with our complimentary airport pickup service 
                for stays of 3 nights or more. Book in advance to secure your transfer.
              </p>
              <button className="bg-white text-sunset-orange px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors">
                <Plane size={20} className="inline mr-2" />
                Request Airport Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;