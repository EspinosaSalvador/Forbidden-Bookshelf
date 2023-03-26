//Association between Author and Book Models and the foreign key
//If an author is deleted, then all the books are deleted as wel;
const Book = require ("./Book");
const User = require ("./Users")



module.exports = { Book, User};