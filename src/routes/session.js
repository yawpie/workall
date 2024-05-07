const express = require("express");
const route = express.Router();
const session = require("express-session");

route.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

module.exports = route;
