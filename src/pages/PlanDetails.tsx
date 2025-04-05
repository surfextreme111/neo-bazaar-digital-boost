
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, CreditCard, MessageSquare, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// Import the same plans data
const pricingPlans = [
  {
    name: "PLAN BÁSICO",
    id: "basic",
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
    detailedFeatures: [
      { title: "Web profesional con dominio propio", description: "Sitio web optimizado para móviles con tu propio dominio .com o .es incluido por un año" },
      { title: "Digitalización de 200 productos", description: "Fotografías profesionales y textos generados por IA para hasta 200 productos de tu inventario" },
      { title: "Comunicación directa", description: "Integración con WhatsApp Business y formulario de contacto para tus clientes" },
      { title: "Traducción automática", description: "Todo el contenido disponible en español y chino con traducción automática" },
      { title: "Implementación completa", description: "Nuestro equipo se encarga de todo el proceso de configuración y lanzamiento" },
      { title: "Soporte técnico", description: "Asistencia técnica por email en horario laboral" }
    ],
    highlight: false,
    color: "bg-gray-100"
  },
  {
    name: "PLAN PRO",
    id: "pro",
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
    detailedFeatures: [
      { title: "Todo lo del plan Básico", description: "Incluye todas las funcionalidades del plan Básico más las siguientes mejoras" },
      { title: "App móvil personalizada", description: "Aplicación para iOS y Android con tu catálogo completo y diseño personalizado" },
      { title: "1.000 productos digitalizados", description: "Fotografías y descripciones para hasta 1.000 productos de tu inventario" },
      { title: "Diseño adaptado a tu marca", description: "Personalización visual completa con tus colores, logo y tipografía corporativa" },
      { title: "Gestión mensual de contenidos", description: "Actualizamos tu catálogo y promociones mensualmente según tus necesidades" },
      { title: "Presencia en redes sociales", description: "Integración automática con Facebook, Instagram y WeChat" },
      { title: "Búsqueda avanzada", description: "Sistema de categorías y filtros para facilitar la navegación de tus clientes" },
      { title: "Traducción profesional", description: "Revisión humana de todas las traducciones para máxima precisión" }
    ],
    highlight: true,
    color: "bg-neobazar-blue",
    recommended: true
  },
  {
    name: "PLAN AVANZADO",
    id: "advanced",
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
    detailedFeatures: [
      { title: "Todo lo del plan Pro", description: "Incluye todas las funcionalidades del plan Pro más las siguientes mejoras" },
      { title: "Productos ilimitados", description: "Sin límite en la cantidad de productos que puedes digitalizar y gestionar" },
      { title: "IA avanzada", description: "Mejora automática de fotos, sugerencias de precios competitivos y etiquetado inteligente" },
      { title: "Tienda online completa", description: "Venta online con múltiples métodos de pago: Bizum, tarjetas, PayPal y más" },
      { title: "Control de inventario", description: "Sistema completo de gestión de stock con actualizaciones en tiempo real" },
      { title: "Branding integral", description: "Diseño de logo profesional y materiales impresos (tarjetas, folletos, etc.)" },
      { title: "Soporte prioritario", description: "Asistencia técnica disponible 24/7 con tiempo de respuesta garantizado" },
      { title: "Analytics avanzado", description: "Dashboard mensual con métricas de rendimiento y recomendaciones de mejora" }
    ],
    highlight: false,
    color: "bg-gray-100"
  }
];

const testimonials = [
  {
    name: "Liu Wei",
    position: "Propietario",
    business: "Bazar Felicidad",
    location: "Madrid",
    image: "/placeholder.svg",
    quote: "Desde que implementamos NeoBazar, nuestras ventas han aumentado un 30%. La app móvil es lo que más valoran nuestros clientes."
  },
  {
    name: "María Chen",
    position: "Gerente",
    business: "Multiprecio Asia",
    location: "Barcelona",
    image: "/placeholder.svg",
    quote: "La digitalización de nuestros productos fue rápida y sin complicaciones. Ahora los clientes encuentran todo mucho más fácil."
  },
  {
    name: "Zhang Min",
    position: "Propietaria",
    business: "Mundo Oriental",
    location: "Valencia",
    image: "/placeholder.svg",
    quote: "El soporte 24/7 y la gestión automática de inventario nos ha quitado muchas preocupaciones del día a día."
  }
];

const PlanDetails = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(33);
  
  // Find the selected plan
  const selectedPlan = pricingPlans.find(p => p.id === planId) || pricingPlans[0];
  
  useEffect(() => {
    setProgress(currentStep * 33.33);
  }, [currentStep]);

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/#precios'); // Go back to pricing section
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-20">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-4 flex items-center gap-2"
          onClick={handleBack}
        >
          <ArrowLeft className="h-4 w-4" />
          {currentStep === 1 ? 'Volver a planes' : 'Paso anterior'}
        </Button>
        
        <div className="mb-12">
          <div className="flex justify-between text-sm mb-2">
            <span className={currentStep >= 1 ? "font-medium text-neobazar-blue" : "text-gray-500"}>Paso 1: Elige tu plan</span>
            <span className={currentStep >= 2 ? "font-medium text-neobazar-blue" : "text-gray-500"}>Paso 2: Rellena tus datos</span>
            <span className={currentStep >= 3 ? "font-medium text-neobazar-blue" : "text-gray-500"}>Paso 3: Confirmación y pago</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        {currentStep === 1 && (
          <div className="slide-in">
            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <div className="flex items-center gap-2 mb-4">
                <h1 className="text-3xl font-bold">{selectedPlan.name}</h1>
                {selectedPlan.recommended && (
                  <Badge className="bg-neobazar-blue text-white">MÁS RECOMENDADO</Badge>
                )}
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold">{selectedPlan.setupPrice}</span>
                  <span className="text-sm text-gray-500">puesta en marcha</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xl font-semibold">+</span>
                  <span className="text-xl font-bold">{selectedPlan.monthlyPrice}/mes</span>
                </div>
                <div className="md:ml-auto flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">Entrega en {selectedPlan.deliveryTime}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">{selectedPlan.description}</p>
              
              <h2 className="text-xl font-semibold mb-6">Características detalladas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedPlan.detailedFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-1 text-neobazar-red">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  className="flex gap-2 items-center md:w-auto w-full"
                  variant="outline"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  <Calendar className="h-4 w-4" />
                  Agendar una llamada
                </Button>
                <Button 
                  className="flex gap-2 items-center btn-primary md:w-auto w-full"
                  onClick={handleNext}
                >
                  <CreditCard className="h-4 w-4" />
                  Continuar al pago
                </Button>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Clientes satisfechos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.business}</p>
                        <p className="text-xs text-gray-400">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button className="btn-primary" onClick={handleNext}>
                Continuar con {selectedPlan.name}
              </Button>
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <div className="slide-in">
            <h2 className="text-2xl font-bold mb-6">Rellena tus datos</h2>
            <p className="text-gray-600 mb-8">
              Para continuar con la contratación del {selectedPlan.name}, necesitamos algunos datos de contacto.
            </p>
            
            {/* Placeholder for contact form */}
            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <p className="text-center text-gray-500 py-8">
                Aquí iría un formulario de contacto con los campos necesarios
              </p>
              
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={handleBack}>
                  Volver
                </Button>
                <Button className="btn-primary" onClick={handleNext}>
                  Continuar al pago
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="slide-in">
            <h2 className="text-2xl font-bold mb-6">Confirmación y pago</h2>
            <p className="text-gray-600 mb-8">
              Estás a un paso de digitalizar tu bazar con nuestro {selectedPlan.name}.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <div className="border-b pb-4 mb-4">
                <h3 className="font-semibold text-lg mb-2">Resumen de tu pedido</h3>
                <p className="text-gray-700">{selectedPlan.name}</p>
                <div className="flex justify-between mt-2">
                  <span>Puesta en marcha:</span>
                  <span className="font-semibold">{selectedPlan.setupPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cuota mensual:</span>
                  <span className="font-semibold">{selectedPlan.monthlyPrice}/mes</span>
                </div>
              </div>
              
              <h3 className="font-semibold text-lg mb-4">Método de pago</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Button variant="outline" className="flex items-center justify-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Tarjeta de crédito
                </Button>
                <Button variant="outline" className="flex items-center justify-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Bizum
                </Button>
              </div>
              
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={handleBack}>
                  Volver
                </Button>
                <Button className="btn-primary">
                  Confirmar y pagar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanDetails;
