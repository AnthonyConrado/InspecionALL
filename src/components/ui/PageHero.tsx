import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Rótulo da página atual na trilha de navegação. */
  crumb: string;
  children?: ReactNode;
  /** Imagem opcional exibida à direita (em telas grandes). */
  image?: ReactNode;
}

/** Cabeçalho das páginas internas, com trilha de navegação (breadcrumb). */
export function PageHero({ eyebrow, title, lead, crumb, children, image }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-sand">
      <div
        aria-hidden="true"
        className="bg-tactile pointer-events-none absolute -right-10 top-0 h-full w-1/2 text-petrol-800/[0.09] [mask-image:linear-gradient(to_left,black,transparent)]"
      />
      <div className="container-site relative pb-14 pt-10 sm:pb-20 sm:pt-14">
        <nav aria-label="Trilha de navegação" className="mb-10 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link to="/" className="link-underline inline-flex min-h-6 items-center hover:text-petrol-800">
                Início
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-4" />
            </li>
            <li>
              <span aria-current="page" className="font-semibold text-ink">
                {crumb}
              </span>
            </li>
          </ol>
        </nav>
        <div className={image ? 'grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16' : undefined}>
          <div>
            <p className="eyebrow mb-5 flex items-center gap-3 text-ochre">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
              {eyebrow}
            </p>
            <h1
              className={
                image
                  ? 'max-w-4xl animate-fade-up text-[clamp(2.1rem,1.4rem+2.6vw,3.3rem)] text-petrol-950'
                  : 'max-w-4xl animate-fade-up text-[clamp(2.2rem,1.4rem+3.4vw,3.9rem)] text-petrol-950'
              }
            >
              {title}
            </h1>
            {lead && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lead}</div>}
            {children}
          </div>
          {image && <div className="mx-auto w-full max-w-sm lg:max-w-none">{image}</div>}
        </div>
      </div>
    </header>
  );
}
