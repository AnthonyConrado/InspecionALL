import {
  BadgeCheck,
  BedDouble,
  Building2,
  Compass,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Store,
} from 'lucide-react';
import type { Segment } from '../types';

/**
 * Os dez segmentos em que Bianca Fernandez possui trabalhos concluídos.
 *
 * IMPORTANTE — CONFIDENCIALIDADE: os textos abaixo descrevem, de forma
 * geral, necessidades e soluções típicas de cada setor. Eles NÃO são
 * relatos dos contratos executados e não devem receber nomes, locais,
 * imagens ou resultados de projetos reais sem autorização prévia.
 */
export const segments: Segment[] = [
  {
    slug: 'adequacoes-de-edificacoes-existentes',
    title: 'Adequações das Edificações Existentes',
    shortTitle: 'Edificações existentes',
    icon: Building2,
    summary:
      'Edificações construídas antes das exigências atuais ou sem previsão de acessibilidade, que precisam ser adaptadas respeitando sua estrutura e seu uso.',
    needs: [
      'Desníveis entre calçada, acesso e pavimentos',
      'Ausência de rota acessível contínua',
      'Sanitários sem dimensões ou equipamentos adequados',
    ],
    solutions: [
      'Diagnóstico com priorização de intervenções',
      'Definição de soluções viáveis para rampas, plataformas e acessos',
      'Especificação de adaptações em sanitários e sinalização',
    ],
    overview:
      'A adaptação de edificações existentes exige conciliar requisitos normativos com limitações físicas que não podem ser simplesmente removidas, como estrutura, prumadas e alinhamentos consolidados.',
    challenges: [
      'Espaço físico restrito para rampas e áreas de manobra',
      'Interferências estruturais e de instalações prediais',
      'Continuidade do uso durante as obras',
    ],
    importance:
      'Grande parte do estoque construído foi concebida sem acessibilidade. Adequá-lo é o caminho para que pessoas com deficiência ou mobilidade reduzida utilizem os espaços que já fazem parte da vida cotidiana.',
    evaluations: [
      'Levantamento de barreiras e de rotas',
      'Estudo de alternativas tecnicamente viáveis',
      'Plano de adequação por etapas',
    ],
  },
  {
    slug: 'edificacoes-comerciais',
    title: 'Acessibilidade em Edificações Comerciais',
    shortTitle: 'Edificações comerciais',
    icon: Store,
    summary:
      'Lojas, escritórios, centros comerciais e estabelecimentos de serviços, nos quais o acesso autônomo do público é parte essencial da operação.',
    needs: [
      'Acesso desde o passeio público até o atendimento',
      'Balcões, caixas e provadores acessíveis',
      'Sanitários acessíveis para o público',
    ],
    solutions: [
      'Verificação da rota acessível de entrada à área de atendimento',
      'Avaliação de mobiliário e áreas de aproximação',
      'Laudos e atestados para licenciamento, quando exigidos',
    ],
    overview:
      'Em ambientes comerciais, a acessibilidade influencia diretamente a experiência do cliente, o atendimento a exigências de licenciamento e a reputação da marca.',
    challenges: [
      'Alterações frequentes de layout e mobiliário',
      'Desníveis na transição entre calçada e loja',
      'Padronização entre unidades de uma mesma rede',
    ],
    importance:
      'Quando o público consegue entrar, circular, ser atendido e utilizar os serviços com autonomia, o estabelecimento cumpre sua função social e amplia seu alcance.',
    evaluations: [
      'Diagnóstico de rotas e de pontos de atendimento',
      'Auditorias comparativas entre unidades',
      'Laudos e atestados de acessibilidade',
    ],
  },
  {
    slug: 'industria',
    title: 'Acessibilidade na Indústria',
    shortTitle: 'Indústria',
    icon: Factory,
    summary:
      'Plantas industriais e áreas administrativas e de apoio em que a acessibilidade precisa conviver com fluxos produtivos e requisitos de segurança do trabalho.',
    needs: [
      'Rotas acessíveis entre portaria, áreas administrativas e de apoio',
      'Vestiários, refeitórios e sanitários acessíveis',
      'Integração com rotas de fuga e sinalização de emergência',
    ],
    solutions: [
      'Mapeamento de rotas considerando fluxos de pessoas e de veículos',
      'Avaliação das áreas de apoio e de convivência',
      'Diretrizes para inclusão de colaboradores com deficiência',
    ],
    overview:
      'Em ambientes industriais, a avaliação de acessibilidade considera grandes distâncias, múltiplas edificações e a convivência entre circulação de pedestres, equipamentos e veículos.',
    challenges: [
      'Extensão das áreas e diversidade de edificações',
      'Compatibilização com requisitos de segurança do trabalho',
      'Ambientes de apoio projetados sem previsão de acessibilidade',
    ],
    importance:
      'A acessibilidade nas áreas comuns e de apoio é condição para a inclusão efetiva de colaboradores com deficiência e para a circulação segura de visitantes.',
    evaluations: [
      'Diagnóstico de rotas e áreas de apoio',
      'Inspeções de elementos de circulação',
      'Consultoria para planos de adequação',
    ],
  },
  {
    slug: 'atestados-de-acessibilidade',
    title: 'Atestados de Acessibilidade',
    shortTitle: 'Atestados de acessibilidade',
    icon: BadgeCheck,
    summary:
      'Emissão de atestados técnicos para estabelecimentos que precisam comprovar condições de acessibilidade a órgãos públicos ou contratantes.',
    needs: [
      'Comprovação documental exigida em licenciamentos',
      'Clareza sobre os requisitos aplicáveis em cada município',
      'Identificação de pendências antes da emissão',
    ],
    solutions: [
      'Análise prévia das exigências do órgão solicitante',
      'Vistoria técnica e verificação das condições',
      'Emissão do atestado com responsabilidade técnica',
    ],
    overview:
      'O atestado formaliza, sob responsabilidade técnica, que as condições de acessibilidade verificadas atendem às exigências aplicáveis ao caso.',
    challenges: [
      'Variação de exigências e nomenclaturas entre municípios',
      'Prazos ligados a processos de licenciamento',
      'Pendências que precisam ser sanadas antes da emissão',
    ],
    importance:
      'Um atestado tecnicamente consistente protege o estabelecimento e assegura que a declaração corresponde às condições reais de uso.',
    evaluations: [
      'Vistoria técnica',
      'Verificação de conformidade',
      'Indicação de pendências e emissão do atestado',
    ],
  },
  {
    slug: 'edificacoes-educacionais',
    title: 'Acessibilidade em Edificações Educacionais',
    shortTitle: 'Edificações educacionais',
    icon: GraduationCap,
    summary:
      'Escolas, faculdades e centros de formação, em que a acessibilidade é condição para a permanência e a participação de estudantes, docentes e famílias.',
    needs: [
      'Acesso a salas, laboratórios, bibliotecas e áreas de convivência',
      'Sanitários acessíveis em todos os pavimentos de uso',
      'Sinalização visual e tátil adequada',
    ],
    solutions: [
      'Diagnóstico abrangente dos ambientes de ensino e convivência',
      'Plano de adequação compatível com o calendário letivo',
      'Laudos para processos institucionais e regulatórios',
    ],
    overview:
      'Ambientes educacionais reúnem públicos de idades e necessidades diversas e exigem acesso equitativo a todos os espaços pedagógicos, esportivos e de convivência.',
    challenges: [
      'Campi com múltiplos blocos e grandes desníveis',
      'Obras que precisam respeitar o calendário letivo',
      'Ambientes especializados, como laboratórios e auditórios',
    ],
    importance:
      'A acessibilidade física é parte do direito à educação: sem ela, estudantes com deficiência ou mobilidade reduzida têm sua participação limitada.',
    evaluations: [
      'Diagnóstico de ambientes e rotas',
      'Laudos técnicos de acessibilidade',
      'Consultoria para planejamento de obras',
    ],
  },
  {
    slug: 'edificacoes-de-saude',
    title: 'Acessibilidade em Edificações de Saúde',
    shortTitle: 'Edificações de saúde',
    icon: HeartPulse,
    summary:
      'Hospitais, clínicas e unidades de atendimento, em que pacientes com mobilidade reduzida — temporária ou permanente — são parte significativa do público.',
    needs: [
      'Acessos, embarque e desembarque seguros',
      'Circulações, consultórios e sanitários acessíveis',
      'Comunicação e sinalização compreensíveis',
    ],
    solutions: [
      'Avaliação de rotas desde a chegada até o atendimento',
      'Verificação de ambientes de uso de pacientes e acompanhantes',
      'Compatibilização com requisitos sanitários aplicáveis',
    ],
    overview:
      'Em edificações de saúde, a acessibilidade se relaciona diretamente com a segurança do paciente e com a qualidade do cuidado.',
    challenges: [
      'Operação contínua, sem possibilidade de interrupção',
      'Necessidade de compatibilizar normas de acessibilidade e sanitárias',
      'Grande diversidade de ambientes e equipamentos',
    ],
    importance:
      'Pessoas em tratamento, idosos e acompanhantes dependem de ambientes que reduzam o esforço e o risco durante o deslocamento.',
    evaluations: [
      'Diagnóstico de acessibilidade',
      'Inspeções de elementos críticos',
      'Laudos e consultoria técnica',
    ],
  },
  {
    slug: 'edificacoes-historicas',
    title: 'Acessibilidade em Edificações Históricas',
    shortTitle: 'Edificações históricas',
    icon: Landmark,
    summary:
      'Bens de interesse histórico e cultural, em que as intervenções de acessibilidade precisam dialogar com a preservação patrimonial.',
    needs: [
      'Acesso a edificações com desníveis e escadarias originais',
      'Soluções reversíveis e de baixo impacto',
      'Articulação com as exigências dos órgãos de preservação',
    ],
    solutions: [
      'Estudo de alternativas que respeitem os elementos protegidos',
      'Priorização de rotas e de ambientes essenciais',
      'Apoio técnico na interlocução com órgãos competentes',
    ],
    overview:
      'Em bens protegidos, o desafio é ampliar o acesso sem descaracterizar os elementos que justificam sua preservação.',
    challenges: [
      'Restrições a intervenções em fachadas, pisos e estruturas',
      'Necessidade de aprovação por órgãos de preservação',
      'Soluções que precisam ser reversíveis',
    ],
    importance:
      'O patrimônio cultural pertence a todas as pessoas. Torná-lo acessível é também uma forma de preservá-lo e de garantir seu uso.',
    evaluations: [
      'Diagnóstico com análise das restrições patrimoniais',
      'Estudo de soluções de adequação',
      'Consultoria especializada',
    ],
  },
  {
    slug: 'ambientes-turisticos',
    title: 'Acessibilidade em Ambientes Turísticos',
    shortTitle: 'Ambientes turísticos',
    icon: Compass,
    summary:
      'Atrativos, espaços de visitação e equipamentos turísticos, frequentemente com áreas externas, percursos longos e terrenos irregulares.',
    needs: [
      'Percursos acessíveis em áreas externas e de visitação',
      'Pontos de informação, bilheterias e serviços acessíveis',
      'Sinalização clara para orientação de visitantes',
    ],
    solutions: [
      'Avaliação de percursos e de pontos de interesse',
      'Diretrizes para acessibilidade em áreas abertas',
      'Priorização de intervenções por relevância para a visitação',
    ],
    overview:
      'Ambientes turísticos combinam espaços construídos e abertos, recebem públicos diversos e precisam oferecer experiências seguras a visitantes que não conhecem o local.',
    challenges: [
      'Terrenos naturais, desníveis e pisos irregulares',
      'Grandes distâncias entre pontos de interesse',
      'Variação de público e de sazonalidade',
    ],
    importance:
      'O turismo acessível amplia o direito ao lazer e à cultura e torna os destinos aptos a receber um público mais amplo.',
    evaluations: [
      'Diagnóstico de percursos e atrativos',
      'Consultoria para planos de acessibilidade',
      'Inspeções técnicas',
    ],
  },
  {
    slug: 'hospedagens',
    title: 'Acessibilidade em Hospedagens',
    shortTitle: 'Hospedagens',
    icon: BedDouble,
    summary:
      'Hotéis, pousadas e meios de hospedagem, sujeitos a requisitos específicos de acessibilidade em dormitórios e áreas comuns.',
    needs: [
      'Dormitórios e banheiros acessíveis',
      'Áreas comuns — recepção, restaurante e lazer — acessíveis',
      'Recursos de acessibilidade disponíveis sob demanda',
    ],
    solutions: [
      'Verificação dos requisitos aplicáveis ao estabelecimento',
      'Avaliação de dormitórios, áreas comuns e rotas',
      'Laudos e atestados para fins de comprovação',
    ],
    overview:
      'Meios de hospedagem têm regulamentação própria de acessibilidade, que abrange tanto as características construtivas quanto os recursos oferecidos aos hóspedes.',
    challenges: [
      'Adaptação de unidades em edificações já em operação',
      'Integração entre dormitórios e áreas de lazer',
      'Informação correta ao hóspede sobre os recursos disponíveis',
    ],
    importance:
      'Hospedar com acessibilidade significa assegurar descanso, segurança e autonomia a todas as pessoas hóspedes.',
    evaluations: [
      'Diagnóstico de dormitórios e áreas comuns',
      'Laudos técnicos e atestados',
      'Consultoria para adequação',
    ],
  },
  {
    slug: 'complexos-tecnologicos',
    title: 'Acessibilidade em Complexos Tecnológicos',
    shortTitle: 'Complexos tecnológicos',
    icon: Cpu,
    summary:
      'Parques tecnológicos, centros de pesquisa e ambientes corporativos de alta complexidade, com múltiplos edifícios e usos.',
    needs: [
      'Rotas acessíveis entre edifícios e áreas externas',
      'Ambientes de trabalho, auditórios e convivência acessíveis',
      'Controles de acesso compatíveis com a autonomia de uso',
    ],
    solutions: [
      'Diagnóstico integrado do complexo',
      'Auditorias para padronização de critérios',
      'Consultoria em projetos de expansão e retrofit',
    ],
    overview:
      'Complexos tecnológicos reúnem edificações de diferentes épocas, sistemas de controle e grande circulação de colaboradores e visitantes.',
    challenges: [
      'Diversidade de edificações e de padrões construtivos',
      'Integração entre acessibilidade e sistemas de segurança',
      'Expansões frequentes e mudanças de uso',
    ],
    importance:
      'Ambientes de inovação precisam ser inclusivos para atrair e manter talentos diversos e receber todos os públicos.',
    evaluations: [
      'Diagnóstico integrado',
      'Auditorias de acessibilidade',
      'Consultoria especializada',
    ],
  },
];
