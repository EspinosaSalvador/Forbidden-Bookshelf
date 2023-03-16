const sequelize = require('../config/connection');
const seedBook = require('./bookData');
const seedAuthor = require('./authorData');
const { User } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });


  await seedBook();

  await seedAuthor();



  process.exit(0);
};

seedAll();
