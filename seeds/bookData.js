//Seeds to add information to the book table to start the application 

const { Book } = require('../models');

const bookdata = [
  {
    book_name: 'Nausea',
    book_author: 1,
  },
  {
    book_name: 'The Old Man and the Sea',
    book_author: 2,
  },
  {
    book_name: 'The Raven',
    book_author: 3,
  },
  {
    book_name: 'Harry Potter',
    book_author: 4,
  },
];

const seedBook = async () => {
  await Book.bulkCreate(bookdata);
};

module.exports = seedBook;