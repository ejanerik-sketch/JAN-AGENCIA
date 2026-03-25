import React from 'react';
import { COLORS, METHODOLOGY_STEPS } from '../constants';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1d8490] opacity-10 skew-x-12 transform origin-top-right"></div>
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: COLORS.secondary }}
          >
            Nossa Estratégia
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Do Planejamento à Performance
          </h3>
          <p className="text-gray-300 text-lg">
            Não entregamos apenas serviços; entregamos um processo estratégico completo, desenhado para o seu sucesso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METHODOLOGY_STEPS.map((step, index) => (
            <div 
              key={index} 
              className="relative p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-[#ff6330] transition-all duration-300 hover:-translate-y-2 group"
            >
              <div 
                className="text-5xl font-black mb-4 opacity-20 group-hover:opacity-100 transition-opacity"
                style={{ color: COLORS.primary }}
              >
                {step.stepNumber}
              </div>
              <h4 className="text-2xl font-bold mb-3 text-white">
                {step.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;