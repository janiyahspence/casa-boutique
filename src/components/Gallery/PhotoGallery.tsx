import React, { useState } from 'react';
import { 
  Camera, 
  Eye, 
  Heart, 
  Share2, 
  Download, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Maximize,
  Award
} from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: 'all', label: 'All Photos', count: 24 },
    { id: 'rooms', label: 'Rooms & Suites', count: 8 },
    { id: 'dining', label: 'Dining', count: 6 },
    { id: 'experiences', label: 'Experiences', count: 5 },
    { id: 'architecture', label: 'Architecture', count: 3 },
    { id: 'guests', label: 'Guest Moments', count: 2 }
  ];

  const photos = [
    {
      id: 1,
      title: 'Heritage Suite - Living Area',
      category: 'rooms',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Arjun Photography',
      date: '2024-01-15',
      views: 1250,
      likes: 89,
      type: 'photo',
      featured: true,
      description: 'Elegant living area showcasing traditional Indian décor with modern luxury amenities'
    },
    {
      id: 2,
      title: 'Mumbai Street Thali',
      category: 'dining',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Dhruv Iyer Photography',
      date: '2024-01-12',
      views: 2100,
      likes: 156,
      type: 'photo',
      featured: true,
      description: 'Chef Kiara\'s signature street food thali featuring Mumbai\'s iconic flavors'
    },
    {
      id: 3,
      title: 'Cultural Art Walk Experience',
      category: 'experiences',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Tanishq Patel Studios',
      date: '2024-01-10',
      views: 890,
      likes: 67,
      type: 'photo',
      featured: false,
      description: 'Guests exploring local art galleries and meeting Mumbai artists'
    },
    {
      id: 4,
      title: 'Artist\'s Loft - Creative Space',
      category: 'rooms',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Atharv Sharma Photography',
      date: '2024-01-08',
      views: 1450,
      likes: 98,
      type: 'photo',
      featured: true,
      description: 'Inspiring creative space with curated local artwork and natural lighting'
    },
    {
      id: 5,
      title: 'Bollywood Studio Tour',
      category: 'experiences',
      image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Krish D\'Souza Media',
      date: '2024-01-05',
      views: 1890,
      likes: 134,
      type: 'photo',
      featured: false,
      description: 'Behind-the-scenes access to Bollywood film studios and movie sets'
    },
    {
      id: 6,
      title: 'Sunset Dining Terrace',
      category: 'dining',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Vivaan Khanna Photography',
      date: '2024-01-03',
      views: 2340,
      likes: 187,
      type: 'photo',
      featured: true,
      description: 'Romantic terrace dining with panoramic Mumbai skyline views'
    },
    {
      id: 7,
      title: 'Heritage Building Facade',
      category: 'architecture',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Architecture Today',
      date: '2024-01-01',
      views: 1670,
      likes: 112,
      type: 'photo',
      featured: false,
      description: '1920s heritage building beautifully restored with modern amenities'
    },
    {
      id: 8,
      title: 'Cultural Deluxe Room',
      category: 'rooms',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Room Stories',
      date: '2023-12-28',
      views: 1120,
      likes: 78,
      type: 'photo',
      featured: false,
      description: 'Thoughtfully designed room celebrating local artistry and Indian textiles'
    },
    {
      id: 9,
      title: 'Virtual Room Tour - 360°',
      category: 'rooms',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'VR Experiences',
      date: '2023-12-25',
      views: 3450,
      likes: 234,
      type: 'virtual',
      featured: true,
      description: 'Immersive 360° virtual tour of our Heritage Suite'
    },
    {
      id: 10,
      title: 'Spice Blending Workshop',
      category: 'experiences',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Culinary Arts Mumbai',
      date: '2023-12-22',
      views: 980,
      likes: 65,
      type: 'photo',
      featured: false,
      description: 'Hands-on spice blending workshop with Chef Meera Patel'
    },
    {
      id: 11,
      title: 'Guest Celebration Moment',
      category: 'guests',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Happy Moments',
      date: '2023-12-20',
      views: 1560,
      likes: 145,
      type: 'photo',
      featured: false,
      description: 'Guests celebrating their anniversary with our special arrangements'
    },
    {
      id: 12,
      title: 'Chef\'s Kitchen Tour',
      category: 'dining',
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      photographer: 'Behind the Scenes',
      date: '2023-12-18',
      views: 1340,
      likes: 92,
      type: 'photo',
      featured: false,
      description: 'Exclusive behind-the-scenes look at our award-winning kitchen'
    }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const toggleFavorite = (photoId: number) => {
    setFavorites(prev => 
      prev.includes(photoId) 
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  const openLightbox = (photo: any, index: number) => {
    setSelectedImage(photo);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredPhotos.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredPhotos[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredPhotos[prevIndex]);
  };

  return (
    <>
      <section className="py-20 bg-cream relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="organic-blob bg-magenta absolute top-16 left-16 w-36 h-36 floating"></div>
          <div className="organic-blob bg-electric-blue absolute bottom-24 right-24 w-28 h-28 floating-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <span className="script-accent text-magenta text-xl mb-2 block">Captured</span>
            <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
              Photography Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-royal mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our curated collection of professional photography showcasing Casa Boutique's 
              unique spaces, culinary artistry, and authentic Mumbai experiences
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                  activeCategory === category.id
                    ? 'bg-magenta text-white'
                    : 'bg-white text-dark-gray border-2 border-gray-200 hover:border-magenta'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="card-floating hover-lift fade-in-up group cursor-pointer relative"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(photo, index)}
              >
                {/* Photo */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {photo.featured && (
                    <div className="absolute top-3 left-3 bg-coral text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Award size={14} />
                      <span>Featured</span>
                    </div>
                  )}

                  {/* Media Type Badge */}
                  <div className="absolute top-3 right-3">
                    {photo.type === 'virtual' ? (
                      <div className="bg-electric-blue text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Play size={14} />
                        <span>360°</span>
                      </div>
                    ) : (
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <Camera size={16} className="text-dark-gray" />
                      </div>
                    )}
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-3">
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Eye size={20} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(photo.id);
                        }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Heart size={20} className={favorites.includes(photo.id) ? 'fill-current' : ''} />
                      </button>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-semibold text-dark-gray text-sm mb-1">{photo.title}</h4>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{photo.photographer}</span>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye size={12} />
                          <span>{photo.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart size={12} />
                          <span>{photo.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12 fade-in-up">
            <button className="btn-secondary px-8 py-4 text-lg hover-lift">
              <Camera size={20} className="inline mr-2" />
              Load More Photos
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full max-h-[90vh] relative">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              
              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="artistic-heading text-2xl text-dark-gray mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600">{selectedImage.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => toggleFavorite(selectedImage.id)}
                      className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                    >
                      <Heart size={18} className={favorites.includes(selectedImage.id) ? 'fill-current' : ''} />
                    </button>
                    <button className="w-10 h-10 bg-electric-blue/10 rounded-full flex items-center justify-center hover:bg-electric-blue hover:text-white transition-colors">
                      <Share2 size={18} />
                    </button>
                    <button className="w-10 h-10 bg-emerald/10 rounded-full flex items-center justify-center hover:bg-emerald hover:text-white transition-colors">
                      <Download size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>By {selectedImage.photographer}</span>
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>{selectedImage.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart size={14} />
                      <span>{selectedImage.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;