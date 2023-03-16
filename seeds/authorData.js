const { Author } = require('../models');

const authordata = [
  {
    author_name: 'Sartre',
  },
  {
    author_name: 'Hemmingway',
  },
  {
    author_name: 'Edgar Allan Poe',
  },
  {
    author_name: 'JK Rowling',
  },
];

const seedAuthor = () => Author.bulkCreate(authordata);

module.exports = seedAuthor;