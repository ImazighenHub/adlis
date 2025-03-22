'use client';

import { Slot } from '@radix-ui/react-slot';
import { useFormField } from '@/components';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

/**
 * FormControlProps are the properties accepted by the FormControl component.
 */
export type FormControlProps = ComponentPropsWithoutRef<typeof Slot>;

/**
 * FormControl wraps an input or control element and applies accessibility attributes
 * based on the form field state.
 *
 * @param props - Properties to pass to the underlying Slot component.
 *
 * @returns A React element representing the form control.
 */
export const FormControl = forwardRef<
  ComponentRef<typeof Slot>,
  FormControlProps
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = 'FormControl';
