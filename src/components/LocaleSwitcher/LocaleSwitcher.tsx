import { useLocale, useTranslations } from 'next-intl';
import { Locale, routing } from '@/i18n/routing';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { SelectItem } from '@/components';
import LocalSwitcherFlag from '@/components/LocaleSwitcher/LocalSwitcherFlag';

const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale() as Locale;

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          <span className='flex flex-row items-center justify-center gap-2'>
            <LocalSwitcherFlag locale={cur} />
            {t('locale', { locale: cur })}
          </span>
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
};

export default LocaleSwitcher;
