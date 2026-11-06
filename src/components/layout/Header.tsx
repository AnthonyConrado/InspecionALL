import { useEffect, useId, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { contactNav, mainNav } from '@/content';
import { cn } from '@/lib/cn';
import { Logo } from './Logo';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  // Fecha o menu ao trocar de página.
  useEffect(() => setOpen(false), [pathname]);

  // Esc fecha o menu e devolve o foco ao botão.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative whitespace-nowrap rounded-md px-1 py-2 text-[0.95rem] font-semibold transition-colors',
      'after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-ochre after:transition-transform',
      isActive ? 'text-petrol-950 after:scale-x-100' : 'text-muted hover:text-petrol-900 after:scale-x-0 hover:after:scale-x-100',
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b bg-paper/[0.97] transition-[box-shadow,border-color] duration-300',
        scrolled ? 'border-line shadow-[0_6px_24px_-18px_rgba(6,42,43,0.45)]' : 'border-transparent',
      )}
    >
      <div className="container-site flex min-h-20 items-center justify-between gap-4 py-2 sm:gap-6">
        <Logo />

        <nav aria-label="Navegação principal" className="desktop-nav hidden xl:block">
          <ul className="flex items-center gap-6">
            {/* "Início" fica só no menu móvel: no desktop, a marca já leva à página inicial. */}
            {mainNav.filter((item) => item.to !== '/').map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to={contactNav.to}
                className={({ isActive }) =>
                  cn(
                    'inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-5 text-[0.95rem] font-semibold transition-colors',
                    isActive ? 'bg-petrol-950 text-white' : 'bg-petrol-800 text-white hover:bg-petrol-950',
                  )
                }
              >
                Solicitar atendimento
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="menu-btn inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 rounded-full border border-petrol-800/25 bg-white px-3 text-sm min-[360px]:px-4 font-semibold text-petrol-900 xl:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          <span className="max-[359px]:sr-only">{open ? 'Fechar' : 'Menu'}</span>
          <span className="sr-only"> de navegação</span>
        </button>
      </div>

      <div id={menuId} hidden={!open} className="menu-panel border-t border-line bg-paper xl:hidden">
        <nav aria-label="Navegação principal (menu móvel)" className="container-site py-4">
          <ul className="flex flex-col">
            {[...mainNav, contactNav].map((item) => (
              <li key={item.to} className="border-b border-line/70 last:border-0">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'flex min-h-12 items-center justify-between py-3 text-lg font-semibold',
                      isActive ? 'text-petrol-950' : 'text-muted hover:text-petrol-900',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && <span aria-hidden="true" className="size-2 rounded-full bg-ochre" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
