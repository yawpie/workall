const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("../views/list_layanan.ejs");
});

module.exports = route;
