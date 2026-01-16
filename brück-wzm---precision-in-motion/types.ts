

export type Language = 'de' | 'en';

export interface Product {
  id: number;
  name: string;
  category: string;
  systemType: 'milling' | 'turning' | 'automation' | 'other';
  image: string;
  specs: string[];
  status: 'available' | 'sold' | null;
  description?: string;
  longDescription?: string;
  features?: string[];
}

export interface Service {
  id: string;
  icon: 'settings' | 'wrench' | 'shield-check';
  titleKey: string;
  descKey: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
  benefits: { title: string; desc: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string or Markdown from CMS
  coverImage: string;
  date: string;
  author: string;
  tags: string[];
}

export interface ModalData {
  productId: number;
  productName: string;
}

export interface Translations {
  nav: {
    products: string;
    services: string;
    company: string;
    contact: string;
  };
  nav_sub: {
    prod_all: string;
    prod_milling: string;
    prod_turning: string;
    prod_automation: string;
    serv_maintenance: string;
    serv_automation: string;
    serv_training: string;
    comp_overview: string;
    comp_team: string;
    comp_history: string;
    comp_news: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  stats: {
    machines: string;
    clients: string;
    countries: string;
    experience: string;
  };
  products: {
    title: string;
    desc: string;
    viewAll: string;
    inquiry: string;
    details: string;
    sold: string;
  };
  services: {
    title: string;
    s1_title: string;
    s1_desc: string;
    s2_title: string;
    s2_desc: string;
    s3_title: string;
    s3_desc: string;
    viewAll: string;
  };
  company: {
    title: string;
    desc: string;
    history: string;
    values: string;
    viewAll: string;
  };
  proven: {
    tag: string;
    title: string;
    desc: string;
    stat_roi: string;
    stat_countries: string;
    tags: string[];
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    backToBlog: string;
    publishedOn: string;
  };
  footer: {
    rights: string;
    address: string;
    desc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    visionText: string;
    name: string;
    email: string;
    companyName: string;
    projectInfo: string;
    phone: string;
    message: string;
    send: string;
    modalTitle: string;
    productRef: string;
    addressCard: string;
    emailCard: string;
    phoneCard: string;
  };
}