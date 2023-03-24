//Use sequilize and seed the information into the database and fill in the tables

const sequelize = require('../config/connection');
const seedBook = require('./bookData');
const seedAuthor = require('./authorData');

const seedAll = async () => {
  await sequelize.sync({ force: true });


  await seedBook();

  await seedAuthor();



  process.exit(0);
};

seedAll();
