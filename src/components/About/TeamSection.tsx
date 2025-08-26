import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, X } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
  linkedin?: string;
  instagram?: string;
  specialties: string[];
  quote: string;
  experience: string;
  color: string;
}

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Arjun Sharma',
      role: 'Co-Founder & Managing Director',
      department: 'Leadership',
      bio: 'A passionate hospitality veteran with 15+ years of experience in luxury hotels across India. Arjun believes in creating authentic cultural experiences that connect travelers with local communities.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'arjun@casaboutique.in',
      phone: '+91 98765 43210',
      linkedin: '#',
      instagram: '#',
      specialties: ['Strategic Planning', 'Cultural Curation', 'Guest Relations'],
      quote: 'Every guest should leave with a piece of Mumbai in their heart.',
      experience: '15+ years',
      color: 'coral'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Co-Founder & Creative Director',
      department: 'Design & Culture',
      bio: 'An interior designer and cultural enthusiast who transformed Casa Boutique into a living gallery. Priya curates unique experiences that showcase Mumbai\'s artistic heritage.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'priya@casaboutique.in',
      phone: '+91 98765 43211',
      linkedin: '#',
      instagram: '#',
      specialties: ['Interior Design', 'Art Curation', 'Cultural Programs'],
      quote: 'Design should tell stories, not just look beautiful.',
      experience: '12+ years',
      color: 'emerald'
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      role: 'Head of Guest Experience',
      department: 'Operations',
      bio: 'Mumbai native with deep local knowledge and connections. Rajesh ensures every guest discovers hidden gems and authentic experiences throughout their stay.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'rajesh@casaboutique.in',
      phone: '+91 98765 43212',
      specialties: ['Local Experiences', 'Guest Services', 'Cultural Tours'],
      quote: 'Mumbai has a thousand stories - I help guests discover theirs.',
      experience: '10+ years',
      color: 'royal-purple'
    },
    {
      id: 4,
      name: 'Meera Patel',
      role: 'Executive Chef',
      department: 'Culinary',
      bio: 'Award-winning chef specializing in contemporary Indian cuisine. Meera creates culinary journeys that celebrate local flavors with modern presentation.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'meera@casaboutique.in',
      phone: '+91 98765 43213',
      instagram: '#',
      specialties: ['Contemporary Indian Cuisine', 'Local Ingredients', 'Culinary Experiences'],
      quote: 'Food is the fastest way to understand a culture.',
      experience: '8+ years',
      color: 'sunset-orange'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Cultural Experience Manager',
      department: 'Experiences',
      bio: 'Former tour guide turned experience curator. Vikram designs immersive cultural programs that connect guests with local artists, craftsmen, and storytellers.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'vikram@casaboutique.in',
      phone: '+91 98765 43214',
      specialties: ['Cultural Tours', 'Artist Collaborations', 'Heritage Walks'],
      quote: 'Culture is best experienced, not just observed.',
      experience: '7+ years',
      color: 'magenta'
    },
    {
      id: 6,
      name: 'Ananya Desai',
      role: 'Sustainability Manager',
      department: 'Operations',
      bio: 'Environmental advocate ensuring Casa Boutique operates responsibly. Ananya leads our sustainability initiatives and community partnership programs.',
      image: 'https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'ananya@casaboutique.in',
      phone: '+91 98765 43215',
      linkedin: '#',
      specialties: ['Sustainability', 'Community Relations', 'Environmental Programs'],
      quote: 'Responsible tourism creates lasting positive impact.',
      experience: '6+ years',
      color: 'electric-blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'coral': 'text-coral bg-coral/10 border-coral',
      'emerald': 'text-emerald bg-emerald/10 border-emerald',
      'royal-purple': 'text-royal-purple bg-royal-purple/10 border-royal-purple',
      'sunset-orange': 'text-sunset-orange bg-sunset-orange/10 border-sunset-orange',
      'magenta': 'text-magenta bg-magenta/10 border-magenta',
      'electric-blue': 'text-electric-blue bg-electric-blue/10 border-electric-blue'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  return (
    <>
      <section className="py-20 bg-light-gray relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="organic-blob bg-coral absolute top-16 left-16 w-36 h-36 floating"></div>
          <div className="organic-blob bg-emerald absolute bottom-24 right-24 w-28 h-28 floating-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <span className="script-accent text-emerald text-xl mb-2 block">People</span>
            <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate individuals who bring Casa Boutique's vision to life, creating unforgettable experiences for every guest
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const colorClasses = getColorClasses(member.color);
              return (
                <div
                  key={member.id}
                  className="card-floating hover-lift fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedMember(member)}
                >
                  {/* Member Photo */}
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Department Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-dark-gray">{member.department}</span>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-dark-gray">{member.experience}</span>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-card-title artistic-heading text-dark-gray mb-1 group-hover:text-coral transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 font-medium">{member.role}</p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.slice(0, 2).map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="bg-light-gray text-dark-gray px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                      {member.specialties.length > 2 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{member.specialties.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Contact Icons */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colorClasses}`}>
                          <Mail size={14} />
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colorClasses}`}>
                          <Phone size={14} />
                        </div>
                        {member.linkedin && (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colorClasses}`}>
                            <Linkedin size={14} />
                          </div>
                        )}
                      </div>
                      <button className="text-coral hover:text-sunset-orange transition-colors text-sm font-medium">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-dark opacity-40 rounded-t-2xl"></div>
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <h3 className="artistic-heading text-2xl mb-1">{selectedMember.name}</h3>
                <p className="text-white/90">{selectedMember.role}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Quote */}
              <div className="bg-light-gray rounded-lg p-4">
                <p className="script-accent text-lg text-coral italic">
                  "{selectedMember.quote}"
                </p>
              </div>

              {/* Bio */}
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">About</h4>
                <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="font-semibold text-dark-gray mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.specialties.map((specialty, index) => {
                    const colorClasses = getColorClasses(selectedMember.color);
                    return (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses}`}
                      >
                        {specialty}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="font-semibold text-dark-gray mb-3">Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-coral" />
                    <a href={`mailto:${selectedMember.email}`} className="text-gray-600 hover:text-coral transition-colors">
                      {selectedMember.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-emerald" />
                    <a href={`tel:${selectedMember.phone}`} className="text-gray-600 hover:text-emerald transition-colors">
                      {selectedMember.phone}
                    </a>
                  </div>
                  {selectedMember.linkedin && (
                    <div className="flex items-center space-x-3">
                      <Linkedin size={18} className="text-electric-blue" />
                      <a href={selectedMember.linkedin} className="text-gray-600 hover:text-electric-blue transition-colors">
                        LinkedIn Profile
                      </a>
                    </div>
                  )}
                  {selectedMember.instagram && (
                    <div className="flex items-center space-x-3">
                      <Instagram size={18} className="text-magenta" />
                      <a href={selectedMember.instagram} className="text-gray-600 hover:text-magenta transition-colors">
                        Instagram
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamSection;