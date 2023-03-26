//Model to create book table and will have a column for ID, bookname and the book author
//For the book author, we are using the primary key to link the Author to the book
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_author:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_description:{
      type:DataTypes.STRING(1234),
      allowNull: false,
    },
    book_image:{
      type:DataTypes.STRING(1234),
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;