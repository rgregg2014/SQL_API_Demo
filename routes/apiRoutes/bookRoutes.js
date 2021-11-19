const router = require("express").Router();
const Book = require("../../models/Book");

//  CREATE
// POST /api/books
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const bookData = await Book.create(req.body);
    res.status(200).json(bookData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//  READ
// GET /api/books
router.get("/", async (req, res) => {
  try {
    const bookData = await Book.findAll();
    res.status(200).json(bookData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET /api/books/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const bookData = await Book.findOne({ where: { id: id } });
    res.status(200).json(bookData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//  UPDATE
// PUT /api/books/:id
router.put("/:id", async (req, res) => {
  try {
    const bookData = await Book.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!bookData) {
      res.status(404).json({ message: "Nothing in our library!" });
    }
    res.status(200).json(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

//  DELETE
// DELETE /api/books/:id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const bookData = await Book.destroy({ where: { id: id } });
    res.json({ message: "Successfully deleted!" });
    if (!bookData) {
      res.json({ message: "Nothing in our library!" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
