const express = require("express");
const route = express.Router();

/*
boilerplates (Copy Me!!!)


const where =  require('./where');
route.use('/where', where);

*/

const transaction = require("./transaction");
const register = require("./register");
const login = require("./login");
const landing_page = require("./landing_page");
const open_shop = require("./open_shop");
const open_layanan = require("./open_layanan");
const tes = require("./tes");
const profile = require("./profile");
const dashboard = require("./dashboard");
const chat = require("./chat");
const make_order = require("./make-order");

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
route.use("/profile", profile);
route.use("/dashboard", dashboard);
route.use("/chat", chat);
route.use("/make-order", make_order);

module.exports = route;
