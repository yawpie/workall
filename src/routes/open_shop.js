const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("../views/open_shop.ejs");
});

module.exports = route;
