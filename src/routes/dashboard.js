const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
const checkShop = require("../utils/checkShop");
const setShop = require("../utils/setShop");
const checkAuth = require("../utils/checkAuth");

route.get("/", checkShop, checkAuth, (req, res) => {
  const shop = setShop(req);
  res.render("../views/dashboard/dashboard.ejs", { shop });
});

module.exports = route;
