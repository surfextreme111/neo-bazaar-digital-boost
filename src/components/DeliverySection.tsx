
import React from 'react';
import { Truck, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DeliverySection = () => {
  return (
    <section id="entregas" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 slide-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Repartos Locales Inmediatos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compite contra gigantes como AliExpress o Shein con entregas a domicilio gestionadas por tu propio bazar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="slide-in-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-neobazar-red/10 rounded-bl-full -mr-10 -mt-10"></div>
              
              <h3 className="text-2xl font-bold mb-6">Ventaja competitiva para tu bazar</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-neobazar-red/10 p-3 rounded-full">
                    <Truck className="h-6 w-6 text-neobazar-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Entregas en el día</h4>
                    <p className="text-gray-600">Ofrece a tus clientes entregas inmediatas en su área local, sin depender de grandes centros logísticos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-neobazar-blue/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-neobazar-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Sin intermediarios</h4>
                    <p className="text-gray-600">Gestiona tus propias entregas con tus empleados o colaboradores, maximizando los beneficios.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-neobazar-gold/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-neobazar-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Control total</h4>
                    <p className="text-gray-600">Supervisa cada paso del proceso de entrega y mantén la calidad del servicio que caracteriza a tu negocio.</p>
                  </div>
                </div>
              </div>
              
              <Button className="btn-primary mt-8 w-full">
                Empieza a ofrecer entregas <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="slide-in order-first md:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-neobazar-blue/80 to-neobazar-red/80 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1619371208402-615001f13a45?q=80&w=1000&auto=format&fit=crop" 
                alt="Repartidor local en moto" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Entregas locales</h3>
                <p className="text-lg">Más rápidas que los gigantes del e-commerce</p>
                
                <div className="flex items-center gap-4 mt-6">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold">Entrega garantizada mismo día</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold">Radio de 5-10 km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-white rounded-lg shadow-md border border-gray-100">
          <p className="text-center text-gray-600 italic">
            "NeoBazar digitaliza bazares con web, app y entregas rápidas desde el propio negocio, sin intermediarios."
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
