import React, { useState } from 'react';
import RoomsHero from './RoomsHero';
import RoomGrid from './RoomGrid';
import RoomModal from './RoomModal';
import BookingWidget from '../UI/BookingWidget';

interface Room {
  id: number;
  name: string;
  type: string;
  price: number;
  originalPrice: number;
  images: string[];
  size: string;
  maxGuests: number;
  bedType: string;
  view: string;
  rating: number;
  reviews: number;
  description: string;
  amenities: string[];
  features: string[];
  availability: 'available' | 'limited' | 'booked';
}

const RoomsPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingRoom, setBookingRoom] = useState<Room | null>(null);

  const handleFilterChange = (filters: any) => {
    // Handle filter logic here
    console.log('Filters changed:', filters);
  };

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
    setIsRoomModalOpen(true);
  };

  const handleBookingOpen = (room: Room) => {
    setBookingRoom(room);
    setIsBookingOpen(true);
    setIsRoomModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section with Search & Filters */}
      <RoomsHero
        onFilterChange={handleFilterChange}
        onViewChange={setCurrentView}
        currentView={currentView}
      />

      {/* Room Grid/List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-dark-gray">Available Rooms</h2>
              <p className="text-gray-600">Choose from our curated collection of unique accommodations</p>
            </div>
            <div className="text-sm text-gray-500">
              Showing 6 rooms
            </div>
          </div>

          <RoomGrid
            view={currentView}
            onRoomSelect={handleRoomSelect}
            onBookingOpen={handleBookingOpen}
          />
        </div>
      </section>

      {/* Room Detail Modal */}
      <RoomModal
        room={selectedRoom}
        isOpen={isRoomModalOpen}
        onClose={() => {
          setIsRoomModalOpen(false);
          setSelectedRoom(null);
        }}
        onBookingOpen={handleBookingOpen}
      />

      {/* Booking Widget */}
      <BookingWidget
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setBookingRoom(null);
        }}
      />
    </div>
  );
};

export default RoomsPage;