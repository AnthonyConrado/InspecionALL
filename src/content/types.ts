import type { LucideIcon } from 'lucide-react';

export interface Education {
  /** Ex.: "Bacharelado em Engenharia Civil" */
  course: string;
  /** Ex.: "Universidade X". Opcional. */
  institution?: string;
  /** Ex.: "em andamento". Opcional. */
  status?: string;
  /** Ex.: "2015" ou "2013 – 2018". Opcional. */
  period?: string;
}

export interface Research {
  title: string;
  event: string;
  /** Ex.: "FEA/USP, São Paulo, 2025" */
  details?: string;
  coauthors?: string[];
  /** Link para os anais, quando disponível. */
  url?: string;
}

export interface Qualification {
  title: string;
  /** Instituição emissora, quando houver. */
  issuer?: string;
  year?: string;
}

export interface Profile {
  name: string;
  shortName: string;
  area: string;
  specialty: string;
  /** Empresa da qual é fundadora/sócia. show=false oculta a menção no site. */
  company: {
    name: string;
    role: string;
    show: boolean;
  };
  /** Registro profissional (ex.: CREA). Preencha somente com dado confirmado. */
  professionalRegistration: string;
  /** Parágrafos de apresentação. */
  bio: string[];
  education: Education[];
  /** Trabalhos acadêmicos apresentados ou publicados. */
  research: Research[];
  qualifications: Qualification[];
  languages: string[];
  coverage: {
    national: string;
    international: string;
  };
  contact: {
    email: string;
    /** Telefone como deve aparecer no site, ex.: "(11) 94896-5283". */
    phoneDisplay: string;
    /** Somente dígitos, com DDI e DDD. Ex.: "5511999999999". Vazio = botão oculto. */
    whatsapp: string;
    whatsappMessage: string;
    linkedin: string;
    instagram: string;
  };
}

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  /** Frase curta usada em cards. */
  summary: string;
  description: string;
  objectives: string[];
  applications: string[];
  audience: string[];
  benefits: string[];
}

export interface Segment {
  slug: string;
  title: string;
  /** Rótulo curto para formulários e listas. */
  shortTitle: string;
  icon: LucideIcon;
  /** Página Áreas de Atuação */
  summary: string;
  needs: string[];
  solutions: string[];
  /** Página Experiências */
  overview: string;
  challenges: string[];
  importance: string;
  evaluations: string[];
}

export interface NavItem {
  label: string;
  to: string;
}

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  /** Prioridade no sitemap (0 a 1). */
  priority?: number;
  noindex?: boolean;
}
