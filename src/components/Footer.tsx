
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neobazar-dark text-white">
      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">NeoBazar</h3>
            <p className="text-gray-300 mb-4">
              Transformando digitalmente los bazares tradicionales para el futuro.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Páginas Web</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Apps Móviles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fotografía de Productos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">IA para Precios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Trabaja con Nosotros</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-neobazar-red" />
                <span>+34 91 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-neobazar-red" />
                <span>info@neobazar.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-neobazar-red mt-1" />
                <span>Calle Innovación, 123<br />28001, Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            © {currentYear} NeoBazar. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
