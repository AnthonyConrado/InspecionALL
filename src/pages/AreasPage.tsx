import { segments } from '@/content';
import { ButtonLink } from '@/components/ui/Button';
import { CtaBand } from '@/components/ui/CtaBand';
import { IconBadge } from '@/components/ui/IconBadge';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function AreasPage() {
  return (
    <>
      <PageHero
        crumb="Áreas de Atuação"
        eyebrow="Áreas de atuação"
        title="Acessibilidade adaptada à realidade de cada ambiente."
        lead={
          <p>
            Dez segmentos em que Bianca Fernandez possui trabalhos concluídos. Em cada um, as necessidades de
            acessibilidade se apresentam de forma diferente — e pedem soluções técnicas específicas.
          </p>
        }
      />

      <section aria-labelledby="segmentos-title" className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Segmentos"
            id="segmentos-title"
            title="Necessidades e soluções típicas por segmento"
            intro={
              <p>
                As descrições abaixo são de caráter geral e indicam os temas mais frequentes em cada contexto. Os
                ícones são ilustrativos e não representam projetos executados.
              </p>
            }
          />

          <ul className="mt-14 grid gap-6 lg:grid-cols-2">
            {segments.map((seg, i) => (
              <Reveal
                as="li"
                key={seg.slug}
                delay={(i % 2) * 70}
                className="group relative overflow-hidden rounded-[1.5rem] border border-line bg-white p-7 transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgba(6,42,43,0.5)] sm:p-9"
              >
                <div
                  aria-hidden="true"
                  className="bg-tactile pointer-events-none absolute -right-8 -top-8 size-40 text-petrol-800/[0.07] transition-colors duration-300 group-hover:text-ochre/20 [mask-image:radial-gradient(circle,black,transparent_70%)]"
                />
                <article aria-labelledby={`seg-${seg.slug}`} className="relative">
                  <div className="flex items-center justify-between">
                    <IconBadge icon={seg.icon} size="lg" />
                    <span aria-hidden="true" className="font-display text-2xl text-ochre">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 id={`seg-${seg.slug}`} className="mt-6 text-[1.6rem] text-petrol-950">
                    {seg.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{seg.summary}</p>

                  <div className="mt-7 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                    <div>
                      <h4 className="eyebrow text-[0.72rem] text-petrol-700">Necessidades frequentes</h4>
                      <ul className="mt-3 space-y-2 text-[0.95rem] leading-snug text-ink/85">
                        {seg.needs.map((n) => (
                          <li key={n} className="flex gap-2.5">
                            <span aria-hidden="true" className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-petrol-600" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="eyebrow text-[0.72rem] text-petrol-700">Soluções técnicas</h4>
                      <ul className="mt-3 space-y-2 text-[0.95rem] leading-snug text-ink/85">
                        {seg.solutions.map((n) => (
                          <li key={n} className="flex gap-2.5">
                            <span aria-hidden="true" className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-ochre" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink to="/experiencias" variant="secondary">
              Ver casos concluídos por segmento
            </ButtonLink>
            <ButtonLink to="/servicos" variant="ghost">
              Conhecer os serviços
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
