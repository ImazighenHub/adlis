import { z } from 'zod';
import { signInSchema, signUpSchema } from '@/lib/validations';
import { InputHTMLAttributes } from 'react';

/**
 * A union type of all field names declared in the sign-up schema.
 */
export type SignUpFieldName = keyof z.infer<typeof signUpSchema>;
export type SignInFieldName = keyof z.infer<typeof signInSchema>;

/**
 * Metadata for a field in the sign-up form.
 */
export interface FieldDefinition {
  /**
   * The type of the field.
   */
  fieldType: InputHTMLAttributes<HTMLInputElement>['type'] | 'custom';
  /**
   * A description of what the field represents.
   * This description is used to look up a translation key,
   * and it's defined in the translation file ideally as `${fieldName}Description`.
   */
  description?: string;
}

export const SIGN_UP_FORM_FIELD_NAMES: Record<
  SignUpFieldName,
  FieldDefinition
> = {
  fullName: {
    fieldType: 'string',
  },
  email: {
    fieldType: 'email',
  },
  password: {
    fieldType: 'password',
  },
  confirmPassword: {
    fieldType: 'password',
  },
  idCard: {
    fieldType: 'custom',
    description: 'idCardDescription',
  },
  idCardNumber: {
    fieldType: 'string',
  },
};

export const SIGN_IN_FORM_FIELD_NAMES: Record<
  SignInFieldName,
  FieldDefinition
> = {
  email: SIGN_UP_FORM_FIELD_NAMES.email,
  password: SIGN_UP_FORM_FIELD_NAMES.password,
};
