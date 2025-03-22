'use client';

import * as React from 'react';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

const ProgressBar = forwardRef<
  ComponentRef<typeof ProgressPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full border-2 border-black bg-white shadow-primary-1 dark:border-0 dark:border-white dark:bg-white dark:shadow-none',
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className='size-full flex-1 bg-purple-100 transition-all'
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
ProgressBar.displayName = 'ProgressBar';

export { ProgressBar };
