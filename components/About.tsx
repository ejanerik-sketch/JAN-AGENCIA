import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { COLORS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:mx-0">
               {/* Placeholder for Jan Erik's photo */}
              <img 
                src="https://picsum.photos/800/1000?random=2" 
                alt="Jan Erik" 
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-black/80 to-transparent"
              >
                <p className="font-bold text-xl">Jan Erik</p>
                <p className="text-sm opacity-90">Fundador & Estrategista Chefe</p>
              </div>
            </div>
            {/* Decoration */}
            <div 
              className="absolute -z-10 top-10 -left-10 w-full h-full border-2 rounded-lg"
              style={{ borderColor: COLORS.primary }}
            ></div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2 
              className="text-sm font-bold tracking-widest uppercase mb-2"
              style={{ color: COLORS.secondary }}
            >
              Quem Somos
            </h2>
            <h3 
              className="text-4xl font-bold mb-6 leading-tight"
              style={{ color: COLORS.primary }}
            >
              Estratégia, Experiência e Resultados no Digital.
            </h3>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Na Jan Agência, acreditamos que o sucesso digital não é sorte, mas sim resultado de um planejamento estratégico bem executado. Somos dedicados a guiar empresas e negócios a alcançarem seus objetivos no complexo cenário online.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border-l-4 mb-8" style={{ borderColor: COLORS.secondary }}>
              <p className="text-gray-700 italic">
                "A expertise de Jan Erik é enriquecida por sua atuação como <strong>Assessor de Comunicação da Procuradoria Geral do Município de Itabuna</strong>, conferindo uma perspectiva única sobre gestão de imagem, clareza e ética."
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "15+ anos de experiência em publicidade e comunicação",
                "Formação em Jornalismo e MBA em Marketing, Branding e Growth",
                "Visão 360º do mercado e narrativas",
                "Foco total em transformar possibilidades em vendas"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="mr-3 flex-shrink-0" style={{ color: COLORS.primary }} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;