import { Eye, Languages, Lock, MessagesSquare, Scale, UserRound, Users } from 'lucide-react';
import { Link } from 'react-router';
import { profile, segments } from '@/content';
import { ButtonLink } from '@/components/ui/Button';
import { CtaBand } from '@/components/ui/CtaBand';
import { IconBadge } from '@/components/ui/IconBadge';
import { PageHero } from '@/components/ui/PageHero';
import { Pending } from '@/components/ui/Pending';
import { Photo } from '@/components/ui/Photo';
import { Portrait } from '@/components/ui/Portrait';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const methodology = [
  {
    title: 'Escuta e definição do escopo',
    text: 'Compreensão da necessidade, do uso da edificação, das exigências envolvidas (licenciamento, regularização, adequação) e da documentação disponível.',
  },
  {
    title: 'Levantamento em campo',
    text: 'Vistoria presencial com medições, registros e verificação das rotas, ambientes, equipamentos e sinalização.',
  },
  {
    title: 'Análise técnica e normativa',
    text: 'Confronto das condições encontradas com a legislação e as normas técnicas aplicáveis, considerando as particularidades do imóvel.',
  },
  {
    title: 'Documento técnico',
    text: 'Elaboração do laudo, diagnóstico, relatório ou atestado, com linguagem clara, referências normativas e recomendações priorizadas.',
  },
  {
    title: 'Orientação para as próximas etapas',
    text: 'Esclarecimento dos resultados e apoio técnico às decisões de adequação, conforme o escopo contratado.',
  },
];

const values = [
  {
    icon: MessagesSquare,
    title: 'Comunicação acessível',
    text: 'Documentos e orientações compreensíveis para quem precisa decidir, e não apenas para especialistas.',
  },
  {
    icon: Eye,
    title: 'Transparência',
    text: 'Escopo, critérios e conclusões apresentados com clareza, do primeiro contato à entrega do documento técnico.',
  },
  {
    icon: UserRound,
    title: 'Atendimento individualizado',
    text: 'Cada demanda é analisada de acordo com o uso, as limitações e os objetivos específicos da edificação.',
  },
  {
    icon: Scale,
    title: 'Fundamentação técnica',
    text: 'Conclusões apoiadas na legislação, nas normas vigentes e em verificação criteriosa, com responsabilidade técnica.',
  },
  {
    icon: Lock,
    title: 'Confidencialidade',
    text: 'Informações de contratantes e projetos são tratadas com sigilo e respeito aos compromissos assumidos.',
  },
  {
    icon: Users,
    title: 'Inclusão como princípio',
    text: 'A acessibilidade é tratada como condição de autonomia, segurança e dignidade para as pessoas.',
  },
];

export default function AboutPage() {
  const hasEducation = profile.education.length > 0;
  const hasQualifications = profile.qualifications.length > 0;

  return (
    <>
      <PageHero
        crumb="Sobre"
        eyebrow={profile.area}
        title={profile.name}
        lead={
          <p>
            Engenheira civil, especialista em acessibilidade e mestranda profissional em Engenharia Civil. Atua em
            Engenharia Civil Diagnóstica com foco em {profile.specialty.toLowerCase()}.
          </p>
        }
      />

      {/* ---------------------------------------------------------- História */}
      <section aria-labelledby="historia-title" className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Portrait name="retrato" priority softenTop className="mx-auto max-w-sm lg:max-w-none" />
          </div>
          <div>
            <SectionHeading eyebrow="Trajetória" id="historia-title" title="História e apresentação" />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/85">
              {profile.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            {profile.company.show && profile.company.name && (
              <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-line bg-white px-5 py-3.5 text-petrol-950">
                <span className="font-semibold">{profile.company.role}</span>
                <span aria-hidden="true" className="text-ochre">·</span>
                <span>{profile.company.name}</span>
              </p>
            )}
            {profile.professionalRegistration && (
              <p className="mt-8 inline-flex rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-petrol-900">
                Registro profissional: {profile.professionalRegistration}
              </p>
            )}
            {!profile.professionalRegistration && import.meta.env.DEV && (
              <div className="mt-8">
                <Pending>
                  informe o registro profissional em <code>profile.professionalRegistration</code>.
                </Pending>
              </div>
            )}

            {/* Formação e qualificações — exibidas somente quando confirmadas */}
            {(hasEducation || hasQualifications || import.meta.env.DEV) && (
              <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-2">
                <section aria-labelledby="formacao-title">
                  <h3 id="formacao-title" className="text-2xl text-petrol-950">
                    Formação acadêmica
                  </h3>
                  {hasEducation ? (
                    <ul className="mt-5 space-y-4">
                      {profile.education.map((e) => (
                        <li key={e.course + e.institution} className="border-l-2 border-ochre pl-4">
                          <p className="font-semibold text-petrol-950">{e.course}</p>
                          {(e.institution || e.period || e.status) && (
                            <p className="text-muted">{[e.institution, e.period, e.status].filter(Boolean).join(' · ')}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-5">
                      <Pending>
                        preencha <code>profile.education</code> somente com formação confirmada.
                      </Pending>
                    </div>
                  )}
                </section>
                <section aria-labelledby="qualificacoes-title">
                  <h3 id="qualificacoes-title" className="text-2xl text-petrol-950">
                    Qualificações profissionais
                  </h3>
                  {hasQualifications ? (
                    <ul className="mt-5 space-y-4">
                      {profile.qualifications.map((q) => (
                        <li key={q.title} className="border-l-2 border-ochre pl-4">
                          <p className="font-semibold text-petrol-950">{q.title}</p>
                          {(q.issuer || q.year) && (
                            <p className="text-muted">{[q.issuer, q.year].filter(Boolean).join(' · ')}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-5">
                      <Pending>
                        preencha <code>profile.qualifications</code> somente com qualificações confirmadas.
                      </Pending>
                    </div>
                  )}
                </section>
              </div>
            )}

            {/* Idiomas */}
            <section aria-labelledby="idiomas-title" className="mt-16 rounded-[var(--radius-card)] border border-line bg-white p-7 sm:p-8">
              <div className="flex items-start gap-5">
                <IconBadge icon={Languages} size="sm" />
                <div>
                  <h3 id="idiomas-title" className="text-xl text-petrol-950">
                    Idiomas
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2.5" aria-label="Idiomas de comunicação profissional">
                    {profile.languages.map((lang) => (
                      <li
                        key={lang}
                        className="rounded-full bg-petrol-50 px-4 py-1.5 font-semibold text-petrol-900 ring-1 ring-petrol-800/10"
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 leading-relaxed text-muted">
                    Comunicação profissional em português e inglês, favorecendo o atendimento a demandas nacionais e
                    internacionais.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Pesquisa */}
      <section aria-labelledby="pesquisa" className="border-t border-line bg-white py-20 sm:py-24">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Pesquisa e produção acadêmica"
              id="pesquisa"
              title="Conhecimento técnico construído também na pesquisa."
              intro={
                <p>
                  Como mestranda profissional em Engenharia Civil na Universidade São Judas Tadeu (USJT), Bianca
                  investiga a aplicação da análise diagnóstica à acessibilidade em edificações — a mesma base técnica que
                  sustenta seus laudos, diagnósticos e auditorias.
                </p>
              }
            />
            <ul className="mt-10 space-y-5">
              {profile.research.map((r) => (
                <li key={r.title} className="rounded-[var(--radius-card)] border border-line bg-paper p-6 sm:p-7">
                  <p className="eyebrow text-[0.7rem] text-petrol-700">Trabalho apresentado</p>
                  <h3 className="mt-3 text-[1.35rem] leading-snug text-petrol-950">{r.title}</h3>
                  <p className="mt-3 font-semibold text-ink">{r.event}</p>
                  {r.details && <p className="text-muted">{r.details}</p>}
                  {r.coauthors && r.coauthors.length > 0 && (
                    <p className="mt-3 text-[0.95rem] text-muted">
                      Coautoria: {r.coauthors.join('; ')}.
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:pt-6">
            <Reveal as="figure">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand">
                <Photo name="engema" sizes="(min-width: 1024px) 18rem, 46vw" />
              </div>
              <figcaption className="mt-2 text-sm text-muted">Apresentação no XXVII ENGEMA</figcaption>
            </Reveal>
            <Reveal as="figure" delay={80} className="mt-10">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand">
                <Photo name="engema-metodologia" sizes="(min-width: 1024px) 18rem, 46vw" />
              </div>
              <figcaption className="mt-2 text-sm text-muted">Metodologia da revisão sistemática</figcaption>
            </Reveal>
          </div>
        </div>

        {/* Eventos e palestras */}
        <div className="container-site mt-20">
          <h3 className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] text-petrol-950">Eventos e palestras</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            Participação em encontros técnicos e apresentações sobre acessibilidade e engenharia diagnóstica.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-[1.6fr_1fr]">
            <Reveal as="figure" className="flex flex-col">
              <div className="aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-sand md:aspect-auto md:min-h-0 md:flex-1">
                <Photo name="palestra" sizes="(min-width: 768px) 46rem, 92vw" />
              </div>
              <figcaption className="mt-2 text-sm text-muted">Palestra em evento</figcaption>
            </Reveal>
            <Reveal as="figure" delay={80}>
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand">
                <Photo name="inaer" sizes="(min-width: 768px) 28rem, 92vw" />
              </div>
              <figcaption className="mt-2 text-sm text-muted">
                Evento do INAER — Instituto Nacional de Acessibilidade Eduardo Ronchetti
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Experiência */}
      <section aria-labelledby="exp-title" className="bg-sand py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Experiência em acessibilidade"
              id="exp-title"
              title="Atuação consolidada em dez segmentos."
              intro={
                <p>
                  A experiência acumulada em ambientes de naturezas muito diferentes permite reconhecer, em cada
                  contexto, as barreiras mais recorrentes e as soluções tecnicamente viáveis.
                </p>
              }
            />
            <div className="mt-10 aspect-[4/5] max-w-xs overflow-hidden rounded-[1.5rem] bg-petrol-900">
              <Photo name="hero-capacete" sizes="20rem" />
            </div>
          </div>
          <div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {segments.map((s) => (
                <li key={s.slug} className="border-b border-line">
                  <Link
                    to={`/experiencias#${s.slug}`}
                    className="flex min-h-11 items-center gap-3 py-2.5 font-semibold text-petrol-950 hover:text-petrol-700 hover:underline"
                  >
                    <s.icon aria-hidden="true" className="size-5 shrink-0 text-petrol-700" strokeWidth={1.7} />
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/experiencias" variant="secondary">
                Ver casos concluídos
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Metodologia */}
      <section aria-labelledby="metodo-title" className="py-20 sm:py-24">
        <div className="container-site">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <SectionHeading
              eyebrow="Metodologia"
              id="metodo-title"
              title="Como o trabalho é conduzido"
              intro={<p>Um processo estruturado, que vai da compreensão da demanda à orientação das próximas etapas.</p>}
            />
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand">
                <Photo name="equipamentos" sizes="(min-width: 1024px) 18rem, 46vw" />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand">
                <Photo name="campo-celular" sizes="(min-width: 1024px) 18rem, 46vw" />
              </div>
            </div>
          </div>
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {methodology.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 70} className="relative rounded-[var(--radius-card)] border border-line bg-white p-6">
                <span aria-hidden="true" className="font-display text-4xl text-ochre">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-xl text-petrol-950">
                  <span className="sr-only">Etapa {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- Valores */}
      <section aria-labelledby="valores-title" className="border-t border-line bg-white py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Valores" id="valores-title" title="Valores e compromissos profissionais" />
          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={(i % 3) * 70} className="flex gap-5">
                <IconBadge icon={v.icon} size="sm" />
                <div>
                  <h3 className="text-xl text-petrol-950">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
