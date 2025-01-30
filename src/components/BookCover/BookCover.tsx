import React from 'react';
import {
  BookCoverVariant,
  bookCoverVariantStyles,
} from '@/components/BookCover/BookCover.helpers';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import BookCoverSvg from '@/components/BookCover/BookCoverSvg';

interface BookCoverProps {
  className?: string;
  variant?: BookCoverVariant;
  coverColor?: string;
  coverUrl?: string;
}

function BookCover({
  coverColor = '#012B48',
  coverUrl = 'https://placehold.co/400x600.png',
  className,
  variant = 'l',
}: BookCoverProps) {
  return (
    <div
      className={cn(
        'relative select-none transition-all duration-300',
        bookCoverVariantStyles[variant],
        className,
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div
        className='absolute z-10'
        style={{ left: '12%', width: '87.5%', height: '88%' }}
      >
        <Image
          src={coverUrl}
          alt='Book cover'
          fill
          className='rounded-sm object-fill'
        />
      </div>
    </div>
  );
}

export default BookCover;
