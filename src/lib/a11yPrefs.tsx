import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

/**
 * Preferências de acessibilidade escolhidas pelo visitante no botão de
 * acessibilidade. Ficam salvas no navegador (localStorage) e são aplicadas
 * como classes no elemento <html> — ver styles/index.css.
 *
 * Elas tornam configuráveis itens que a ABNT NBR 17225 admite "por
 * configuração do usuário" (espaçamento de texto, por exemplo) e oferecem
 * um mecanismo para pausar animações (item 5.15.1).
 */
export interface A11yPrefs {
  /** Tamanho do texto em %, de 100 a 160. */
  fontScale: number;
  highContrast: boolean;
  textSpacing: boolean;
  underlineLinks: boolean;
  pauseAnimations: boolean;
  simpleFont: boolean;
}

export const defaultPrefs: A11yPrefs = {
  fontScale: 100,
  highContrast: false,
  textSpacing: false,
  underlineLinks: false,
  pauseAnimations: false,
  simpleFont: false,
};

export const FONT_SCALES = [100, 115, 130, 145, 160];

const STORAGE_KEY = 'bf-a11y';

/** Mapeamento preferência → classe CSS. Mantido em sincronia com index.html. */
const classMap: Record<Exclude<keyof A11yPrefs, 'fontScale'>, string> = {
  highContrast: 'a11y-contrast',
  textSpacing: 'a11y-spacing',
  underlineLinks: 'a11y-links',
  pauseAnimations: 'a11y-no-motion',
  simpleFont: 'a11y-simple-font',
};

function readStored(): A11yPrefs {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultPrefs;
    return { ...defaultPrefs, ...(JSON.parse(raw) as Partial<A11yPrefs>) };
  } catch {
    return defaultPrefs;
  }
}

function apply(prefs: A11yPrefs) {
  const root = document.documentElement;
  (Object.keys(classMap) as (keyof typeof classMap)[]).forEach((k) => root.classList.toggle(classMap[k], prefs[k]));
  root.style.fontSize = prefs.fontScale === 100 ? '' : `${prefs.fontScale}%`;
  // Texto ampliado ou espaçado: o cabeçalho passa a usar o menu compacto.
  root.classList.toggle('a11y-text-large', prefs.fontScale > 100 || prefs.textSpacing);
  if (prefs.pauseAnimations) root.classList.remove('motion-ok');
}

interface Ctx {
  prefs: A11yPrefs;
  update: (patch: Partial<A11yPrefs>) => void;
  reset: () => void;
  /** Animações permitidas (sem redução de movimento no sistema e sem pausa pelo usuário). */
  motionAllowed: boolean;
}

const A11yContext = createContext<Ctx | null>(null);

export function A11yProvider({ children }: { children: ReactNode }) {
  // No servidor e na primeira renderização usa-se o padrão (evita divergência de hidratação);
  // as preferências salvas já foram aplicadas ao <html> pelo script em index.html.
  const [prefs, setPrefs] = useState<A11yPrefs>(defaultPrefs);
  const [systemReduced, setSystemReduced] = useState(true);

  useEffect(() => {
    setPrefs(readStored());
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSystemReduced(mq.matches);
    const onChange = () => setSystemReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const update = useCallback((patch: Partial<A11yPrefs>) => {
    setPrefs((prev) => {
      const next = { ...prev, ...patch };
      apply(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* armazenamento indisponível: a preferência vale só nesta visita */
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setPrefs(defaultPrefs);
    apply(defaultPrefs);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignora */
    }
  }, []);

  return (
    <A11yContext.Provider value={{ prefs, update, reset, motionAllowed: !systemReduced && !prefs.pauseAnimations }}>
      {children}
    </A11yContext.Provider>
  );
}

export function useA11y(): Ctx {
  const ctx = useContext(A11yContext);
  if (!ctx) throw new Error('useA11y precisa estar dentro de <A11yProvider>');
  return ctx;
}
