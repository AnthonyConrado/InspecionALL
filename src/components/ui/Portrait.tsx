import { profile, type PhotoKey } from '@/content';
import { cn } from '@/lib/cn';
import { Photo } from './Photo';

/**
 * Fotografia de Bianca em moldura, com legenda opcional (nome e
 * credenciais). As fotos ficam em content/pt-BR/photos.ts.
 */
export function Portrait({
  name = 'retrato',
  className,
  priority = false,
  caption = true,
  softenTop = false,
}: {
  name?: PhotoKey;
  className?: string;
  priority?: boolean;
  caption?: boolean;
  /** Escurece levemente o topo (útil em fotos com painéis de evento ao fundo). */
  softenTop?: boolean;
}) {
  return (
    <figure className={cn('relative', className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-petrol-900">
        <Photo name={name} priority={priority} />
        {softenTop && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[24%] bg-gradient-to-b from-petrol-950/85 via-petrol-950/45 to-transparent"
          />
        )}
        {caption && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-petrol-950/80 to-transparent"
          />
        )}
      </div>
      {caption && (
        <figcaption className="on-dark absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-petrol-950/75 px-5 py-4 text-white backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
          <span className="block font-display text-xl">{profile.name}</span>
          <span className="mt-0.5 block text-sm text-petrol-100">Engenheira civil · Especialista em acessibilidade</span>
        </figcaption>
      )}
    </figure>
  );
}
