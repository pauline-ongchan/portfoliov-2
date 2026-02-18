'use client';

// CONTENT: This component renders the subtle cursor glow. No copy changes required.

import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(pointer: coarse)');

    const update = () => {
      setEnabled(!motionQuery.matches && !pointerQuery.matches);
    };

    update();

    motionQuery.addEventListener?.('change', update);
    pointerQuery.addEventListener?.('change', update);

    return () => {
      motionQuery.removeEventListener?.('change', update);
      pointerQuery.removeEventListener?.('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let rafId = 0;
    let halfSize = 110;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };

    const handleMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    if (glowRef.current) {
      const rect = glowRef.current.getBoundingClientRect();
      halfSize = rect.width / 2;
    }

    const animate = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.x - halfSize}px, ${current.y - halfSize}px, 0)`;
      }

      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handleMove);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
