// CONTENT: This component renders the footer. Change copy in /data/site.ts

import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="section-padding">
      <div className="mx-auto w-full max-w-[1100px] px-6 sm:px-8">
        <div className="divider mb-8" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors duration-200 hover:text-foreground focus-ring"
            >
              Email
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-foreground focus-ring"
            >
              LinkedIn
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-foreground focus-ring"
            >
              GitHub
            </a>
          </div>
          <div className="text-xs text-muted">{site.versionLine}</div>
        </div>
      </div>
    </footer>
  );
}
