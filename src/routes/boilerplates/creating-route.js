// code here is template for route files
const express = require("express");
const route = express.Router();
const prisma = require("../../database/db");

route.get("/", (req, res) => {});

module.exports = route;
