import type { PageSeo } from '../types';

/** Nome exibido na aba do navegador. */
const brand = 'Bianca Fernandez | Acessibilidade';
/** Nome do site nos resultados do Google (WebSite/og:site_name). */
export const siteName = 'InspecionAll Engenharia';

/**
 * Metadados por página. São usados tanto no navegador (componente <Seo>)
 * quanto na pré-renderização (scripts/prerender.mjs) e no sitemap.xml.
 */
export const seoPages: PageSeo[] = [
  {
    path: '/',
    title: brand,
    description:
      'InspecionAll Engenharia — Bianca Fernandez, engenheira civil especialista em acessibilidade arquitetônica e urbanística: laudos, diagnósticos, vistorias, auditorias, inspeções, atestados e consultoria. Atendimento em todo o Brasil e internacional.',
    keywords: [
      'acessibilidade arquitetônica',
      'acessibilidade urbanística',
      'engenharia civil diagnóstica',
      'laudo de acessibilidade',
      'consultoria em acessibilidade',
      'InspecionAll Engenharia',
      'InspecionAll',
    ],
    priority: 1,
  },
  {
    path: '/sobre',
    title: `Sobre — ${brand}`,
    description:
      'Conheça a trajetória, a metodologia de trabalho e os compromissos profissionais de Bianca Fernandez, especialista em acessibilidade arquitetônica e urbanística.',
    priority: 0.8,
  },
  {
    path: '/servicos',
    title: `Serviços — ${brand}`,
    description:
      'Laudos técnicos, diagnósticos, adequação de edificações existentes, vistorias, auditorias, consultorias, inspeções e atestados de acessibilidade.',
    keywords: [
      'laudos de acessibilidade',
      'diagnóstico de acessibilidade',
      'auditoria de acessibilidade',
      'adequação de edificações',
      'atestado de acessibilidade',
    ],
    priority: 0.9,
  },
  {
    path: '/areas-de-atuacao',
    title: `Áreas de Atuação — ${brand}`,
    description:
      'Acessibilidade em edificações comerciais, industriais, educacionais, de saúde, históricas, turísticas, hospedagens e complexos tecnológicos, além de adequação de edificações existentes.',
    keywords: [
      'acessibilidade em edifícios comerciais',
      'acessibilidade na indústria',
      'acessibilidade em escolas',
      'acessibilidade hospitalar',
    ],
    priority: 0.8,
  },
  {
    path: '/experiencias',
    title: `Casos Concluídos — ${brand}`,
    description:
      'Casos concluídos de acessibilidade em edificações existentes, comerciais, industriais, educacionais, de saúde, históricas, turísticas, hospedagens e complexos tecnológicos, além de atestados — apresentados de forma geral, em respeito à confidencialidade.',
    priority: 0.7,
  },
  {
    path: '/acessibilidade',
    title: `Acessibilidade e Legislação — ${brand}`,
    description:
      'Acessibilidade arquitetônica e urbanística, barreiras, desenho universal, laudos e responsabilidade técnica. Referências: Lei 13.146/2015, Lei 10.098/2000, Decreto 5.296/2004, ABNT NBR 9050 e NBR 16537.',
    keywords: ['NBR 9050', 'NBR 16537', 'Lei Brasileira de Inclusão', 'desenho universal'],
    priority: 0.7,
  },
  {
    path: '/contato',
    title: `Contato — ${brand}`,
    description:
      'Solicite atendimento para laudos, diagnósticos, vistorias, auditorias, consultorias, inspeções e atestados de acessibilidade, no Brasil ou no exterior.',
    priority: 0.8,
  },
];

export const notFoundSeo: PageSeo = {
  path: '/404',
  title: `Página não encontrada — ${brand}`,
  description: 'A página procurada não foi encontrada.',
  noindex: true,
};

export function getSeo(path: string): PageSeo {
  const normalized = path !== '/' ? path.replace(/\/+$/, '') : path;
  return seoPages.find((p) => p.path === normalized) ?? notFoundSeo;
}
