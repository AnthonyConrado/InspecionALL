import { absoluteUrl, siteConfig } from '@/config/site';
import { profile, services, siteName, type PageSeo } from '@/content';

interface HeadTag {
  tag: 'meta' | 'link' | 'script';
  attrs: Record<string, string>;
  content?: string;
}

/** Monta as tags de <head> de uma página (exceto <title>). */
export function buildHeadTags(seo: PageSeo): HeadTag[] {
  const canonical = absoluteUrl(seo.path === '/404' ? '/' : seo.path);
  const image = absoluteUrl(siteConfig.defaultOgImage);

  const tags: HeadTag[] = [
    { tag: 'meta', attrs: { name: 'description', content: seo.description } },
    {
      tag: 'meta',
      attrs: { name: 'robots', content: seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' },
    },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:locale', content: siteConfig.ogLocale } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: siteName } },
    { tag: 'meta', attrs: { name: 'application-name', content: siteName } },
    { tag: 'meta', attrs: { property: 'og:title', content: seo.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: seo.description } },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    {
      tag: 'meta',
      attrs: { property: 'og:image:alt', content: `${profile.name} — ${profile.specialty}` },
    },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: seo.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: seo.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
  ];

  if (seo.keywords?.length) {
    tags.push({ tag: 'meta', attrs: { name: 'keywords', content: seo.keywords.join(', ') } });
  }

  if (siteConfig.url && !seo.noindex) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: canonical } });
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: canonical } });
  }

  if (seo.path === '/') {
    tags.push({
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      content: JSON.stringify(structuredData()),
    });
    // Nome do site nos resultados do Google (exige a URL do site).
    if (siteConfig.url) {
      tags.push({
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        content: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteName,
          alternateName: ['InspecionAll', `${profile.name} | Acessibilidade`],
          url: `${siteConfig.url}/`,
          inLanguage: 'pt-BR',
        }),
      });
    }
  }

  return tags;
}

/** Dados estruturados (schema.org) — somente informações confirmadas. */
function structuredData() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    alternateName: `${profile.name} | Acessibilidade`,
    description:
      'Engenharia Civil Diagnóstica especializada em acessibilidade arquitetônica e urbanística: laudos, diagnósticos, vistorias, auditorias, inspeções, atestados e consultorias.',
    areaServed: [{ '@type': 'Country', name: 'Brasil' }],
    availableLanguage: profile.languages,
    knowsAbout: [
      'Acessibilidade arquitetônica',
      'Acessibilidade urbanística',
      'Engenharia Civil Diagnóstica',
      'ABNT NBR 9050',
      'ABNT NBR 16537',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de acessibilidade',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.summary },
      })),
    },
    founder: { '@type': 'Person', name: profile.name, jobTitle: profile.area },
    sameAs: [profile.contact.linkedin, profile.contact.instagram].filter(Boolean),
  };
  if (siteConfig.url) data.url = siteConfig.url;
  if (profile.contact.email) data.email = profile.contact.email;
  if (profile.contact.whatsapp) data.telephone = `+${profile.contact.whatsapp.replace(/\D/g, '')}`;
  return data;
}

const escapeAttr = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Usado na pré-renderização. */
export function renderHeadToString(seo: PageSeo): string {
  const tags = buildHeadTags(seo)
    .map(({ tag, attrs, content }) => {
      const a = Object.entries(attrs)
        .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
        .join(' ');
      if (tag === 'script') return `<script ${a} data-seo>${(content ?? '').replace(/</g, '\\u003c')}</script>`;
      return `<${tag} ${a} data-seo>`;
    })
    .join('\n    ');
  return `<title>${escapeAttr(seo.title)}</title>\n    ${tags}`;
}

/** Usado no navegador, a cada mudança de rota. */
export function applyHead(seo: PageSeo): void {
  if (typeof document === 'undefined') return;
  document.title = seo.title;
  document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
  const frag = document.createDocumentFragment();
  for (const { tag, attrs, content } of buildHeadTags(seo)) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    el.setAttribute('data-seo', '');
    if (content) el.textContent = content;
    frag.appendChild(el);
  }
  document.head.appendChild(frag);
}
