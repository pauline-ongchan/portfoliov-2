'use client';

// CONTENT: This component renders the Places passport spread. Change copy in /data/places.ts

import { useMemo } from 'react';
import { places, PlaceCategory } from '@/data/places';
import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion';

export default function PlacesMap() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const grouped = useMemo(() => {
    return {
      lived: places.filter((place) => place.category === 'lived'),
      traveled: places.filter((place) => place.category === 'traveled')
    };
  }, []);

  const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];

  const inkStyles: Record<PlaceCategory, { border: string; bar: string; seal: string }> = {
    lived: {
      border: 'border-accent/40',
      bar: 'bg-accent/70',
      seal: 'bg-accent/60'
    },
    traveled: {
      border: 'border-[#E3A07B]/40',
      bar: 'bg-[#E3A07B]/70',
      seal: 'bg-[#E3A07B]/60'
    }
  };

  const renderStamps = (items: typeof places, category: PlaceCategory) => (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((place, index) => (
        <button
          key={place.id}
          type="button"
          aria-label={`Open stamp: ${place.label}`}
          className={`stamp-perf stamp-plane group relative flex h-[150px] w-full min-w-0 items-start justify-between rounded-xl border bg-black/20 p-4 text-left transition-colors duration-200 focus-ring ${
            inkStyles[category].border
          } ${rotations[index % rotations.length]} ${
            prefersReducedMotion ? '' : 'hover:-translate-y-0.5 hover:rotate-0'
          } hover:border-white/40`}
        >
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider text-muted">
              {[place.code, place.date].filter(Boolean).join(' · ')}
            </div>
            <div className="text-base font-semibold text-foreground">{place.label}</div>
            <div className={`h-0.5 w-10 rounded-full ${inkStyles[category].bar}`} />
            {place.blurb && (
              <div className="text-xs text-muted line-clamp-2">{place.blurb}</div>
            )}
          </div>
          <div className={`absolute right-3 top-3 h-3 w-3 rounded-full ${inkStyles[category].seal}`} />
          {place.photo && (
            <div className="ml-3 h-12 w-12 overflow-hidden rounded-lg border border-white/10">
              <img src={place.photo} alt="" className="h-full w-full object-cover" />
            </div>
          )}
        </button>
      ))}
    </div>
  );

  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 passport-surface md:p-8">
      <div className="pointer-events-none absolute left-[40%] top-6 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-white/10 md:block" />
      <div className="grid w-full max-w-full gap-10 md:grid-cols-[40%_60%]">
        <div className="min-w-0">
          <div className="mb-4 text-sm uppercase tracking-wider text-muted">Lived</div>
          {renderStamps(grouped.lived, 'lived')}
        </div>
        <div className="min-w-0">
          <div className="mb-4 text-sm uppercase tracking-wider text-muted">Traveled</div>
          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {grouped.traveled.map((place, index) => (
              <button
                key={place.id}
                type="button"
                aria-label={`Open stamp: ${place.label}`}
                className={`stamp-perf stamp-plane group relative flex h-[150px] w-full min-w-0 items-start justify-between rounded-xl border bg-black/20 p-4 text-left transition-colors duration-200 focus-ring ${
                  inkStyles.traveled.border
                } ${rotations[index % rotations.length]} ${
                  prefersReducedMotion ? '' : 'hover:-translate-y-0.5 hover:rotate-0'
                } hover:border-white/40`}
              >
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-muted">
                    {[place.code, place.date].filter(Boolean).join(' · ')}
                  </div>
                  <div className="text-base font-semibold text-foreground">{place.label}</div>
                  <div className={`h-0.5 w-10 rounded-full ${inkStyles.traveled.bar}`} />
                  {place.blurb && (
                    <div className="text-xs text-muted line-clamp-2">{place.blurb}</div>
                  )}
                </div>
                <div className={`absolute right-3 top-3 h-3 w-3 rounded-full ${inkStyles.traveled.seal}`} />
                {place.photo && (
                  <div className="ml-3 h-12 w-12 overflow-hidden rounded-lg border border-white/10">
                    <img src={place.photo} alt="" className="h-full w-full object-cover" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
