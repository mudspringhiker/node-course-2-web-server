const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // res.send("<h1>Hello Express!</h1>");
  res.send({
    name: "Alona"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Unable to fulfill this request"
  });
});

app.listen(3000, () => {
  console.log("listening at PORT 3000");
});
