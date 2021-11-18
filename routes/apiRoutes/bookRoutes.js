const router = require("express").Router();
const Book = require("../../models/Book");

//  CREATE
// POST /api/books
router.post("/", async (req, res) => {
  try {
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

// // GET /api/books/:id
// app.get("/:id", (req, res) => {
//   const { id } = req.params;
//   db.query(
//     `SELECT * FROM books
//     WHERE id=${id};`,
//     (err, books) => {
//       console.log(`${req.method} request to /api/books/:id`);
//       res.json(books);
//     }
//   );
// });

// //  UPDATE
// // PUT /api/books/:id
// app.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { title, author, genre } = req.body;
//   db.query(
//     `UPDATE books
//       SET title = "${title}", author="${author}", genre="${genre}"
//       WHERE id=${id};`,
//     (err, books) => {
//       console.log(`${req.method} request to /api/books/:id`);
//       res.json(books);
//     }
//   );
// });

// //  DELETE
// // DELETE /api/books/:id
// app.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   db.query(`DELETE FROM books WHERE id=${id};`, (err, response) => {
//     res.json(response);
//   });
// });

module.exports = router;
