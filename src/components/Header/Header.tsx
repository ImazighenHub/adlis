import ScrollHeader from './ScrollHeader';
import { ArrowBigLeftIcon, BellIcon } from 'lucide-react';
import { Button, ThemeToggle } from '@/components';
import LocaleSwitcher from '../LocaleSwitcher';
import HeaderLogo from '@/components/Header/HeaderLogo';

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
        <HeaderLogo />
        <div className='ml-auto flex shrink-0 items-center gap-2'>
          <Button variant='primary' size='icon'>
            <BellIcon />
          </Button>
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </ScrollHeader>
  );
};

export default Header;
