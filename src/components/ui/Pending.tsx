import type { ReactNode } from 'react';

/**
 * Aviso exibido SOMENTE em desenvolvimento (npm run dev) quando um dado
 * profissional ainda não foi preenchido em src/content/pt-BR/profile.ts.
 * No site publicado, a seção correspondente simplesmente não aparece.
 */
export function Pending({ children }: { children: ReactNode }) {
  if (!import.meta.env.DEV) return null;
  return (
    <div className="rounded-xl border-2 border-dashed border-ochre/60 bg-ochre-light/15 p-4 text-sm text-ink">
      <strong className="font-semibold">Conteúdo pendente (visível apenas em desenvolvimento):</strong> {children}
    </div>
  );
}
