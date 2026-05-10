import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Heart,
  Instagram,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  PenTool,
  Search,
  Send,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from 'lucide-react';

import fifteenYearsImage from '../../imagens_site_my_dream/15_anos.webp';
import baptismImage from '../../imagens_site_my_dream/batizado.webp';
import revealTeaImage from '../../imagens_site_my_dream/cha_revelacao.webp';
import floralLavenderImage from '../../imagens_site_my_dream/convite_floral_lavanda.webp';
import goldLuxuryImage from '../../imagens_site_my_dream/convite_luxo_dourado.webp';
import digitalInvitesImage from '../../imagens_site_my_dream/convites_digitais.webp';
import kidsPartyImage from '../../imagens_site_my_dream/festa_infantil.webp';
import heroImage from '../../imagens_site_my_dream/hero_mockup.webp';
import classicMenuImage from '../../imagens_site_my_dream/menu_classico.webp';
import tableSignsImage from '../../imagens_site_my_dream/menus_plaquinhas.webp';
import weddingStationeryImage from '../../imagens_site_my_dream/papelaria_casamento.webp';
import botanicalSaveTheDateImage from '../../imagens_site_my_dream/save_the_date_botanico.webp';
import favorTagsImage from '../../imagens_site_my_dream/tags_lembrancinhas.webp';

export const assets = {
  hero: heroImage,
  digitalInvites: digitalInvitesImage,
  weddingStationery: weddingStationeryImage,
  kidsParty: kidsPartyImage,
  fifteenYears: fifteenYearsImage,
  floralLavender: floralLavenderImage,
  classicMenu: classicMenuImage,
  botanicalSaveTheDate: botanicalSaveTheDateImage,
  goldLuxury: goldLuxuryImage,
  revealTea: revealTeaImage,
  baptism: baptismImage,
  tableSigns: tableSignsImage,
  favorTags: favorTagsImage,
};

export const siteConfig = {
  brand: 'My Dream',
  descriptor: 'Artes Gráficas',
  email: 'contato@mydream.com',
  whatsappBaseUrl: 'https://wa.me/5521971111988',
  whatsappDefaultMessage: 'Olá, quero criar uma arte com a My Dream.',
  instagramUrl: 'https://www.instagram.com/mydream.designers/',
  pinterestUrl: '#',
};

export const buildWhatsappUrl = (message = siteConfig.whatsappDefaultMessage) =>
  `${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#pacotes', label: 'Pacotes' },
  { href: '#catalogo', label: 'Catálogos' },
  { href: '#personalizado', label: 'Personalizado' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
];

export const heroStats = [
  { initials: 'M', tone: 'blush' },
  { initials: 'A', tone: 'lavender' },
  { initials: 'S', tone: 'gold' },
];

export const categories = [
  {
    title: 'Convites digitais',
    description: 'Práticos para enviar direto pelo WhatsApp.',
    image: assets.digitalInvites,
    href: '#catalogo',
  },
  {
    title: 'Papelaria casamento',
    description: 'Identidade visual completa para o grande dia.',
    image: assets.weddingStationery,
    href: '#catalogo',
  },
  {
    title: 'Festa infantil',
    description: 'Temas lúdicos para os pequenos.',
    image: assets.kidsParty,
    href: '#catalogo',
  },
  {
    title: '15 anos',
    description: 'Modernidade e elegância para debutes.',
    image: assets.fifteenYears,
    href: '#catalogo',
  },
];

export const catalogFilters = ['Todos', 'Casamento', 'Infantil', '15 anos', 'Papelaria', 'Digital', 'Floral'] as const;
export type CatalogFilter = (typeof catalogFilters)[number];

export type CatalogCollection = {
  title: string;
  description: string;
  image: string;
  filter: CatalogFilter;
};

export const catalogCollections: CatalogCollection[] = [
  {
    title: 'Casamento',
    description: 'Convites, save the date, menus e detalhes coordenados.',
    image: assets.weddingStationery,
    filter: 'Casamento',
  },
  {
    title: 'Infantil',
    description: 'Modelos delicados para aniversários, chá revelação e batizado.',
    image: assets.kidsParty,
    filter: 'Infantil',
  },
  {
    title: 'Papelaria',
    description: 'Tags, plaquinhas, menus e peças para deixar a mesa completa.',
    image: assets.tableSigns,
    filter: 'Papelaria',
  },
  {
    title: 'Digital',
    description: 'Artes prontas para enviar pelo WhatsApp com praticidade.',
    image: assets.digitalInvites,
    filter: 'Digital',
  },
];

export type OfferPackage = {
  title: string;
  price: string;
  description: string;
  badge: string;
  features: string[];
  message: string;
  highlighted?: boolean;
};

export const offerPackages: OfferPackage[] = [
  {
    title: 'Convite digital simples',
    price: 'R$ 49,90',
    description: 'Para quem já gostou de um modelo pronto e precisa personalizar os dados do evento.',
    badge: 'Mais pedido',
    features: ['Modelo do catálogo personalizado', 'Arquivo pronto para WhatsApp', '1 ajuste simples incluso'],
    message: 'Olá, quero o pacote Convite digital simples da My Dream.',
  },
  {
    title: 'Convite interativo',
    price: 'R$ 79,90',
    description: 'Para eventos que precisam de uma experiência mais completa no envio aos convidados.',
    badge: 'Melhor valor',
    features: ['Botões para confirmação, local ou presente', 'Visual adaptado ao tema', 'Entrega digital organizada'],
    message: 'Olá, quero o pacote Convite interativo da My Dream.',
    highlighted: true,
  },
  {
    title: 'Kit digital festa/casamento',
    price: 'R$ 129,90 a R$ 189,90',
    description: 'Para manter convite, tags, menus e detalhes do evento com a mesma identidade visual.',
    badge: 'Kit completo',
    features: ['Convite + peças digitais coordenadas', 'Ideal para casamento ou festa', 'Itens definidos no atendimento'],
    message: 'Olá, quero saber mais sobre o Kit digital festa/casamento da My Dream.',
  },
  {
    title: 'Personalizado do zero',
    price: 'A partir de R$ 149,90',
    description: 'Para quem quer uma arte exclusiva feita a partir do tema, referências e estilo do evento.',
    badge: 'Exclusivo',
    features: ['Criação sob medida', 'Paleta e estilo definidos no briefing', 'Prazo combinado antes do pagamento'],
    message: 'Olá, quero uma arte personalizada do zero com a My Dream.',
  },
];

export type Product = {
  title: string;
  description: string;
  badge: string;
  image: string;
  price: string;
  format: string;
  delivery: string;
  filters: CatalogFilter[];
  badgeTone: 'rose' | 'lavender' | 'gold';
};

export const products: Product[] = [
  {
    title: 'Floral Lavanda',
    description: 'Estilo rústico e romântico',
    badge: 'Convite Digital',
    image: assets.floralLavender,
    price: 'R$ 49,90',
    format: 'Arquivo digital',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'rose',
  },
  {
    title: 'Minimal Classic',
    description: 'Elegância no minimalismo',
    badge: 'Papelaria',
    image: assets.classicMenu,
    price: 'R$ 29,90',
    format: 'Menu ou cartão',
    delivery: 'Arte em 4 dias',
    filters: ['Casamento', 'Papelaria'],
    badgeTone: 'lavender',
  },
  {
    title: 'Botanical Garden',
    description: 'Folhagens e frescor',
    badge: 'Save the Date',
    image: assets.botanicalSaveTheDate,
    price: 'R$ 39,90',
    format: 'Arquivo digital',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'rose',
  },
  {
    title: 'Luxo Rose Gold',
    description: 'Brilho e sofisticação',
    badge: 'Pacote Completo',
    image: assets.goldLuxury,
    price: 'R$ 149,90',
    format: 'Kit coordenado',
    delivery: 'Arte em 5 dias',
    filters: ['Casamento', 'Papelaria', 'Digital'],
    badgeTone: 'lavender',
  },
  {
    title: 'Chá Revelação',
    description: 'Delicadeza para revelar esse momento',
    badge: 'Convite Digital',
    image: assets.revealTea,
    price: 'R$ 49,90',
    format: 'Arquivo digital',
    delivery: 'Prévia em 3 dias',
    filters: ['Infantil', 'Digital'],
    badgeTone: 'rose',
  },
  {
    title: 'Batizado Clássico',
    description: 'Arte suave para uma celebração especial',
    badge: 'Convite Digital',
    image: assets.baptism,
    price: 'R$ 44,90',
    format: 'Arquivo digital',
    delivery: 'Prévia em 3 dias',
    filters: ['Infantil', 'Digital'],
    badgeTone: 'gold',
  },
  {
    title: 'Menus & Plaquinhas',
    description: 'Peças coordenadas para a recepção',
    badge: 'Papelaria',
    image: assets.tableSigns,
    price: 'R$ 69,90',
    format: 'Kit mesa posta',
    delivery: 'Arte em 4 dias',
    filters: ['Casamento', 'Papelaria', 'Floral'],
    badgeTone: 'lavender',
  },
  {
    title: 'Tags Lembrancinhas',
    description: 'Detalhes finais com identidade visual',
    badge: 'Papelaria',
    image: assets.favorTags,
    price: 'R$ 24,90',
    format: 'Tags digitais',
    delivery: 'Arte em 3 dias',
    filters: ['Casamento', 'Infantil', 'Papelaria'],
    badgeTone: 'gold',
  },
  {
    title: 'Festa Jardim Encantado',
    description: 'Visual lúdico e delicado para comemorações infantis',
    badge: 'Convite Digital',
    image: assets.kidsParty,
    price: 'R$ 54,90',
    format: 'Arquivo digital',
    delivery: 'Prévia em 3 dias',
    filters: ['Infantil', 'Digital', 'Floral'],
    badgeTone: 'rose',
  },
  {
    title: 'Debutante Floral',
    description: 'Composição moderna para festas de 15 anos',
    badge: '15 anos',
    image: assets.fifteenYears,
    price: 'R$ 64,90',
    format: 'Convite digital',
    delivery: 'Prévia em 4 dias',
    filters: ['15 anos', 'Digital', 'Floral'],
    badgeTone: 'lavender',
  },
  {
    title: 'Identidade Casamento',
    description: 'Linha visual para convite, menu e papelaria do evento',
    badge: 'Pacote Completo',
    image: assets.weddingStationery,
    price: 'R$ 189,90',
    format: 'Kit coordenado',
    delivery: 'Arte em 7 dias',
    filters: ['Casamento', 'Papelaria', 'Floral'],
    badgeTone: 'gold',
  },
  {
    title: 'Convite WhatsApp',
    description: 'Modelo direto para enviar aos convidados com elegância',
    badge: 'Digital',
    image: assets.digitalInvites,
    price: 'R$ 39,90',
    format: 'Imagem para envio',
    delivery: 'Prévia em 2 dias',
    filters: ['Digital', 'Infantil'],
    badgeTone: 'rose',
  },
];

export type CustomWork = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: 'rose' | 'lavender';
  featured?: boolean;
};

export const customWorks: CustomWork[] = [
  {
    title: 'Convite Único',
    description: 'Design exclusivo para seu evento, pensado em cada detalhe.',
    icon: PenTool,
    tone: 'rose',
  },
  {
    title: 'Identidade Visual',
    description: 'Monogramas e paletas para padronizar toda a festa.',
    icon: Palette,
    tone: 'lavender',
    featured: true,
  },
  {
    title: 'Pacotes',
    description: 'Convite, menu e tags em um estilo harmônico.',
    icon: Layers,
    tone: 'rose',
  },
];

export type ServiceRule = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: 'rose' | 'lavender' | 'gold';
};

export const serviceRules: ServiceRule[] = [
  {
    title: 'Tudo 100% digital',
    description:
      'Não enviamos produto físico. A arte final chega pronta para WhatsApp, e-mail ou impressão por conta da cliente.',
    icon: Smartphone,
    tone: 'rose',
  },
  {
    title: 'Prazo transparente',
    description: 'O prazo começa após a confirmação do pagamento e o envio completo dos dados do evento.',
    icon: Sparkles,
    tone: 'gold',
  },
  {
    title: 'Atendimento pelo WhatsApp',
    description: 'A escolha do modelo, dúvidas e dados da personalização são alinhados diretamente com a My Dream.',
    icon: MessageCircle,
    tone: 'lavender',
  },
];

export const processSteps = [
  {
    title: 'Escolha',
    description: 'Explore nosso catálogo e escolha seu favorito.',
    icon: Search,
  },
  {
    title: 'Converse',
    description: 'Fale com a My Dream no WhatsApp para confirmar modelo, prazo e detalhes.',
    icon: MessageCircle,
  },
  {
    title: 'Dados',
    description: 'Envie os dados do evento depois da confirmação do pedido.',
    icon: Send,
  },
  {
    title: 'Receba',
    description: 'Receba a arte digital pronta para compartilhar com os convidados.',
    icon: Sparkles,
  },
];

export const testimonials = [
  {
    name: 'Camila, casamento',
    initials: 'C',
    tone: 'rose',
    text: 'Escolhi um modelo floral e ajustaram tudo com os dados da cerimônia. Ficou delicado e combinou com a identidade do casamento.',
  },
  {
    name: 'Mariana, aniversário infantil',
    initials: 'M',
    tone: 'lavender',
    text: 'Mandei o tema da festa e recebi uma arte bem organizada para enviar no WhatsApp. O atendimento ajudou muito nos detalhes.',
  },
  {
    name: 'Amanda, chá revelação',
    initials: 'A',
    tone: 'gold',
    text: 'O convite digital facilitou a confirmação dos convidados e ficou pronto dentro do prazo combinado.',
  },
  {
    name: 'Juliana, batizado',
    initials: 'J',
    tone: 'rose',
    text: 'Eu queria algo suave e simples. A arte veio pronta para compartilhar com a família e ainda pude pedir um ajuste no texto.',
  },
  {
    name: 'Bianca, 15 anos',
    initials: 'B',
    tone: 'lavender',
    text: 'O convite ficou moderno sem perder delicadeza. Gostei porque antes de pagar já entendi prazo, valor e o que estava incluso.',
  },
];

export type CommercialPolicy = {
  title: string;
  summary: string;
  items: string[];
};

export const commercialPolicies: CommercialPolicy[] = [
  {
    title: 'Produto digital',
    summary: 'A My Dream trabalha somente com artes digitais.',
    items: [
      'Não enviamos nenhum item físico.',
      'A entrega é feita em arquivo digital, pronto para compartilhar ou imprimir por conta da cliente.',
      'Cores podem variar conforme tela, celular, impressora ou gráfica escolhida.',
    ],
  },
  {
    title: 'Prazo',
    summary: 'O prazo é combinado antes do pedido ser iniciado.',
    items: [
      'Modelos prontos costumam ter prévia em até 3 dias úteis.',
      'Projetos exclusivos podem levar de 7 a 10 dias úteis.',
      'O prazo começa após pagamento confirmado e envio completo dos dados do evento.',
    ],
  },
  {
    title: 'Alterações',
    summary: 'Ajustes pequenos entram no processo, mudanças grandes podem virar novo orçamento.',
    items: [
      'Cada pacote informa o que está incluso no atendimento.',
      'Alterações de texto, nomes e dados do evento são tratadas com prioridade.',
      'Mudança completa de tema, paleta ou estrutura pode alterar prazo e valor.',
    ],
  },
  {
    title: 'Pagamento',
    summary: 'A compra é finalizada pelo atendimento, com link ou Pix.',
    items: [
      'O pagamento é enviado depois da confirmação do pacote/modelo escolhido.',
      'O pedido entra na fila após confirmação do pagamento.',
      'Como se trata de arte personalizada, cancelamentos após início da criação são avaliados caso a caso.',
    ],
  },
  {
    title: 'Privacidade',
    summary: 'Usamos dados mínimos para atendimento, personalização e medição dos anúncios.',
    items: [
      'As informações enviadas pela cliente no WhatsApp são usadas para criar, ajustar e entregar a arte digital solicitada.',
      'A medição da Meta ajuda a entender visitas, cliques e desempenho das campanhas para melhorar os anúncios.',
      'A cliente pode chamar no WhatsApp para tirar dúvidas sobre dados do pedido, atendimento e entrega.',
    ],
  },
];

export const faqs = [
  {
    question: 'O convite é digital ou impresso?',
    answer:
      'Trabalhamos exclusivamente com artes digitais. Você recebe o arquivo pronto para enviar por WhatsApp ou para imprimir na gráfica de sua preferência.',
  },
  {
    question: 'Quanto tempo demora para receber?',
    answer:
      'Para modelos prontos, entregamos a prévia em até 3 dias úteis. Projetos exclusivos podem levar de 7 a 10 dias úteis.',
  },
  {
    question: 'Como é feito o pagamento?',
    answer:
      'Depois da conversa e confirmação do modelo, enviamos as opções de pagamento disponíveis, como Pix ou link de pagamento.',
  },
  {
    question: 'Posso alterar textos, cores e detalhes do modelo?',
    answer:
      'Sim. Os modelos do catálogo recebem personalização com os dados do evento e pequenos ajustes visuais combinados no atendimento.',
  },
  {
    question: 'Vocês montam uma arte totalmente exclusiva?',
    answer:
      'Sim. Quando o catálogo não atende ao que você imaginou, criamos uma arte personalizada a partir do tema, referências e informações do evento.',
  },
];

export const icons = {
  ArrowRight,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
};
