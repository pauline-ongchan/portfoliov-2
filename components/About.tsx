// CONTENT: /data/site.ts
import { site } from "@/data/site";
export default function About() {
  return (
    <div className="max-w-[740px] py-7 text-sm leading-7">
      <div className="space-y-4 text-muted">
        {site.about.primary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <h2 className="mb-4 mt-10 font-serif text-3xl">
        Places I’ve called home
      </h2>
      <ul>
        {site.about.homes.map((home) => (
          <li key={home.country} className="border-b border-divider py-3">
            <span className="font-medium">{home.country}</span>
            <span className="text-muted"> — {home.description}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-muted">{site.about.secondary}</p>
    </div>
  );
}
