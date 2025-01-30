import { BookList, BookOverview } from '@/components';
import { sampleBooks } from '@/constants/data';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <>
      <div className='pt-12 md:pt-6'>
        <BookOverview book={sampleBooks[0]} />
        <BookList
          title={t('newPublications')}
          books={sampleBooks}
          containerClassName='mt-28'
        />
      </div>
    </>
  );
}
