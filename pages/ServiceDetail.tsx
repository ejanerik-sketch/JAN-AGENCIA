import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { COLORS } from '../constants';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Solução não encontrada</h1>
          <Link to="/" className="text-[#ff6330] hover:underline font-bold flex items-center justify-center">
             <ArrowLeft className="mr-2" /> Voltar para o Início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans selection:bg-[#ff6330] selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Decorative Orange Blur */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#ff6330] rounded-full blur-[160px] opacity-10 pointer-events-none z-0"></div>

        <article className="max-w-4xl mx-auto relative z-10">
          <Link to="/#solucoes" className="inline-flex items-center text-gray-500 hover:text-[#ff6330] mb-12 transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft size={16} className="mr-2" /> Todas as Soluções
          </Link>
          
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white shadow-sm p-4 rounded-2xl text-[#1d8490]">
                {service.icon}
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6330]">
                {service.tag}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
              {service.title}
            </h1>
            
            <p className="text-2xl text-gray-600 font-medium leading-relaxed italic border-l-4 border-[#ff6330] pl-6">
              {service.description}
            </p>
          </header>

          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            <p>{service.content}</p>
          </div>
          
          <div className="mt-20 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Precisa desta solução?</h3>
            <a 
              href="https://api.whatsapp.com/send?phone=5573991321400&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Ag%C3%AAncia!" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#ff6330] hover:bg-[#e05220] hover:scale-105 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-[0_10px_40px_-10px_rgba(255,100,50,0.5)] cursor-pointer"
            >
              Falar com um Estrategista <ArrowRight className="ml-2" />
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
