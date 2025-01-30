import React from 'react';
import { Book } from '@/types';
import { BookIcon, StarIcon } from 'lucide-react';
import { BookCover, Button } from '@/components';

export interface BookOverviewProps {
  book: Book;
}

function BookOverview({ book }: BookOverviewProps) {
  const {
    coverUrl,
    coverColor,
    description,
    availableCopies,
    genre,
    totalCopies,
    rating,
    author,
  } = book;
  return (
    <section className='flex flex-row items-center gap-8 md:flex-col-reverse md:gap-12'>
      <div className='flex flex-1 flex-col gap-5'>
        <h1 className='text-h1 md:text-h2'>Title</h1>
        <div className='flex flex-row flex-wrap gap-4 text-xl'>
          <p>
            By <span className='font-semibold'>{author}</span>
          </p>
          <p>
            Category: <span className='font-semibold'>{genre}</span>
          </p>
          <div className='flex flex-row gap-1'>
            <StarIcon size={22} />
            <p>{rating}</p>
          </div>
        </div>

        <div className='mt-1 flex flex-row flex-wrap gap-4'>
          <p>
            Total Books: <span className='font-semibold'>{totalCopies}</span>
          </p>
          <p>
            Available Books:{' '}
            <span className='font-semibold'>{availableCopies}</span>
          </p>
        </div>
        <p className='mt-2 text-justify text-lg'>{description}</p>
        <Button className='mt-4 min-h-14 w-fit md:w-full'>
          <BookIcon size={20} />
          <span className='text-xl'>Borrow</span>
        </Button>
      </div>
      <div className='relative flex flex-1 justify-center'>
        <div className='relative pr-[80px] sm:p-0'>
          <BookCover
            variant='xl'
            className='z-10'
            coverColor={coverColor}
            coverUrl={coverUrl}
          />
          <div className='absolute left-16 top-10 rotate-12 opacity-40 sm:hidden'>
            <BookCover
              variant='xl'
              coverColor={coverColor}
              coverUrl={coverUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookOverview;
