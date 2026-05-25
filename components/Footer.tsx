import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-gray-900 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="/#inicio" className="flex items-center transition-transform hover:scale-105">
           <img 
             src="https://janerik.com.br/wp-content/uploads/2026/05/Ativo-16LOGO-JAN-BRANCA.png" 
             alt="Jan Agência Branca" 
             className="h-10 md:h-12 w-auto object-contain" 
           />
        </a>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm text-gray-400">
          <a href="https://www.instagram.com/jan.agenciaa/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6330] transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/in/ejanerik/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6330] transition-colors">LinkedIn</a>
        </div>
        <p className="text-xs text-gray-500 text-center md:text-right">
          © 2026 Jan Agência. Inteligência e Design Aplicados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;