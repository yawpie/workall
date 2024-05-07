const express = require("express");
const route = express.Router();

const transaction = require("./transaction");
const register = require("./register");
const login = require("./login");

const cors = require("cors");

route.use(cors());

route.use("/transaction", transaction);
route.use("/register", register);
route.use("/login", login);

route.get("/", (req, res) => {
  res.send("hello world!");
});

module.exports = route;
