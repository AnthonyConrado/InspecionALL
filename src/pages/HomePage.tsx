import { Link } from 'react-router';
import { ArrowRight, Globe, GraduationCap, MapPin, Scale, ShieldCheck } from 'lucide-react';
import { copy, legalReferences, presentationSlides, profile, segments, services } from '@/content';
import { BrandReveal } from '@/components/ui/BrandReveal';
import { ButtonLink } from '@/components/ui/Button';
import { CtaBand } from '@/components/ui/CtaBand';
import { IconBadge } from '@/components/ui/IconBadge';
import { Photo } from '@/components/ui/Photo';
import { PhotoCarousel } from '@/components/ui/PhotoCarousel';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="bg-tactile pointer-events-none absolute -left-24 top-24 h-80 w-80 text-petrol-800/[0.08] [mask-image:radial-gradient(circle,black,transparent_70%)]"
        />
        <div className="container-site relative grid items-center gap-12 pb-20 pt-10 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-28 lg:pt-20">
          <div>
            <p className="eyebrow mb-6 flex items-center gap-3 text-ochre">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
              {copy.home.eyebrow}
            </p>
            <h1 id="hero-title" className="animate-fade-up">
              <span className="block text-[clamp(3.1rem,1.4rem+7vw,6.4rem)] leading-[0.95] tracking-[-0.03em] text-petrol-950">
                {profile.name}
              </span>
              <span className="sr-only"> — </span>
              <span className="mt-6 flex flex-wrap gap-2 font-sans text-[0.95rem] font-semibold leading-tight tracking-normal text-petrol-800 sm:text-base">
                {['Engenheira civil', 'Especialista em acessibilidade', 'Mestranda em Engenharia Civil'].map((c, i, arr) => (
                  <span key={c} className="rounded-full border border-petrol-800/20 bg-white px-3.5 py-1.5">
                    {c}
                    {i < arr.length - 1 && <span className="sr-only">,</span>}
                  </span>
                ))}
              </span>
            </h1>
            <div aria-hidden="true" className="bg-tactile mt-7 h-3 w-40 text-ochre/70" />
            <p className="mt-7 max-w-2xl font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.3rem)] leading-[1.15] text-petrol-900">
              {copy.home.title}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{copy.home.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/contato">{copy.home.primaryCta}</ButtonLink>
              <ButtonLink to="/servicos" variant="secondary">
                {copy.home.secondaryCta}
              </ButtonLink>
            </div>
            <ul className="mt-12 grid gap-4 border-t border-line pt-8 text-[0.95rem] sm:grid-cols-3">
              {[
                { icon: GraduationCap, text: 'Especialista em acessibilidade' },
                { icon: Scale, text: 'Fundamentação em leis e normas vigentes' },
                { icon: Globe, text: 'Atendimento no Brasil e no exterior' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 font-semibold text-petrol-900">
                  <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-ochre" strokeWidth={1.8} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-[28rem] lg:mr-0 lg:max-w-[30rem]">
            <div
              aria-hidden="true"
              className="bg-tactile absolute -right-4 -top-4 h-44 w-44 rounded-3xl text-ochre/45 sm:-right-6 sm:-top-6"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-petrol-900 shadow-[0_40px_70px_-35px_rgba(6,42,43,0.55)]">
              <Photo name="nivel-retrato" priority sizes="(min-width: 1024px) 30rem, (min-width: 640px) 28rem, 90vw" />
            </div>
            <div className="on-dark absolute -bottom-6 left-4 rounded-2xl bg-petrol-900 px-5 py-4 text-white shadow-[0_20px_40px_-20px_rgba(6,42,43,0.7)] sm:-left-8">
              <p className="eyebrow text-[0.68rem] text-ochre-light">Atendimento</p>
              <p className="mt-1 flex items-center gap-2 font-display text-lg">
                <Globe aria-hidden="true" className="size-4 text-ochre-light" />
                Brasil e exterior
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Números */}
      <section aria-label="Atuação em números" className="border-y border-line bg-white">
        <dl className="container-site grid divide-line py-2 sm:grid-cols-3 sm:divide-x">
          {[
            { value: '8', label: 'serviços especializados em acessibilidade' },
            { value: '10', label: 'segmentos com trabalhos concluídos' },
            { value: 'BR + exterior', label: 'atendimento nacional e internacional' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1 px-2 py-6 sm:px-8 sm:first:pl-0">
              <dt className="text-[0.95rem] text-muted">{s.label}</dt>
              <dd className="font-display text-4xl text-petrol-800">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------------------------------------------------------- Apresentação */}
      <section aria-labelledby="about-title" className="py-24 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
            <PhotoCarousel slides={presentationSlides} />
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading
              eyebrow="Apresentação"
              id="about-title"
              title={
                <>
                  {profile.name}: leitura técnica para ambientes{' '}
                  <span className="italic text-petrol-700">mais acessíveis</span>.
                </>
              }
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>{profile.bio[0]}</p>
              <p>{profile.bio[1]}</p>
            </div>
            <div className="mt-8">
              <ButtonLink to="/sobre" variant="secondary">
                Conhecer a trajetória
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- InspecionAll */}
      {profile.company.show && (
      <section aria-labelledby="empresa-title" className="on-dark relative overflow-hidden bg-[#00282d] py-24 text-white sm:py-28">
        <div
          aria-hidden="true"
          className="bg-tactile pointer-events-none absolute inset-y-0 right-0 w-1/2 text-white/[0.05] [mask-image:linear-gradient(to_left,black,transparent)]"
        />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <BrandReveal />
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading
              tone="dark"
              eyebrow="Empresa"
              id="empresa-title"
              title={`À frente da ${profile.company.name}.`}
              intro={
                <p>
                  {profile.name} é {profile.company.role} da InspecionAll, empresa dedicada à acessibilidade
                  na engenharia civil — diagnóstica, arquitetônica e urbanística —, com atendimento em todo o Brasil e
                  no exterior.
                </p>
              }
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/contato" variant="light">
                Solicitar atendimento
              </ButtonLink>
              <ButtonLink to="/servicos" variant="outlineLight">
                Conhecer os serviços
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
      )}

      {/* ---------------------------------------------------------- Serviços */}
      <section aria-labelledby="services-title" className="bg-sand py-24 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Serviços"
              id="services-title"
              title="Soluções técnicas para cada etapa da acessibilidade."
              intro="Do diagnóstico inicial ao atestado final, cada serviço responde a uma necessidade específica de quem administra, projeta ou regulariza edificações."
            />
            <ButtonLink to="/servicos" variant="ghost" className="shrink-0">
              Ver todos os serviços
            </ButtonLink>
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 4) * 60} className="h-full">
                <Link
                  to={`/servicos#${s.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-petrol-800/40 hover:shadow-[0_18px_40px_-24px_rgba(6,42,43,0.45)]"
                >
                  <IconBadge icon={s.icon} />
                  <h3 className="mt-6 font-display text-[1.3rem] text-petrol-950">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-muted">{s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-petrol-800">
                    Saiba mais
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------- Segmentos */}
      <section aria-labelledby="segments-title" className="on-dark relative overflow-hidden bg-petrol-900 py-24 text-white sm:py-28">
        <div aria-hidden="true" className="bg-directional pointer-events-none absolute inset-x-0 top-0 h-3 text-ochre-light/60" />
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Casos concluídos"
              id="segments-title"
              title="Dez segmentos com trabalhos concluídos."
              intro="Comércio, indústria, educação, saúde, patrimônio histórico, turismo, hospedagem e complexos tecnológicos: contextos distintos, com exigências próprias de uso e de regulamentação."
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/areas-de-atuacao" variant="light">
                Áreas de atuação
              </ButtonLink>
              <ButtonLink to="/experiencias" variant="outlineLight">
                Ver casos concluídos
              </ButtonLink>
            </div>
            <p className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-petrol-200">
              <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-ochre-light" />
              Projetos protegidos por confidencialidade são apresentados apenas de forma geral.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {segments.map((seg, i) => (
              <Reveal as="li" key={seg.slug} delay={(i % 2) * 60} className="h-full">
                <Link
                  to={`/experiencias#${seg.slug}`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.04] p-4 transition-colors hover:border-ochre-light/60 hover:bg-white/[0.08]"
                >
                  <IconBadge icon={seg.icon} size="sm" tone="dark" />
                  <span className="flex-1 font-semibold leading-snug">{seg.title}</span>
                  <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-ochre-light transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------- Campo e pesquisa */}
      <section aria-labelledby="trajetoria-title" className="py-24 sm:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Campo, pesquisa e atualização"
              id="trajetoria-title"
              title="Do levantamento em campo à pesquisa acadêmica."
              intro={
                <p>
                  A prática técnica caminha junto com o estudo: Bianca é mestranda em Engenharia Civil na Universidade
                  São Judas Tadeu, pesquisa a análise diagnóstica aplicada à acessibilidade e compartilha conhecimento em
                  eventos e palestras.
                </p>
              }
            />
            {profile.research[0] && (
              <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-white p-6">
                <p className="eyebrow text-[0.7rem] text-petrol-700">Trabalho apresentado</p>
                <p className="mt-2 font-display text-lg leading-snug text-petrol-950">“{profile.research[0].title}”</p>
                <p className="mt-2 text-[0.95rem] text-muted">
                  {profile.research[0].event}
                  {profile.research[0].details && ` · ${profile.research[0].details}`}
                </p>
              </div>
            )}
            <div className="mt-8">
              <ButtonLink to="/sobre#pesquisa" variant="secondary">
                Pesquisa e trajetória
              </ButtonLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <Reveal as="figure" className="col-span-2">
              <div className="aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-sand">
                <Photo name="palestra" sizes="(min-width: 1024px) 40rem, 92vw" />
              </div>
              <figcaption className="mt-2 text-sm text-muted">Palestra em evento</figcaption>
            </Reveal>
            <Reveal as="figure" delay={80}>
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand">
                <Photo name="engema" sizes="(min-width: 1024px) 20rem, 46vw" />
              </div>
              <figcaption className="mt-2 text-sm text-muted">XXVII ENGEMA · FEA/USP</figcaption>
            </Reveal>
            <Reveal as="figure" delay={140}>
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand">
                <Photo name="campo-nivel" sizes="(min-width: 1024px) 20rem, 46vw" />
              </div>
              <figcaption className="mt-2 text-sm text-muted">Verificação técnica em campo</figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Normas */}
      <section aria-labelledby="standards-title" className="border-t border-line bg-sand py-24 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Compromisso com as normas"
              id="standards-title"
              title={copy.standards.title}
              intro={<p>{copy.standards.text}</p>}
            />
            <div className="mt-8">
              <ButtonLink to="/acessibilidade" variant="secondary">
                Acessibilidade e legislação
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul className="divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white">
              {legalReferences.map((ref) => (
                <li key={ref.code} className="flex gap-4 p-5 sm:p-6">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2.5 shrink-0 rounded-full bg-ochre ring-4 ring-ochre-light/30"
                  />
                  <div>
                    <p className="font-semibold text-petrol-950">{ref.code}</p>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{ref.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- Abrangência */}
      <section aria-labelledby="coverage-title" className="border-t border-line bg-white py-24 sm:py-28">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="Abrangência"
            id="coverage-title"
            title={copy.coverage.title}
            intro={<p>{copy.coverage.text}</p>}
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              { icon: MapPin, title: 'Brasil', text: profile.coverage.national },
              { icon: Globe, title: 'Internacional', text: profile.coverage.international },
            ].map(({ icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className="relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper p-8"
              >
                <div
                  aria-hidden="true"
                  className="bg-tactile absolute -right-6 -top-6 size-32 text-petrol-800/10 [mask-image:radial-gradient(circle,black,transparent_70%)]"
                />
                <IconBadge icon={icon} />
                <h3 className="mt-6 text-2xl text-petrol-950">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
