const express = require("express");
const route = express.Router();
const path = require("../path");

route.get("/", (req, res) => {
  res.sendFile(path("../public/index.html"));
});

module.exports = route;
