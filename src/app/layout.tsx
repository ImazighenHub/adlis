import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { bebasNeue, ibmPlexSans, notoSansTifinagh } from '@/styles/fonts';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'ⴰⴷⵍⵉⵙ [Adlis]',
  description:
    'ⴰⴷⵍⵉⵙ [Adlis] - A library for discovering and borrowing Amazigh books, preserving and celebrating Amazigh culture and literature.',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en' suppressHydrationWarning>
    <body
      className={`${ibmPlexSans.className} ${bebasNeue.variable} ${notoSansTifinagh.variable} antialiased`}
    >
      <ThemeProvider attribute='data-theme'>{children}</ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
