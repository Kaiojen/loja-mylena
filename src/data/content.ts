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

import conviteMinimalistaModernoImage from '../../imagens_site_my_dream/convite_minimalista_moderno.jpeg';
import conviteFlorLineartImage from '../../imagens_site_my_dream/convite_floral_lineart.jpeg';
import conviteFolhagensTerracotaImage from '../../imagens_site_my_dream/convite_folhagens_terracota.jpeg';
import conviteLavandaAquarelaImage from '../../imagens_site_my_dream/convite_lavanda_aquarela.jpeg';
import conviteVerdeRosaFloralImage from '../../imagens_site_my_dream/convite_verde_rosa_floral.jpeg';
import conviteFlorRomanticoImage from '../../imagens_site_my_dream/convite_floral_romantico.jpeg';
import convitePampasMarsalaImage from '../../imagens_site_my_dream/convite_pampas_marsala.jpeg';
import conviteEucaliptoPuroImage from '../../imagens_site_my_dream/convite_eucalipto_puro.jpeg';
import conviteBotanicoEleganteImage from '../../imagens_site_my_dream/convite_botanico_elegante.jpeg';
import conviteDouradoRefinadoImage from '../../imagens_site_my_dream/convite_dourado_refinado.jpeg';
import conviteGreeneryClassicoImage from '../../imagens_site_my_dream/convite_greenery_classico.jpeg';
import conviteBohoTerrosoImage from '../../imagens_site_my_dream/convite_boho_terroso.jpeg';
import conviteOutonoFloralImage from '../../imagens_site_my_dream/convite_outono_floral.jpeg';
import conviteVerdeOuroImage from '../../imagens_site_my_dream/convite_verde_ouro.jpeg';
import conviteCerejeiraRosaImage from '../../imagens_site_my_dream/convite_cerejeira_rosa.jpeg';

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
  conviteMinimalistaModerno: conviteMinimalistaModernoImage,
  conviteFlorLineart: conviteFlorLineartImage,
  conviteFolhagensTerracota: conviteFolhagensTerracotaImage,
  conviteLavandaAquarela: conviteLavandaAquarelaImage,
  conviteVerdeRosaFloral: conviteVerdeRosaFloralImage,
  conviteFlorRomantico: conviteFlorRomanticoImage,
  convitePampasMarsala: convitePampasMarsalaImage,
  conviteEucaliptoPuro: conviteEucaliptoPuroImage,
  conviteBotanicoElegante: conviteBotanicoEleganteImage,
  conviteDouradoRefinado: conviteDouradoRefinadoImage,
  conviteGreeneryClassico: conviteGreeneryClassicoImage,
  conviteBohoTerroso: conviteBohoTerrosoImage,
  conviteOutonoFloral: conviteOutonoFloralImage,
  conviteVerdeOuro: conviteVerdeOuroImage,
  conviteCerejeiraRosa: conviteCerejeiraRosaImage,
};

export const siteConfig = {
  brand: 'My Dream',
  descriptor: 'Artes Gráficas',
  email: 'contato@mydream.com',
  whatsappBaseUrl: 'https://wa.me/5521971111988',
  whatsappDefaultMessage: 'Olá, quero criar o convite do meu casamento com a My Dream.',
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
    title: 'Convites Digitais',
    description: 'Do modelo simples com data e endereço ao convite com RSVP, localização e lista de presentes.',
    image: assets.digitalInvites,
    href: '#pacotes',
  },
  {
    title: 'Kit Casamento Completo',
    description: 'Save the date, convite, menus, tags e agradecimento na mesma identidade.',
    image: assets.weddingStationery,
    href: '#pacotes',
  },
  {
    title: 'Papelaria para Mesa',
    description: 'Menus, plaquinhas e tags que completam a decoração do grande dia.',
    image: assets.tableSigns,
    href: '#catalogo',
  },
  {
    title: 'Outras Ocasiões',
    description: 'Chá revelação, batizado, 15 anos e festa infantil.',
    image: assets.kidsParty,
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
    description: 'Convites interativos, save the date, menus e papelaria coordenada para o grande dia.',
    image: assets.weddingStationery,
    filter: 'Casamento',
  },
  {
    title: 'Papelaria',
    description: 'Menus, plaquinhas, tags e peças para deixar cada detalhe com a sua identidade.',
    image: assets.tableSigns,
    filter: 'Papelaria',
  },
  {
    title: 'Floral',
    description: 'Coleção com elementos botânicos — romântico, delicado e atemporal.',
    image: assets.floralLavender,
    filter: 'Floral',
  },
  {
    title: 'Outras Ocasiões',
    description: 'Chá revelação, batizado, 15 anos e festa infantil.',
    image: assets.kidsParty,
    filter: 'Infantil',
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
    title: 'Convite Tradicional',
    price: 'R$ 49,90',
    description: 'Para quem quer uma arte linda e caprichada para compartilhar, sem precisar de RSVP ou funcionalidades extras.',
    badge: 'Mais acessível',
    features: ['Arte digital com data, horário e endereço', 'Modelo personalizado do catálogo', 'Entrega em até 2 dias úteis'],
    message: 'Olá, quero o Convite Tradicional da My Dream.',
  },
  {
    title: 'Convite Interativo',
    price: 'R$ 79,90',
    description: 'Para a noiva que escolheu um modelo do catálogo e quer uma experiência completa para os convidados.',
    badge: 'Entrada perfeita',
    features: ['Modelo personalizado com os dados do casamento', 'RSVP digital, localização e lista de presentes', 'Entrega em até 3 dias úteis'],
    message: 'Olá, quero o Convite Interativo de casamento da My Dream.',
  },
  {
    title: 'Kit Casamento Completo',
    price: 'R$ 159,90',
    description: 'Para a noiva que quer uma identidade visual única do save the date até o agradecimento.',
    badge: 'Mais escolhido',
    features: ['Convite interativo + save the date + tags + menus + agradecimento', 'Mesma identidade visual em todas as peças', 'Ajustes inclusos até aprovar cada arte'],
    message: 'Olá, quero o Kit Casamento Completo da My Dream.',
    highlighted: true,
  },
  {
    title: 'Kit Personalizado do Zero',
    price: 'R$ 249,90',
    description: 'Para a noiva que tem uma visão exclusiva e quer uma identidade criada do zero, sem template.',
    badge: 'Exclusivo',
    features: ['Tudo do Kit Completo + identidade visual exclusiva', 'Paleta, tipografia e estilo definidos no briefing', 'Você não escolhe sozinha — orientamos cada detalhe'],
    message: 'Olá, quero o Kit Personalizado do Zero para meu casamento na My Dream.',
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
  subtype?: 'digital' | 'interativo' | 'kit' | 'outras';
};

export const products: Product[] = [
  {
    title: 'Floral Romântico',
    description: 'Aquarela rosa com flores em tons coral e botões interativos em laranja',
    badge: 'Convite Interativo',
    image: assets.conviteFlorRomantico,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'rose',
    subtype: 'interativo',
  },
  {
    title: 'Boho Terroso',
    description: 'Buquê outonal com rosas e flores em tons ferrugem e marfim — arte digital caprichada',
    badge: 'Convite Digital',
    image: assets.conviteBohoTerroso,
    price: 'R$ 49,90',
    format: 'Arte digital',
    delivery: 'Prévia em 2 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'gold',
    subtype: 'digital',
  },
  {
    title: 'Dourado Refinado',
    description: 'Folhagem dourada linha fina, fundo branco e tipografia caligrafia premium',
    badge: 'Convite Digital',
    image: assets.conviteDouradoRefinado,
    price: 'R$ 49,90',
    format: 'Arte digital',
    delivery: 'Prévia em 2 dias',
    filters: ['Casamento', 'Digital'],
    badgeTone: 'gold',
    subtype: 'digital',
  },
  {
    title: 'Verde & Ouro',
    description: 'Eucalipto aquarelado com moldura dourada — confirmar presença e sugestão de presente',
    badge: 'Convite Interativo',
    image: assets.conviteVerdeOuro,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'lavender',
    subtype: 'interativo',
  },
  {
    title: 'Greenery Clássico',
    description: 'Folhagem verde aquarelada com 4 botões: cerimônia, confirmação, presentes e festa',
    badge: 'Convite Interativo',
    image: assets.conviteGreeneryClassico,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'lavender',
    subtype: 'interativo',
  },
  {
    title: 'Minimalista Moderno',
    description: 'Monograma em destaque com fundo neutro e três botões — confirmação, localização e presentes',
    badge: 'Convite Interativo',
    image: assets.conviteMinimalistaModerno,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital'],
    badgeTone: 'lavender',
    subtype: 'interativo',
  },
  {
    title: 'Floral Line Art',
    description: 'Flores em traço fino sobre fundo branco com três botões interativos',
    badge: 'Convite Interativo',
    image: assets.conviteFlorLineart,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'lavender',
    subtype: 'interativo',
  },
  {
    title: 'Folhagens Terracota',
    description: 'Folhagens tropicais em tons terrosos com três botões circulares',
    badge: 'Convite Interativo',
    image: assets.conviteFolhagensTerracota,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital'],
    badgeTone: 'gold',
    subtype: 'interativo',
  },
  {
    title: 'Lavanda Aquarela',
    description: 'Aquarela floral em tons de lavanda e lilás com três botões interativos',
    badge: 'Convite Interativo',
    image: assets.conviteLavandaAquarela,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'lavender',
    subtype: 'interativo',
  },
  {
    title: 'Verde & Rosa Floral',
    description: 'Flores delicadas em verde e rosé com traço fino e três botões',
    badge: 'Convite Interativo',
    image: assets.conviteVerdeRosaFloral,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'rose',
    subtype: 'interativo',
  },
  {
    title: 'Pampas Marsala',
    description: 'Capim-dos-pampas e folhagem seca em tons marsala com três botões',
    badge: 'Convite Interativo',
    image: assets.convitePampasMarsala,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'rose',
    subtype: 'interativo',
  },
  {
    title: 'Eucalipto Puro',
    description: 'Eucalipto aquarelado minimalista com iniciais e três botões em verde escuro',
    badge: 'Convite Interativo',
    image: assets.conviteEucaliptoPuro,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'lavender',
    subtype: 'interativo',
  },
  {
    title: 'Botânico Elegante',
    description: 'Flores botânicas em traço suave com iniciais e três botões em verde',
    badge: 'Convite Interativo',
    image: assets.conviteBotanicoElegante,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'lavender',
    subtype: 'interativo',
  },
  {
    title: 'Outono Floral',
    description: 'Buquê outonal com rosas e crisântemos em tons ferrugem e marfim',
    badge: 'Convite Digital',
    image: assets.conviteOutonoFloral,
    price: 'R$ 49,90',
    format: 'Arte digital',
    delivery: 'Prévia em 2 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'gold',
    subtype: 'digital',
  },
  {
    title: 'Cerejeira Rosa',
    description: 'Flor de cerejeira com monograma delicado, brasão e versículo',
    badge: 'Convite Digital',
    image: assets.conviteCerejeiraRosa,
    price: 'R$ 49,90',
    format: 'Arte digital',
    delivery: 'Prévia em 2 dias',
    filters: ['Casamento', 'Digital', 'Floral'],
    badgeTone: 'rose',
    subtype: 'digital',
  },
  {
    title: 'Luxo Rose Gold',
    description: 'Brilho e sofisticação para um casamento memorável',
    badge: 'Kit Completo',
    image: assets.goldLuxury,
    price: 'R$ 159,90',
    format: 'Kit coordenado',
    delivery: 'Arte em 5 dias',
    filters: ['Casamento', 'Papelaria', 'Digital'],
    badgeTone: 'gold',
    subtype: 'kit',
  },
  {
    title: 'Identidade Casamento',
    description: 'Convite, save the date, menus, tags e agradecimento',
    badge: 'Kit Completo',
    image: assets.weddingStationery,
    price: 'R$ 159,90',
    format: 'Kit coordenado',
    delivery: 'Arte em 5 dias',
    filters: ['Casamento', 'Papelaria', 'Floral'],
    badgeTone: 'lavender',
    subtype: 'kit',
  },
  {
    title: 'Menus & Plaquinhas',
    description: 'Peças coordenadas para deixar a mesa completa',
    badge: 'Papelaria',
    image: assets.tableSigns,
    price: 'R$ 79,90',
    format: 'Kit mesa posta',
    delivery: 'Arte em 4 dias',
    filters: ['Casamento', 'Papelaria', 'Floral'],
    badgeTone: 'lavender',
    subtype: 'kit',
  },
  {
    title: 'Tags Lembrancinhas',
    description: 'Detalhes finais na identidade visual do casamento',
    badge: 'Papelaria',
    image: assets.favorTags,
    price: 'R$ 39,90',
    format: 'Tags digitais',
    delivery: 'Arte em 3 dias',
    filters: ['Casamento', 'Papelaria'],
    badgeTone: 'gold',
    subtype: 'kit',
  },
  {
    title: 'Minimal Classic',
    description: 'Elegância minimalista para a mesa da recepção',
    badge: 'Papelaria',
    image: assets.classicMenu,
    price: 'R$ 39,90',
    format: 'Menu ou cartão',
    delivery: 'Arte em 3 dias',
    filters: ['Casamento', 'Papelaria'],
    badgeTone: 'lavender',
    subtype: 'kit',
  },
  {
    title: 'Chá Revelação',
    description: 'Delicadeza para revelar esse momento especial',
    badge: 'Outras Ocasiões',
    image: assets.revealTea,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Infantil', 'Digital'],
    badgeTone: 'rose',
    subtype: 'outras',
  },
  {
    title: 'Batizado Clássico',
    description: 'Arte suave para uma celebração especial',
    badge: 'Outras Ocasiões',
    image: assets.baptism,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Infantil', 'Digital'],
    badgeTone: 'gold',
    subtype: 'outras',
  },
  {
    title: 'Debutante Floral',
    description: 'Composição moderna para festas de 15 anos',
    badge: 'Outras Ocasiões',
    image: assets.fifteenYears,
    price: 'R$ 49,90',
    format: 'Arte digital',
    delivery: 'Prévia em 2 dias',
    filters: ['15 anos', 'Digital', 'Floral'],
    badgeTone: 'lavender',
    subtype: 'outras',
  },
  {
    title: 'Festa Jardim Encantado',
    description: 'Visual lúdico e delicado para aniversários infantis',
    badge: 'Outras Ocasiões',
    image: assets.kidsParty,
    price: 'R$ 79,90',
    format: 'Link interativo',
    delivery: 'Prévia em 3 dias',
    filters: ['Infantil', 'Digital', 'Floral'],
    badgeTone: 'rose',
    subtype: 'outras',
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
    title: 'Convite Exclusivo',
    description: 'Criado do zero para o seu casamento — sem template, sem limitação de estilo.',
    icon: PenTool,
    tone: 'rose',
  },
  {
    title: 'Identidade do Casamento',
    description: 'Monograma, paleta e tipografia exclusivos que atravessam todas as peças da papelaria.',
    icon: Palette,
    tone: 'lavender',
    featured: true,
  },
  {
    title: 'Kit Completo Personalizado',
    description: 'Save the date, convite, menus, tags e agradecimento em um estilo único, coordenado do início ao fim.',
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
    name: 'Camila, casamento em março',
    initials: 'C',
    tone: 'rose',
    text: 'Escolhi o kit completo e ficou tudo coordenado — convite, menu e tags na mesma identidade. Os convidados elogiaram muito o RSVP digital.',
  },
  {
    name: 'Fernanda, casamento em junho',
    initials: 'F',
    tone: 'lavender',
    text: 'Pedi ajustes três vezes e a equipe aceitou tudo com boa vontade. Só aprovei quando realmente amei. O atendimento é consultivo de verdade.',
  },
  {
    name: 'Larissa, casamento em outubro',
    initials: 'L',
    tone: 'gold',
    text: 'O convite interativo foi um diferencial. Minha sogra, que não é de tecnologia, conseguiu confirmar presença sozinha. Simples e elegante.',
  },
  {
    name: 'Rafaela, casamento em dezembro',
    initials: 'R',
    tone: 'rose',
    text: 'Pedi o personalizado do zero e a identidade visual ficou exatamente como eu imaginei. Não usei template nenhum e o resultado foi único.',
  },
  {
    name: 'Priscila, casamento em setembro',
    initials: 'P',
    tone: 'lavender',
    text: 'Antes de fechar, já sabia exatamente o que estava incluso, o prazo e o valor. Sem surpresa, sem estresse — só casar.',
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
    question: 'Qual a diferença entre o Convite Tradicional e o Convite Interativo?',
    answer:
      'O Convite Tradicional é uma arte digital caprichada com data, horário, endereço e todos os dados do evento — ideal para quem quer algo bonito e direto para compartilhar no WhatsApp. O Convite Interativo vai além: além da arte, entrega um link com RSVP digital (confirmação de presença com um clique), localização no mapa e link para a lista de presentes.',
  },
  {
    question: 'Como funciona o convite digital de casamento?',
    answer:
      'Você escolhe um modelo do catálogo, a gente personaliza com os dados da cerimônia e recepção e entrega um link elegante para compartilhar com os convidados. O convite interativo pode incluir RSVP digital, localização no mapa e link para lista de presentes.',
  },
  {
    question: 'Posso ter RSVP digital no meu convite?',
    answer:
      'Sim. O Convite Interativo já inclui botão de confirmação de presença, localização e lista de presentes. Os convidados confirmam com um clique e você acompanha as respostas em tempo real.',
  },
  {
    question: 'O que está incluso no Kit Casamento Completo?',
    answer:
      'Save the date, convite interativo, tags de lembrança, menus de mesa e cartão de agradecimento — tudo com a mesma identidade visual. Você não precisa se preocupar com inconsistência entre as peças.',
  },
  {
    question: 'Quantos ajustes posso pedir antes de aprovar?',
    answer:
      'Você pode pedir ajustes até estar satisfeita com cada peça. Não trabalhamos com limite de rounds — o objetivo é você dizer sim ao convite com segurança.',
  },
  {
    question: 'Com quanto tempo de antecedência devo encomendar?',
    answer:
      'Recomendamos encomendar o save the date com 6 a 8 meses de antecedência e o convite com 2 a 3 meses. Para o Kit Personalizado do Zero, o ideal é começar com pelo menos 3 meses antes da data.',
  },
  {
    question: 'Vocês criam uma identidade visual exclusiva para o meu casamento?',
    answer:
      'Sim. O Kit Personalizado do Zero inclui criação completa: paleta de cores, tipografia, elementos visuais e todas as peças da papelaria sem usar template. Você orienta, nós criamos do zero junto com você.',
  },
];

export const icons = {
  ArrowRight,
  Heart,
  Instagram,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
};
