// CONTENT: This component renders the About section. Change copy in /data/site.ts

import { site } from '@/data/site';

export default function About() {
  return (
    <div className="max-w-prose space-y-4 text-body">
      <p>{site.about.primary}</p>
      <p className="text-subtitle">{site.about.secondary}</p>
    </div>
  );
}
