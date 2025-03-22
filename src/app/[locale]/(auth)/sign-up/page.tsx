'use client';
import React, { Usable, use } from 'react';
import { AuthForm } from '@/components';
import { signUpSchema } from '@/lib/validations';
import { RouteParams } from '@/types';

type Props = {
  params: Usable<RouteParams>;
};

function Page({ params }: Props) {
  const { locale } = use(params);

  return (
    <AuthForm
      type='SIGN_UP'
      schema={signUpSchema}
      defaultValues={{
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        idCard: '',
        idCardNumber: '',
      }}
      // @ts-expect-error just a test
      onSubmit={(data) => console.log(data)}
      locale={locale}
    />
  );
}

export default Page;
