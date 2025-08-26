import React from 'react';
import GalleryHero from './GalleryHero';
import PhotoGallery from './PhotoGallery';
import VirtualTours from './VirtualTours';
import GuestMoments from './GuestMoments';

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <GalleryHero />
      <PhotoGallery />
      <VirtualTours />
      <GuestMoments />
    </div>
  );
};

export default GalleryPage;