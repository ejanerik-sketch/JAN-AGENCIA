import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS, COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'md:bg-white/90 md:backdrop-blur-md md:shadow-sm py-4' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/#inicio" onClick={(e) => handleNavClick(e, '/#inicio')} className="flex items-center transition-transform hover:scale-105">
           <img 
             src="https://janerik.com.br/wp-content/uploads/2026/05/JAN-AGENCIAAtivo-16.png" 
             alt="Jan Agência" 
             className="h-8 md:h-12 w-auto object-contain" 
           />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-[#ff6330] transition-colors relative group"
              style={{ color: '#1a1a1a' }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6330] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#ff6330] transition-all font-bold shadow-[0_0_0_0_rgba(255,99,48,0)] hover:shadow-[0_4px_20px_0_rgba(255,99,48,0.4)]"
          >
            Vamos conversar?
          </a>
        </div>

        {/* Mobile Menu Button & Background Handling */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none bg-white/50 backdrop-blur-sm p-2 rounded-full hover:bg-white hover:text-[#ff6330] transition-colors border border-gray-100 shadow-sm"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] rounded-3xl py-6 flex flex-col items-center space-y-2 border border-gray-100/50">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-900 font-bold hover:text-[#ff6330] py-4 w-full text-center hover:bg-gray-50 uppercase tracking-widest text-sm transition-colors rounded-xl mx-4"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
             href="/#contact"
             onClick={(e) => handleNavClick(e, '/#contact')}
             className="bg-[#ff6330] text-white font-bold py-4 w-10/12 text-center uppercase tracking-widest text-sm rounded-xl mx-4 shadow-lg"
          >
            Vamos Conversar?
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;