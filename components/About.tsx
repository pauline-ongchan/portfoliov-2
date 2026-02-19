// CONTENT: This component renders the About section. Change copy in /data/site.ts

import { site } from '@/data/site';

export default function About() {
  return (
    <div className="max-w-prose space-y-4 text-body">
      {site.about.primary.map((paragraph, i) => (
        <p key={i} className="leading-relaxed text-white/80 mb-4">
          {paragraph}
        </p>
      ))}
      {/* Homes Section */}
      <div className="space-y-3">
        <h3 className="text-white font-medium">Places I’ve Called Home</h3>

        <ul className="space-y-2 text-white/70">
          {site.about.homes.map((home, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-blue-400">•</span>
              <span>
                <span className="text-white font-medium">
                  {home.country}
                </span>
                {" — "}
                {home.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-subtitle italic">{site.about.secondary}</p>
    </div>
  );
}
