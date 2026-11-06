/**
 * Configurações técnicas do site, lidas de variáveis de ambiente.
 * Veja o arquivo .env.example na raiz do projeto.
 */

const rawSiteUrl = (import.meta.env.VITE_SITE_URL as string | undefined) ?? '';

export const siteConfig = {
  /** URL pública do site, sem barra final. Vazia = links relativos. */
  url: rawSiteUrl.replace(/\/+$/, ''),
  /** Idioma principal. A estrutura em src/content/<locale> permite incluir outros idiomas. */
  locale: 'pt-BR' as const,
  ogLocale: 'pt_BR',
  /** Endpoint para envio real do formulário de contato. */
  formEndpoint: ((import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? '').trim(),
  formAccessKey: ((import.meta.env.VITE_FORM_ACCESS_KEY as string | undefined) ?? '').trim(),
  /** Imagem padrão de compartilhamento (1200 × 630). */
  defaultOgImage: '/og-image.png',
};

export const isFormConfigured = siteConfig.formEndpoint.length > 0;

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}
