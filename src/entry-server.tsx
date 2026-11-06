import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppRoutes } from './App';
import { getSeo, notFoundSeo, seoPages } from './content';
import { renderHeadToString } from './lib/seo';
import { siteConfig } from './config/site';
import { A11yProvider } from './lib/a11yPrefs';

/** Renderiza uma rota em HTML estático (usado por scripts/prerender.mjs). */
export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <A11yProvider>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </A11yProvider>
    </StrictMode>,
  );
  const seo = url === '/404' ? notFoundSeo : getSeo(url);
  return { html, head: renderHeadToString(seo) };
}

export const routes = seoPages.map((p) => ({ path: p.path, priority: p.priority ?? 0.5 }));
export const siteUrl = siteConfig.url;
