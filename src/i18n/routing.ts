import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr', 'zgh'],
  defaultLocale: 'en',
});

export type Locale = (typeof routing.locales)[number];

export const { usePathname, useRouter } = createNavigation(routing);
