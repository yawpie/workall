const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("../views/landing_page.ejs", { pageTitle: "Index" });
});

module.exports = route;
