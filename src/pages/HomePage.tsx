import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import EquipmentSection from '../components/EquipmentSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EquipmentSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default HomePage; 