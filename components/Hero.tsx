'use client';

// CONTENT: This component renders the hero section. Change copy in /data/site.ts
// CONTENT: social links come from /data/site.ts

import { hero, site } from '@/data/site';
import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion';
import { useRotatingText } from '@/components/hooks/useRotatingText';
import SocialLinks from '@/components/SocialLinks';

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const rotation = useRotatingText(hero.rotating, 1400, prefersReducedMotion);

  const handleScrollToWork= () => {
    const target = document.getElementById('work');
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', '#work');
  };

  const handleRotateNext = () => {
    if (prefersReducedMotion) return;
    rotation.next();
  };

  return (
    <div className="flex min-h-[70svh] flex-col justify-center gap-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          {hero.title}
        </h1>
        <p className="text-xl font-normal text-foreground md:text-2xl">
          {hero.line}{' '}
          <button
            type="button"
            onClick={handleRotateNext}
            onMouseEnter={prefersReducedMotion ? undefined : rotation.onMouseEnter}
            onMouseLeave={prefersReducedMotion ? undefined : rotation.onMouseLeave}
            className="relative inline-flex items-center font-semibold text-accent focus-ring"
            aria-live="polite"
            aria-atomic="true"
          >
            <span
              key={rotation.index}
              className={`inline-block ${prefersReducedMotion ? '' : 'rotating-enter'}`}
            >
              {rotation.text}
            </span>
          </button>
        </p>
        <p className="max-w-2xl text-subtitle">
          {site.heroSubline}
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="#work"
          onClick={(event) => {
            event.preventDefault();
            handleScrollToWork();
          }}
          className="min-h-[44px] rounded-full border border-white/20 px-6 py-2 text-sm text-foreground transition-colors duration-200 hover:border-accent hover:bg-accent/10 focus-ring"
        >
          {hero.primaryCta}
        </a>
        <SocialLinks />
      </div>
    </div>
  );
}
