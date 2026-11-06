/**
 * Pré-renderização estática (SSG).
 *
 * Após o build, gera um HTML completo para cada página — com título,
 * descrição, Open Graph e conteúdo já presentes — o que melhora a
 * indexação em buscadores, o compartilhamento em redes sociais e o
 * tempo de exibição inicial. Gera também 404.html, sitemap.xml e robots.txt.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const { render, routes, siteUrl } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

function page(url) {
  const { html, head } = render(url);
  return template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace('<!--head-->', head)
    .replace('<!--app-->', html);
}

for (const { path: route } of routes) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(route));
  console.log(`  ✓ ${route}`);
}

fs.writeFileSync(path.join(dist, '404.html'), page('/404'));
console.log('  ✓ 404.html');

// robots.txt e sitemap.xml
const robots = ['User-agent: *', 'Allow: /'];
if (siteUrl) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      ({ path: p, priority }) =>
        `  <url>\n    <loc>${siteUrl}${p === '/' ? '/' : p}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`,
    )
    .join('\n');
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`);
  console.log('  ✓ sitemap.xml');
} else {
  console.warn('\n  ⚠ VITE_SITE_URL não definida: sitemap.xml não foi gerado e os links canônicos ficaram desativados.');
  console.warn('    Defina a variável no arquivo .env (ou no painel da Vercel/Netlify) e rode o build novamente.\n');
}
fs.writeFileSync(path.join(dist, 'robots.txt'), robots.join('\n') + '\n');
console.log('  ✓ robots.txt');

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('\nPré-renderização concluída.');
