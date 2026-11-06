import { Link } from 'react-router';
import { mainNav } from '@/content';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <section aria-labelledby="nf-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-tactile pointer-events-none absolute inset-0 text-petrol-800/[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div className="container-site relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow text-ochre">Erro 404</p>
        <h1 id="nf-title" className="mt-5 max-w-2xl text-[clamp(2.2rem,1.4rem+3.4vw,3.6rem)] text-petrol-950">
          Esta rota não leva a lugar algum.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          A página procurada não existe ou foi movida. Escolha um dos caminhos abaixo para continuar.
        </p>
        <div className="mt-9">
          <ButtonLink to="/">Voltar ao início</ButtonLink>
        </div>
        <nav aria-label="Páginas do site" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {mainNav.slice(1).map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="link-underline inline-flex min-h-10 items-center font-semibold text-petrol-800">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contato" className="link-underline inline-flex min-h-10 items-center font-semibold text-petrol-800">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
