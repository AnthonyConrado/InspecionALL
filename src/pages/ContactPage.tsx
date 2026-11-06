import type { ReactNode } from 'react';
import { Globe, Mail, Phone } from 'lucide-react';
import { phoneHref, profile, whatsappUrl } from '@/content';
import { ContactForm } from '@/components/contact/ContactForm';
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { PageHero } from '@/components/ui/PageHero';
import { Photo } from '@/components/ui/Photo';

const nextSteps = [
  'Análise da solicitação e do contexto informado.',
  'Retorno com orientações iniciais e, se necessário, pedido de informações complementares.',
  'Definição do escopo, da proposta e do agendamento.',
];

export default function ContactPage() {
  const wa = whatsappUrl();
  const tel = phoneHref();
  const { contact } = profile;

  const channels = [
    wa && {
      href: wa,
      label: 'WhatsApp',
      description: 'Mensagem pelo WhatsApp',
      icon: <WhatsAppIcon className="size-6" />,
      external: true,
    },
    tel && {
      href: tel,
      label: 'Telefone',
      description: contact.phoneDisplay,
      icon: <Phone aria-hidden="true" className="size-6" />,
      external: false,
    },
    contact.email && {
      href: `mailto:${contact.email}`,
      label: 'E-mail',
      description: contact.email,
      icon: <Mail aria-hidden="true" className="size-6" />,
      external: false,
    },
    contact.linkedin && {
      href: contact.linkedin,
      label: 'LinkedIn',
      description: 'Perfil profissional',
      icon: <LinkedInIcon className="size-6" />,
      external: true,
    },
    contact.instagram && {
      href: contact.instagram,
      label: 'Instagram',
      description: '@biancafernandezac',
      icon: <InstagramIcon className="size-6" />,
      external: true,
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    description: string;
    icon: ReactNode;
    external: boolean;
  }[];

  return (
    <>
      <PageHero
        crumb="Contato"
        eyebrow="Contato"
        title="Vamos conversar sobre o seu espaço."
        lead={
          <p>
            Preencha o formulário com as informações principais da demanda. Quanto mais claro o contexto, mais precisa
            será a orientação inicial.
          </p>
        }
      />

      <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <ContactForm />

        <aside aria-label="Outros canais e informações" className="space-y-6">
          <figure className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand sm:aspect-[16/11] lg:aspect-[4/5]">
              <Photo name="escritorio" sizes="(min-width: 1024px) 26rem, 92vw" />
            </div>
            <figcaption className="on-dark absolute inset-x-4 bottom-4 rounded-2xl bg-petrol-950/80 px-5 py-3.5 text-white backdrop-blur-sm">
              <span className="block font-display text-lg">Fale diretamente com {profile.shortName}</span>
              <span className="block text-sm text-petrol-100">Atendimento em todo o Brasil e no exterior</span>
            </figcaption>
          </figure>
          <section aria-labelledby="canais-title" className="rounded-[1.5rem] border border-line bg-white p-7">
            <h2 id="canais-title" className="text-2xl text-petrol-950">
              Outros canais
            </h2>
            <ul className="mt-5 space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-4 rounded-2xl border border-line p-4 transition-colors hover:border-petrol-800/40 hover:bg-petrol-50"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-petrol-800 text-white">
                      {c.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-petrol-950">{c.label}</span>
                      <span className="block break-all text-sm text-muted">{c.description}</span>
                    </span>
                    {c.external && <span className="sr-only"> (abre em nova aba)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="proximos-title" className="rounded-[1.5rem] bg-sand p-7">
            <h2 id="proximos-title" className="text-2xl text-petrol-950">
              O que acontece depois
            </h2>
            <ol className="mt-5 space-y-4">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-petrol-800 text-sm font-bold text-white"
                  >
                    {i + 1}
                  </span>
                  <span className="leading-relaxed text-ink/85">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="abrangencia-contato" className="on-dark rounded-[1.5rem] bg-petrol-900 p-7 text-white">
            <div className="flex items-center gap-3">
              <Globe aria-hidden="true" className="size-5 text-ochre-light" />
              <h2 id="abrangencia-contato" className="text-xl text-white">
                Brasil e exterior
              </h2>
            </div>
            <p className="mt-3 leading-relaxed text-petrol-100">
              {profile.coverage.national} {profile.coverage.international}
            </p>
          </section>
        </aside>
      </div>
    </>
  );
}
