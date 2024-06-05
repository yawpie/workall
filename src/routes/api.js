const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
const session = require("express-session");

route.use(express.json());
route.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
route.get("/", (req, res) => {
  res.send("hello");
});

route.get("/user", async (req, res) => {
  const query = req.query;

  const user = await prisma.user.findMany();
  res.send(user);
});

module.exports = route;
