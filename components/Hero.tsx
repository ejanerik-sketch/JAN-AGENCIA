import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COLORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Office Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div 
            className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-6"
            style={{ backgroundColor: `${COLORS.primary}20`, color: COLORS.primary }}
          >
            AGÊNCIA DE ESTRATÉGIA DIGITAL
          </div>
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ color: COLORS.primary }}
          >
            Transforme Possibilidades em <span className="text-[#ff6330]">Vendas Reais</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Somos a Jan Agência: um escritório de estratégia digital focado em impulsionar o crescimento do seu negócio com resultados mensuráveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: COLORS.secondary }}
            >
              Quero alavancar meu negócio
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-700 font-bold text-lg border-2 hover:bg-gray-50 transition-all"
              style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>
        
        {/* Abstract Visual / Image */}
        <div className="hidden md:block relative">
           <div className="absolute top-0 right-0 w-72 h-72 bg-[#1d8490] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
           <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#ff6330] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
           <img 
            src="https://picsum.photos/600/600?random=1" 
            alt="Digital Strategy" 
            className="relative rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform duration-500"
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;