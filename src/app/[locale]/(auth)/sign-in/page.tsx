'use client';
import React, { Usable, use } from 'react';
import { signInSchema } from '@/lib/validations';
import { AuthForm } from '@/components';
import { RouteParams } from '@/types';

type Props = {
  params: Usable<RouteParams>;
};

function Page({ params }: Props) {
  const { locale } = use<RouteParams>(params);

  return (
    <AuthForm
      type='SIGN_IN'
      schema={signInSchema}
      defaultValues={{ email: '', password: '' }}
      // @ts-expect-error just a test
      onSubmit={(data) => console.log(data)}
      locale={locale}
    />
  );
}

export default Page;
