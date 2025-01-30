import React from 'react';
import { Book } from '@/types';
import Link from 'next/link';
import { BookCover, Button } from '@/components';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

interface BookCardProps {
  book: Book;
  isLoaned?: boolean;
}

function BookCard({ book, isLoaned }: BookCardProps) {
  const { id, coverUrl, coverColor, title, genre } = book;
  return (
    <li className={cn(isLoaned && 'w-full sm:w-52')}>
      <Link
        href={`/book/${id}`}
        className={cn(
          'flex flex-col items-center justify-center',
          isLoaned && 'flex w-full flex-col items-center',
        )}
      >
        <BookCover coverUrl={coverUrl} coverColor={coverColor} variant='l' />
        <div className={cn('mt-4', !isLoaned && 'max-w-28 sm:max-w-full')}>
          <p className='mt-2 line-clamp-2 text-base font-semibold sm:line-clamp-1 sm:text-xl'>
            {title}
          </p>
          <p className='text-light-100 mt-1 line-clamp-1 text-sm italic sm:text-base'>
            {genre}
          </p>
        </div>
        {isLoaned && (
          <div className='mt-3 w-full'>
            <div className='flex flex-row items-center gap-1 sm:justify-center'>
              <CalendarIcon size={18} />
              <p className='text-light-100'>11 days left to return</p>
            </div>
            <Button className='mt-3 min-h-14 w-full' variant='ghost'>
              Download receipt
            </Button>
          </div>
        )}
      </Link>
    </li>
  );
}

export default BookCard;
