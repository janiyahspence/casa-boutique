import React, { useState } from 'react';
import { 
  ChefHat, 
  Clock, 
  Users, 
  Star, 
  MapPin, 
  Calendar,
  Utensils,
  Coffee,
  Wine,
  Play
} from 'lucide-react';

const DiningHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredDish = {
    name: 'Mumbai Street Thali',
    description: 'A curated selection of Mumbai\'s iconic street foods reimagined with premium ingredients',
    price: 1200,
    chef: 'Chef Meera Patel',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Casa Boutique Dining ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-dark opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="organic-blob bg-sunset-orange/20 absolute top-32 left-16 w-40 h-40 floating"></div>
        <div className="organic-blob bg-emerald/20 absolute bottom-40 right-20 w-32 h-32 floating-delayed"></div>
        <div className="organic-blob bg-magenta/20 absolute top-1/2 left-1/3 w-24 h-24 floating"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="asymmetric-grid">
            {/* Left Content */}
            <div className="text-white space-y-8 fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat size={20} className="text-sunset-orange" />
                <span className="text-sunset-orange font-medium">Culinary Excellence</span>
              </div>
              
              <h1 className="text-hero artistic-heading mb-6">
                Dining & <span className="text-coral">Culinary</span>{' '}
                <span className="script-accent text-emerald block sm:inline">Experiences</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Embark on a gastronomic journey that celebrates Mumbai's diverse culinary heritage, 
                from street food classics to contemporary Indian cuisine crafted by award-winning chefs.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sunset-orange/20 rounded-full flex items-center justify-center mb-2">
                    <Utensils size={24} className="text-sunset-orange" />
                  </div>
                  <p className="text-sm text-white/80">Fine Dining</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald/20 rounded-full flex items-center justify-center mb-2">
                    <Coffee size={24} className="text-emerald" />
                  </div>
                  <p className="text-sm text-white/80">Café & Lounge</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-magenta/20 rounded-full flex items-center justify-center mb-2">
                    <Wine size={24} className="text-magenta" />
                  </div>
                  <p className="text-sm text-white/80">Craft Bar</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-lg px-8 py-4 hover-lift">
                  <Calendar size={20} className="inline mr-2" />
                  Reserve Table
                </button>
                <button className="btn-secondary text-lg px-8 py-4 hover-lift">
                  <Play size={20} className="inline mr-2" />
                  Kitchen Tour
                </button>
              </div>
            </div>

            {/* Right Content - Featured Dish Card */}
            <div className="fade-in-up">
              <div className="card-floating max-w-sm ml-auto">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={featuredDish.image}
                    alt={featuredDish.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-sunset-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    Chef's Special
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="fill-gold text-gold" />
                      <span className="text-sm font-medium">{featuredDish.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="artistic-heading text-xl text-dark-gray mb-2">
                      {featuredDish.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{featuredDish.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <p className="font-medium text-dark-gray">{featuredDish.chef}</p>
                      <p>Executive Chef</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-coral">₹{featuredDish.price.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">signature dish</p>
                    </div>
                  </div>

                  <button className="w-full btn-primary py-3">
                    <Utensils size={18} className="inline mr-2" />
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mt-16 fade-in-up">
            <div className="card-floating max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 hover:bg-light-gray rounded-lg transition-colors cursor-pointer">
                  <Utensils size={32} className="mx-auto mb-3 text-coral" />
                  <h3 className="font-semibold text-dark-gray mb-2">Restaurant</h3>
                  <p className="text-sm text-gray-600">Contemporary Indian cuisine with Mumbai street food influences</p>
                </div>
                <div className="text-center p-6 hover:bg-light-gray rounded-lg transition-colors cursor-pointer">
                  <Coffee size={32} className="mx-auto mb-3 text-emerald" />
                  <h3 className="font-semibold text-dark-gray mb-2">Café & Lounge</h3>
                  <p className="text-sm text-gray-600">All-day dining with artisanal coffee and light bites</p>
                </div>
                <div className="text-center p-6 hover:bg-light-gray rounded-lg transition-colors cursor-pointer">
                  <Wine size={32} className="mx-auto mb-3 text-royal-purple" />
                  <h3 className="font-semibold text-dark-gray mb-2">Craft Bar</h3>
                  <p className="text-sm text-gray-600">Signature cocktails and curated wine selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningHero;