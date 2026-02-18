// CONTENT: This component renders the About section. Change copy in /data/site.ts

import { site } from '@/data/site';

export default function About() {
  return (
    <div className="max-w-prose space-y-4 text-base leading-7 text-foreground/90">
      <p>{site.about.primary}</p>
      <p className="text-sm leading-6 text-muted">{site.about.secondary}</p>
    </div>
  );
}
