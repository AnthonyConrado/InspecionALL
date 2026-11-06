import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { AlignJustify, CirclePause, Contrast, Link, Minus, Plus, RotateCcw, Type, X } from 'lucide-react';
import { FONT_SCALES, useA11y, type A11yPrefs } from '@/lib/a11yPrefs';
import { cn } from '@/lib/cn';

type ToggleKey = Exclude<keyof A11yPrefs, 'fontScale'>;

const toggles: { key: ToggleKey; label: string; hint: string; icon: ReactNode }[] = [
  {
    key: 'highContrast',
    label: 'Alto contraste',
    hint: 'Cores com contraste máximo.',
    icon: <Contrast aria-hidden="true" className="size-5" />,
  },
  {
    key: 'textSpacing',
    label: 'Espaçamento de texto',
    hint: 'Mais espaço entre linhas, letras, palavras e parágrafos.',
    icon: <AlignJustify aria-hidden="true" className="size-5" />,
  },
  {
    key: 'underlineLinks',
    label: 'Destacar links',
    hint: 'Sublinha todos os links.',
    icon: <Link aria-hidden="true" className="size-5" />,
  },
  {
    key: 'pauseAnimations',
    label: 'Pausar animações',
    hint: 'Interrompe vídeos decorativos e efeitos de movimento.',
    icon: <CirclePause aria-hidden="true" className="size-5" />,
  },
  {
    key: 'simpleFont',
    label: 'Fonte simplificada',
    hint: 'Usa uma única fonte sem serifa em todo o site.',
    icon: <Type aria-hidden="true" className="size-5" />,
  },
];

/**
 * Botão de acessibilidade fixo no canto da tela, com ajustes de leitura.
 * Padrão de "disclosure": o botão controla a abertura do painel; Esc fecha
 * e devolve o foco ao botão.
 */
export function AccessibilityMenu() {
  const { prefs, update, reset } = useA11y();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    headingRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  const idx = FONT_SCALES.indexOf(prefs.fontScale);
  const canDec = idx > 0;
  const canInc = idx < FONT_SCALES.length - 1;

  return (
    <div ref={wrapperRef} className="fixed bottom-5 left-5 z-40 sm:bottom-7 sm:left-7">
      <section
        id={panelId}
        hidden={!open}
        aria-labelledby={`${panelId}-titulo`}
        className="absolute bottom-[calc(100%+0.75rem)] left-0 max-h-[min(36rem,calc(100vh-7rem))] w-[min(22rem,calc(100vw-2.5rem))] overflow-y-auto rounded-[1.5rem] border border-line bg-white p-5 text-ink shadow-[0_30px_60px_-25px_rgba(6,42,43,0.55)]"
      >
        <div className="flex items-start justify-between gap-3">
          <h2
            id={`${panelId}-titulo`}
            ref={headingRef}
            tabIndex={-1}
            className="font-display text-xl text-petrol-950 focus:outline-none"
          >
            Acessibilidade
          </h2>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              buttonRef.current?.focus();
            }}
            className="-mr-1 -mt-1 inline-flex size-10 items-center justify-center rounded-full text-muted hover:bg-sand hover:text-ink"
          >
            <X aria-hidden="true" className="size-5" />
            <span className="sr-only">Fechar opções de acessibilidade</span>
          </button>
        </div>
        <p className="mt-1 text-sm text-muted">Ajuste a leitura do site. As escolhas ficam salvas neste navegador.</p>

        {/* Tamanho do texto */}
        <div role="group" aria-labelledby={`${panelId}-tamanho`} className="mt-5 rounded-2xl bg-sand p-4">
          <p id={`${panelId}-tamanho`} className="font-semibold text-petrol-950">
            Tamanho do texto
          </p>
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => canDec && update({ fontScale: FONT_SCALES[idx - 1] })}
              aria-disabled={!canDec}
              className={cn(
                'inline-flex size-11 items-center justify-center rounded-full border border-petrol-800/30 bg-white text-petrol-900',
                canDec ? 'hover:border-petrol-800' : 'cursor-not-allowed opacity-50',
              )}
            >
              <Minus aria-hidden="true" className="size-5" />
              <span className="sr-only">Diminuir texto</span>
            </button>
            <output aria-live="polite" className="min-w-16 text-center text-lg font-bold tabular-nums text-petrol-950">
              {prefs.fontScale}%
            </output>
            <button
              type="button"
              onClick={() => canInc && update({ fontScale: FONT_SCALES[idx + 1] })}
              aria-disabled={!canInc}
              className={cn(
                'inline-flex size-11 items-center justify-center rounded-full border border-petrol-800/30 bg-white text-petrol-900',
                canInc ? 'hover:border-petrol-800' : 'cursor-not-allowed opacity-50',
              )}
            >
              <Plus aria-hidden="true" className="size-5" />
              <span className="sr-only">Aumentar texto</span>
            </button>
          </div>
        </div>

        {/* Alternâncias */}
        <ul className="mt-4 space-y-2">
          {toggles.map((t) => {
            const on = prefs[t.key];
            return (
              <li key={t.key}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => update({ [t.key]: !on } as Partial<A11yPrefs>)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-colors',
                    on ? 'border-petrol-800 bg-petrol-50' : 'border-line hover:border-petrol-800/40',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex size-10 shrink-0 items-center justify-center rounded-xl',
                      on ? 'bg-petrol-800 text-white' : 'bg-sand text-petrol-800',
                    )}
                  >
                    {t.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-petrol-950">{t.label}</span>
                    <span className="block text-sm leading-snug text-muted">{t.hint}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'relative h-6 w-11 shrink-0 rounded-full border-2 transition-colors',
                      on ? 'border-petrol-800 bg-petrol-800' : 'border-muted bg-white',
                    )}
                  >
                    <span
                      className={cn(
                        'absolute top-0.5 size-4 rounded-full transition-all',
                        on ? 'left-[1.375rem] bg-white' : 'left-0.5 bg-muted',
                      )}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={reset}
          className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-petrol-800 underline-offset-4 hover:underline"
        >
          <RotateCcw aria-hidden="true" className="size-4" />
          Redefinir ajustes
        </button>
        <p className="mt-2 border-t border-line pt-3 text-xs leading-relaxed text-muted">
          Site desenvolvido tendo como referência a ABNT NBR 17225 e as WCAG 2.2 (nível AA).
        </p>
      </section>

      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-14 items-center justify-center overflow-hidden rounded-full bg-[#012826] shadow-lg shadow-petrol-950/30 ring-2 ring-white transition-transform hover:scale-105"
      >
        <img src="/brand/logo-192.webp" alt="" width={56} height={56} className="size-full object-cover" />
        <span className="sr-only">Opções de acessibilidade</span>
      </button>
    </div>
  );
}
