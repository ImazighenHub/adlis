import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { bebasNeue, ibmPlexSans, notoSansTifinagh } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'ⴰⴷⵍⵉⵙ [Adlis]',
  description:
    'ⴰⴷⵍⵉⵙ [Adlis] - A library for discovering and borrowing Amazigh books, preserving and celebrating Amazigh culture and literature.',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body
      className={`${ibmPlexSans.className} ${bebasNeue.variable} ${notoSansTifinagh.variable} antialiased`}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
