const express = require("express");
const route = express.Router();

const transaction = require("./transaction");
const register = require("./register");
const login = require("./login");
const landing_page = require("./landing_page");
const open_shop = require("./open_shop");
const open_layanan = require("./open_layanan");
const tes = require("./tes");
const api = require("./api");

route.use(express.urlencoded({ extended: true }));
route.use(express.json());
route.use(express.static("public"));

route.use("/transaction", transaction);
route.use("/register", register);
route.use("/login", login);
route.use("/", landing_page);
route.use("/open_shop", open_shop);
route.use("/open_layanan", open_layanan);
route.use("/tes", tes);
route.use("/api", api);

module.exports = route;
