const router = require("express").Router();
const Book = require("../models/Book");

router.get("/", async (req, res) => {
  const bookData = await Book.findAll().catch((err) => {
    res.json(err);
  });
  const books = bookData.map((book) => book.get({ plain: true }));
  res.render("all", { books });
});

module.exports = router;
