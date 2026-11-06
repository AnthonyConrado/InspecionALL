import type { NavItem } from '../types';

export const mainNav: NavItem[] = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Áreas de Atuação', to: '/areas-de-atuacao' },
  { label: 'Casos Concluídos', to: '/experiencias' },
  { label: 'Acessibilidade', to: '/acessibilidade' },
];

export const contactNav: NavItem = { label: 'Contato', to: '/contato' };
