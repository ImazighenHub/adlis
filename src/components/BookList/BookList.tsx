import React from 'react';
import { Book } from '@/types';
import { BookCard } from '@/components';

interface BookListProps {
  title: string;
  books: Book[];
  containerClassName?: string;
}

function BookList({ books, containerClassName, title }: BookListProps) {
  return (
    <section className={containerClassName}>
      <h2 className='mb-5 text-h2 font-bold md:mb-4 md:text-h3'>{title}</h2>
      <ul className='mt-10 flex flex-wrap gap-5 sm:flex-col sm:items-center'>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </section>
  );
}

export default BookList;
