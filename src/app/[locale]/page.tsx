import { BookList, BookOverview } from '@/components';
import { sampleBooks } from '@/constants/data';

export default function Home() {
  return (
    <>
      <div className='pt-12 md:pt-6'>
        <div className='mb-6 text-center text-h1 md:text-h2'>
          Explore Topics and Skills
        </div>

        <div className='mb-18 text-center text-sm md:mb-10'>
          For example <strong>UI and UX development</strong>
        </div>
      </div>
      <BookOverview book={sampleBooks[0]} />
      <BookList />
    </>
  );
}
