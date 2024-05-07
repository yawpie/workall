const express = require("express");
const route = express.Router();

const transaction = require("./transaction");
const register = require("./register");
const login = require("./login");
const landing_page = require("./landing_page");

const cors = require("cors");

route.use(cors());

route.use("/transaction", transaction);
route.use("/register", register);
route.use("/login", login);
route.use("/landing_page", landing_page);

module.exports = route;
