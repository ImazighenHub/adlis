import camelcaseKeys from 'camelcase-keys';

const books = [
  {
    id: '1',
    title: 'ⵜⵉⵏⴼⵓⵙⵉⵏ ⵏ ⵉⵎⵥⵥⵢⴰⵏⵏ',
    author:
      'Centre de la Recherche Didactique et des Programmes Pédagogiques (CRDPP)',
    publisher: 'Rabat : Institut Royal de la Culture Amazighe, 2013',
    genre: 'Fantasy / Fiction',
    language: 'Tamazight',
    isbn: '9789954890000',
    pages: 73,
    rating: 4.6,
    total_copies: 20,
    available_copies: 10,
    description:
      '"ⵜⵉⵏⴼⵓⵙⵉⵏ ⵏ ⵉⵎⵥⵥⵢⴰⵏⵏ" is a collection of stories intended for children. It can be used by teachers as a tool to facilitate the learning of the Amazigh language',
    cover_color: '#ceeaca',
    cover_url: '/images/book-1.png',
    video_url: '',
    summary:
      'A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.',
  },
  {
    id: '2',
    title: 'ⵜⴰⴷⵍⵉⵙⵜ ⵏ ⵉⵙⵎⴰⵡⵏ ⵉⵎⴰⵣⵉⵖⵏ',
    author: 'Brahim Lasri Amazigh, Karim Aguenaou',
    publisher:
      "Institut royal de la culture amazighe, centre de l'amenagement linquistique (CAL), 2011",
    genre: 'Fantasy / Fiction',
    language: 'Tamazight',
    isbn: '9954280804, 9789954280805',
    pages: 124,
    rating: 4.6,
    total_copies: 20,
    available_copies: 10,
    description:
      'With nearly 440 Amazigh names, this little book written by Brahim Lasri Amazigh and Karim Aguenaou serves to assist parents in their decisions and choices of first names originating in the Amazigh culture in Morocco and other countries of North Africa where Tamazight is a language spoken by large communities. Traditional Amazigh name or trend, historical or new: Tilelli or Tufitri, Amazigh, Idir, or Amnay? This publication of IRCAM helps to have an idea about the Amazigh names in Morocco and elsewhere.',
    cover_color: '#1c1f40',
    cover_url: '/images/book-2.png',
    video_url: '',
    summary:
      'A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.',
  },
  {
    id: '3',
    title: 'ⵜⵉⵏⴼⵓⵙⵉⵏ ⵏ ⵉⵎⵥⵥⵢⴰⵏⵏ',
    author:
      'Centre de la Recherche Didactique et des Programmes Pédagogiques (CRDPP)',
    publisher: 'Rabat : Institut Royal de la Culture Amazighe, 2013',
    genre: 'Fantasy / Fiction',
    language: 'Tamazight',
    isbn: '9789954890000',
    pages: 73,
    rating: 4.6,
    total_copies: 20,
    available_copies: 10,
    description:
      '"ⵜⵉⵏⴼⵓⵙⵉⵏ ⵏ ⵉⵎⵥⵥⵢⴰⵏⵏ" is a collection of stories intended for children. It can be used by teachers as a tool to facilitate the learning of the Amazigh language',
    cover_color: '#1c1f40',
    cover_url: '',
    video_url: '',
    summary:
      'A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death. A dazzling novel about all the choices that go into a life well lived, The Midnight Library tells the story of Nora Seed as she finds herself between life and death.',
  },
];

export const sampleBooks = camelcaseKeys(books, { deep: true });
