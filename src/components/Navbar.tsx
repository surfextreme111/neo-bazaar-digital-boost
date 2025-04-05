
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neobazar-red to-neobazar-blue">
              NeoBazar
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#servicios" className="font-medium text-gray-700 hover:text-neobazar-red transition-colors">
              Servicios
            </a>
            <a href="/#precios" className="font-medium text-gray-700 hover:text-neobazar-red transition-colors">
              Precios
            </a>
            <a href="/#contacto" className="font-medium text-gray-700 hover:text-neobazar-red transition-colors">
              Contacto
            </a>
            <a href="/#entregas" className="font-medium text-gray-700 hover:text-neobazar-red transition-colors">
              Entregas Rápidas
            </a>
            <Link to="/">
              <Button className="btn-primary">
                Empieza Ahora
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-neobazar-red"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a 
              href="/#servicios" 
              className="block font-medium text-gray-700 hover:text-neobazar-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="/#precios" 
              className="block font-medium text-gray-700 hover:text-neobazar-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Precios
            </a>
            <a 
              href="/#contacto" 
              className="block font-medium text-gray-700 hover:text-neobazar-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <a 
              href="/#entregas" 
              className="block font-medium text-gray-700 hover:text-neobazar-red transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Entregas Rápidas
            </a>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="btn-primary w-full">
                Empieza Ahora
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
