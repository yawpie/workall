const express = require("express");
const route = express.Router();

const checkShop = require("../utils/checkShop");

route.get("/", checkShop, (req, res) => {
  const loggedInHeader = "../views/component/header_login.ejs";
  const loggedOutHeader = "../views/component/header_logout.ejs";
  let header = loggedOutHeader;
  const shop = req.shopExist;

  if (req.session.user && req.session.authenticated) {
    header = loggedInHeader;
  }

  res.render("../views/landing_page.ejs", { header, shop });
});

module.exports = route;
