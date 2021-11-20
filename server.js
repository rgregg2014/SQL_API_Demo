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
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./controllers"));
//app.use(routes);

//HTML ROUTES- to be replaced with express-handlebars on the front end
//app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/")));

//START SERVER
sequelize.sync().then(() => {
  app.listen(PORT, console.log(`App listening on http://localhost:${PORT}`));
});
