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

//ROUTES
// CREATE

//  READ
//  UPDATE
//   DELETE
//START SERVER
app.listen(PORT, console.log(`App listening on http://localhost:${PORT}`));
