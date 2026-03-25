import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContent } from '../context/ContentContext';
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

const Home: React.FC = () => {
  const { posts, cases } = useContent();
  const recentPosts = posts.slice(0, 3);
  const featuredCases = cases.slice(0, 2);

  const services = [
    {
      title: "Identidade Visual",
      description: "Construímos marcas memoráveis que comunicam essência e autoridade no primeiro olhar.",
      icon: <Palette className="w-6 h-6" />,
      tag: "Branding"
    },
    {
      title: "Web & Landing Pages",
      description: "Desenvolvimento de interfaces de alta conversão, focadas em UX/UI e velocidade.",
      icon: <Layout className="w-6 h-6" />,
      tag: "Development"
    },
    {
      title: "Design de Campanhas",
      description: "Criativos estratégicos para redes sociais e campanhas que param o scroll.",
      icon: <Zap className="w-6 h-6" />,
      tag: "Content"
    },
    {
      title: "Tráfego Pago",
      description: "Gestão inteligente de anúncios (Meta & Google) focada em ROI e escala real.",
      icon: <BarChart3 className="w-6 h-6" />,
      tag: "Performance"
    },
    {
      title: "Consultoria em IA",
      description: "Aplicabilidade prática de Inteligência Artificial para otimizar processos e resultados.",
      icon: <Cpu className="w-6 h-6" />,
      tag: "Innovation"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
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
              <Link to="/cases" className="border-2 border-black px-8 py-4 rounded-full text-lg font-bold hover:bg-black hover:text-white transition-all flex items-center justify-center">
                Nosso Portfólio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Contratos Fixos</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">R$ 220k+</div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">MRR Projetado</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Foco em ROI</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">IA</div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Nativo Digital</p>
          </div>
        </div>
      </section>

      {/* Solutions (Services) */}
      <section id="solucoes" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4" style={{ color: COLORS.primary }}>Soluções</h2>
              <p className="text-4xl md:text-6xl font-bold tracking-tighter">
                Serviços desenhados para marcas que não aceitam o comum.
              </p>
            </div>
            <p className="text-gray-500 max-w-sm mb-2">
              Da identidade visual à automação com IA, cobrimos todos os pontos de contato da sua jornada digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-[#1d8490] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1d8490] group-hover:text-white transition-colors text-[#1d8490]">
                  {service.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">{service.tag}</span>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 font-bold text-sm group-hover:text-[#1d8490] transition-colors cursor-pointer">
                  Saiba mais <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases Section */}
      {featuredCases.length > 0 && (
        <section className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4" style={{ color: COLORS.primary }}>Portfólio</h2>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">Cases Selecionados</h3>
              </div>
              <Link to="/cases" className="hidden md:flex items-center hover:text-[#1d8490] transition-colors font-bold">
                Ver todos os cases <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCases.map((item) => (
                <div key={item.id} className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg">
                  <img 
                    src={item.coverImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <p className="text-[#1d8490] text-sm font-bold uppercase tracking-wider mb-2">{item.client}</p>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <Link to={`/cases/${item.slug}`} className="inline-flex items-center mt-4 hover:underline font-medium">
                      Ver case <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link to="/cases" className="inline-flex items-center hover:text-[#1d8490] transition-colors font-bold">
                Ver todos os cases <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* IA Highlight Section */}
      <section className="py-32 px-6 text-white overflow-hidden relative" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic">
                A revolução não é apenas digital, é inteligente.
              </h2>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Na Jan Agência, a Inteligência Artificial não é apenas uma palavra da moda. É a base da nossa aplicabilidade para reduzir custos operacionais e maximizar a criatividade humana.
              </p>
              <button className="bg-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform" style={{ color: COLORS.primary }}>
                Consultoria em IA
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-full blur-[100px] absolute -top-20 -right-20 opacity-30"></div>
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono">IA Status: Otimizando campanhas...</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-2/3"></div>
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

      {/* About Section (Simplified from original) */}
      <section id="sobre" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <img 
                src="https://picsum.photos/800/1000?random=2" 
                alt="Jan Erik" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 text-white bg-gradient-to-t from-black/90 to-transparent">
                <p className="font-bold text-2xl">Jan Erik</p>
                <p className="text-sm opacity-90 uppercase tracking-widest">Fundador & Estrategista</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4" style={{ color: COLORS.primary }}>Quem Somos</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Estratégia, Experiência e Resultados no Digital.
            </h3>
            
            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              Na Jan Agência, acreditamos que o sucesso digital não é sorte, mas sim resultado de um planejamento estratégico bem executado. Somos dedicados a guiar empresas e negócios a alcançarem seus objetivos no complexo cenário online.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 mb-10" style={{ borderColor: COLORS.primary }}>
              <p className="text-gray-700 italic font-medium">
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
      </section>

      {/* Latest Blog Posts Section */}
      {recentPosts.length > 0 && (
        <section className="py-32 bg-[#fafafa] px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4" style={{ color: COLORS.primary }}>Blog</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Insights & Tendências</h3>
              <p className="text-gray-500 max-w-2xl mx-auto">Conteúdo estratégico para manter você à frente do mercado.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-[2rem] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <Link to={`/blog/${post.slug}`} className="block h-56 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  <div className="p-8">
                    <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: COLORS.primary }}>{post.category || 'Geral'}</div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="text-gray-900 group-hover:text-[#1d8490] transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="text-black font-bold hover:text-[#1d8490] text-sm inline-flex items-center transition-colors">
                      Ler artigo <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/blog" className="inline-block px-8 py-4 border-2 border-gray-200 rounded-full text-gray-900 font-bold hover:border-black hover:bg-black hover:text-white transition-all">
                Ver todos os artigos
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-10">
            Pronto para o próximo <span className="italic" style={{ color: COLORS.primary }}>level?</span>
          </h2>
          <p className="text-xl text-gray-500 mb-12">
            Seja para um projeto pontual ou uma parceria estratégica recorrente, estamos prontos para acelerar sua marca.
          </p>
          <a 
            href="mailto:contato@janagencia.com.br" 
            className="text-2xl md:text-4xl font-bold underline underline-offset-8 decoration-[#1d8490] hover:text-[#1d8490] transition-colors"
          >
            contato@janagencia.com.br
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
