'use client';

import { useEffect, useMemo, useState } from 'react';

export function useScrollSpy(ids: string[], rootMargin = '-30% 0px -60% 0px') {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);

  const targets = useMemo(() => ids.filter(Boolean), [ids]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (targets.length === 0) return;

    const elements = targets
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('id');
          if (id) setActiveId(id);
        }
      },
      { rootMargin, threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [targets, rootMargin]);

  return activeId;
}
