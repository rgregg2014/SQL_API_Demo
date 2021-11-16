//DEPENDENCIES
const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

//DB CONNECTION
//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
//START SERVER
app.listen(PORT, console.log(`App listening on http://localhost:${PORT}`));
