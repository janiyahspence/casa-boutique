import React from 'react';
import DiningHero from './DiningHero';
import RestaurantSection from './RestaurantSection';
import ChefProfile from './ChefProfile';
import CulinaryExperiences from './CulinaryExperiences';

const DiningPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <DiningHero />
      <RestaurantSection />
      <ChefProfile />
      <CulinaryExperiences />
    </div>
  );
};

export default DiningPage;