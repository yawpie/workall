const express = require("express");
const route = express.Router();

const checkShop = require("../utils/checkShop");

route.get("/", checkShop, (req, res) => {
  // console.log(req.session.user);
  const loggedInHeader = "../views/component/header_login.ejs";
  const loggedOutHeader = "../views/component/header_logout.ejs";
  let header = loggedOutHeader;
  let shop = false;

  if (req.session.user && req.session.authenticated) {
    header = loggedInHeader;
  }
  if (req.session.shop) {
    shop = true;
  }

  res.render("../views/landing_page.ejs", { header, shop });
});

module.exports = route;
