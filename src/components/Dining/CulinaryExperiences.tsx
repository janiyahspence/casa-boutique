import React from 'react';
import { 
  ChefHat, 
  Clock, 
  Users, 
  Star, 
  Calendar,
  Utensils,
  Coffee,
  Wine,
  Leaf,
  Globe,
  Camera,
  Heart
} from 'lucide-react';

const CulinaryExperiences: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Mumbai Street Food Masterclass',
      category: 'Cooking Class',
      description: 'Learn to create Mumbai\'s iconic street foods with Chef Kiara, from vada pav to pani puri',
      duration: '3 hours',
      groupSize: '2-8 people',
      price: 2500,
      originalPrice: 3000,
      rating: 4.9,
      reviews: 67,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: ['Hands-on Cooking', 'Recipe Cards', 'Full Meal', 'Chef Interaction'],
      difficulty: 'Beginner',
      icon: ChefHat,
      color: 'coral'
    },
    {
      id: 2,
      title: 'Spice Blending Workshop',
      category: 'Workshop',
      description: 'Discover the art of Indian spice blending and create your own signature masala blends',
      duration: '2 hours',
      groupSize: '2-6 people',
      price: 1800,
      originalPrice: 2200,
      rating: 4.8,
      reviews: 43,
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: ['Spice Education', 'Blending Session', 'Take-home Spices', 'Tasting'],
      difficulty: 'Beginner',
      icon: Leaf,
      color: 'emerald'
    },
    {
      id: 3,
      title: 'Wine & Dine Pairing',
      category: 'Tasting',
      description: 'Curated wine pairing experience with Chef\'s signature dishes and sommelier guidance',
      duration: '2.5 hours',
      groupSize: '2-12 people',
      price: 3200,
      originalPrice: 3800,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: ['5 Wine Tastings', '5 Course Meal', 'Sommelier Guide', 'Pairing Notes'],
      difficulty: 'Intermediate',
      icon: Wine,
      color: 'royal-purple'
    },
    {
      id: 4,
      title: 'Farm-to-Table Experience',
      category: 'Experience',
      description: 'Visit local organic farms, harvest ingredients, and cook a fresh meal with the chef',
      duration: '6 hours',
      groupSize: '2-10 people',
      price: 4500,
      originalPrice: 5200,
      rating: 4.8,
      reviews: 34,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: ['Farm Visit', 'Harvesting', 'Cooking Session', 'Transportation'],
      difficulty: 'Moderate',
      icon: Globe,
      color: 'sunset-orange'
    },
    {
      id: 5,
      title: 'Food Photography Workshop',
      category: 'Creative',
      description: 'Learn professional food photography techniques while styling and shooting gourmet dishes',
      duration: '4 hours',
      groupSize: '2-6 people',
      price: 3500,
      originalPrice: 4000,
      rating: 4.7,
      reviews: 28,
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: ['Photography Tips', 'Styling Session', 'Equipment Use', 'Digital Photos'],
      difficulty: 'Intermediate',
      icon: Camera,
      color: 'magenta'
    },
    {
      id: 6,
      title: 'Private Chef\'s Table',
      category: 'Exclusive',
      description: 'Intimate dining experience at the chef\'s table with personalized menu and wine pairing',
      duration: '3 hours',
      groupSize: '2-6 people',
      price: 5500,
      originalPrice: 6500,
      rating: 5.0,
      reviews: 15,
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: ['7 Course Menu', 'Wine Pairing', 'Chef Interaction', 'Recipe Cards'],
      difficulty: 'Exclusive',
      icon: Star,
      color: 'electric-blue'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-emerald bg-emerald/10';
      case 'Intermediate': return 'text-sunset-orange bg-sunset-orange/10';
      case 'Moderate': return 'text-coral bg-coral/10';
      case 'Exclusive': return 'text-royal-purple bg-royal-purple/10';
      default: return 'text-emerald bg-emerald/10';
    }
  };

  const getCategoryColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'coral': 'bg-coral',
      'emerald': 'bg-emerald',
      'royal-purple': 'bg-royal-purple',
      'sunset-orange': 'bg-sunset-orange',
      'magenta': 'bg-magenta',
      'electric-blue': 'bg-electric-blue'
    };
    return colorMap[color] || 'bg-coral';
  };

  return (
    <section className="py-20 bg-light-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-coral absolute top-16 left-16 w-36 h-36 floating"></div>
        <div className="organic-blob bg-emerald absolute bottom-24 right-24 w-28 h-28 floating-delayed"></div>
        <div className="organic-blob bg-royal-purple absolute top-1/2 left-1/2 w-20 h-20 floating"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="script-accent text-emerald text-xl mb-2 block">Learn & Taste</span>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            Culinary Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in Mumbai's culinary culture through hands-on cooking classes, 
            wine tastings, and exclusive dining experiences with our award-winning chef
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            const categoryColor = getCategoryColor(experience.color);
            
            return (
              <div
                key={experience.id}
                className="card-floating hover-lift fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Experience Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-dark-gray">{experience.category}</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 line-through">₹{experience.originalPrice.toLocaleString()}</p>
                      <p className="text-sm font-bold text-coral">₹{experience.price.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-3 left-3">
                    <div className={`w-10 h-10 ${categoryColor} rounded-full flex items-center justify-center text-white`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="fill-gold text-gold" />
                      <span className="text-sm font-medium">{experience.rating}</span>
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
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(experience.difficulty)}`}>
                      {experience.difficulty}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {experience.description}
                  </p>

                  {/* Includes */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-dark-gray">Includes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.includes.slice(0, 3).map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="bg-light-gray text-dark-gray px-2 py-1 rounded-full text-xs"
                        >
                          {item}
                        </span>
                      ))}
                      {experience.includes.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{experience.includes.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Book Button */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <span>{experience.reviews} reviews</span>
                    </div>
                    <button className="bg-coral text-white px-6 py-2 rounded-full font-semibold hover:bg-sunset-orange transition-colors flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-royal rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <div className="asymmetric-grid items-center">
              <div className="text-left">
                <h3 className="artistic-heading text-2xl mb-3">
                  Create Your Culinary Journey
                </h3>
                <p className="text-white/90 mb-4">
                  Can't decide? Let our culinary team create a personalized food experience 
                  tailored to your tastes, dietary preferences, and interests.
                </p>
                <div className="flex items-center space-x-4 text-sm text-white/80">
                  <div className="flex items-center space-x-1">
                    <ChefHat size={16} />
                    <span>Expert Guidance</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart size={16} />
                    <span>Personalized Menu</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <button className="bg-white text-royal-purple px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors mb-3">
                  <Utensils size={20} className="inline mr-2" />
                  Custom Culinary Experience
                </button>
                <p className="text-sm text-white/70">
                  Starting from ₹2,500 per person
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryExperiences;