export interface Concept {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface LegalReference {
  code: string;
  title: string;
  description: string;
  kind: 'lei' | 'decreto' | 'norma';
  url: string;
  sourceLabel: string;
}

/**
 * Data da última conferência de vigência das referências abaixo.
 * Atualize sempre que revisar a lista (normas técnicas e legislação
 * podem ser revisadas, emendadas ou canceladas).
 */
export const legalReviewedAt = 'novembro de 2026';

export const concepts: Concept[] = [
  {
    id: 'acessibilidade-arquitetonica',
    title: 'Acessibilidade arquitetônica',
    paragraphs: [
      'Refere-se às condições que permitem a qualquer pessoa alcançar, entrar, circular e utilizar os ambientes de uma edificação — acessos, circulações horizontais e verticais, sanitários, mobiliário, comunicação e sinalização — com autonomia e segurança.',
      'Envolve parâmetros técnicos como dimensões de passagens e áreas de manobra, inclinações de rampas, características de pisos, alturas de alcance, corrimãos, guarda-corpos e sinalização visual, tátil e sonora.',
    ],
  },
  {
    id: 'acessibilidade-urbanistica',
    title: 'Acessibilidade urbanística',
    paragraphs: [
      'Trata dos espaços e equipamentos públicos e de uso coletivo: calçadas, travessias, rebaixamentos de guia, mobiliário urbano, vagas reservadas, pontos de embarque e a conexão entre a via pública e as edificações.',
      'A continuidade é decisiva: uma edificação acessível perde boa parte de sua utilidade se o percurso até ela apresentar barreiras.',
    ],
  },
  {
    id: 'barreiras',
    title: 'Barreiras arquitetônicas e urbanísticas',
    paragraphs: [
      'Barreiras são entraves ou obstáculos que limitam ou impedem a participação, o acesso e a circulação com segurança. A legislação brasileira as classifica, entre outras categorias, em urbanísticas (nas vias e espaços públicos e de uso coletivo) e arquitetônicas (nos edifícios públicos e privados).',
      'Degraus isolados, portas estreitas, pisos escorregadios ou irregulares, ausência de corrimãos, sanitários sem área de manobra e falta de sinalização são exemplos frequentes.',
    ],
  },
  {
    id: 'desenho-universal',
    title: 'Desenho universal',
    paragraphs: [
      'É a concepção de produtos, ambientes, programas e serviços para serem usados por todas as pessoas, sem necessidade de adaptação ou de projeto específico, incluindo recursos de tecnologia assistiva quando necessários.',
      'Na prática, significa projetar de modo que as soluções acessíveis sejam a regra, e não uma alternativa separada.',
    ],
  },
  {
    id: 'autonomia-e-seguranca',
    title: 'Autonomia e segurança',
    paragraphs: [
      'Um ambiente acessível permite que a pessoa realize suas atividades por conta própria, sem depender de terceiros, e sem exposição a riscos desnecessários.',
      'Autonomia e segurança são, por isso, os dois critérios que orientam a avaliação técnica: não basta que o espaço seja tecnicamente transponível, ele precisa ser utilizável com dignidade.',
    ],
  },
  {
    id: 'edificacoes-existentes',
    title: 'Adequação de edificações existentes',
    paragraphs: [
      'Edificações públicas e privadas de uso coletivo já existentes devem garantir acessibilidade em suas dependências e serviços, tendo como referência as normas de acessibilidade vigentes.',
      'Como a reforma de imóveis existentes envolve restrições físicas, a adequação exige análise técnica criteriosa para definir soluções viáveis, priorizar intervenções e evitar investimentos ineficazes.',
    ],
  },
  {
    id: 'laudos-e-diagnosticos',
    title: 'Importância dos laudos e diagnósticos',
    paragraphs: [
      'Laudos e diagnósticos transformam a percepção difusa de que “algo não está acessível” em informação técnica objetiva: o que está em desacordo, em que grau, com qual referência normativa e com que prioridade deve ser corrigido.',
      'Esse registro orienta investimentos, fundamenta processos de licenciamento e regularização e oferece segurança à tomada de decisão.',
    ],
  },
  {
    id: 'responsabilidade-tecnica',
    title: 'Responsabilidade técnica',
    paragraphs: [
      'Avaliações, laudos e atestados de acessibilidade devem ser elaborados por profissional legalmente habilitado, com o devido registro de responsabilidade técnica (no caso da engenharia, a Anotação de Responsabilidade Técnica — ART).',
      'A responsabilidade técnica assegura a rastreabilidade do trabalho e a correspondência entre o que é declarado e as condições efetivamente verificadas.',
    ],
  },
];

export const legalReferences: LegalReference[] = [
  {
    code: 'Lei nº 13.146/2015',
    title: 'Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência)',
    description:
      'Estabelece a acessibilidade como direito e define conceitos como barreiras, desenho universal e adaptações razoáveis. Determina que edificações públicas e privadas de uso coletivo já existentes garantam acessibilidade em todas as suas dependências e serviços.',
    kind: 'lei',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm',
    sourceLabel: 'Planalto — texto compilado',
  },
  {
    code: 'Lei nº 10.098/2000',
    title: 'Normas gerais e critérios básicos para a promoção da acessibilidade',
    description:
      'Estabelece critérios para a supressão de barreiras e obstáculos nas vias e espaços públicos, no mobiliário urbano, na construção e reforma de edifícios e nos meios de transporte e de comunicação.',
    kind: 'lei',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l10098.htm',
    sourceLabel: 'Planalto — texto compilado',
  },
  {
    code: 'Decreto nº 5.296/2004',
    title: 'Regulamenta as Leis nº 10.048/2000 e nº 10.098/2000',
    description:
      'Detalha normas gerais e critérios básicos de acessibilidade para edificações de uso público e coletivo, espaços urbanos, transportes e comunicação.',
    kind: 'decreto',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/decreto/d5296.htm',
    sourceLabel: 'Planalto — texto compilado',
  },
  {
    code: 'Decreto nº 9.296/2018',
    title: 'Acessibilidade em meios de hospedagem',
    description:
      'Regulamenta o art. 45 da Lei nº 13.146/2015, com requisitos de acessibilidade para hotéis, pousadas e estruturas similares, incluindo dormitórios, áreas comuns e recursos sob demanda.',
    kind: 'decreto',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/decreto/d9296.htm',
    sourceLabel: 'Planalto — texto compilado',
  },
  {
    code: 'Decreto nº 9.451/2018',
    title: 'Acessibilidade em edificações de uso privado multifamiliar',
    description:
      'Regulamenta o art. 58 da Lei nº 13.146/2015, com preceitos de acessibilidade para o projeto e a construção de edificações residenciais multifamiliares.',
    kind: 'decreto',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/decreto/d9451.htm',
    sourceLabel: 'Planalto — texto compilado',
  },
  {
    code: 'ABNT NBR 9050:2020',
    title: 'Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos',
    description:
      'Principal norma técnica brasileira de acessibilidade. Estabelece critérios e parâmetros técnicos para projeto, construção, instalação e adaptação de edificações, mobiliário, espaços e equipamentos urbanos. Versão vigente: edição de 2020, versão corrigida de 2021.',
    kind: 'norma',
    url: 'https://www.abntcatalogo.com.br/',
    sourceLabel: 'Catálogo ABNT',
  },
  {
    code: 'ABNT NBR 16537:2024',
    title: 'Acessibilidade — Sinalização tátil no piso — Diretrizes para elaboração de projetos e instalação',
    description:
      'Estabelece critérios para a elaboração de projetos e a instalação de sinalização tátil de alerta e direcional no piso. Segunda edição, publicada em janeiro de 2024.',
    kind: 'norma',
    url: 'https://www.abntcatalogo.com.br/',
    sourceLabel: 'Catálogo ABNT',
  },
];

export const otherReferencesNote =
  'Conforme o caso, também podem ser aplicáveis outras normas técnicas da ABNT relacionadas à acessibilidade, legislações estaduais e municipais, códigos de obras, regulamentos do Corpo de Bombeiros, requisitos sanitários e exigências de órgãos de preservação do patrimônio.';

export const internationalNote =
  'Em atendimentos internacionais, a avaliação considera a legislação, as normas técnicas e os requisitos de habilitação profissional do país correspondente. As referências brasileiras não são presumidas como equivalentes às de outros países.';
