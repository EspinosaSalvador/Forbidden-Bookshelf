const Author = require ("./Author");
const Book = require ("./Book");

Author.hasMany(Book, {
    foreignkey: "author_id",
    onDelete: "CASCADE",
});

Book.belongsTo(Author, {
    foreignkey: "author_id",
});


module.exports = {Author, Book};