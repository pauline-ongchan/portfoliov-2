'use client';

// CONTENT: This component renders the sticky navigation. Change copy in /data/site.ts
// CONTENT: social links come from /data/site.ts

import Link from 'next/link';
import { navLinks, site } from '@/data/site';
import { useScrollSpy } from '@/components/hooks/useScrollSpy';
import SocialLinks from '@/components/SocialLinks';

const sections = ['top', ...navLinks.map((link) => link.id)];

export default function Nav() {
  const activeId = useScrollSpy(sections);
  const showHighlight = activeId !== 'top';

  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[52px] items-center justify-between gap-3 border-b border-white/10 bg-black/20 px-4 backdrop-blur sm:px-6 md:h-[56px]">
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-semibold text-foreground focus-ring"
          onClick={() => {
            if (typeof window !== 'undefined') {
              handleNavClick('top');
            }
          }}
        >
          <span>{site.name}</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/50">
            v1.0
          </span>
        </button>
        <div className="ml-2 flex min-w-0 items-center gap-3 overflow-x-auto whitespace-nowrap text-sm text-muted [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:ml-0 md:gap-6 md:overflow-visible">
          {navLinks.map((link) => {
            const isActive = showHighlight && activeId === link.id;
            return (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`relative border-b-2 transition-colors duration-200 hover:text-foreground focus-ring ${
                  isActive
                    ? 'border-accent text-foreground'
                    : 'border-transparent text-muted'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
}
