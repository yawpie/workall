const express = require("express");
const route = express.Router();
const prisma = require("../database/db");

route.get("/", (req, res) => {
  res.render("../views/dashboard/dashboard.ejs");
});

module.exports = route;
