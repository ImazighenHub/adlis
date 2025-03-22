'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { useFormField } from '@/components';

/**
 * FormDescriptionProps defines the properties for the FormDescription component.
 */
export type FormDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * FormDescription displays a descriptive text for a form field.
 *
 * @param props - Standard HTML paragraph attributes.
 *
 * @returns A React element containing the description.
 */
export const FormDescription = forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-[0.8rem] italic text-neutral-200', className)}
      {...props}
    />
  );
});
FormDescription.displayName = 'FormDescription';
