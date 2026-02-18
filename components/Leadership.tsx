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
          <div className="text-kicker">{item.timeframe}</div>
          <h3 className="mt-2 text-lg font-semibold text-foreground">{item.org}</h3>
          <p className="text-subtitle">{item.role}</p>
          <ul className="mt-4 list-none space-y-2 text-body">
            {item.bullets.slice(0, 2).map((bullet) => (
              <li key={bullet}>- {bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
