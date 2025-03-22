'use client';

import { useScrollStatus } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const ScrollHeader = ({ children }: { children: ReactNode }) => {
  const isScrolled = useScrollStatus();

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-20 border-b border-neutral-100 dark:border-white md:relative',
        {
          'dark:bg-neutral-200 bg-background md:!bg-transparent': isScrolled,
        },
      )}
    >
      {children}
    </header>
  );
};

export default ScrollHeader;
