import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Camera, 
  Star,
  MapPin,
  Calendar,
  Users,
  Award,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const GuestMoments: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Moments', count: 18 },
    { id: 'celebrations', label: 'Celebrations', count: 6 },
    { id: 'experiences', label: 'Experiences', count: 5 },
    { id: 'dining', label: 'Dining', count: 4 },
    { id: 'rooms', label: 'Room Stays', count: 3 }
  ];

  const guestMoments = [
    {
      id: 1,
      guest: {
        name: 'Priya & Arjun',
        location: 'Delhi, India',
        avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        verified: true
      },
      category: 'celebrations',
      occasion: 'Anniversary Celebration',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      caption: 'Our 5th anniversary at Casa Boutique was absolutely magical! The Heritage Suite was decorated beautifully, and the staff made us feel like royalty. Thank you for making our special day unforgettable! 💕',
      likes: 234,
      comments: 18,
      shares: 12,
      rating: 5,
      tags: ['#Anniversary', '#Heritage Suite', '#Mumbai', '#CasaBoutique'],
      featured: true
    },
    {
      id: 2,
      guest: {
        name: 'Sarah Johnson',
        location: 'London, UK',
        avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        verified: true
      },
      category: 'experiences',
      occasion: 'Street Food Tour',
      date: '2024-01-12',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      caption: 'The Mumbai Street Food Safari was incredible! Our guide Ravi was so knowledgeable and passionate. I tried foods I never would have discovered on my own. This is authentic Mumbai at its finest! 🍛',
      likes: 189,
      comments: 24,
      shares: 8,
      rating: 5,
      tags: ['#StreetFood', '#Mumbai', '#Authentic', '#FoodTour'],
      featured: false
    },
    {
      id: 3,
      guest: {
        name: 'Rajesh & Family',
        location: 'Bangalore, India',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        verified: true
      },
      category: 'dining',
      occasion: 'Family Dinner',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      caption: 'Chef Meera\'s tasting menu was a culinary journey through India! Each dish told a story, and the presentation was artwork. Our kids loved the interactive elements. Highly recommend! 👨‍👩‍👧‍👦',
      likes: 156,
      comments: 15,
      shares: 6,
      rating: 5,
      tags: ['#ChefsTasting', '#FamilyDining', '#IndianCuisine'],
      featured: true
    },
    {
      id: 4,
      guest: {
        name: 'Emma & David',
        location: 'Sydney, Australia',
        avatar: 'https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        verified: true
      },
      category: 'experiences',
      occasion: 'Art Walk Experience',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      caption: 'The Heritage Art Walk opened our eyes to Mumbai\'s incredible artistic community. Meeting local artists in their studios was inspiring. Priya\'s curation of this experience is phenomenal! 🎨',
      likes: 142,
      comments: 11,
      shares: 9,
      rating: 5,
      tags: ['#ArtWalk', '#LocalArtists', '#Culture', '#Mumbai'],
      featured: false
    },
    {
      id: 5,
      guest: {
        name: 'Michael Chen',
        location: 'Singapore',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        verified: true
      },
      category: 'rooms',
      occasion: 'Business Trip',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      caption: 'The Artist\'s Loft was perfect for my extended business stay. The creative atmosphere actually inspired my work! The natural light and art collection made every morning special. 💼✨',
      likes: 98,
      comments: 7,
      shares: 4,
      rating: 5,
      tags: ['#BusinessTravel', '#ArtistsLoft', '#Inspiration'],
      featured: false
    },
    {
      id: 6,
      guest: {
        name: 'Lisa & Mark',
        location: 'Toronto, Canada',
        avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        verified: true
      },
      category: 'experiences',
      occasion: 'Bollywood Tour',
      date: '2024-01-03',
      image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      caption: 'Behind the scenes at Bollywood studios was a dream come true! We met actors, learned dance moves, and even got to watch a live shoot. Casa Boutique\'s connections are amazing! 🎬',
      likes: 267,
      comments: 32,
      shares: 15,
      rating: 5,
      tags: ['#Bollywood', '#MovieMagic', '#Mumbai', '#Dreams'],
      featured: true
    },
    {
      id: 7,
      guest: {
        name: 'Ananya Gupta',
        location: 'Mumbai, India',
        avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        verified: true
      },
      category: 'celebrations',
      occasion: 'Birthday Celebration',
      date: '2024-01-01',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      caption: 'Celebrated my 30th birthday at Casa Boutique and it was perfect! The sunset terrace dinner, the personalized cake, and the surprise cultural performance - every detail was thoughtful! 🎂',
      likes: 178,
      comments: 21,
      shares: 7,
      rating: 5,
      tags: ['#Birthday', '#Celebration', '#SunsetDining', '#30th'],
      featured: false
    },
    {
      id: 8,
      guest: {
        name: 'James Wilson',
        location: 'New York, USA',
        avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        verified: true
      },
      category: 'dining',
      occasion: 'Cooking Class',
      date: '2023-12-28',
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      caption: 'Chef Meera\'s cooking class was incredible! Learning to make authentic Mumbai street food from a master chef was a highlight of my India trip. Taking these recipes home! 👨‍🍳',
      likes: 134,
      comments: 16,
      shares: 11,
      rating: 5,
      tags: ['#CookingClass', '#ChefMeera', '#StreetFood', '#Learning'],
      featured: false
    },
    {
      id: 9,
      guest: {
        name: 'Sophie & Tom',
        location: 'Paris, France',
        avatar: 'https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        verified: true
      },
      category: 'rooms',
      occasion: 'Honeymoon',
      date: '2023-12-25',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      caption: 'Our honeymoon at Casa Boutique was like a fairy tale! The Cultural Deluxe room was beautifully decorated, and the staff surprised us with champagne and rose petals. Merci beaucoup! 🥂💐',
      likes: 298,
      comments: 28,
      shares: 19,
      rating: 5,
      tags: ['#Honeymoon', '#Romance', '#CulturalDeluxe', '#Fairytale'],
      featured: true
    }
  ];

  const filteredMoments = activeFilter === 'all' 
    ? guestMoments 
    : guestMoments.filter(moment => moment.category === activeFilter);

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-coral absolute top-16 left-16 w-36 h-36 floating"></div>
        <div className="organic-blob bg-emerald absolute bottom-24 right-24 w-28 h-28 floating-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="script-accent text-coral text-xl mb-2 block">Shared</span>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            Guest Moments
          </h2>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories and authentic moments shared by our guests, showcasing the magic of 
            Casa Boutique through their eyes and experiences
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                activeFilter === filter.id
                  ? 'bg-coral text-white'
                  : 'bg-white text-dark-gray border-2 border-gray-200 hover:border-coral'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Guest Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMoments.map((moment, index) => (
            <div
              key={moment.id}
              className="card-floating hover-lift fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Guest Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={moment.image}
                  alt={moment.occasion}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Featured Badge */}
                {moment.featured && (
                  <div className="absolute top-3 left-3 bg-coral text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Award size={14} />
                    <span>Featured</span>
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    {[...Array(moment.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                {/* Occasion Badge */}
                <div className="absolute bottom-3 left-3 bg-emerald text-white px-3 py-1 rounded-full text-sm font-medium">
                  {moment.occasion}
                </div>
              </div>

              {/* Guest Info & Content */}
              <div className="space-y-4">
                {/* Guest Profile */}
                <div className="flex items-center space-x-3">
                  <img
                    src={moment.guest.avatar}
                    alt={moment.guest.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-dark-gray">{moment.guest.name}</h4>
                      {moment.guest.verified && (
                        <div className="w-4 h-4 bg-electric-blue rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin size={12} />
                      <span>{moment.guest.location}</span>
                      <span>•</span>
                      <Calendar size={12} />
                      <span>{moment.date}</span>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {moment.caption}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {moment.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-light-gray text-coral px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {moment.tags.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{moment.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Heart size={16} className="text-coral" />
                      <span className="text-sm">{moment.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <MessageCircle size={16} />
                      <span className="text-sm">{moment.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Share2 size={16} />
                      <span className="text-sm">{moment.shares}</span>
                    </div>
                  </div>
                  <button className="text-coral hover:text-sunset-orange transition-colors text-sm font-medium">
                    View Full Story
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Moment CTA */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-ocean rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <Camera size={48} className="mx-auto mb-4" />
            <h3 className="artistic-heading text-3xl mb-4">
              Share Your Casa Boutique Moment
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We love seeing your experiences! Share your photos and stories with us using 
              #CasaBoutiqueMoments and get featured in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-electric-blue px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors flex items-center justify-center space-x-2">
                <Instagram size={20} />
                <span>Share on Instagram</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-electric-blue transition-colors flex items-center justify-center space-x-2">
                <Camera size={20} />
                <span>Upload Your Photo</span>
              </button>
            </div>
            <div className="flex items-center justify-center space-x-6 mt-6 text-white/70">
              <div className="flex items-center space-x-2">
                <Instagram size={16} />
                <span className="text-sm">#CasaBoutiqueMoments</span>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook size={16} />
                <span className="text-sm">@CasaBoutiqueMumbai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Twitter size={16} />
                <span className="text-sm">@CasaBoutique</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestMoments;