import React from 'react';
import { 
  Award, 
  Star, 
  Clock, 
  Users, 
  ChefHat,
  BookOpen,
  Tv,
  Globe,
  Heart,
  Utensils
} from 'lucide-react';

const ChefProfile: React.FC = () => {
  const chef = {
    name: 'Kiara Sharma',
    title: 'Executive Chef',
    experience: '12+ years',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    bio: 'Chef Kiara Sharma brings over 12 years of culinary excellence to Casa Boutique, specializing in contemporary Indian cuisine that honors traditional flavors while embracing modern techniques. Her passion for Mumbai\'s street food culture and commitment to local ingredients has earned her recognition as one of India\'s most innovative chefs.',
    philosophy: 'Food is the fastest way to understand a culture. Every dish should tell a story of its origin while creating new memories for those who taste it.',
    specialties: [
      'Contemporary Indian Cuisine',
      'Mumbai Street Food Elevation',
      'Molecular Gastronomy',
      'Farm-to-Table Cooking',
      'Spice Blending Mastery',
      'Vegetarian Innovation'
    ],
    achievements: [
      {
        title: 'Best Chef Mumbai',
        organization: 'Culinary Arts India',
        year: '2023',
        icon: Award
      },
      {
        title: 'Rising Star Chef',
        organization: 'Food & Wine India',
        year: '2022',
        icon: Star
      },
      {
        title: 'Cookbook Author',
        organization: '"Mumbai Flavors"',
        year: '2021',
        icon: BookOpen
      },
      {
        title: 'TV Show Host',
        organization: 'Cooking Channel',
        year: '2020',
        icon: Tv
      }
    ],
    signature_dishes: [
      {
        name: 'Mumbai Street Thali',
        description: 'A curated selection of Mumbai\'s iconic street foods',
        price: 1200,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        name: 'Coastal Curry Symphony',
        description: 'Three regional curries from Mumbai\'s coastal heritage',
        price: 950,
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        name: 'Heritage Biryani',
        description: 'Slow-cooked basmati rice with aromatic spices',
        price: 850,
        image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      }
    ]
  };

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-sunset-orange absolute top-20 right-20 w-40 h-40 floating"></div>
        <div className="organic-blob bg-emerald absolute bottom-32 left-16 w-32 h-32 floating-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="script-accent text-coral text-xl mb-2 block">Culinary Artist</span>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            Meet Our Executive Chef
          </h2>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto mb-6"></div>
        </div>

        {/* Chef Profile */}
        <div className="asymmetric-grid items-center mb-20 fade-in-up">
          {/* Chef Image & Basic Info */}
          <div className="relative">
            <div className="card-floating overflow-hidden">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-dark opacity-20"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="artistic-heading text-2xl mb-1">{chef.name}</h3>
                <p className="text-white/90">{chef.title}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <ChefHat size={16} />
                  <span className="text-sm">{chef.experience} Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chef Details */}
          <div className="space-y-6">
            <div>
              <h3 className="artistic-heading text-2xl text-dark-gray mb-4">
                Culinary Philosophy
              </h3>
              <div className="bg-light-gray rounded-lg p-6 mb-6">
                <p className="script-accent text-lg text-coral italic mb-4">
                  "{chef.philosophy}"
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">{chef.bio}</p>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="font-semibold text-dark-gray mb-3">Culinary Specialties</h4>
              <div className="grid grid-cols-2 gap-3">
                {chef.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-coral"></div>
                    <span className="text-gray-600 text-sm">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-light-gray rounded-lg">
                <Clock size={24} className="mx-auto mb-2 text-coral" />
                <p className="text-sm text-gray-600">Experience</p>
                <p className="font-semibold">{chef.experience}</p>
              </div>
              <div className="text-center p-4 bg-light-gray rounded-lg">
                <Utensils size={24} className="mx-auto mb-2 text-emerald" />
                <p className="text-sm text-gray-600">Signature Dishes</p>
                <p className="font-semibold">15+</p>
              </div>
              <div className="text-center p-4 bg-light-gray rounded-lg">
                <Star size={24} className="mx-auto mb-2 text-royal-purple" />
                <p className="text-sm text-gray-600">Awards</p>
                <p className="font-semibold">8+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20 fade-in-up">
          <h3 className="artistic-heading text-2xl text-dark-gray text-center mb-12">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chef.achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="card-floating text-center hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-coral" />
                  </div>
                  <h4 className="font-semibold text-dark-gray mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm mb-1">{achievement.organization}</p>
                  <p className="text-coral font-medium">{achievement.year}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Signature Dishes */}
        <div className="fade-in-up">
          <h3 className="artistic-heading text-2xl text-dark-gray text-center mb-12">
            Chef's Signature Creations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chef.signature_dishes.map((dish, index) => (
              <div
                key={index}
                className="card-floating hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3 bg-coral text-white px-3 py-1 rounded-full text-sm font-medium">
                    Signature
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <p className="text-sm font-bold text-coral">₹{dish.price}</p>
                  </div>
                </div>
                <div>
                  <h4 className="artistic-heading text-lg text-dark-gray mb-2 group-hover:text-coral transition-colors">
                    {dish.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chef Experience CTA */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-ocean rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <Users size={48} className="mx-auto mb-4" />
            <h3 className="artistic-heading text-3xl mb-4">
              Private Chef Experience
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Book an exclusive cooking session with Chef Meera. Learn the secrets behind her signature dishes 
              and discover the art of contemporary Indian cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-electric-blue px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors">
                <ChefHat size={20} className="inline mr-2" />
                Book Cooking Class with Chef Kiara - ₹3,500
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-electric-blue transition-colors">
                <Heart size={20} className="inline mr-2" />
                Meet the Chef
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefProfile;