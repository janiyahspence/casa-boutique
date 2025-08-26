import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import BookingWidget from './components/UI/BookingWidget';
import ScrollToTop from './components/UI/ScrollToTop';
import HeroSection from './components/Homepage/HeroSection';
import FeaturedRooms from './components/Homepage/FeaturedRooms';
import ExperiencePreview from './components/Homepage/ExperiencePreview';
import InstagramFeed from './components/Homepage/InstagramFeed';
import AboutHero from './components/About/AboutHero';
import StoryTimeline from './components/About/StoryTimeline';
import TeamSection from './components/About/TeamSection';
import PhilosophySection from './components/About/PhilosophySection';
import RoomsPage from './components/Rooms/RoomsPage';
import ExperiencesPage from './components/Experiences/ExperiencesPage';
import DiningPage from './components/Dining/DiningPage';
import ContactPage from './components/Contact/ContactPage';
import GalleryPage from './components/Gallery/GalleryPage';
import './styles/design-system.css';

function App() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home');

  // Scroll animation effect
  React.useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-in-up elements
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Track current section for navigation
  React.useEffect(() => {
    const sections = ['home', 'rooms', 'experiences', 'dining', 'gallery', 'about', 'contact'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId)) {
            setCurrentPage(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
      rootMargin: '-20% 0px -20% 0px'
    });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* Homepage Sections */}
      <section id="home">
        <HeroSection onBookingOpen={() => setIsBookingOpen(true)} />
      </section>
      <FeaturedRooms />
      <ExperiencePreview />
      <InstagramFeed />

      {/* Main Page Sections */}
      <section id="rooms">
        <RoomsPage />
      </section>

      <section id="experiences">
        <ExperiencesPage />
      </section>

      <section id="dining">
        <DiningPage />
      </section>

      <section id="gallery">
        <GalleryPage />
      </section>

      <section id="about">
        <AboutHero />
        <StoryTimeline />
        <TeamSection />
        <PhilosophySection />
      </section>

      <section id="contact">
        <ContactPage />
      </section>

      <Footer />
      <ScrollToTop />
      
      <BookingWidget 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}

export default App;