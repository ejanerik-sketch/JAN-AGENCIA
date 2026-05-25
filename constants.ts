import { 
  BarChart, 
  Target, 
  PenTool, 
  Globe, 
  Megaphone, 
  Rocket, 
  Facebook, 
  Instagram, 
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';
import { NavItem, ServiceItem, MethodologyStep, SocialLink } from './types';

// Brand Colors
export const COLORS = {
  primary: '#1d8490', // Teal/Ciano
  secondary: '#ff6330', // Orange
  dark: '#0f4c54',
  light: '#f0f9fa'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Quem Somos', href: '/#sobre' },
  { label: 'Serviços', href: '/#solucoes' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Branding & Identidade Visual',
    description: 'Criamos e fortalecemos a essência da sua marca. Uma identidade visual coesa e um branding bem desenvolvido são o norte para todas as suas ações.',
    benefit: 'Construa uma marca forte, reconhecível e que conecta com seu cliente ideal.',
    icon: Target
  },
  {
    title: 'Marketing de Performance',
    description: 'Potencialize suas vendas com anúncios segmentados no Facebook, Instagram Ads e Google. Alcançamos novos clientes e geramos tráfego qualificado.',
    benefit: 'Venda muito mais, com campanhas otimizadas e retorno sobre investimento claro.',
    icon: BarChart
  },
  {
    title: 'Presença Digital Otimizada',
    description: 'Desenvolvemos sites institucionais e landing pages de alta conversão. Ferramentas essenciais para expor seus serviços e capturar leads.',
    benefit: 'Tenha uma vitrine digital profissional e eficaz que trabalha para você 24h por dia.',
    icon: Globe
  },
  {
    title: 'Conteúdo Estratégico',
    description: 'Atraia, engaje e converta clientes com Inbound Marketing, produção audiovisual impactante e campanhas de e-mail marketing personalizadas.',
    benefit: 'Crie conexão genuína com seu público, eduque-o e transforme-o em cliente fiel.',
    icon: Megaphone
  },
  {
    title: 'Design Profissional',
    description: 'Invista em um design que não é apenas bonito, mas estratégico. Do material institucional às embalagens de produtos.',
    benefit: 'Destaque-se da concorrência com uma imagem impecável e coerente.',
    icon: PenTool
  },
  {
    title: 'Lançamentos Digitais',
    description: 'Estruturamos e executamos lançamentos de infoprodutos, cursos e serviços digitais para escalar seus ganhos.',
    benefit: 'Maximize o alcance e as vendas dos seus produtos digitais com estratégias comprovadas.',
    icon: Rocket
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    stepNumber: '01',
    title: 'Elaborar',
    description: 'Diagnóstico aprofundado do seu negócio e construção de um plano de marketing digital sob medida.'
  },
  {
    stepNumber: '02',
    title: 'Executar',
    description: 'Implementação prática utilizando as ferramentas e canais mais eficazes para alcançar seus clientes.'
  },
  {
    stepNumber: '03',
    title: 'Medir',
    description: 'Monitoramento constante de métricas e dados para entender o que funciona e o que pode ser aprimorado.'
  },
  {
    stepNumber: '04',
    title: 'Direcionar',
    description: 'Otimização contínua das campanhas para garantir que cada investimento traga o melhor retorno possível.'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: '#', icon: Instagram },
  { platform: 'LinkedIn', url: '#', icon: Linkedin },
  { platform: 'Facebook', url: '#', icon: Facebook },
];

export const CONTACT_INFO = {
  email: 'contato@janagencia.com.br',
  phone: '(73) 99999-9999',
  address: 'Itabuna, Bahia',
  cnpj: '24.442.918/0001-59'
};