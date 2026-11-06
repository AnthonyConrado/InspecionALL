import { useEffect, useRef, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router';
import { profile } from '@/content';
import { useA11y } from '@/lib/a11yPrefs';
import { cn } from '@/lib/cn';

const POSTER = '/brand/logo-192.webp';
const VIDEO = '/brand/logo-animado.mp4';

/**
 * Marca animada (vídeo curto, 4,3 s, sem som, reproduzido uma única vez).
 * - Dura menos de 5 s, como admite o item 5.15.1 da ABNT NBR 17225.
 * - Com "reduzir movimento" no sistema ou "Pausar animações" no botão de
 *   acessibilidade, exibe apenas a imagem estática.
 * - Ao passar o mouse, a animação é reproduzida novamente.
 */
function LogoVideo({ className }: { className?: string }) {
  const { motionAllowed } = useA11y();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (motionAllowed) {
      v.play().catch(() => {
        /* reprodução automática bloqueada: permanece a imagem estática */
      });
    } else {
      v.pause();
    }
  }, [motionAllowed]);

  const replay = () => {
    const v = ref.current;
    if (!v || !motionAllowed) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  return (
    <span
      aria-hidden="true"
      onMouseEnter={replay}
      className={cn('relative block shrink-0 overflow-hidden rounded-xl bg-[#012826]', className)}
    >
      {motionAllowed ? (
        <video
          ref={ref}
          muted
          playsInline
          preload="auto"
          poster={POSTER}
          tabIndex={-1}
          disablePictureInPicture
          className="size-full object-cover"
        >
          <source src={VIDEO} type="video/mp4" />
        </video>
      ) : (
        <img src={POSTER} alt="" width={44} height={44} className="size-full object-cover" />
      )}
    </span>
  );
}

function LogoStatic({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn('relative block shrink-0 overflow-hidden rounded-xl bg-[#012826]', className)}>
      <img src={POSTER} alt="" width={44} height={44} loading="lazy" className="size-full object-cover" />
    </span>
  );
}

export function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  const dark = tone === 'dark';
  const { pathname, hash } = useLocation();
  const { motionAllowed } = useA11y();

  // Já na página inicial: em vez de "navegar" para a mesma página (o que não
  // rolaria a tela), volta suavemente ao topo e leva o foco ao conteúdo.
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/' || hash) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: motionAllowed ? 'smooth' : 'instant' });
    document.getElementById('conteudo')?.focus({ preventScroll: true });
  };

  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn('group inline-flex min-w-0 items-center gap-2.5 rounded-lg sm:gap-3', className)}
    >
      {dark ? (
        <LogoVideo className="size-11 sm:size-12" />
      ) : (
        <LogoStatic className="size-12 ring-1 ring-white/20" />
      )}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'logo-name whitespace-nowrap font-display text-[1.2rem] tracking-tight min-[400px]:text-[1.35rem] sm:text-[1.6rem]',
            dark ? 'text-petrol-950' : 'text-white',
          )}
        >
          {profile.name}
        </span>
        <span
          className={cn(
            'mt-1.5 whitespace-nowrap text-[0.66rem] font-semibold uppercase tracking-[0.12em]',
            dark ? 'text-muted' : 'text-petrol-200',
          )}
        >
          Acessibilidade
          {/* No desktop o menu ocupa o espaço: o complemento aparece só em telas médias. */}
          <span className="hidden sm:inline xl:hidden"> arquitetônica e urbanística</span>
        </span>
      </span>
      <span className="sr-only">— página inicial</span>
    </Link>
  );
}
