import { useEffect } from 'react';
import type { PageSeo } from '@/content';
import { applyHead } from '@/lib/seo';

/** Atualiza título e metadados da página atual no navegador. */
export function Seo({ seo }: { seo: PageSeo }) {
  useEffect(() => {
    applyHead(seo);
  }, [seo]);
  return null;
}
