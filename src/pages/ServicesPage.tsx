import { Check } from 'lucide-react';
import { services } from '@/content';
import { ButtonLink } from '@/components/ui/Button';
import { CtaBand } from '@/components/ui/CtaBand';
import { IconBadge } from '@/components/ui/IconBadge';
import { PageHero } from '@/components/ui/PageHero';
import { Photo } from '@/components/ui/Photo';
import { Reveal } from '@/components/ui/Reveal';

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="eyebrow text-[0.75rem] text-petrol-700">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-ink/85">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-ochre" strokeWidth={2.4} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Serviços"
        eyebrow="Serviços"
        image={
          <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-petrol-900 shadow-[0_30px_60px_-35px_rgba(6,42,43,0.55)]">
            <Photo name="campo-nivel" priority sizes="(min-width: 1024px) 26rem, 90vw" />
          </div>
        }
        title="Serviços especializados em acessibilidade arquitetônica e urbanística."
        lead={
          <p>
            Oito frentes de atuação, complementares entre si, para avaliar, documentar e orientar a adequação de
            edificações e espaços às exigências legais e normativas.
          </p>
        }
      />

      <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-[17rem_1fr] lg:gap-16">
        {/* Índice da página */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-labelledby="indice-servicos" className="rounded-[var(--radius-card)] border border-line bg-white p-6">
            <h2 id="indice-servicos" className="eyebrow font-sans text-[0.75rem] text-ochre">
              Nesta página
            </h2>
            <ol className="mt-4 space-y-1">
              {services.map((s, i) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="flex min-h-10 items-baseline gap-3 rounded-md py-1.5 text-[0.95rem] text-muted hover:text-petrol-900"
                  >
                    <span aria-hidden="true" className="w-5 text-sm tabular-nums text-petrol-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="space-y-8">
          {services.map((s, i) => (
            <Reveal
              as="article"
              key={s.slug}
              className="scroll-mt-28 rounded-[1.5rem] border border-line bg-white p-6 sm:p-10"
            >
              <div id={s.slug} tabIndex={-1} className="scroll-mt-28 rounded-lg focus:outline-none">
                <div className="flex flex-wrap items-center gap-4">
                  <IconBadge icon={s.icon} size="lg" />
                  <span aria-hidden="true" className="font-display text-lg text-ochre">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="mt-6 text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] text-petrol-950">{s.title}</h2>
              </div>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{s.description}</p>

              <div className="mt-10 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
                <DetailList title="Objetivos" items={s.objectives} />
                <DetailList title="Possíveis aplicações" items={s.applications} />
                <div>
                  <h3 className="eyebrow text-[0.75rem] text-petrol-700">Público-alvo</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.audience.map((a) => (
                      <li key={a} className="rounded-full bg-petrol-50 px-3.5 py-1.5 text-[0.92rem] font-semibold text-petrol-900 ring-1 ring-petrol-800/10">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <DetailList title="Benefícios" items={s.benefits} />
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-8">
                <ButtonLink to={`/contato?servico=${s.slug}`}>
                  Solicitar atendimento<span className="sr-only">: {s.title}</span>
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBand
        title="Não sabe qual serviço é o mais adequado?"
        text="Descreva a situação do imóvel e o objetivo. A partir disso, será indicado o caminho técnico mais apropriado."
      />
    </>
  );
}
