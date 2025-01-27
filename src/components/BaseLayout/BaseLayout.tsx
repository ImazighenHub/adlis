import React, { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { bebasNeue, ibmPlexSans, notoSansTifinagh } from '@/styles/fonts';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { Locale } from '@/i18n/routing';

type Props = {
  children: ReactNode;
  locale: Locale;
};

const BaseLayout = async ({ children, locale }: Props) => {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${locale === 'zgh' ? notoSansTifinagh.className : ibmPlexSans.className} ${ibmPlexSans.variable} ${bebasNeue.variable} ${notoSansTifinagh.variable} antialiased`}
      >
        <ThemeProvider attribute='data-theme'>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default BaseLayout;
