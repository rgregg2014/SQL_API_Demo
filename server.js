//DEPENDENCIES
const express = require("express");
const mysql = require("mysql2");
const sequelize = require("./config/connection");
const routes = require("./routes");
const path = require("path");
const Book = require("./models/Book");

const PORT = process.env.PORT || 3001;
const app = express();

//MIDDLEWARE
// app.use(routes);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

//HTML ROUTES
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/")));

//START SERVER
sequelize.sync().then(() => {
  app.listen(PORT, console.log(`App listening on http://localhost:${PORT}`));
});
