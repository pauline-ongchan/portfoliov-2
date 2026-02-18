// CONTENT: This component renders a section wrapper. Change copy in /data/*.ts

import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  heading?: string;
  subtitle?: string;
  children: ReactNode;
  minHeight?: string;
  className?: string;
  scrollMtClass?: string;
};

export default function Section({
  id,
  title,
  heading,
  subtitle,
  children,
  minHeight = 'min-h-[80svh]',
  className = '',
  scrollMtClass = 'scroll-mt-[96px]'
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full py-16 sm:py-20 ${scrollMtClass} sm:snap-start ${minHeight} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 sm:px-8">
        {(title || heading || subtitle) && (
          <div className="mb-10">
            {title && (
              <div className="mb-4 text-sm uppercase tracking-wider text-muted">
                {title}
              </div>
            )}
            {heading && <h2 className="text-3xl font-semibold">{heading}</h2>}
            {subtitle && (
              <p className="mt-2 text-sm leading-6 text-muted">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
