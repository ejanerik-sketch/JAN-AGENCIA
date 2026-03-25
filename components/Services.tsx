import React from 'react';
import { COLORS, SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: COLORS.secondary }}
          >
            Soluções
          </h2>
          <h3 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: COLORS.primary }}
          >
            Soluções Digitais que Geram Crescimento
          </h3>
          <p className="text-gray-600 text-lg">
            Conheça os serviços que podemos implementar para levar seu negócio mais longe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <Icon size={32} style={{ color: COLORS.primary }} />
                </div>
                
                <h4 
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#1f2937' }}
                >
                  {service.title}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                  {service.description}
                </p>
                
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold flex items-center" style={{ color: COLORS.secondary }}>
                    <span className="mr-2">✨</span> {service.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;