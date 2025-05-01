// src/components/theme-provider.tsx
'use client';

import { useEffect, ReactNode } from 'react';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // optional: listen for OS theme changes
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) =>
      document.documentElement.classList.toggle('dark', e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  return <>{children}</>;
}
