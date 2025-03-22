import React, { ReactNode } from 'react';
import HeaderLogo from '@/components/Header/HeaderLogo';
import Image from 'next/image';
import { RouteParams } from '@/types';

type Props = {
  children: ReactNode;
  params: RouteParams;
};

const Layout = ({ children }: Props) => {
  return (
    <main className='relative overflow-hidden'>
      <div className='relative z-3 mx-auto flex min-h-screen max-w-[75rem] flex-col px-7.5 py-12 xls:px-20 lg:px-8 md:px-6 md:py-8'>
        <div className='flex max-w-[27.31rem] grow flex-col lg:max-w-[25rem]'>
          <HeaderLogo />
          {children}
        </div>
      </div>
      <div className='pointer-events-none absolute inset-0 -z-1 overflow-hidden'>
        <div className='absolute inset-0 z-1 bg-neutral-200 opacity-0 dark:opacity-80'></div>
        <div className='absolute left-[45vw] top-1/2 w-[85rem] -translate-y-1/2 xl:w-[60rem] lg:left-[50vw] md:-top-1/4 md:left-[-30%] md:w-[30rem] md:translate-y-0'>
          <Image
            className='w-full'
            src='/images/bg.svg'
            width={1349}
            height={1216}
            alt=''
          />
        </div>
      </div>
      <div className='absolute right-[calc(50%-61.8125rem)] top-1/2 w-[61.8125rem] -translate-y-1/2 lg:right-[calc(50%-64rem)] md:hidden'>
        <Image
          src='/images/flat-stack-books.svg'
          width='0'
          height='0'
          sizes='100vw'
          className='h-auto w-full'
          priority // Preload the image: https://github.com/vercel/next.js/discussions/48255#discussioncomment-5583639
          alt=''
        />
      </div>
    </main>
  );
};

export default Layout;
