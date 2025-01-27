'use client';

import { useParams } from 'next/navigation';
import { ReactNode, useState, useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components';
import { cn } from '@/lib/utils';
import LocalSwitcherFlag from '@/components/LocaleSwitcher/LocalSwitcherFlag';

type Props = {
  children: ReactNode;
  defaultValue: Locale;
};

const LocaleSwitcherSelect = ({ children, defaultValue }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [value, setValue] = useState<Locale>(defaultValue);

  function handleValueChange(value: string) {
    setValue(value as Locale);
    const nextLocale = value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Select
      disabled={isPending}
      value={value}
      onValueChange={handleValueChange}
    >
      <SelectTrigger
        className={cn('relative', {
          'transition-opacity [&:disabled]:opacity-30': isPending,
        })}
      >
        <SelectValue aria-label={value}>
          <LocalSwitcherFlag locale={value} />
        </SelectValue>
        <SelectContent>{children}</SelectContent>
      </SelectTrigger>
    </Select>
  );
};

export default LocaleSwitcherSelect;
