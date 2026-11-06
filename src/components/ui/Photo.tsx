import { useEffect, useRef, useState } from 'react';
import { photos, type PhotoData, type PhotoKey } from '@/content';
import { cn } from '@/lib/cn';

interface PhotoProps {
  name: PhotoKey;
  /** Atributo sizes (largura exibida). */
  sizes?: string;
  /** Carregamento imediato — use apenas na imagem principal da página. */
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** Texto alternativo próprio; padrão: o definido em content/pt-BR/photos.ts. */
  alt?: string;
}

/**
 * Imagem responsiva (WebP com alternativa em JPEG).
 * Surge com um esmaecimento suave quando termina de carregar, em vez de
 * "pipocar" na tela (efeito desativado com redução de movimento).
 */
export function Photo({ name, sizes = '(min-width: 1024px) 40vw, 92vw', priority, className, imgClassName, alt }: PhotoProps) {
  const p: PhotoData = photos[name];
  const base = `/images/${p.dir ?? 'fotos'}/${name}`;
  const srcset = (ext: string) => p.widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ');
  const largest = p.widths[p.widths.length - 1];
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Imagens já carregadas antes da hidratação não disparam onLoad.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <picture className={cn('block h-full w-full', className)}>
      <source type="image/webp" srcSet={srcset('webp')} sizes={sizes} />
      <img
        ref={ref}
        src={`${base}-${largest}.jpg`}
        srcSet={srcset('jpg')}
        sizes={sizes}
        alt={alt ?? p.alt}
        width={largest}
        height={Math.round(largest / p.ratio)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        style={{ objectPosition: p.position }}
        className={cn('h-full w-full object-cover', !priority && 'img-fade', loaded && 'is-loaded', imgClassName)}
      />
    </picture>
  );
}
