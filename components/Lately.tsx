// CONTENT: This component renders the Lately scrapbook carousel. Change copy in /data/lately.ts

import { lately } from '@/data/lately';

const rotations = ['rotate-[-1deg]', 'rotate-[1deg]', 'rotate-[-0.5deg]'];

export default function Lately() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-base via-base/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-base via-base/80 to-transparent" />
      <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
        {lately.map((item, index) => (
          <article
            key={item.title}
            className={`relative w-[280px] shrink-0 snap-start rounded-card border border-white/10 bg-white/5 p-5 text-foreground shadow-soft sm:w-[340px] ${
              rotations[index % rotations.length]
            }`}
          >
            <div className="absolute left-5 top-2 h-3 w-10 rotate-[-2deg] rounded-sm bg-white/10" />
            <div className="absolute right-6 top-3 h-3 w-8 rotate-[3deg] rounded-sm bg-white/10" />
            <div className="h-32 w-full overflow-hidden rounded-card border border-white/10 bg-black/30">
              {item.image ? (
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-muted">
                  Photo placeholder
                </div>
              )}
            </div>
            <div className="mt-4 text-xs uppercase tracking-wider text-muted">
              {item.date}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.caption}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
