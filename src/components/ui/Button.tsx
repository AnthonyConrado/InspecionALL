import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'outlineLight';

const base =
  'group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[0.975rem] font-semibold leading-tight transition-colors duration-200 text-center';

const variants: Record<Variant, string> = {
  primary: 'bg-petrol-800 text-white hover:bg-petrol-950',
  secondary: 'border border-petrol-800/30 bg-white text-petrol-900 hover:border-petrol-800 hover:bg-petrol-50',
  ghost: 'px-1 text-petrol-800 hover:text-petrol-950 underline-offset-4 hover:underline',
  light: 'bg-white text-petrol-950 hover:bg-petrol-100',
  outlineLight: 'border border-white/45 text-white hover:border-white hover:bg-white/10',
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: 'arrow' | 'external' | 'none';
}

function TrailingIcon({ icon }: { icon: CommonProps['icon'] }) {
  if (icon === 'none') return null;
  const Icon = icon === 'external' ? ArrowUpRight : ArrowRight;
  return (
    <Icon
      aria-hidden="true"
      className="size-[1.1em] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
    />
  );
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className,
  icon = 'arrow',
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
      <TrailingIcon icon={icon} />
    </Link>
  );
}

/** Link externo. Abre em nova aba e avisa leitores de tela. */
export function ExternalButton({
  href,
  children,
  variant = 'secondary',
  className,
  icon = 'external',
  leading,
}: CommonProps & { href: string; leading?: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(base, variants[variant], className)}>
      {leading}
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
      <TrailingIcon icon={icon} />
    </a>
  );
}
