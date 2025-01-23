import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { bebasNeue, ibmPlexSans } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Adlis [ⴰⴷⵍⵉⵙ]',
  description:
    'Adlis [ⴰⴷⵍⵉⵙ] - A library for discovering and borrowing Amazigh books, preserving and celebrating Amazigh culture and literature.',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body
      className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
