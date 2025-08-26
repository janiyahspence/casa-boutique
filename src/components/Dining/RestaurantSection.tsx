import React, { useState } from 'react';
import { 
  Star, 
  Clock, 
  Users, 
  ChefHat, 
  Leaf, 
  Flame,
  Award,
  Heart,
  Calendar,
  MapPin
} from 'lucide-react';

const RestaurantSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('signature');

  const menuCategories = [
    { id: 'signature', label: 'Signature Dishes', icon: Award, color: 'coral' },
    { id: 'street', label: 'Mumbai Street', icon: MapPin, color: 'emerald' },
    { id: 'contemporary', label: 'Contemporary', icon: ChefHat, color: 'royal-purple' },
    { id: 'vegetarian', label: 'Vegetarian', icon: Leaf, color: 'sunset-orange' }
  ];

  const menuItems = {
    signature: [
      {
        id: 1,
        name: 'Mumbai Street Thali',
        description: 'A curated selection of Mumbai\'s iconic street foods reimagined with premium ingredients',
        price: 1200,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        chef: 'Chef Meera Patel',
        rating: 4.9,
        spicy: 2,
        vegetarian: true,
        popular: true
      },
      {
        id: 2,
        name: 'Coastal Curry Symphony',
        description: 'Three regional curries from Mumbai\'s coastal heritage served with artisanal breads',
        price: 950,
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        chef: 'Chef Meera Patel',
        rating: 4.8,
        spicy: 3,
        vegetarian: false,
        popular: false
      },
      {
        id: 3,
        name: 'Heritage Biryani',
        description: 'Slow-cooked basmati rice with aromatic spices and tender meat, served in traditional dum style',
        price: 850,
        image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        chef: 'Chef Meera Patel',
        rating: 4.9,
        spicy: 2,
        vegetarian: false,
        popular: true
      }
    ],
    street: [
      {
        id: 4,
        name: 'Elevated Vada Pav',
        description: 'Mumbai\'s beloved street snack elevated with artisanal buns and gourmet chutneys',
        price: 320,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        chef: 'Chef Meera Patel',
        rating: 4.7,
        spicy: 2,
        vegetarian: true,
        popular: true
      },
      {
        id: 5,
        name: 'Pani Puri Experience',
        description: 'Interactive pani puri station with five flavored waters and premium fillings',
        price: 280,
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        chef: 'Chef Meera Patel',
        rating: 4.8,
        spicy: 3,
        vegetarian: true,
        popular: false
      }
    ],
    contemporary: [
      {
        id: 6,
        name: 'Deconstructed Dhokla',
        description: 'Modern interpretation of Gujarat\'s classic steamed cake with molecular gastronomy',
        price: 650,
        image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        chef: 'Chef Meera Patel',
        rating: 4.6,
        spicy: 1,
        vegetarian: true,
        popular: false
      }
    ],
    vegetarian: [
      {
        id: 7,
        name: 'Garden Fresh Thali',
        description: 'Seasonal vegetables prepared in traditional styles with organic ingredients',
        price: 750,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        chef: 'Chef Meera Patel',
        rating: 4.8,
        spicy: 2,
        vegetarian: true,
        popular: true
      }
    ]
  };

  const getSpicyIndicator = (level: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Flame 
        key={i} 
        size={12} 
        className={i < level ? 'text-coral fill-current' : 'text-gray-300'} 
      />
    ));
  };

  const getCategoryColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'coral': 'bg-coral text-white',
      'emerald': 'bg-emerald text-white',
      'royal-purple': 'bg-royal-purple text-white',
      'sunset-orange': 'bg-sunset-orange text-white'
    };
    return colorMap[color] || 'bg-coral text-white';
  };

  return (
    <section className="py-20 bg-light-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-coral absolute top-16 left-16 w-36 h-36 floating"></div>
        <div className="organic-blob bg-emerald absolute bottom-24 right-24 w-28 h-28 floating-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="script-accent text-sunset-orange text-xl mb-2 block">Flavors</span>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            Restaurant Menu
          </h2>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contemporary Indian cuisine that celebrates Mumbai's diverse culinary heritage, 
            from street food classics to innovative interpretations by our award-winning chef
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          {menuCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                  activeCategory === category.id
                    ? getCategoryColor(category.color)
                    : 'bg-white text-dark-gray border-2 border-gray-200 hover:border-coral'
                }`}
              >
                <Icon size={18} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <div
              key={item.id}
              className="card-floating hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Dish Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-coral text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}

                {/* Vegetarian Badge */}
                {item.vegetarian && (
                  <div className="absolute top-3 right-3 bg-emerald text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Leaf size={14} />
                    <span>Veg</span>
                  </div>
                )}

                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="fill-gold text-gold" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
              </div>

              {/* Dish Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-card-title artistic-heading text-dark-gray mb-1 group-hover:text-coral transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.chef}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-coral">₹{item.price.toLocaleString()}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Spicy Level & Actions */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      {getSpicyIndicator(item.spicy)}
                    </div>
                    <span className="text-xs text-gray-500">Spice Level</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 bg-coral/10 rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors">
                      <Heart size={14} />
                    </button>
                    <button className="bg-coral text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-sunset-orange transition-colors">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chef's Special CTA */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-sunset rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <ChefHat size={48} className="mx-auto mb-4" />
            <h3 className="artistic-heading text-3xl mb-4">
              Chef's Tasting Menu
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Experience a curated 7-course journey through Mumbai's culinary landscape, 
              personally crafted by Executive Chef Meera Patel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sunset-orange px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors">
                <Calendar size={20} className="inline mr-2" />
                Reserve Tasting Menu - ₹2,500
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sunset-orange transition-colors">
                <Users size={20} className="inline mr-2" />
                Private Chef Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;