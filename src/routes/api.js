const express = require("express");
const route = express.Router();
const checkAuth = require("../utils/checkAuth");

route.use(express.json());

route.get("/", checkAuth, async (req, res) => {});

module.exports = route;
