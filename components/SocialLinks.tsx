// CONTENT: This component renders social icon links. Change URLs in /data/site.ts

import { site } from '@/data/site';

type SocialLinksProps = {
  className?: string;
};

const iconClass = 'h-5 w-5';

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={`mailto:${site.email}`}
        aria-label="Email Pauline"
        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 text-muted transition-colors duration-200 hover:text-foreground focus-ring"
      >
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </a>
      <a
        href={site.githubUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Pauline on GitHub"
        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 text-muted transition-colors duration-200 hover:text-foreground focus-ring"
      >
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.34 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.58 5.08.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.48A10.3 10.3 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
      </a>
      <a
        href={site.linkedinUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Pauline on LinkedIn"
        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 text-muted transition-colors duration-200 hover:text-foreground focus-ring"
      >
        <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M7 9H4v11h3V9Z" />
          <path d="M5.5 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
          <path d="M20 20v-6.2c0-3.33-1.78-4.88-4.15-4.88-1.92 0-2.77 1.06-3.25 1.8V9H9.6c.04 1.1 0 11 0 11h3v-6.15c0-.33.02-.66.12-.9.27-.66.88-1.34 1.9-1.34 1.34 0 1.88 1.05 1.88 2.6V20H20Z" />
        </svg>
      </a>
    </div>
  );
}
