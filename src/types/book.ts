export type Book = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  genre: string;
  language: string;
  isbn: string;
  pages: number;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverColor: string;
  coverUrl: string;
  videoUrl: string;
  summary: string;
  createdAt?: Date | null;
};
