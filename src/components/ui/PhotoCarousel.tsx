import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { profile, type PhotoKey } from '@/content';
import { useA11y } from '@/lib/a11yPrefs';
import { cn } from '@/lib/cn';
import { Photo } from './Photo';

const INTERVAL = 5500;

/**
 * Carrossel de fotos com transição suave (esmaecimento cruzado).
 *
 * Acessibilidade (ABNT NBR 17225 / WCAG 2.2):
 * - Botão "Pausar/Reproduzir" sempre visível (item 5.15.1 — controle de animação).
 * - A troca automática para ao passar o mouse, ao receber foco do teclado,
 *   quando a aba fica oculta e quando o carrossel sai da tela.
 * - Sem troca automática com "reduzir movimento" no sistema ou "Pausar
 *   animações" no botão de acessibilidade.
 * - Botões anterior/próxima, setas do teclado e gesto de arrastar no celular.
 * - Só a foto atual é exposta a leitores de tela; as demais ficam ocultas.
 * - Carregamento sob demanda: só são baixadas a foto atual e a seguinte.
 */
export function PhotoCarousel({ slides, className }: { slides: PhotoKey[]; className?: string }) {
  const { motionAllowed } = useA11y();
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0, 1]));
  const rootRef = useRef<HTMLElement>(null);
  const startX = useRef<number | null>(null);
  const id = useId();
  const n = slides.length;

  const goTo = useCallback(
    (i: number) => {
      const next = (i + n) % n;
      setIndex(next);
      setSeen((prev) => {
        if (prev.has(next) && prev.has((next + 1) % n)) return prev;
        const s = new Set(prev);
        s.add(next);
        s.add((next + 1) % n);
        return s;
      });
    },
    [n],
  );

  // Só gira quando o carrossel está na tela e a aba está ativa.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const [tabActive, setTabActive] = useState(true);
  useEffect(() => {
    const on = () => setTabActive(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', on);
    return () => document.removeEventListener('visibilitychange', on);
  }, []);

  const playing = motionAllowed && !userPaused;
  const rotating = playing && visible && tabActive && !hovered && !focused;

  useEffect(() => {
    if (!rotating) return;
    const t = window.setTimeout(() => goTo(index + 1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [rotating, index, goTo]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  const onPointerDown = (e: PointerEvent) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
  };

  const btn =
    'inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-petrol-800/25 bg-white text-petrol-900 transition-colors hover:border-petrol-800 hover:bg-petrol-50';

  return (
    <section
      ref={rootRef}
      aria-roledescription="carrossel"
      aria-label={`Fotos de ${profile.name}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
      }}
      onKeyDown={onKeyDown}
      className={cn('relative', className)}
    >
      <figure className="relative">
        <div
          id={`${id}-slides`}
          aria-live={rotating ? 'off' : 'polite'}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (startX.current = null)}
          className="relative aspect-[4/5] touch-pan-y select-none overflow-hidden rounded-[1.75rem] bg-petrol-900"
        >
          {slides.map((key, i) => {
            const current = i === index;
            return (
              <div
                key={key}
                role="group"
                aria-roledescription="foto"
                aria-label={`${i + 1} de ${n}`}
                aria-hidden={!current}
                className={cn(
                  'carousel-slide absolute inset-0',
                  current ? 'z-[1] opacity-100' : 'z-0 opacity-0',
                )}
              >
                {seen.has(i) && (
                  <Photo
                    name={key}
                    sizes="(min-width: 1024px) 34rem, 92vw"
                    imgClassName={cn('carousel-img', current && 'is-current')}
                  />
                )}
              </div>
            );
          })}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/3 bg-gradient-to-t from-petrol-950/80 to-transparent"
          />
          {/* Barra de progresso da troca automática */}
          {rotating && (
            <div aria-hidden="true" className="absolute inset-x-6 top-5 z-[3] h-1 overflow-hidden rounded-full bg-white/25">
              <div key={index} className="carousel-progress h-full rounded-full bg-white/90" style={{ animationDuration: `${INTERVAL}ms` }} />
            </div>
          )}
        </div>
        <figcaption className="on-dark absolute inset-x-4 bottom-4 z-[3] rounded-2xl border border-white/15 bg-petrol-950/75 px-5 py-4 text-white backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
          <span className="block font-display text-xl">{profile.name}</span>
          <span className="mt-0.5 block text-sm text-petrol-100">Engenheira civil · Especialista em acessibilidade</span>
        </figcaption>
      </figure>

      <div className="mt-4 flex items-center gap-3">
        <button type="button" onClick={() => goTo(index - 1)} aria-controls={`${id}-slides`} className={btn}>
          <ChevronLeft aria-hidden="true" className="size-5" />
          <span className="sr-only">Foto anterior</span>
        </button>
        {motionAllowed && (
          <button type="button" onClick={() => setUserPaused((v) => !v)} className={btn}>
            {userPaused ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
            <span className="sr-only">{userPaused ? 'Reproduzir troca automática de fotos' : 'Pausar troca automática de fotos'}</span>
          </button>
        )}
        <button type="button" onClick={() => goTo(index + 1)} aria-controls={`${id}-slides`} className={btn}>
          <ChevronRight aria-hidden="true" className="size-5" />
          <span className="sr-only">Próxima foto</span>
        </button>
        <p className="ml-auto text-sm font-semibold tabular-nums text-muted" aria-hidden="true">
          {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
        </p>
      </div>
    </section>
  );
}
