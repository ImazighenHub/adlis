'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { ZodType } from 'zod';
import { cn } from '@/lib/utils';
import { useFormField } from './useFormField';
import { useFormMessageTranslation } from './useFormMessageTranslation';

/**
 * FormMessageProps defines the properties accepted by the FormMessage component.
 * @param schema - The Zod schema for the form.
 * @param fieldLabelTranslationNamespace - The namespace that contains the fields labels translations. it's used to get the field label translation.
 */
export type FormMessageProps = HTMLAttributes<HTMLParagraphElement> & {
  schema: ZodType;
  fieldLabelTranslationNamespace?: string;
};

/**
 * FormMessage displays a validation error message for a given form field.
 *
 * @remarks
 * In your Zod schema, custom messages like:
 *
 * ```ts
 * .max(255, { message: 'max' })
 * ```
 *
 * define the translation key. When the corresponding check fails,
 * `error.message` equals `'max'` and the dynamic values (such as max value)
 * are extracted and passed to next‑intl's translation function.
 *
 * @param props - Standard HTML paragraph attributes plus a Zod schema.
 *
 * @returns A React element displaying the error message or fallback children.
 */
export const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  (
    { className, children, schema, fieldLabelTranslationNamespace, ...props },
    ref,
  ) => {
    // Retrieve the current error, message ID, and field name from form field context.
    const { error, formMessageId, name } = useFormField();

    // Use the custom hook to get the translated error message.
    const translatedMessage = useFormMessageTranslation(
      schema,
      name,
      fieldLabelTranslationNamespace,
      error,
    );

    // Use the translated message if available; otherwise, fall back to rendering children.
    const body = translatedMessage || children;

    // If there's no message or children to display, render nothing.
    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn('text-[0.8rem] font-medium text-destructive', className)}
        {...props}
      >
        {body}
      </p>
    );
  },
);
FormMessage.displayName = 'FormMessage';
