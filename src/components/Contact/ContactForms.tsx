import React, { useState } from 'react';
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Calendar,
  Users,
  Utensils,
  Camera,
  Heart,
  Building,
  CheckCircle
} from 'lucide-react';

const ContactForms: React.FC = () => {
  const [activeForm, setActiveForm] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    eventDate: '',
    eventType: '',
    budget: ''
  });

  const formTypes = [
    { id: 'general', label: 'General Inquiry', icon: MessageSquare, color: 'coral' },
    { id: 'booking', label: 'Room Booking', icon: Calendar, color: 'emerald' },
    { id: 'dining', label: 'Dining Reservation', icon: Utensils, color: 'royal-purple' },
    { id: 'events', label: 'Events & Celebrations', icon: Heart, color: 'sunset-orange' },
    { id: 'experiences', label: 'Cultural Experiences', icon: Camera, color: 'magenta' },
    { id: 'corporate', label: 'Corporate Inquiries', icon: Building, color: 'electric-blue' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  const getFormColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'coral': 'bg-coral',
      'emerald': 'bg-emerald',
      'royal-purple': 'bg-royal-purple',
      'sunset-orange': 'bg-sunset-orange',
      'magenta': 'bg-magenta',
      'electric-blue': 'bg-electric-blue'
    };
    return colorMap[color] || 'bg-coral';
  };

  return (
    <section className="py-20 bg-light-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="organic-blob bg-coral absolute top-16 left-16 w-36 h-36 floating"></div>
        <div className="organic-blob bg-emerald absolute bottom-24 right-24 w-28 h-28 floating-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="script-accent text-electric-blue text-xl mb-2 block">Connect</span>
          <h2 className="text-section-title artistic-heading text-dark-gray mb-4">
            Send Us a Message
          </h2>
          <div className="w-24 h-1 bg-gradient-ocean mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're planning a stay, celebration, or cultural experience, 
            our team is here to help create your perfect Mumbai journey
          </p>
        </div>

        {/* Form Type Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          {formTypes.map((type) => {
            const Icon = type.icon;
            const colorClass = getFormColor(type.color);
            return (
              <button
                key={type.id}
                onClick={() => setActiveForm(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover-lift ${
                  activeForm === type.id
                    ? `${colorClass} text-white`
                    : 'bg-white text-dark-gray border-2 border-gray-200 hover:border-coral'
                }`}
              >
                <Icon size={18} />
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="card-floating">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coral" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-royal-purple" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-gray mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                    placeholder="Brief subject line"
                  />
                </div>
              </div>

              {/* Form-specific fields */}
              {activeForm === 'booking' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-emerald/5 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {activeForm === 'events' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-sunset-orange/5 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sunset-orange focus:border-transparent"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="birthday">Birthday</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-dark-gray mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
                  placeholder="Tell us about your requirements, preferences, or any questions you have..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-8 py-4 text-lg font-semibold hover-lift"
                >
                  <Send size={20} className="inline mr-2" />
                  Send Message
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  We typically respond within 2-4 hours during business hours
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mt-16 fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-floating text-center hover-lift">
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-coral" />
              </div>
              <h3 className="font-semibold text-dark-gray mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Speak directly with our team</p>
              <p className="font-semibold text-coral">+91 98765 43210</p>
              <p className="text-sm text-gray-500">24/7 Reception</p>
            </div>
            <div className="card-floating text-center hover-lift">
              <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-emerald" />
              </div>
              <h3 className="font-semibold text-dark-gray mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">Send us a detailed message</p>
              <p className="font-semibold text-emerald">hello@casaboutique.in</p>
              <p className="text-sm text-gray-500">Response within 4 hours</p>
            </div>
            <div className="card-floating text-center hover-lift">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={24} className="text-electric-blue" />
              </div>
              <h3 className="font-semibold text-dark-gray mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-3">Instant assistance available</p>
              <p className="font-semibold text-electric-blue">WhatsApp Support</p>
              <p className="text-sm text-gray-500">9 AM - 11 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;