import React, { ReactNode } from 'react';
import { Header } from '@/components';
import Image from 'next/image';
import Footer from '@/components/Footer';

type Props = {
  children: ReactNode;
};

const Layout = async ({ children }: Props) => {
  return (
    <main className='relative md:pb-20'>
      <div className='flex min-h-screen flex-col pt-18 md:min-h-[calc(100vh-5rem)] md:pt-0'>
        <Header />
        <div className='flex grow'>
          <div className='mx-auto flex max-w-[90rem] grow flex-col px-16 pb-2 pt-6 4xl:max-w-full 2xl:px-8 lg:px-6 md:px-5'>
            {children}
          </div>
        </div>
        <Footer />
        <div className='pointer-events-none absolute inset-0 -z-1 overflow-hidden dark:opacity-70'>
          <div className='absolute inset-0 z-1 bg-neutral-100 opacity-0 dark:opacity-80'></div>
          <div className='absolute left-[40vw] top-1/2 w-[85vw] translate-y-[-72%] rotate-180 4xl:w-[85rem] xl:-top-80 xl:left-[30vw] xl:w-[60rem] xl:-translate-y-0 md:-top-52 md:left-[15vw] md:w-[40rem]'>
            <Image
              className='w-full'
              src='/images/bg.svg'
              width={1349}
              height={1216}
              alt=''
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Layout;
