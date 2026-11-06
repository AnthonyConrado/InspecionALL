import {
  BadgeCheck,
  ClipboardCheck,
  FileText,
  MessagesSquare,
  Ruler,
  ScanSearch,
  Search,
  ShieldCheck,
} from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    slug: 'laudos-tecnicos-de-acessibilidade',
    title: 'Laudos Técnicos de Acessibilidade',
    icon: FileText,
    summary:
      'Documento técnico fundamentado que registra as condições de acessibilidade de uma edificação ou espaço frente às exigências legais e normativas.',
    description:
      'O laudo técnico de acessibilidade é o documento em que a profissional habilitada registra, de forma fundamentada, as condições encontradas no imóvel, compara-as com a legislação e as normas técnicas aplicáveis e apresenta conclusões e recomendações. É emitido com a respectiva Anotação de Responsabilidade Técnica (ART), quando exigida.',
    objectives: [
      'Registrar formalmente as condições de acessibilidade existentes.',
      'Apontar não conformidades com referência às normas e à legislação aplicáveis.',
      'Fundamentar processos de licenciamento, regularização ou adequação.',
      'Orientar as medidas corretivas necessárias.',
    ],
    applications: [
      'Processos de licenciamento e regularização junto a órgãos públicos.',
      'Atendimento a notificações, exigências ou termos de ajustamento.',
      'Compra, venda, locação ou mudança de uso de imóveis.',
      'Comprovação técnica em procedimentos administrativos ou judiciais.',
    ],
    audience: [
      'Empresas e redes comerciais',
      'Instituições de ensino e de saúde',
      'Condomínios e administradoras',
      'Órgãos e entidades públicas',
      'Escritórios de advocacia e assessorias',
    ],
    benefits: [
      'Segurança jurídica e técnica para a tomada de decisão.',
      'Documento claro, rastreável e tecnicamente fundamentado.',
      'Base objetiva para planejar investimentos de adequação.',
    ],
  },
  {
    slug: 'diagnosticos-de-acessibilidade',
    title: 'Diagnósticos de Acessibilidade',
    icon: ScanSearch,
    summary:
      'Levantamento sistemático das barreiras físicas e de comunicação, com priorização das intervenções.',
    description:
      'O diagnóstico de acessibilidade é uma avaliação abrangente que mapeia as barreiras presentes em rotas, ambientes, equipamentos e sistemas de informação de uma edificação ou espaço urbano. Mais do que listar não conformidades, organiza os achados por criticidade e propõe uma ordem lógica de intervenção.',
    objectives: [
      'Identificar barreiras arquitetônicas, urbanísticas e de comunicação.',
      'Avaliar a continuidade das rotas acessíveis entre os principais usos.',
      'Classificar os achados por grau de criticidade e impacto.',
      'Subsidiar o planejamento de adequações por etapas.',
    ],
    applications: [
      'Planejamento de reformas e de investimentos em acessibilidade.',
      'Avaliação de imóveis antes de aquisição ou ocupação.',
      'Programas de inclusão e de diversidade em empresas e instituições.',
      'Preparação para auditorias e fiscalizações.',
    ],
    audience: [
      'Gestores de facilities e de manutenção',
      'Incorporadoras e proprietários de imóveis',
      'Instituições de ensino e de saúde',
      'Administração pública',
    ],
    benefits: [
      'Visão completa e priorizada da situação do imóvel.',
      'Investimentos direcionados ao que gera maior impacto.',
      'Redução de retrabalho em obras de adequação.',
    ],
  },
  {
    slug: 'adequacao-de-edificacoes-existentes',
    title: 'Adequação de Edificações Existentes',
    icon: Ruler,
    summary:
      'Orientação técnica para tornar acessíveis edificações já construídas, respeitando suas limitações físicas e de uso.',
    description:
      'Edificações existentes impõem restrições que não estão presentes em obras novas: estrutura definida, desníveis consolidados, áreas reduzidas e, por vezes, proteção patrimonial. Este serviço define soluções tecnicamente viáveis para promover a acessibilidade nesses contextos, em conformidade com os critérios normativos aplicáveis a reformas e adaptações.',
    objectives: [
      'Definir soluções de adequação compatíveis com a edificação existente.',
      'Estabelecer prioridades e etapas de intervenção.',
      'Especificar requisitos técnicos para rotas, sanitários, acessos e sinalização.',
      'Acompanhar tecnicamente a implantação das soluções, quando contratado.',
    ],
    applications: [
      'Reformas e retrofits de edificações comerciais, institucionais e residenciais coletivas.',
      'Atendimento a exigências de órgãos públicos.',
      'Mudança de uso ou ampliação de áreas abertas ao público.',
    ],
    audience: [
      'Proprietários e administradores de imóveis',
      'Condomínios',
      'Empresas em processo de reforma',
      'Arquitetos e construtoras parceiras',
    ],
    benefits: [
      'Soluções realistas, alinhadas às condições do imóvel.',
      'Menor risco de intervenções inadequadas ou incompletas.',
      'Ambientes mais seguros e utilizáveis por todas as pessoas.',
    ],
  },
  {
    slug: 'vistorias-tecnicas',
    title: 'Vistorias Técnicas',
    icon: ClipboardCheck,
    summary:
      'Verificação presencial e documentada das condições de acessibilidade de um imóvel em determinado momento.',
    description:
      'A vistoria técnica é a constatação presencial das condições de acessibilidade de uma edificação ou espaço, com registro sistemático das observações, medições e evidências. Pode ser realizada de forma independente ou como etapa de laudos, diagnósticos e atestados.',
    objectives: [
      'Constatar in loco as condições existentes.',
      'Registrar medições, observações e evidências de forma organizada.',
      'Verificar a execução de adequações realizadas.',
    ],
    applications: [
      'Recebimento de obras e verificação de adequações executadas.',
      'Registro de condições antes de reformas, locações ou ocupações.',
      'Etapa de campo para laudos, diagnósticos e atestados.',
    ],
    audience: [
      'Empresas e instituições',
      'Condomínios e administradoras',
      'Construtoras e gerenciadoras de obras',
      'Órgãos públicos',
    ],
    benefits: [
      'Registro técnico confiável das condições observadas.',
      'Agilidade para decisões de curto prazo.',
      'Evidências objetivas para acompanhamento e controle.',
    ],
  },
  {
    slug: 'auditorias-de-acessibilidade',
    title: 'Auditorias de Acessibilidade',
    icon: ShieldCheck,
    summary:
      'Verificação metódica do atendimento a requisitos legais, normativos e a políticas internas de acessibilidade.',
    description:
      'A auditoria de acessibilidade verifica, com critérios previamente definidos, se uma edificação, um conjunto de unidades ou um programa institucional atende aos requisitos aplicáveis. É indicada para organizações que precisam comprovar conformidade, comparar unidades ou acompanhar a evolução de suas ações ao longo do tempo.',
    objectives: [
      'Verificar a conformidade com requisitos legais e normativos.',
      'Avaliar a aplicação de políticas e padrões internos de acessibilidade.',
      'Padronizar critérios de avaliação entre diferentes unidades.',
      'Apontar desvios e oportunidades de melhoria.',
    ],
    applications: [
      'Redes com múltiplas unidades (lojas, agências, clínicas, escolas).',
      'Programas de governança, ESG e responsabilidade social.',
      'Monitoramento periódico de ações de adequação.',
    ],
    audience: [
      'Redes e franquias',
      'Grupos educacionais e hospitalares',
      'Áreas de compliance, ESG e engenharia corporativa',
    ],
    benefits: [
      'Critérios uniformes e comparáveis entre unidades.',
      'Evidências para relatórios de governança.',
      'Acompanhamento objetivo da evolução ao longo do tempo.',
    ],
  },
  {
    slug: 'consultorias-especializadas',
    title: 'Consultorias Especializadas',
    icon: MessagesSquare,
    summary:
      'Apoio técnico contínuo ou pontual para decisões, projetos e processos que envolvem acessibilidade.',
    description:
      'A consultoria especializada oferece suporte técnico em acessibilidade arquitetônica e urbanística para equipes internas, escritórios de projeto, gestores e assessorias. Pode envolver análise de projetos, interpretação de normas, apoio em respostas a órgãos públicos e orientação em decisões de adequação.',
    objectives: [
      'Orientar decisões técnicas com base nas normas e na legislação vigentes.',
      'Analisar projetos e propostas sob a ótica da acessibilidade.',
      'Apoiar equipes na interpretação e aplicação de requisitos.',
    ],
    applications: [
      'Análise de projetos de reforma e de adequação.',
      'Apoio a respostas técnicas a notificações e exigências.',
      'Definição de diretrizes internas de acessibilidade.',
    ],
    audience: [
      'Escritórios de arquitetura e engenharia',
      'Gestores de facilities',
      'Assessorias jurídicas',
      'Instituições públicas e privadas',
    ],
    benefits: [
      'Decisões mais seguras desde a fase de planejamento.',
      'Redução de não conformidades em projetos e obras.',
      'Acesso a conhecimento técnico especializado sob demanda.',
    ],
  },
  {
    slug: 'inspecoes-tecnicas',
    title: 'Inspeções Técnicas',
    icon: Search,
    summary:
      'Avaliação técnica focada em elementos específicos que afetam a acessibilidade e a segurança de uso.',
    description:
      'A inspeção técnica examina, com profundidade, elementos determinados da edificação ou do espaço urbano — como rampas, escadas, corrimãos, guarda-corpos, sanitários, pisos, sinalização tátil e visual ou equipamentos de transposição de desníveis — avaliando seu estado, sua adequação aos requisitos e os riscos associados ao uso.',
    objectives: [
      'Avaliar elementos críticos para a circulação segura e autônoma.',
      'Identificar falhas de execução, desgaste ou inadequação.',
      'Recomendar correções e cuidados de manutenção.',
    ],
    applications: [
      'Verificação de rotas acessíveis e de elementos de circulação vertical.',
      'Avaliação de sinalização tátil e visual no piso.',
      'Investigação de problemas recorrentes de uso.',
    ],
    audience: [
      'Condomínios e administradoras',
      'Gestores de manutenção predial',
      'Empresas e instituições',
    ],
    benefits: [
      'Diagnóstico preciso de elementos específicos.',
      'Prevenção de acidentes e de reclamações de usuários.',
      'Subsídio técnico para planos de manutenção.',
    ],
  },
  {
    slug: 'atestados-de-acessibilidade',
    title: 'Atestados de Acessibilidade',
    icon: BadgeCheck,
    summary:
      'Declaração técnica das condições de acessibilidade, emitida após verificação, quando exigida por órgãos ou contratantes.',
    description:
      'O atestado de acessibilidade é a declaração técnica, emitida por profissional habilitada após a devida verificação, de que a edificação ou o espaço atende às condições de acessibilidade exigidas. As exigências e a nomenclatura variam conforme o município e o órgão solicitante, por isso cada caso é analisado previamente.',
    objectives: [
      'Declarar tecnicamente as condições de acessibilidade verificadas.',
      'Atender a exigências de órgãos públicos ou de contratantes.',
      'Indicar pendências que impeçam a emissão, quando houver.',
    ],
    applications: [
      'Processos de licenciamento, alvarás e regularização, quando exigido.',
      'Habilitação em contratos e convênios.',
      'Comprovação de adequações concluídas.',
    ],
    audience: [
      'Estabelecimentos comerciais e de serviços',
      'Instituições de ensino e de saúde',
      'Meios de hospedagem e equipamentos turísticos',
      'Indústrias',
    ],
    benefits: [
      'Atendimento objetivo à exigência documental.',
      'Clareza sobre eventuais pendências antes da emissão.',
      'Responsabilidade técnica formalizada.',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
