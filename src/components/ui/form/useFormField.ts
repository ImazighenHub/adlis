'use client';

import * as React from 'react';
import { useFormContext } from 'react-hook-form';

/**
 * Interface for the form field context value.
 *
 * @template TFieldValues - The type of the form values.
 * @template TName - The name of the field.
 */
export interface FormFieldContextValue<
  // TFieldValues = Record<string, unknown>,
  TName extends string = string,
> {
  name: TName;
}

/**
 * Context to store the current field name.
 *
 * @remarks
 * This is used to provide field-specific information to nested components.
 */
export const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

/**
 * Interface for the form item context value.
 */
export interface FormItemContextValue {
  id: string;
}

/**
 * Context to store the form item ID.
 */
export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

/**
 * useFormField hook provides form field-related information from context.
 *
 * @remarks
 * It retrieves the field name from FormFieldContext, the form item ID from FormItemContext,
 * and field state from react-hook-form.
 *
 * @throws Error if the hook is used outside of a <FormField>.
 *
 * @returns An object containing various IDs, field name, and field state.
 */
export function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error(
      'useFormField must be used within a <FormField> component.',
    );
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
}
