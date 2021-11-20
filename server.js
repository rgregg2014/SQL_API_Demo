//DEPENDENCIES
const express = require("express");
const mysql = require("mysql2");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const path = require("path");
const Book = require("./models/Book");
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;
const app = express();

//MIDDLEWARE
//  set Handlebars.js as front-end engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//  use a static "public" folder for css, some js
app.use(express.static(path.join(__dirname, "public")));

//  use json and url encoded to handle data from the api
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  use "controllers" folder for routes
app.use(require("./controllers"));

//START SERVER
sequelize.sync().then(() => {
  app.listen(PORT, console.log(`App listening on http://localhost:${PORT}`));
});
