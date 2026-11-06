import { Lock } from 'lucide-react';
import { copy, segments } from '@/content';
import { CtaBand } from '@/components/ui/CtaBand';
import { IconBadge } from '@/components/ui/IconBadge';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        crumb="Casos Concluídos"
        eyebrow="Experiências e casos concluídos"
        title={copy.experience.title}
        lead={<p>{copy.experience.intro}</p>}
      >
        <aside
          aria-label="Aviso de confidencialidade"
          className="mt-10 flex max-w-3xl gap-4 rounded-2xl border border-petrol-800/15 bg-white/70 p-5 text-[0.95rem] leading-relaxed text-ink/85"
        >
          <Lock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-petrol-700" />
          <p>{copy.experience.confidentiality}</p>
        </aside>
      </PageHero>

      <section aria-labelledby="exp-list-title" className="py-20 sm:py-24">
        <div className="container-site">
          <div className="max-w-3xl">
            <h2 id="exp-list-title" className="text-[clamp(1.85rem,1.3rem+2.2vw,2.9rem)] text-petrol-950">
              Casos concluídos em dez segmentos
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{copy.experience.descriptionsNote}</p>
          </div>

          <ol className="mt-14 divide-y divide-line border-y border-line">
            {segments.map((seg, i) => (
              <Reveal as="li" key={seg.slug} className="py-12 sm:py-14">
                <article
                  id={seg.slug}
                  tabIndex={-1}
                  aria-labelledby={`exp-${seg.slug}`}
                  className="grid scroll-mt-28 gap-8 rounded-lg focus:outline-none lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <IconBadge icon={seg.icon} />
                      <span aria-hidden="true" className="font-display text-lg text-ochre">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 id={`exp-${seg.slug}`} className="mt-5 text-[clamp(1.5rem,1.2rem+1vw,2rem)] text-petrol-950">
                      {seg.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">{seg.overview}</p>
                    <div className="mt-6 rounded-2xl bg-sand p-5">
                      <h4 className="eyebrow text-[0.72rem] text-petrol-700">Por que a acessibilidade importa aqui</h4>
                      <p className="mt-2 leading-relaxed text-ink/85">{seg.importance}</p>
                    </div>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2 lg:pt-16">
                    <div>
                      <h4 className="eyebrow text-[0.72rem] text-petrol-700">Desafios característicos</h4>
                      <ul className="mt-4 space-y-3">
                        {seg.challenges.map((c) => (
                          <li key={c} className="flex gap-3 leading-snug text-ink/85">
                            <span aria-hidden="true" className="mt-[0.4em] size-2 shrink-0 rotate-45 bg-petrol-600" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="eyebrow text-[0.72rem] text-petrol-700">Avaliações e soluções aplicáveis</h4>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {seg.evaluations.map((e) => (
                          <li
                            key={e}
                            className="rounded-full border border-petrol-800/15 bg-white px-3.5 py-1.5 text-[0.92rem] font-semibold text-petrol-900"
                          >
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>

          <p className="mx-auto mt-14 max-w-2xl text-center text-[0.95rem] leading-relaxed text-muted">
            Exemplos mais detalhados de trabalhos realizados somente serão publicados mediante autorização dos
            contratantes e revisão prévia das informações.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
