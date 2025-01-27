import { getFlagFromLocale } from '@/components/LocaleSwitcher/LocalSwitcher.helpers';
import Image from 'next/image';
import { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
};

const LocalSwitcherFlag = ({ locale }: Props) => {
  return (
    <Image
      src={getFlagFromLocale(locale)}
      alt={locale}
      className='mr-0.5 h-4 w-auto border-1'
    />
  );
};

export default LocalSwitcherFlag;
