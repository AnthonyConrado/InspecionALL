import type { Profile } from '../types';

/**
 * ============================================================
 *  DADOS PROFISSIONAIS — EDITE AQUI
 * ============================================================
 *
 *  Regra do projeto: só publique informações CONFIRMADAS pela
 *  Bianca. Campos vazios ("" ou []) fazem a seção correspondente
 *  ficar oculta no site publicado — nada é inventado ou simulado.
 *
 *  Durante o desenvolvimento (npm run dev), as seções vazias
 *  aparecem com um aviso de "conteúdo pendente" para facilitar
 *  o preenchimento.
 */
export const profile: Profile = {
  name: 'Bianca Fernandez',
  shortName: 'Bianca',
  area: 'Engenharia Civil Diagnóstica',
  specialty: 'Acessibilidade Arquitetônica e Urbanística',

  // Confirmado pelo site anterior. Para não mencionar a empresa, use show: false.
  company: {
    name: 'InspecionAll Engenharia',
    role: 'CEO e sócia-fundadora',
    show: true,
  },

  // Ex.: 'CREA-SP 0000000000'. Deixe vazio até confirmar.
  professionalRegistration: '',

  bio: [
    'Bianca Fernandez é engenheira civil, especialista em acessibilidade e mestranda profissional em Engenharia Civil. Atua na Engenharia Civil Diagnóstica com foco em acessibilidade arquitetônica e urbanística: avalia edificações e espaços, identifica barreiras e orienta decisões técnicas que tornem os ambientes utilizáveis com autonomia e segurança pelo maior número possível de pessoas.',
    'A atuação reúne laudos, diagnósticos de acessibilidade, adequação de edificações, vistorias, auditorias, consultorias, inspeções e atestados, sempre conforme as leis, os decretos e as normas técnicas vigentes. O objetivo é entregar ao contratante uma leitura clara da situação do imóvel e um caminho tecnicamente consistente para a adequação.',
    'Com trabalhos concluídos em dez segmentos — de edificações comerciais e industriais a ambientes de saúde, educação, turismo e patrimônio histórico —, Bianca atende em todo o Brasil e pode atender demandas internacionais, conforme a natureza do serviço e os requisitos legais aplicáveis.',
  ],

  // Formação confirmada pela cliente. Instituições e anos podem ser
  // acrescentados nos campos institution e period.
  education: [
    { course: 'Engenharia Civil', status: 'Graduação concluída' },
    {
      course: 'Mestrado Profissional em Engenharia Civil',
      institution: 'Universidade São Judas Tadeu (USJT)',
      status: 'Em andamento',
    },
  ],

  // Trabalhos acadêmicos (confirmados pelas fotos da apresentação).
  research: [
    {
      title:
        'Desafios da implementação da análise diagnóstica para a acessibilidade em edificações: uma revisão sistemática da literatura',
      event: 'XXVII ENGEMA — Encontro Internacional sobre Gestão Empresarial e Meio Ambiente',
      details: 'FEA/USP, São Paulo, 2025',
      coauthors: ['Claudia Terezinha Kniess', 'Ana Paula Branco do Nascimento', 'Guilherme Leite Gaudereto'],
    },
  ],

  // Qualificações confirmadas pela cliente. Instituição e ano podem ser
  // acrescentados nos campos issuer e year.
  qualifications: [
    {
      title: 'Pós-graduação em Acessibilidade Arquitetônica e Urbanística',
      issuer: 'INAER — Instituto Nacional de Acessibilidade Eduardo Ronchetti',
      year: '2026',
    },
  ],

  // Somente os idiomas — sem níveis de proficiência ou certificações.
  languages: ['Português', 'Inglês'],

  coverage: {
    national: 'Atendimento em todo o território brasileiro.',
    international:
      'Atendimento internacional mediante análise prévia da natureza do serviço, da logística e dos requisitos profissionais e legais do país correspondente.',
  },

  contact: {
    email: 'inspecionallengenharia@gmail.com',
    phoneDisplay: '(11) 94896-5283',
    whatsapp: '5511948965283', // somente dígitos, com DDI 55 e DDD
    whatsappMessage: 'Olá, Bianca! Gostaria de solicitar informações sobre um serviço de acessibilidade.',
    linkedin: 'https://www.linkedin.com/in/bianca-fernandezg/',
    instagram: 'https://www.instagram.com/biancafernandezac/',
  },
};

export function phoneHref(): string | null {
  const digits = profile.contact.whatsapp.replace(/\D/g, '');
  return digits ? `tel:+${digits}` : null;
}

export function whatsappUrl(message = profile.contact.whatsappMessage): string | null {
  const digits = profile.contact.whatsapp.replace(/\D/g, '');
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
