import React from 'react';
import { useTranslations } from 'next-intl';

function BookList() {
  const t = useTranslations('BookList');
  return (
    <div>
      <h2 className='mb-5 text-h2 font-bold md:mb-4 md:text-h3'>
        {t('newPublications')}
      </h2>
      <div className='-mx-2.5 -mt-5 flex flex-wrap'></div>
    </div>
  );
}

export default BookList;
