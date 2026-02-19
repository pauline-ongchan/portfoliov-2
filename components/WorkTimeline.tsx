'use client';

// CONTENT: This component renders the Work timeline. Change copy in /data/work.ts

import { work } from '@/data/work';
import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion';

export default function WorkTimeline() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative min-w-0">
      <div className="space-y-6 md:space-y-8">
        {work.map((entry) => (
          <div
            key={entry.id}
            className="group relative grid min-w-0 grid-cols-[20px_1fr] gap-4 md:grid-cols-[56px_1fr] md:gap-6"
          >
            <div className="relative min-h-full">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
              <div
                className={`absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 rounded-full border border-accent/50 bg-base transition-colors duration-200 ${
                  prefersReducedMotion ? '' : 'group-hover:border-accent group-hover:bg-accent/70'
                }`}
              />
            </div>

            <article
              className={`relative min-w-0 rounded-xl border border-white/10 bg-black/20 p-5 transition duration-200 ${
                prefersReducedMotion ? '' : 'hover:border-white/25 hover:shadow-soft'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 text-lg font-semibold leading-snug text-foreground">
                  {entry.role} · {entry.company}
                </h3>
                <div className="shrink-0 text-[11px] leading-tight text-white/50 md:text-sm md:leading-6">
                  {entry.dates}
                </div>
              </div>
              {entry.location ? (
                <p className="mt-1 text-xs leading-tight text-white/55 md:mt-2 md:text-sm md:leading-6">
                  {entry.location}
                </p>
              ) : null}
              <p className="mt-3 text-sm leading-6 text-white/85 md:leading-7">{entry.summary}</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-white/85 md:leading-7">
                {entry.bullets.slice(0, 2).map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
