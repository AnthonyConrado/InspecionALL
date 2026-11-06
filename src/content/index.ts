/**
 * Ponto único de acesso ao conteúdo do site.
 *
 * O conteúdo está organizado por idioma (src/content/pt-BR). Para incluir
 * uma versão em inglês no futuro, crie src/content/en com os mesmos
 * arquivos e selecione o idioma aqui (ou por rota, ex.: /en/...).
 */
export * from './types';
export { profile, whatsappUrl, phoneHref } from './pt-BR/profile';
export { services, getServiceBySlug } from './pt-BR/services';
export { segments } from './pt-BR/segments';
export { mainNav, contactNav } from './pt-BR/navigation';
export { seoPages, notFoundSeo, getSeo, siteName } from './pt-BR/seo';
export { copy } from './pt-BR/copy';
export { photos, presentationSlides, type PhotoKey, type PhotoData } from './pt-BR/photos';
export {
  concepts,
  legalReferences,
  legalReviewedAt,
  otherReferencesNote,
  internationalNote,
} from './pt-BR/accessibility';
