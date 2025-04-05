
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-neobazar-blue/10 to-neobazar-red/10 overflow-hidden">
      <div className="section flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 z-10 slide-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neobazar-dark">
            Digitaliza tu bazar con <span className="text-neobazar-red">NeoBazar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Lleva tu negocio al siguiente nivel con nuestra plataforma digital diseñada para bazares
          </p>
          <Button 
            className="btn-primary flex items-center gap-2 text-lg" 
            size="lg"
          >
            Empieza ahora <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 slide-in relative">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-neobazar-red to-neobazar-blue rounded-lg blur opacity-20 animate-pulse-light"></div>
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Digital Bazaar Transformation" 
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
