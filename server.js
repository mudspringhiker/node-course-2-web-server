const express = require("express");
const hbs = require("hbs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home",
    welcomeMessage: "Welcome to this page!"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About"
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
