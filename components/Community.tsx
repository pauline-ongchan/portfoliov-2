'use client';

// CONTENT: This component renders the Community section. Change copy in /data/community.ts

import { useState } from 'react';
import { featured, more } from '@/data/community';
import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion';

export default function Community() {
  const [expanded, setExpanded] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {featured.slice(0, 2).map((item) => (
          <article
            key={item.id}
            className={`overflow-hidden rounded-card border border-white/10 bg-black/20 ${
              prefersReducedMotion ? '' : 'transition-colors duration-200 hover:border-white/25'
            }`}
          >
            {item.imageSrc ? (
              <div className="h-36 w-full overflow-hidden border-b border-white/10 bg-black/30">
                <img src={item.imageSrc} alt={item.org} className="h-full w-full object-cover" />
              </div>
            ) : null}
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="text-kicker">{item.dateRange}</div>
                {item.linkUrl ? (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-white/60 underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline focus-ring"
                  >
                    see more ↗
                  </a>
                ) : null}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{item.org}</h3>
              <p className="text-subtitle">{item.role}</p>
              <ul className="mt-4 list-none space-y-2 text-body">
                {item.bullets.slice(0, 2).map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="text-sm text-white/70 transition-colors duration-200 hover:text-foreground focus-ring"
        >
          {expanded ? '– Show less' : '+ View more'}
        </button>
      </div>

      <div
        className={`overflow-hidden ${
          prefersReducedMotion ? 'transition-none' : 'transition-all duration-[250ms] ease-out'
        } ${expanded ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!expanded}
      >
        <div className="rounded-card border border-white/10 bg-black/15">
          {more.map((item, index) => {
            const rowContent = (
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div className="text-subtitle">{item.label}</div>
                <div className="shrink-0 text-meta">{item.dateRange}</div>
              </div>
            );

            return (
              <div
                key={item.id}
                className={index === 0 ? '' : 'border-t border-white/10'}
              >
                {item.linkUrl ? (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-colors duration-200 hover:bg-white/[0.03] hover:underline focus-ring"
                  >
                    {rowContent}
                  </a>
                ) : (
                  rowContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
