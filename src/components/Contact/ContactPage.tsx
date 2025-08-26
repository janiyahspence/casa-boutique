import React from 'react';
import ContactHero from './ContactHero';
import ContactForms from './ContactForms';
import LocationMap from './LocationMap';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <ContactHero />
      <ContactForms />
      <LocationMap />
    </div>
  );
};

export default ContactPage;