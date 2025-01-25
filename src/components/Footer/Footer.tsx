import { EarthIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer>
      <div className='mx-auto flex h-16 max-w-[90rem] items-center px-16 2xl:px-8 lg:px-6 md:px-5'>
        <Button variant='ghost' size='sm'>
          <EarthIcon className='mr-1.5' />
          English
        </Button>
        <div className='mr-auto flex'>
          <Link
            className='mr-8 text-xs font-bold transition-colors last:mr-0 hover:text-purple-100 md:mr-4'
            href='/'
          >
            {t('terms')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
