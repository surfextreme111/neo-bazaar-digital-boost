
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const pricingPlans = [
  {
    name: "PLAN BÁSICO",
    setupPrice: "990€",
    monthlyPrice: "79€",
    description: "Ideal para empezar a digitalizar tu tienda sin complicaciones.",
    deliveryTime: "7 días hábiles",
    features: [
      "Web profesional con dominio propio (.com o .es)",
      "Digitalización inicial de hasta 200 productos (fotos + IA para textos y precios)",
      "Botón de contacto por WhatsApp y formulario",
      "Traducción automática español ↔ chino",
      "Puesta en marcha 100% hecha por nuestro equipo",
      "Soporte técnico básico"
    ],
    highlight: false,
    color: "bg-gray-100"
  },
  {
    name: "PLAN PRO",
    setupPrice: "1.490€",
    monthlyPrice: "119€",
    description: "Para bazares que quieren destacar online y tener todo automatizado.",
    deliveryTime: "10 días hábiles",
    features: [
      "Todo lo del plan Básico",
      "App móvil (catálogo personalizado)",
      "Digitalización completa de hasta 1.000 productos",
      "Diseño visual adaptado a tu marca (colores, logo, tipografía)",
      "Gestión mensual de catálogo y promociones",
      "Integración con redes sociales",
      "Sistema de búsqueda por categorías",
      "Traducción revisada por humano"
    ],
    highlight: true,
    color: "bg-neobazar-blue",
    recommended: true
  },
  {
    name: "PLAN AVANZADO",
    setupPrice: "1.990€",
    monthlyPrice: "159€",
    description: "Transformación digital total para bazares grandes o en expansión.",
    deliveryTime: "15 días hábiles",
    features: [
      "Todo lo del plan Pro",
      "Productos ilimitados",
      "IA avanzada: mejora de fotos, sugerencia de precios y etiquetas inteligentes",
      "Tienda online integrada con pagos (Bizum, tarjeta, PayPal)",
      "Control de stock desde panel web",
      "Branding completo (logo + materiales impresos)",
      "Soporte prioritario 24/7",
      "Dashboard de rendimiento mensual"
    ],
    highlight: false,
    color: "bg-gray-100"
  }
];

const PricingSection = () => {
  return (
    <section className="section bg-gray-50" id="precios">
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
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {plan.recommended && (
                  <Badge className="bg-white text-neobazar-blue font-semibold">MÁS RECOMENDADO</Badge>
                )}
              </div>
              
              <div className="mb-4">
                <div className="flex items-end gap-1">
                  <span className="text-3xl md:text-4xl font-bold">{plan.setupPrice}</span>
                  <span className="text-sm opacity-80">puesta en marcha</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xl font-semibold">+</span>
                  <span className="text-xl font-bold">{plan.monthlyPrice}/mes</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <Clock className={`h-4 w-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`} />
                <span className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                  Entrega en {plan.deliveryTime}
                </span>
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
              <p className="font-semibold mb-3">✅ Incluye:</p>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`h-5 w-5 mt-0.5 ${plan.highlight ? 'text-neobazar-blue' : 'text-neobazar-red'}`} />
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
