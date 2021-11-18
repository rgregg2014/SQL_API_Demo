const bookSeed = require("./bookSeed.json");
const Book = require("../models/Book");
const sequelize = require("../config/connection");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Book.bulkCreate(bookSeed);
  console.log("All planted!");
  process.exit(0);
};

seedDatabase();
