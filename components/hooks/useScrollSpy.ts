'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

export function useScrollSpy(ids: string[], rootMargin = '-35% 0px -55% 0px') {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);
  const ratiosRef = useRef<Record<string, number>>({});

  const targets = useMemo(() => ids.filter(Boolean), [ids]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (targets.length === 0) return;

    const elements = targets
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
      .filter((el) => el.tagName === 'SECTION');

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          if (!id) return;
          ratiosRef.current[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });

        let bestId: string | null = null;
        let bestRatio = 0;
        targets.forEach((id) => {
          const ratio = ratiosRef.current[id] ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (window.scrollY <= 48) {
          setActiveId('top');
          return;
        }

        if (bestId) {
          setActiveId(bestId);
        }
      },
      { rootMargin, threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75] }
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (window.scrollY <= 48) {
        setActiveId('top');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targets, rootMargin]);

  return activeId;
}
