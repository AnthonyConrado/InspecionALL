import { ArrowUpRight, Globe, Info } from 'lucide-react';
import { concepts, internationalNote, legalReferences, legalReviewedAt, otherReferencesNote } from '@/content';
import { CtaBand } from '@/components/ui/CtaBand';
import { PlanIllustration } from '@/components/illustrations/PlanIllustration';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

const kindLabel = { lei: 'Lei federal', decreto: 'Decreto federal', norma: 'Norma técnica' } as const;

export default function AccessibilityPage() {
  const toc = [
    ...concepts.map((c) => ({ id: c.id, label: c.title })),
    { id: 'elementos', label: 'Elementos observados em uma avaliação' },
    { id: 'legislacao', label: 'Legislação e normas aplicáveis' },
    { id: 'internacional', label: 'Atendimentos internacionais' },
  ];

  return (
    <>
      <PageHero
        crumb="Acessibilidade e Legislação"
        eyebrow="Conteúdo educativo"
        title="Acessibilidade e legislação"
        lead={
          <p>
            Conceitos essenciais, fundamentos técnicos e referências legais e normativas que orientam a avaliação e a
            adequação de edificações e espaços.
          </p>
        }
      />

      <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-[17rem_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-labelledby="indice-acess" className="rounded-[var(--radius-card)] border border-line bg-white p-6">
            <h2 id="indice-acess" className="eyebrow font-sans text-[0.75rem] text-ochre">
              Nesta página
            </h2>
            <ol className="mt-4 space-y-1">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="flex min-h-10 items-center rounded-md py-1 text-[0.95rem] text-muted hover:text-petrol-900">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="min-w-0">
          <div className="space-y-6">
            {concepts.map((c, i) => (
              <Reveal
                as="section"
                key={c.id}
                className={cn('rounded-[1.5rem] border border-line p-7 sm:p-10', i % 2 === 0 ? 'bg-white' : 'bg-sand')}
              >
                <h2
                  id={c.id}
                  tabIndex={-1}
                  className="scroll-mt-28 text-[clamp(1.5rem,1.2rem+1vw,2rem)] text-petrol-950 focus:outline-none"
                >
                  {c.title}
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink/85">
                  {c.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/* ------------------------------------------------ Planta ilustrativa */}
          <section aria-labelledby="elementos" className="mt-20 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="mx-auto w-full max-w-sm md:max-w-none">
              <PlanIllustration className="drop-shadow-[0_30px_50px_rgba(6,42,43,0.25)]" />
            </Reveal>
            <div>
              <p className="eyebrow mb-4 flex items-center gap-3 text-ochre">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
                Na prática
              </p>
              <h2 id="elementos" tabIndex={-1} className="scroll-mt-28 text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] text-petrol-950 focus:outline-none">
                Elementos observados em uma avaliação
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                A planta ao lado é apenas ilustrativa e reúne alguns pontos que costumam ser verificados:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  ['Rota acessível', 'percurso contínuo e desobstruído, da via pública aos ambientes de uso.'],
                  ['Rampas', 'inclinação compatível com os limites normativos — como o máximo de 8,33% em determinadas situações — além de corrimãos e patamares.'],
                  ['Área de manobra', 'espaço livre para giro de cadeira de rodas, como o círculo de 1,50 m de diâmetro.'],
                  ['Sinalização tátil no piso', 'faixas de alerta e direcionais que orientam pessoas com deficiência visual.'],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-3 leading-relaxed text-ink/85">
                    <span aria-hidden="true" className="mt-[0.55em] size-2 shrink-0 rounded-full bg-ochre" />
                    <span>
                      <strong className="font-semibold text-petrol-950">{t}:</strong> {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ------------------------------------------------ Legislação */}
          <section aria-labelledby="legislacao" className="mt-20">
            <p className="eyebrow mb-4 flex items-center gap-3 text-ochre">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
              Referências
            </p>
            <h2
              id="legislacao"
              tabIndex={-1}
              className="scroll-mt-28 text-[clamp(1.85rem,1.3rem+2.2vw,2.9rem)] text-petrol-950 focus:outline-none"
            >
              Legislação e normas aplicáveis
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
              Principais referências brasileiras consideradas, quando pertinentes, nas avaliações de acessibilidade.
            </p>

            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {legalReferences.map((ref) => (
                <Reveal as="li" key={ref.code} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-7">
                  <p className="eyebrow text-[0.7rem] text-petrol-700">{kindLabel[ref.kind]}</p>
                  <h3 className="mt-3 text-[1.45rem] text-petrol-950">{ref.code}</h3>
                  <p className="mt-1 font-semibold leading-snug text-ink">{ref.title}</p>
                  <p className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-muted">{ref.description}</p>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-6 items-center gap-1.5 self-start py-1 text-sm font-semibold text-petrol-800 underline decoration-petrol-800/30 underline-offset-4 hover:decoration-petrol-800"
                  >
                    {ref.sourceLabel}
                    <span className="sr-only">: {ref.code} (abre em nova aba)</span>
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </Reveal>
              ))}
            </ul>

            <div className="mt-8 flex gap-4 rounded-2xl border border-petrol-800/15 bg-petrol-50 p-6 leading-relaxed text-ink/85">
              <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-petrol-700" />
              <div className="space-y-3">
                <p>{otherReferencesNote}</p>
                <p className="text-[0.95rem] text-muted">
                  Referências conferidas em {legalReviewedAt}. Leis e normas técnicas podem ser alteradas, emendadas ou
                  canceladas; a aplicabilidade a cada caso depende de análise técnica específica. Este conteúdo é
                  informativo e não substitui a avaliação profissional.
                </p>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------ Internacional */}
          <section
            aria-labelledby="internacional"
            className="on-dark mt-16 overflow-hidden rounded-[1.5rem] bg-petrol-900 p-8 text-white sm:p-10"
          >
            <div className="flex items-start gap-5">
              <span aria-hidden="true" className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-ochre-light">
                <Globe className="size-6" strokeWidth={1.6} />
              </span>
              <div>
                <h2
                  id="internacional"
                  tabIndex={-1}
                  className="scroll-mt-28 text-[clamp(1.5rem,1.2rem+1vw,2rem)] text-white focus:outline-none"
                >
                  Atendimentos internacionais
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-petrol-100">{internationalNote}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
