
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import DeliverySection from '@/components/DeliverySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <HeroSection />
        <ServicesSection />
        <DeliverySection />
        <PricingSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
