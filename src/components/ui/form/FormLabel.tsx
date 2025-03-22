'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '@/lib/utils';
import { useFormField } from './useFormField';
import { Label } from '@/components/ui/Label';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

/**
 * FormLabelProps are the properties accepted by the FormLabel component.
 */
export type FormLabelProps = ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
>;

/**
 * FormLabel displays a label for a form field.
 *
 * @remarks
 * It uses the form field context to determine whether an error exists and applies error styling.
 *
 * @param props - Properties to pass to the underlying label.
 *
 * @returns A React element representing the label.
 */
export const FormLabel = forwardRef<
  ComponentRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';
