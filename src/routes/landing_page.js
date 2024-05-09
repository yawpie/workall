const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("../views/index", { pageTitle: "Index" });
});

module.exports = route;
