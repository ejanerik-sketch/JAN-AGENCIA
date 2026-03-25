import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-gray-100 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="text-xl font-black italic">
          JAN<span style={{ color: COLORS.primary }}>.</span>AGÊNCIA
        </Link>
        <div className="flex space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-black transition-colors">Behance</a>
        </div>
        <p className="text-xs text-gray-400">
          © 2025 Jan Agência. Inteligência e Design Aplicados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;