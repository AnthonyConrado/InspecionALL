import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { useA11y } from '@/lib/a11yPrefs';
import { cn } from '@/lib/cn';

const VIDEO = '/brand/inspecionall.mp4';
const POSTER = '/brand/inspecionall-1280.webp';
const LABEL =
  'Logotipo da InspecionAll: símbolo de acessibilidade, edificações e pessoas em percurso acessível, com os dizeres “Acessibilidade na Engenharia Civil — Diagnóstica, Arquitetônica e Urbanística”.';

/**
 * Animação da marca InspecionAll (convertida do GIF original de 17,5 MB
 * para um vídeo de cerca de 175 KB).
 * - Começa quando ao menos metade dela está visível e toca uma única vez
 *   (4,9 s — dentro do limite de 5 s do item 5.15.1 da ABNT NBR 17225).
 * - Com redução de movimento ou "Pausar animações", mostra a imagem final.
 * - Um botão permite assistir novamente.
 */
export function BrandReveal({ className }: { className?: string }) {
  const { motionAllowed } = useA11y();
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    const v = videoRef.current;
    if (!motionAllowed || !el || !v) return;
    if (!('IntersectionObserver' in window)) {
      v.play().catch(() => setEnded(true));
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => setEnded(true));
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [motionAllowed]);

  const replay = () => {
    const v = videoRef.current;
    if (!v) return;
    setEnded(false);
    v.currentTime = 0;
    v.play().catch(() => setEnded(true));
  };

  return (
    <figure className={cn('relative', className)}>
      <div
        ref={wrapRef}
        role="img"
        aria-label={LABEL}
        className="relative aspect-video overflow-hidden rounded-[1.75rem] bg-[#00282d] ring-1 ring-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]"
      >
        {motionAllowed ? (
          <video
            ref={videoRef}
            muted
            playsInline
            preload="metadata"
            poster={POSTER}
            aria-hidden="true"
            tabIndex={-1}
            disablePictureInPicture
            onEnded={() => setEnded(true)}
            className="size-full object-cover"
          >
            <source src={VIDEO} type="video/mp4" />
          </video>
        ) : (
          <picture aria-hidden="true">
            <source type="image/webp" srcSet="/brand/inspecionall-800.webp 800w, /brand/inspecionall-1280.webp 1280w" sizes="(min-width: 1024px) 40rem, 92vw" />
            <img
              src="/brand/inspecionall-1280.jpg"
              srcSet="/brand/inspecionall-800.jpg 800w, /brand/inspecionall-1280.jpg 1280w"
              sizes="(min-width: 1024px) 40rem, 92vw"
              alt=""
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </picture>
        )}
      </div>
      {motionAllowed && ended && (
        <button
          type="button"
          onClick={replay}
          className="absolute bottom-4 right-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-white/10 px-4 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20"
        >
          <RotateCcw aria-hidden="true" className="size-4" />
          Ver animação novamente
        </button>
      )}
    </figure>
  );
}
