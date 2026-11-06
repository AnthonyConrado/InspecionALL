import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  as?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  as: Heading = 'h2',
  align = 'left',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  const dark = tone === 'dark';
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p
          className={cn(
            'eyebrow mb-4 flex items-center gap-3',
            align === 'center' && 'justify-center',
            dark ? 'text-ochre-light' : 'text-ochre',
          )}
        >
          <span aria-hidden="true" className="inline-block h-px w-8 bg-current" />
          {eyebrow}
        </p>
      )}
      <Heading
        id={id}
        className={cn(
          'text-[clamp(1.85rem,1.3rem+2.2vw,2.9rem)]',
          dark ? 'text-white' : 'text-petrol-950',
        )}
      >
        {title}
      </Heading>
      {intro && (
        <div className={cn('mt-5 text-lg leading-relaxed', dark ? 'text-petrol-100' : 'text-muted')}>{intro}</div>
      )}
    </div>
  );
}
