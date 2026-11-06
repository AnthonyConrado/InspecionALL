import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

export function IconBadge({
  icon: Icon,
  size = 'md',
  tone = 'light',
  className,
}: {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const box = { sm: 'size-10 rounded-xl', md: 'size-12 rounded-2xl', lg: 'size-14 rounded-2xl' }[size];
  const icon = { sm: 'size-5', md: 'size-6', lg: 'size-7' }[size];
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex shrink-0 items-center justify-center',
        box,
        tone === 'light' ? 'bg-petrol-50 text-petrol-800 ring-1 ring-petrol-800/10' : 'bg-white/10 text-ochre-light ring-1 ring-white/15',
        className,
      )}
    >
      <Icon className={icon} strokeWidth={1.6} />
    </span>
  );
}
