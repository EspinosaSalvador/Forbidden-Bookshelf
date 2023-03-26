
//Seeds to add information to the book table to start the application 

const { Book } = require('../models');


const bookdata = [
  {
    book_name: "Book 1",
    book_author: "Author 1",
    book_description: "Description of book 1",
    book_image: "http://books.google.com/books/content?id=KZjY_nddixEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    book_name: "Book 2",
    book_author: "Author 2",
    book_description: "Description of book 2",
    book_image: "http://books.google.com/books/content?id=KZjY_nddixEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    book_name: "Book 3",
    book_author: "Author 3",
    book_description: "Description of book 3",
    book_image: "http://books.google.com/books/content?id=KZjY_nddixEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    book_name: "Book 4",
    book_author: "Author 4",
    book_description: "Description of book 5",
    book_image: "http://books.google.com/books/content?id=KZjY_nddixEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
];

const seedBook = async () => {
  await Book.bulkCreate(bookdata);
};

module.exports = seedBook;
