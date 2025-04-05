
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import DeliverySection from '@/components/DeliverySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Setting up a global scroll handler for the DeliverySection's button
  React.useEffect(() => {
    // Find button with text "Empieza a ofrecer entregas" and add click handler
    const setupDeliveryButton = () => {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        if (button.textContent?.includes('Empieza a ofrecer entregas')) {
          button.addEventListener('click', () => {
            const contactSection = document.getElementById('contacto');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          });
        }
      });
    };
    
    // Run after component mounts and after any updates
    const timer = setTimeout(setupDeliveryButton, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
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
