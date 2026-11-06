import { whatsappUrl } from '@/content';
import { WhatsAppIcon } from '../ui/BrandIcons';

/** Botão flutuante de WhatsApp — exibido somente se o número estiver configurado. */
export function WhatsAppFloat() {
  const href = whatsappUrl();
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 inline-flex size-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-lg shadow-petrol-950/25 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="size-7" />
      <span className="sr-only">Conversar com Bianca Fernandez pelo WhatsApp (abre em nova aba)</span>
    </a>
  );
}
