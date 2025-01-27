import { EnFlag, FrFlag, ZghFlag } from '@/assets/flags';

export const getFlagFromLocale = (locale: string) => {
  switch (locale) {
    case 'zgh':
      return ZghFlag;
    case 'fr':
      return FrFlag;
    case 'en':
      return EnFlag;
    default:
      return null;
  }
};
