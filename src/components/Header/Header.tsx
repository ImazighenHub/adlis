import ScrollHeader from './ScrollHeader'; // Adjust the path as needed
import {
  ArrowBigLeftIcon,
  BellIcon,
  SearchIcon,
  SquareLibrary,
} from 'lucide-react';
import { Button } from '@/components';

type HeaderProps = {
  back?: boolean;
};

const Header = ({ back }: HeaderProps) => {
  return (
    <ScrollHeader>
      <div className='m-auto flex h-18 w-full max-w-[90rem] items-center px-16 2xl:px-8 lg:px-6 md:px-5'>
        {back && (
          <button onClick={() => {}}>
            <ArrowBigLeftIcon />
          </button>
        )}
        <div className='mr-4 flex select-none items-center justify-center gap-2 text-foreground md:mr-2'>
          <SquareLibrary className='size-8' />
          <span className='text-h3 md:text-h4 '>
            <span className='font-noto-sans-tifinagh'>ⴰⴷⵍⵉⵙ</span>
            <span className='align-super text-sm lg:text-xs'>[Adlis]</span>
          </span>
        </div>
        <div className='ml-auto flex shrink-0 items-center'>
          <Button variant='ghost' size='md'>
            <SearchIcon />
          </Button>
          <Button variant='ghost' size='md'>
            <BellIcon />
          </Button>
        </div>
      </div>
    </ScrollHeader>
  );
};

export default Header;
