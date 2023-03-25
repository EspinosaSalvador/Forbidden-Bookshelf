//Model to create author table and will have a column for ID and name
//Primary key is the ID and it will be linked to the Book model

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Author extends Model {}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'author',
  }
);

module.exports = Author;