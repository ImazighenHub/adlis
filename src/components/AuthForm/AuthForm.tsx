'use client';

import React from 'react';
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  ImageUpload,
  Input,
} from '@/components';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  SIGN_IN_FORM_FIELD_NAMES,
  SIGN_UP_FORM_FIELD_NAMES,
} from '@/components/AuthForm/AuthForm.constants';
import { Locale } from '@/i18n/routing';

interface AuthFormProps<T extends FieldValues> {
  locale: Locale;
  type: 'SIGN_IN' | 'SIGN_UP' | 'FORGOT_PASSWORD';
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  locale,
}: AuthFormProps<T>) => {
  const t = useTranslations('Auth');

  const form: UseFormReturn<T> = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (values) => {
    console.log(values);
  };

  const alternateLink =
    type === 'SIGN_IN' ? `/${locale}/sign-up` : `/${locale}/sign-in`;

  const fieldNames =
    type === 'SIGN_IN' ? SIGN_IN_FORM_FIELD_NAMES : SIGN_UP_FORM_FIELD_NAMES;

  return (
    <>
      <div className='my-auto py-12'>
        <h1 className='mb-1 text-h1 md:text-h2'>
          {t('authTitle', { action: type })}
        </h1>
        <div className='mb-12 text-sm text-neutral-200 dark:text-white/50'>
          {t.rich('authDescription', {
            action: type,
            b: (chunks) => <b>{chunks}</b>,
          })}
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='space-y-2'
          >
            {Object.entries(fieldNames).map(
              ([fieldName, { fieldType, description }]) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName as Path<T>}
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className='capitalize'>
                        {t(fieldName)}
                      </FormLabel>
                      <FormControl>
                        {fieldName === 'idCard' ? (
                          <ImageUpload
                            onSuccess={(res) => {
                              // Clear any previous error before updating the field value.
                              form.clearErrors('idCard' as Path<T>);
                              field.onChange(res.filePath);
                            }}
                            onClear={() => {
                              // Clear the form value when the file is removed.
                              field.onChange('');
                            }}
                            uploadButtonProps={{
                              children: t('idCardUpload'),
                              className: 'w-full block px-2',
                              variant: 'ghost',
                            }}
                            onError={() => {
                              form.setError('idCard' as Path<T>, {
                                type: 'manual',
                                message: t('idCardUploadFailed'),
                              });
                            }}
                          />
                        ) : (
                          <Input
                            size='md'
                            type={fieldType}
                            error={!!fieldState.error}
                            {...field}
                          />
                        )}
                      </FormControl>
                      {description && t.has(description) && (
                        <FormDescription className='text-neutral-200 dark:text-white/50'>
                          {t(description)}
                        </FormDescription>
                      )}
                      <FormMessage
                        schema={schema}
                        fieldLabelTranslationNamespace='Auth'
                      />
                    </FormItem>
                  )}
                />
              ),
            )}

            <Button type='submit' className='w-full'>
              {t('authAction', { action: type })}
            </Button>
          </form>
        </Form>
      </div>
      <div className='text-sm'>
        {t('authAlternateText', { action: type })}
        <Button variant='link' className='ml-1.5 font-bold' asChild>
          <Link href={alternateLink}>
            {t('authAlternateAction', { action: type })}
          </Link>
        </Button>
      </div>
    </>
  );
};

export default AuthForm;
