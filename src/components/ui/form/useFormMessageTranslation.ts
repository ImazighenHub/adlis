import {
  ZodBigIntCheck,
  ZodEffects,
  ZodNumberCheck,
  ZodObject,
  ZodRawShape,
  ZodStringCheck,
  ZodType,
} from 'zod';
import { useTranslations } from 'next-intl';
import { FieldError } from 'react-hook-form';

/**
 * Represents a single validation check defined on a field.
 *
 * These checks (e.g. 'min', 'max', etc.) may be applied to string, number, or bigint types.
 */
type FieldCheck = ZodStringCheck | ZodNumberCheck | ZodBigIntCheck;

/**
 * Extended Zod object type used for our form validation.
 *
 * In our use case, the schema might be a plain ZodObject or a ZodEffects wrapping a ZodObject.
 * - In a plain ZodObject, the field definitions are available directly via `_def.shape()`.
 * - In a ZodEffects instance (typically created when using superRefine), the inner object schema
 *   is nested under `_def.schema` and its shape is then accessed with `_def.schema._def.shape()`.
 *
 * This union type leverages Zod’s exported types so we don’t have to re‑create internal definitions.
 */
export type ExtendedZodObject =
  | ZodObject<ZodRawShape>
  | ZodEffects<ZodObject<ZodRawShape>>;

/**
 * Hook: useFormMessageTranslation
 *
 * Extracts the dynamic validation parameters (like min and max) from a Zod schema for a specific field,
 * and returns a translated error message if an error exists.
 *
 * @param schema - The Zod schema for the form.
 * @param fieldName - The name of the field (as defined in the schema).
 * @param fieldLabelTranslationNamespace - (Optional) The namespace to use for translating the field label.
 * @param error - The error object that contains the translation key in error.message.
 * @returns The translated error message if an error exists, otherwise undefined.
 */
export function useFormMessageTranslation(
  schema: ZodType,
  fieldName: string,
  fieldLabelTranslationNamespace?: string,
  error?: FieldError,
): string | undefined {
  // Get the default translation function for validation messages.
  const t = useTranslations('Validation');
  // Get the translation function for the field label; if no namespace is provided, use an empty string.
  const labelT = useTranslations(fieldLabelTranslationNamespace || '');

  // If the error is marked as 'manual', bypass further processing and return its message directly.
  if (error?.type === 'manual') {
    return error.message;
  }

  // Cast the provided schema to our ExtendedZodObject type so that we can access internal properties.
  const extendedSchema = schema as unknown as ExtendedZodObject;
  let shape;

  // Depending on the schema type, retrieve the field definitions ("shape"):
  if (extendedSchema._def.typeName === 'ZodEffects') {
    // For schemas wrapped with effects (e.g. via superRefine), the inner ZodObject is stored at _def.schema.
    // Access its internal shape using _def.schema._def.shape().
    shape = (
      extendedSchema as ZodEffects<ZodObject<ZodRawShape>>
    )._def.schema._def.shape();
  } else {
    // For a plain ZodObject, the shape is available directly from _def.shape().
    shape = extendedSchema._def.shape();
  }

  // Retrieve the field definition for the specified field.
  const fieldDef = shape[fieldName];

  if (!(fieldName in shape)) {
    console.error(`The field "${fieldName}" does not exist in the schema.`);
    return;
  }

  // Extract the array of validation checks from the field definition.
  const fieldChecks: FieldCheck[] | undefined = fieldDef._def.checks;

  // Reduce the array of checks into an object mapping each validation "kind" (e.g. 'min', 'max')
  // to its dynamic value (e.g. 3 or 255).
  const dynamicValues = fieldChecks?.reduce<
    Record<string, string | number | bigint>
  >((acc, check) => {
    if (
      typeof check === 'object' &&
      'value' in check &&
      check.value !== undefined
    ) {
      acc[check.kind] = check.value;
    }
    return acc;
  }, {});

  // Determine the field label: if a valid translation namespace is provided and the label exists,
  // use the translated value; otherwise, fallback to the original field name.
  const translatedFieldLabel =
    fieldLabelTranslationNamespace && labelT.has(fieldName)
      ? labelT(fieldName)
      : fieldName;

  // If an error exists, use its message as a translation key.
  // Call the validation translation function with the field name (translated if applicable)
  // and the dynamic values extracted from the field checks.
  return error
    ? t(error.message, { field: translatedFieldLabel, ...dynamicValues })
    : undefined;
}
