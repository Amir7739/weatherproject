const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");

const templatePath = path.join(__dirname, "templates/views");
const partialPath = path.join(__dirname, "templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath); // views file templates file ke andar hai
hbs.registerPartials(partialPath); // for register parital file

app.use(express.static(staticPath));

app.get("", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errMsg: "oops page not found",
  });
});

app.listen(port, () => {
  console.log(`server start on port ${port}`);
});
