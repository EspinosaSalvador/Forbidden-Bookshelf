//Association between Author and Book Models and the foreign key
//If an author is deleted, then all the books are deleted as wel;
const Author = require ("./Author");
const Book = require ("./Book");
const User = require ("./Users")

Author.hasMany(Book, {
    foreignkey: "author_id",
    onDelete: "CASCADE",
});

Book.belongsTo(Author, {
    foreignkey: "author_id",
});


module.exports = {Author, Book, User};