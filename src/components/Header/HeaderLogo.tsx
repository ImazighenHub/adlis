import React from 'react';
import { SquareLibrary } from 'lucide-react';
import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <div className='mr-4 flex select-none items-center gap-2 text-foreground md:mr-2'>
      <SquareLibrary className='size-8' />
      <span className='text-h3 md:text-h4 '>
        <Link href='/'>
          <span className='font-noto-sans-tifinagh'>ⴰⴷⵍⵉⵙ</span>
          <span className='align-super text-sm lg:text-xs'>[Adlis]</span>
        </Link>
      </span>
    </div>
  );
};

export default HeaderLogo;
