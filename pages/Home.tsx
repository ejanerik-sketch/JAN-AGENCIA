import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  Layout, 
  Palette, 
  BarChart3, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { COLORS } from '../constants';
import { servicesData } from '../data/servicesData';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
              ESTRATÉGIA, <br />
              DESIGN & <span style={{ color: COLORS.primary }}>IA.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 leading-relaxed">
              Elevamos o padrão digital do seu negócio através de design de elite e inteligência aplicada. Onde a criatividade encontra a performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#solucoes" className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                Ver Soluções <ArrowRight size={20} />
              </a>
              <a href="#sobre" className="border-2 border-black px-8 py-4 rounded-full text-lg font-bold hover:bg-black hover:text-white transition-all flex items-center justify-center text-center">
                Quem Somos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { value: '12+', label: 'Contratos Fixos' },
            { value: 'R$ 220k+', label: 'MRR Projetado' },
            { value: '100%', label: 'Foco em ROI' },
            { value: 'IA', label: 'Nativo Digital' }
          ].map((item, index) => (
             <div key={index} className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-[#ff6330] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,99,48,0.15)] relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1d8490] to-[#ff6330] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                 <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">{item.value}</div>
                 <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{item.label}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Solutions (Services) */}
      <section id="solucoes" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#ff6330]"></span>
                <span style={{ color: COLORS.primary }}>Soluções</span>
              </h2>
              <p className="text-4xl md:text-6xl font-bold tracking-tighter">
                Serviços desenhados para marcas que não aceitam o comum.
              </p>
            </div>
            <p className="text-gray-500 max-w-sm mb-2">
              Da identidade visual à automação com IA, cobrimos todos os pontos de contato da sua jornada digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <Link 
                to={`/servicos/${service.slug}`}
                key={index}
                className="group bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-[#ff6330] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(255,99,48,0.2)] flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1d8490] to-[#ff6330] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1d8490] group-hover:text-white transition-colors text-[#1d8490]">
                  {service.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 group-hover:text-[#ff6330] transition-colors">{service.tag}</span>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 font-bold text-sm group-hover:text-[#ff6330] transition-colors cursor-pointer">
                  Saiba mais <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IA Highlight Section */}
      <section className="py-32 px-6 text-white overflow-hidden relative" style={{ backgroundColor: COLORS.primary }}>
        {/* Orange Accent Circle */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#ff6330] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic">
                A revolução não é apenas digital, é inteligente.
              </h2>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Na Jan Agência, a Inteligência Artificial não é apenas uma palavra da moda. É a base da nossa aplicabilidade para reduzir custos operacionais e maximizar a criatividade humana.
              </p>
              <Link to="/servicos/consultoria-em-ia" className="inline-block bg-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform text-[#1d8490] hover:text-[#ff6330]">
                Consultoria em IA
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-full blur-[100px] absolute -top-20 -right-20 opacity-30"></div>
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 relative overflow-hidden transition-colors duration-500 hover:border-[#ff6330]">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#ff6330]"></div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#ff6330] rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono">IA Status: Otimizando campanhas...</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-2/3 relative">
                        <div className="absolute top-0 right-0 h-full w-2 bg-[#ff6330] animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-xs font-mono opacity-70">
                    {`> Analisando comportamento do consumidor...`} <br />
                    {`> Gerando insights de performance em tempo real...`} <br />
                    {`> Ajustando criativos para máxima conversão.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:mx-0 border-b-8 border-[#ff6330]">
              <img 
                src="https://janerik.com.br/wp-content/uploads/2021/07/jan-802x1024.png" 
                alt="Jan Erik" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 text-white bg-gradient-to-t from-black/90 to-transparent">
                <p className="font-bold text-2xl">Jan Erik</p>
                <p className="text-sm opacity-90 uppercase tracking-widest text-[#ff6330]">Fundador & Estrategista</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#ff6330]"></span>
                <span style={{ color: COLORS.primary }}>Quem Somos</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Estratégia, Experiência e Resultados no Digital.
            </h3>
            
            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              Somos uma agência de performance dedicada a fornecer soluções para ajudar as empresas a se destacarem no mundo digital. Oferecemos uma variedade de serviços, incluindo criação de marcas, desenvolvimento de design profissional, embalagens, sites e gestão de anúncios patrocinados, também conhecido como tráfego pago.
            </p>

            <div className="bg-[#fff4f0] p-8 rounded-2xl border-l-4 mb-10" style={{ borderColor: '#ff6330' }}>
              <h4 className="font-bold text-[#ff6330] mb-2">O principal objetivo do nosso escritório:</h4>
              <p className="text-gray-700 font-medium">
                É atingir um público potencial e fazer com que sua empresa possa através do planejamento estratégico transformar possibilidades em vendas diretas, afinal de contas, a forma de fazer negócio mudou.
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
                  <CheckCircle2 className="mr-3 flex-shrink-0 text-[#ff6330]" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 text-center bg-white relative overflow-hidden">
         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#ff6330] to-transparent opacity-30"></div>
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Pronto para o próximo <span className="italic text-[#ff6330]">level?</span>
          </h2>
          <p className="text-lg text-gray-500 mb-10">
            Seja para um projeto pontual ou uma parceria estratégica recorrente, estamos prontos para acelerar sua marca.
          </p>
          
          <form className="flex flex-col gap-4 text-left max-w-sm mx-auto mb-8" onSubmit={(e) => {
            e.preventDefault();
            window.open('https://api.whatsapp.com/send?phone=5573991321400&text=' + encodeURIComponent('Olá, vim pelo site e gostaria de conversar sobre meu projeto!'), '_blank');
          }}>
             <input type="text" placeholder="Seu Nome" required className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#ff6330] focus:ring-4 focus:ring-[#ff6330]/20 transition-all font-medium text-gray-900 placeholder:text-gray-400" />
             <input type="email" placeholder="Seu E-mail" required className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#ff6330] focus:ring-4 focus:ring-[#ff6330]/20 transition-all font-medium text-gray-900 placeholder:text-gray-400" />
             <button type="submit" className="bg-[#ff6330] hover:bg-[#e05220] hover:scale-105 text-white font-bold py-4 rounded-xl transition-all shadow-[0_10px_40px_-10px_rgba(255,99,48,0.4)] mt-2">
               Falar no WhatsApp
             </button>
          </form>

          <a 
            href="mailto:contato@janagencia.com.br" 
            className="text-sm font-medium text-gray-400 hover:text-[#ff6330] transition-colors"
          >
            ou envie um e-mail para: contato@janagencia.com.br
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
