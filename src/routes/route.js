const express = require("express");
const route = express.Router();

const transaction = require("./transaction");
const register = require("./register");
const login = require("./login");
const landing_page = require("./landing_page");
const open_shop = require("./open_shop");
const tes = require("./tes");

route.use(express.urlencoded({ extended: true }));
route.use(express.json());
route.use(express.static("public"));

route.use("/transaction", transaction);
route.use("/register", register);
route.use("/login", login);
route.use("/", landing_page);
route.use("/open_shop", open_shop);
route.use("/tes", tes);

module.exports = route;
