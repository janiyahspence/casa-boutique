import React, { useState } from 'react';
import ExperiencesHero from './ExperiencesHero';
import ExperienceGrid from './ExperienceGrid';
import ExperienceModal from './ExperienceModal';
import BookingWidget from '../UI/BookingWidget';

interface Experience {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  location: string;
  highlights: string[];
  includes: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  languages: string[];
  availability: 'available' | 'limited' | 'booked';
  guide: {
    name: string;
    experience: string;
    image: string;
  };
}

const ExperiencesPage: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingExperience, setBookingExperience] = useState<Experience | null>(null);

  const handleFilterChange = (filters: any) => {
    // Handle filter logic here
    console.log('Filters changed:', filters);
  };

  const handleExperienceSelect = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsExperienceModalOpen(true);
  };

  const handleBookingOpen = (experience: Experience) => {
    setBookingExperience(experience);
    setIsBookingOpen(true);
    setIsExperienceModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section with Search & Filters */}
      <ExperiencesHero
        onFilterChange={handleFilterChange}
        onBookingOpen={handleBookingOpen}
      />

      {/* Experience Grid */}
      <ExperienceGrid
        onExperienceSelect={handleExperienceSelect}
        onBookingOpen={handleBookingOpen}
      />

      {/* Experience Detail Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isExperienceModalOpen}
        onClose={() => {
          setIsExperienceModalOpen(false);
          setSelectedExperience(null);
        }}
        onBookingOpen={handleBookingOpen}
      />

      {/* Booking Widget */}
      <BookingWidget
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setBookingExperience(null);
        }}
      />
    </div>
  );
};

export default ExperiencesPage;