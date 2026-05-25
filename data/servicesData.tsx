import React from 'react';
import { Cpu, Layout, Palette, BarChart3, Zap, Video } from 'lucide-react';

export const servicesData = [
  {
    slug: 'identidade-visual',
    title: "Identidade Visual",
    description: "Construímos marcas memoráveis que comunicam essência e autoridade no primeiro olhar.",
    icon: <Palette className="w-6 h-6" />,
    tag: "Branding",
    content: "O branding é o coração da sua empresa. O que pensam e sentem sobre a sua marca determina o fechamento de grandes negócios. Nossa equipe de design realiza um mergulho profundo (branding research) na sua essência e no seu público alvo para desenvolver um ecossistema visual de impacto: Logotipos, Paletas de Cores, Tipografia, Embalagens e Manuais da Marca. Queremos que você seja inconfundível, do cartão de visita ao outdoor."
  },
  {
    slug: 'web-landing-pages',
    title: "Web & Landing Pages",
    description: "Desenvolvimento de interfaces de alta conversão, focadas em UX/UI e velocidade.",
    icon: <Layout className="w-6 h-6" />,
    tag: "Development",
    content: "Seu site é o seu melhor vendedor, e ele trabalha 24 horas por dia. Desenhamos e desenvolvemos Landing Pages e Institucionais extremamente rápidos (arquitetura moderna) e voltados 100% para a taxa de conversão. Usamos gatilhos visuais, Copywriting estratégico e mapeamento UX (Experiência do Usuário) para garantir que cada visitante tenha a melhor fluidez possível rumo ao clique inicial."
  },
  {
    slug: 'design-de-campanhas',
    title: "Design de Campanhas",
    description: "Criativos estratégicos para redes sociais e campanhas que param o scroll.",
    icon: <Zap className="w-6 h-6" />,
    tag: "Content",
    content: "O jogo contemporâneo das redes sociais exige mais que 'posts bonitos': exige peças paralisadoras de 'scroll'. Criamos universos temáticos para seu lançamento ou campanhas contínuas, incluindo Posts, Storytelling visual, Materiais para eventos, Banners interativos e artes para anúncios (Dark Posts). Trabalhamos com psicologia das cores para alinhar cada criativo ao sentimento de urgência ou necessidade do produto."
  },
  {
    slug: 'trafego-pago',
    title: "Tráfego Pago",
    description: "Gestão inteligente de anúncios (Meta & Google) focada em ROI e escala real.",
    icon: <BarChart3 className="w-6 h-6" />,
    tag: "Performance",
    content: "Enquanto muitas empresas se contentam com curtidas e impressões, nosso foco em Tráfego Pago é única e estritamente o Retorno Sobre Investimento (ROI). Cuidamos das suas campanhas no Meta Ads, Google Ads (Pesquisa, Display e YouTube), LinkedIn e TikTok Ads. Testamos públicos infinitamente, otimizamos lances e alocamos sua verba nas frentes que trazem leads mais curtos e maduros para o Fechamento."
  },
  {
    slug: 'consultoria-em-ia',
    title: "Consultoria em IA",
    description: "Aplicabilidade prática de Inteligência Artificial para otimizar processos e resultados.",
    icon: <Cpu className="w-6 h-6" />,
    tag: "Innovation",
    content: "A Inteligência Artificial já deixou de ser futuro e tornou-se necessidade operacional. Auxiliamos sua equipe ou diretoria a aplicar I.A. no dia a dia: de prompts precisos a treinamentos de agentes autônomos para fluxo de atendimento e triagem de leads, até geração otimizada de conteúdo em massa. Automatize as tarefas lentas e abra espaço para a criatividade humana brilhar."
  },
  {
    slug: 'audiovisual',
    title: "Audiovisual para Campanhas",
    description: "Produção de vídeos de alta qualidade para anúncios e conteúdo que engajam e convertem.",
    icon: <Video className="w-6 h-6" />,
    tag: "Production",
    content: "Sem vídeo de qualidade, você entra na internet jogando o jogo de quem está no banco de reservas. Para escalar a performance da sua empresa, oferecemos gravações e edições cinematográficas voltadas à retenção (Reels/TikTok dinâmicos) ou argumentação longa (VSL – Vídeo de Vendas). Trabalhamos captação, direção, roteiro persuasivo e sound design (trilha e ritmo de efeitos sonoros)."
  }
];
