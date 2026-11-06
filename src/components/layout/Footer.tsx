import { Link } from 'react-router';
import { Mail, Phone } from 'lucide-react';
import { contactNav, mainNav, phoneHref, profile, services, whatsappUrl } from '@/content';
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from '../ui/BrandIcons';
import { Logo } from './Logo';

export function Footer() {
  const wa = whatsappUrl();
  const tel = phoneHref();
  const year = new Date().getFullYear();
  const { contact } = profile;

  const social = [
    { href: contact.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    { href: contact.instagram, label: 'Instagram', Icon: InstagramIcon },
  ].filter((s) => s.href);

  return (
    <footer className="on-dark bg-petrol-950 text-petrol-100">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr] lg:gap-10">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-6 leading-relaxed">
            {profile.area} especializada em {profile.specialty.toLowerCase()}. Atendimento em todo o Brasil e
            internacional.
          </p>
          {profile.professionalRegistration && (
            <p className="mt-4 text-sm text-petrol-200">Registro profissional: {profile.professionalRegistration}</p>
          )}
        </div>

        <nav aria-labelledby="footer-nav-title">
          <h2 id="footer-nav-title" className="eyebrow mb-5 font-sans text-[0.75rem] text-ochre-light">
            Navegação
          </h2>
          <ul className="space-y-1">
            {[...mainNav, contactNav].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex min-h-9 items-center hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services-title">
          <h2 id="footer-services-title" className="eyebrow mb-5 font-sans text-[0.75rem] text-ochre-light">
            Serviços
          </h2>
          <ul className="space-y-1">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/servicos#${s.slug}`}
                  className="inline-flex min-h-9 items-center hover:text-white hover:underline"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow mb-5 font-sans text-[0.75rem] text-ochre-light">Contato</h2>
          <ul className="space-y-3">
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`} className="inline-flex min-h-9 items-center gap-2.5 break-all hover:text-white">
                  <Mail aria-hidden="true" className="size-5 shrink-0" />
                  {contact.email}
                </a>
              </li>
            )}
            {tel && contact.phoneDisplay && (
              <li>
                <a href={tel} className="inline-flex min-h-9 items-center gap-2.5 hover:text-white">
                  <Phone aria-hidden="true" className="size-5" />
                  <span>
                    <span className="sr-only">Telefone: </span>
                    {contact.phoneDisplay}
                  </span>
                </a>
              </li>
            )}
            {wa && (
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-2.5 hover:text-white">
                  <WhatsAppIcon className="size-5" />
                  WhatsApp<span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            )}
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-2.5 hover:text-white">
                  <Icon className="size-5" />
                  {label}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/contato"
            className="mt-6 inline-flex min-h-11 items-center rounded-full border border-white/30 px-5 text-sm font-semibold text-white hover:border-white hover:bg-white/10"
          >
            Solicitar atendimento
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-sm text-petrol-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Todos os direitos reservados.
          </p>
          <p>Informações sobre projetos são apresentadas de forma geral, em respeito à confidencialidade.</p>
        </div>
      </div>
    </footer>
  );
}
