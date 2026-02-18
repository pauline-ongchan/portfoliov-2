// CONTENT: This component renders the Leadership section. Change copy in /data/leadership.ts

import { leadership } from '@/data/leadership';

export default function Leadership() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {leadership.map((item) => (
        <div
          key={`${item.org}-${item.role}`}
          className="rounded-card border border-white/10 bg-black/20 p-6"
        >
          <div className="text-xs uppercase tracking-wider text-muted">{item.timeframe}</div>
          <h3 className="mt-2 text-lg font-semibold text-foreground">{item.org}</h3>
          <p className="text-sm text-muted">{item.role}</p>
          <ul className="mt-4 list-none space-y-2 text-sm leading-6 text-foreground/90">
            {item.bullets.slice(0, 2).map((bullet) => (
              <li key={bullet}>- {bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
