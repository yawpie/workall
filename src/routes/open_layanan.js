const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("../views/open_layanan.ejs");
});

module.exports = route;
