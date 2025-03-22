'use client';

import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
} from 'react-hook-form';
import { FormFieldContext } from '@/components';

/**
 * Form is an alias for react-hook-form's FormProvider.
 *
 * @remarks
 * This component is used as the form context provider.
 */
export const Form = FormProvider;

/**
 * FormFieldProps are the properties accepted by the FormField component.
 *
 * @template TFieldValues - The type of the entire form values.
 * @template TName - The name of the specific field.
 */
export type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName>;

/**
 * FormField provides a context for a single field in the form and wraps react-hook-form's Controller.
 *
 * @template TFieldValues - The type of the entire form values.
 * @template TName - The name of the specific field.
 *
 * @param props - All props accepted by the Controller.
 *
 * @returns A React element that provides field context.
 */
export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: FormFieldProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}
