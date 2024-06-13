const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = route;
