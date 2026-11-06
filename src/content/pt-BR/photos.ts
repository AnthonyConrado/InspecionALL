/**
 * Fotografias fornecidas pela cliente (public/images/fotos).
 *
 * Cada foto existe em WebP e JPEG, nas larguras listadas em `widths`
 * (arquivo: /images/fotos/<chave>-<largura>.<webp|jpg>).
 *
 * CONFIDENCIALIDADE: fotos de campo são usadas apenas para ilustrar a
 * forma de trabalho (Serviços e Metodologia), nunca como registro de
 * um caso concluído. Não as utilize na página Casos Concluídos.
 */
export interface PhotoData {
  /** Larguras disponíveis, da menor para a maior. */
  widths: number[];
  /** Proporção largura / altura. */
  ratio: number;
  alt: string;
  /** Ponto de foco para recortes (CSS object-position). */
  position?: string;
  /** Pasta em public/images (padrão: "fotos"). */
  dir?: 'fotos' | 'carrossel';
}

export const photos = {
  'nivel-retrato': {
    widths: [640, 960],
    ratio: 4 / 5,
    alt: 'Bianca Fernandez, de blazer bege, segurando um nível de bolha azul diante de um dos olhos.',
    position: '50% 30%',
  },
  'hero-capacete': {
    widths: [640, 960],
    ratio: 4 / 5,
    alt: 'Bianca Fernandez sorrindo, de capacete branco com o próprio nome e camiseta preta, diante de edifícios.',
    position: '50% 25%',
  },
  retrato: {
    widths: [640, 960],
    ratio: 4 / 5,
    alt: 'Retrato de Bianca Fernandez, de óculos e roupa escura, com os braços cruzados e a mão apoiada no queixo.',
    position: '50% 30%',
  },
  'sofa-tablet': {
    widths: [640, 960],
    ratio: 4 / 5,
    alt: 'Bianca Fernandez sorrindo, sentada em um sofá claro, de blazer preto, fazendo anotações em um tablet.',
    position: '45% 35%',
  },
  escritorio: {
    widths: [640, 960],
    ratio: 4 / 5,
    alt: 'Bianca Fernandez em seu escritório, de blazer bege, trabalhando em um tablet; ao lado, um capacete de obra sobre a mesa.',
    position: '40% 40%',
  },
  palestra: {
    widths: [800, 1400],
    ratio: 3 / 2,
    alt: 'Bianca Fernandez palestrando em um auditório, de blusa vermelha e microfone de cabeça, gesticulando para o público.',
    position: '70% 40%',
  },
  inaer: {
    widths: [640, 960],
    ratio: 4 / 5,
    alt: 'Bianca Fernandez em um palco diante do painel do INAER — Instituto Nacional de Acessibilidade Eduardo Ronchetti.',
    position: '50% 40%',
  },
  engema: {
    widths: [640, 960],
    ratio: 4 / 5,
    alt: 'Bianca Fernandez apresentando, no XXVII ENGEMA, o trabalho "Desafios da implementação da análise diagnóstica para a acessibilidade em edificações".',
    position: '30% 60%',
  },
  'engema-metodologia': {
    widths: [640],
    ratio: 4 / 5,
    alt: 'Bianca Fernandez apontando para o slide de metodologia de sua pesquisa sobre inspeção e acessibilidade.',
    position: '40% 50%',
  },
  'campo-nivel': {
    widths: [640, 960],
    ratio: 4 / 5,
    alt: 'Bianca Fernandez de capacete e colete refletivo verificando o nivelamento de um parapeito com nível de bolha e registrando dados no celular.',
    position: '40% 40%',
  },
  'campo-celular': {
    widths: [640, 960],
    ratio: 4 / 5,
    alt: 'Bianca Fernandez de costas, com capacete e colete refletivo, consultando uma planta no celular durante uma vistoria.',
    position: '60% 40%',
  },
  equipamentos: {
    widths: [640, 960],
    ratio: 4 / 5,
    alt: 'Bianca Fernandez ao lado de uma mesa com equipamentos de vistoria: trena, medidor a laser, tablet, notebook, capacete e colete.',
    position: '40% 50%',
  },
  'certificado-banner': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez sorrindo e segurando seu certificado de pós-graduação em Acessibilidade Arquitetônica e Urbanística, diante do painel do curso.',
  },
  'nivel-sorriso': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez sorrindo, de blazer bege, segurando um nível de bolha azul diante de um dos olhos.',
  },
  'xadrez-mesa': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez sentada à mesa, de blazer pied-de-poule, com a mão apoiada no rosto e um leve sorriso.',
  },
  'trena': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez, de blazer bege, estendendo uma trena metálica.',
  },
  'patrimonio-noite': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez, de colete refletivo, fazendo medições com trena e nível a laser junto ao muro de uma igreja histórica, à noite.',
  },
  'igreja-interior': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez, de colete refletivo, no coro de uma igreja histórica com altar e forro pintados ao fundo.',
  },
  'medicao-hall': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez medindo com trena a altura de equipamentos em um hall de elevadores, com piso tátil de alerta no chão.',
  },
  'inaer-certificado': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez erguendo o certificado de pós-graduação diante do painel do INAER.',
  },
  'cerimonia': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez sorrindo ao receber o certificado de pós-graduação em cerimônia.',
  },
  'palco-apro': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez caminhando no palco durante a cerimônia de certificação, com o auditório ao fundo.',
  },
  'certificado-palco': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez com crachá do evento APRO 2026, segurando o certificado de pós-graduação.',
  },
  'evento-apro': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez no palco de um evento, segurando o certificado, diante de um telão.',
  },
  'igreja-torre': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Selfie de Bianca Fernandez de colete refletivo diante da torre de uma igreja histórica.',
  },
  'sino': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Selfie de Bianca Fernandez na torre sineira de uma igreja, ao lado de um grande sino de bronze.',
  },
  'xadrez-selfie': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Retrato de Bianca Fernandez de blazer pied-de-poule e blusa clara.',
  },
  'restaurante': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez sorrindo, de blazer escuro e óculos, sentada à mesa.',
  },
  'girassois': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez sorrindo e segurando um grande buquê de girassóis.',
  },
  'por-do-sol': {
    widths: [640, 960],
    ratio: 4 / 5,
    dir: 'carrossel',
    alt: 'Bianca Fernandez em uma estrada sob um céu de pôr do sol.',
  },
} satisfies Record<string, PhotoData>;

export type PhotoKey = keyof typeof photos;

/**
 * Fotos do carrossel da seção "Apresentação" (página inicial), na ordem
 * em que aparecem. Para retirar uma foto, basta apagar a chave da lista.
 */
export const presentationSlides: PhotoKey[] = [
  'sofa-tablet',
  'certificado-banner',
  'nivel-sorriso',
  'xadrez-mesa',
  'trena',
  'patrimonio-noite',
  'igreja-interior',
  'medicao-hall',
  'inaer-certificado',
  'cerimonia',
  'palco-apro',
  'certificado-palco',
  'evento-apro',
  'igreja-torre',
  'sino',
  'xadrez-selfie',
  'restaurante',
  'girassois',
  'por-do-sol',
];
