import React from 'react';
import { Instagram, Heart, MessageCircle, Share, ExternalLink } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      likes: 234,
      comments: 18,
      caption: 'Golden hour magic at Casa Boutique ✨ #MumbaiVibes #BoutiqueHotel'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      likes: 189,
      comments: 12,
      caption: 'Street food adventures with our guests! 🍛 #LocalFlavors #FoodTour'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      likes: 156,
      comments: 9,
      caption: 'Heritage suite vibes 🏛️ #LuxuryStay #IndianHeritage'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      likes: 298,
      comments: 24,
      caption: 'Local art meets modern comfort 🎨 #ArtisticSpaces #CulturalStay'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      likes: 167,
      comments: 15,
      caption: 'Behind the scenes of Bollywood! 🎬 #BollywoodTour #Mumbai'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      likes: 203,
      comments: 11,
      caption: 'Capturing Mumbai\'s soul 📸 #Photography #StreetArt'
    }
  ];

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-magenta absolute top-20 right-20 w-36 h-36 floating"></div>
        <div className="organic-blob bg-electric-blue absolute bottom-16 left-16 w-24 h-24 floating-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram size={32} className="text-magenta" />
            <span className="script-accent text-magenta text-2xl">Follow Our Journey</span>
          </div>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            @CasaBoutiqueMumbai
          </h2>
          <div className="w-24 h-1 bg-gradient-royal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get inspired by real moments from our guests and discover the magic of Mumbai through their eyes
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className="relative group cursor-pointer hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart size={18} className="fill-current" />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle size={18} />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-xs px-2 line-clamp-2">{post.caption}</p>
                  </div>
                </div>

                {/* Instagram Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center fade-in-up">
          <div className="bg-gradient-royal rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <Instagram size={48} className="mx-auto mb-4" />
            <h3 className="artistic-heading text-2xl mb-3">
              Join Our Community
            </h3>
            <p className="text-white/90 mb-6">
              Follow us for daily inspiration, guest stories, and exclusive behind-the-scenes content from Casa Boutique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-royal-purple px-6 py-3 rounded-full font-semibold hover:bg-cream transition-colors flex items-center justify-center space-x-2">
                <Instagram size={20} />
                <span>Follow @CasaBoutiqueMumbai</span>
                <ExternalLink size={16} />
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-royal-purple transition-colors flex items-center justify-center space-x-2">
                <Share size={20} />
                <span>Share Your Stay</span>
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Tag us in your posts for a chance to be featured!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;