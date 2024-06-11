const express = require("express");
const route = express.Router();
const prisma = require("../database/db");

route.get("/", async (req, res) => {
  res.render("../views/profile/profile.ejs");
});
module.exports = route;
