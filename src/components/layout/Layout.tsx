import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { getSeo } from '@/content';
import { useA11y } from '@/lib/a11yPrefs';
import { Seo } from '../seo/Seo';
import { Footer } from './Footer';
import { Header } from './Header';
import { WhatsAppFloat } from './WhatsAppFloat';
import { AccessibilityMenu } from '../a11y/AccessibilityMenu';

export function Layout() {
  const location = useLocation();
  const seo = getSeo(location.pathname);
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  const [announcement, setAnnouncement] = useState('');
  const [navigated, setNavigated] = useState(false);
  const { motionAllowed } = useA11y();
  const motionRef = useRef(motionAllowed);
  motionRef.current = motionAllowed;

  // Navegação entre páginas: rola ao topo (ou à âncora), move o foco para o
  // conteúdo principal e anuncia o título da nova página a leitores de tela.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: motionRef.current ? 'smooth' : 'auto', block: 'start' });
        target.focus({ preventScroll: true });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    setNavigated(true);
    mainRef.current?.focus({ preventScroll: true });
    setAnnouncement(seo.title);
  }, [location.pathname, location.hash, seo.title]);

  // Âncora na primeira carga (ex.: /servicos#vistorias-tecnicas)
  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      target?.scrollIntoView();
    }
    (window as Window & { __appReady?: boolean }).__appReady = true;
  }, []);

  return (
    <>
      <Seo seo={seo} />
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-petrol-950 px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo" ref={mainRef} tabIndex={-1} className="focus:outline-none">
        {/* Transição suave entre páginas (só após a primeira navegação). */}
        <div key={location.pathname} className={navigated ? 'page-enter' : undefined}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <AccessibilityMenu />
      <WhatsAppFloat />
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>
    </>
  );
}
