'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useRotatingText(words: string[], intervalMs: number, disabled: boolean) {
  const [index, setIndex] = useState(0);
  const isPaused = useRef(false);
  const timerRef = useRef<number | null>(null);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  const clearTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (disabled) {
      clearTimer();
      return;
    }
    clearTimer();

    timerRef.current = window.setInterval(() => {
      if (!isPaused.current) {
        next();
      }
    }, intervalMs);

    return () => clearTimer();
  }, [disabled, intervalMs, next]);

  const onMouseEnter = () => {
    isPaused.current = true;
  };

  const onMouseLeave = () => {
    isPaused.current = false;
  };

  return {
    index,
    text: words[index],
    next,
    onMouseEnter,
    onMouseLeave
  };
}
