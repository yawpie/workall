const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  // console.log(req.session.user);
  const loggedInHeader = "../views/component/header_login.ejs";
  const loggedOutHeader = "../views/component/header.ejs";
  let header = loggedOutHeader;
  if (req.session.user && req.session.authenticated) {
    header = loggedInHeader;
  }
  res.render("../views/index.ejs", { header });
});

module.exports = route;
