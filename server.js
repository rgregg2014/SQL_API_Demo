//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

//DB CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "library_db",
});

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES and app.use(routes)
//  CREATE
app.post("/api/books", (req, res) => {
  db.query(
    `INSERT INTO books (title, author, genre)
  VALUES 
  ("${req.body.title}", "${req.body.author}", "${req.body.genre}");`,
    (err, books) => {
      console.log(`${req.method} request to /api/books`);
      res.json(books);
    }
  );
});

//  READ
app.get("/api/books", (req, res) => {
  db.query(`SELECT * FROM books;`, (err, books) => {
    console.log(`${req.method} request to /api/books`);
    res.json(books);
  });
});

//  UPDATE
app.put("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;
  db.query(
    `UPDATE books 
    SET title = "${title}", author="${author}", genre="${genre}" 
    WHERE id=${id};`,
    (err, books) => {
      console.log(`${req.method} request to /api/books/:id`);
      res.json(books);
    }
  );
});

//  DELETE
app.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM books WHERE id=${id};`, (err, response) => {
    res.json(response);
  });
});

//START SERVER
app.listen(PORT, console.log(`App listening on http://localhost:${PORT}`));
