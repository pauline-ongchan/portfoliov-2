'use client';

// CONTENT: This component renders the Places detail panel. Change copy in /data/places.ts

import type { Place } from '@/data/places';

type PlacesPanelProps = {
  place: Place | null;
  onClose: () => void;
};

const categoryLabel: Record<Place['category'], string> = {
  lived: 'Lived',
  traveled: 'Traveled'
};

export default function PlacesPanel({ place, onClose }: PlacesPanelProps) {
  const isOpen = Boolean(place);

  return (
    <div
      className={`absolute inset-x-0 bottom-0 h-[55%] transition-transform duration-200 md:inset-y-0 md:right-0 md:left-auto md:h-full md:w-[340px] ${
        isOpen
          ? 'translate-y-0 md:translate-x-0'
          : 'translate-y-full md:translate-x-full'
      }`}
      aria-hidden={!isOpen}
    >
      <div className="flex h-full flex-col rounded-t-[12px] border-t border-white/10 bg-black/70 p-6 backdrop-blur md:rounded-l-card md:rounded-t-none md:border-l md:border-t-0">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted">
              {place ? categoryLabel[place.category] : ''}
            </div>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              {place?.label}
            </h3>
            {(place?.date || place?.code) && (
              <div className="mt-2 text-xs uppercase tracking-wider text-muted">
                {[place?.code, place?.date].filter(Boolean).join(' · ')}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 px-2 py-1 text-xs text-muted transition-colors duration-200 hover:text-foreground focus-ring"
            aria-label="Close"
          >
            X
          </button>
        </div>
        {place?.photo && (
          <div className="mt-4 overflow-hidden rounded-card border border-white/10">
            <img src={place.photo} alt={place.label} className="h-40 w-full object-cover" />
          </div>
        )}
        <p className="mt-4 text-sm leading-6 text-muted">
          {place?.note}
        </p>
        <div className="mt-auto pt-6 text-xs text-muted">
          Press Esc to close
        </div>
      </div>
    </div>
  );
}
