
import React from 'react';
import { Globe, Smartphone, Image, Brain } from 'lucide-react';

const services = [
  {
    title: "Páginas Web",
    description: "Crea tu presencia online con páginas web modernas y adaptables",
    icon: <Globe className="h-10 w-10 text-neobazar-blue" />,
  },
  {
    title: "Apps Móviles",
    description: "Llega a tus clientes donde sea con aplicaciones personalizadas",
    icon: <Smartphone className="h-10 w-10 text-neobazar-red" />,
  },
  {
    title: "Fotografía de Productos",
    description: "Destaca tus productos con fotografías profesionales de alta calidad",
    icon: <Image className="h-10 w-10 text-neobazar-gold" />,
  },
  {
    title: "IA para Precios y Descripciones",
    description: "Optimiza tu operación con inteligencia artificial para automatizar precios y descripciones",
    icon: <Brain className="h-10 w-10 text-neobazar-blue" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="section bg-white">
      <div className="text-center mb-12 slide-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Todo lo que necesitas para transformar digitalmente tu bazar en un solo lugar
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md card-hover slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
