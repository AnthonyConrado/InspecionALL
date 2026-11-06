import { copy, whatsappUrl } from '@/content';
import { ButtonLink, ExternalButton } from './Button';
import { WhatsAppIcon } from './BrandIcons';
import { Reveal } from './Reveal';

/** Chamada para contato exibida ao final das páginas. */
export function CtaBand({
  title = copy.cta.title,
  text = copy.cta.text,
}: {
  title?: string;
  text?: string;
}) {
  const wa = whatsappUrl();
  return (
    <section aria-labelledby="cta-title" className="on-dark relative overflow-hidden bg-petrol-900 text-white">
      <div
        aria-hidden="true"
        className="bg-tactile pointer-events-none absolute inset-y-0 right-0 w-2/3 text-white/[0.07] [mask-image:linear-gradient(to_left,black_30%,transparent)]"
      />
      <div className="container-site relative py-20 sm:py-24">
        <Reveal className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 id="cta-title" className="text-[clamp(2rem,1.4rem+2.4vw,3.1rem)] text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-petrol-100">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink to="/contato" variant="light">
              {copy.cta.button}
            </ButtonLink>
            {wa && (
              <ExternalButton
                href={wa}
                variant="outlineLight"
                icon="none"
                leading={<WhatsAppIcon className="size-5" />}
              >
                Conversar pelo WhatsApp
              </ExternalButton>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
