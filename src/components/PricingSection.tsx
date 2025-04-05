
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Básico",
    price: "499€",
    description: "Lo esencial para empezar tu transformación digital",
    features: [
      "Página web básica",
      "Configuración inicial",
      "10 fotos de productos",
      "Soporte por 1 mes"
    ],
    highlight: false,
    color: "bg-gray-100"
  },
  {
    name: "Pro",
    price: "999€",
    description: "La solución más popular para bazares en crecimiento",
    features: [
      "Página web avanzada",
      "Aplicación móvil básica",
      "25 fotos de productos",
      "IA para descripciones",
      "Soporte por 3 meses"
    ],
    highlight: true,
    color: "bg-neobazar-blue"
  },
  {
    name: "Full Digital",
    price: "1,999€",
    description: "Transformación digital completa para tu negocio",
    features: [
      "Página web premium",
      "Aplicación móvil completa",
      "50 fotos de productos",
      "IA para descripciones y precios",
      "Integración con redes sociales",
      "Soporte por 6 meses"
    ],
    highlight: false,
    color: "bg-gray-100"
  }
];

const PricingSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="text-center mb-12 slide-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes y Precios</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Soluciones flexibles que se adaptan a las necesidades de tu bazar
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl slide-in ${plan.highlight ? 'transform md:-translate-y-4' : ''}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className={`p-6 ${plan.highlight ? 'bg-neobazar-blue text-white' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                <span className="text-sm opacity-80">pago único</span>
              </div>
              <p className={`${plan.highlight ? 'text-blue-100' : 'text-gray-600'} mb-6`}>
                {plan.description}
              </p>
              <Button 
                className={`w-full py-3 ${plan.highlight ? 'bg-white text-neobazar-blue hover:bg-gray-100' : 'btn-primary'}`}
              >
                Seleccionar plan
              </Button>
            </div>
            <div className={`p-6 ${plan.highlight ? 'bg-blue-50' : 'bg-white'}`}>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className={`h-5 w-5 ${plan.highlight ? 'text-neobazar-blue' : 'text-neobazar-red'}`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
