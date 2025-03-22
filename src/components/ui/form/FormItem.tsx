'use client';

import { forwardRef, HTMLAttributes, useId } from 'react';
import { cn } from '@/lib/utils';
import { FormItemContext, FormItemContextValue } from './useFormField';

/**
 * FormItemProps defines the props accepted by the FormItem component.
 */
export type FormItemProps = HTMLAttributes<HTMLDivElement>;

/**
 * FormItem provides a wrapper for form fields and generates a unique ID,
 * which is provided to nested components via FormItemContext.
 *
 * @param props - Standard HTML div attributes.
 *
 * @returns A React element containing the form item.
 */
export const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...props }, ref) => {
    // Generate a unique ID for the form item.
    const id = useId();

    return (
      <FormItemContext.Provider value={{ id } as FormItemContextValue}>
        <div ref={ref} className={cn('space-y-2', className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = 'FormItem';
