const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
const session = require("./session");
const path = require("../path");

route.use(express.json());
route.use(session);
route.get("/", (req, res) => {
  res.sendFile(path("../public/login.html"));
});

route.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });
    console.log(typeof findUser);
    if (findUser && findUser.password == password) {
      res.session.username = username;
      res.sendFile(path("../public/index.html"));
      // TODO make session work
    }
  } catch (error) {
    res.send(error).status(400);
  }
});

module.exports = route;
