'use client';

import { usePathname } from '@/libs/i18nNavigation';
import { routing } from '@/libs/i18nRouting';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import type { ChangeEventHandler } from 'react';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(`/${event.target.value}${pathname}`);
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-hidden focus-visible:ring-3"
      aria-label="lang-switcher"
    >
      {routing.locales.map(elt => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
