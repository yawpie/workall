const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
const session = require("./session");
const path = require("../path");

route.use(express.json());
route.use(session);
route.get("/", (req, res) => {
  // res.sendFile(path("../public/login.html"));
  console.log("login");
  res.render("../views/login", { pageTitle: "Login" });
});

route.post("/", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const findUser = await prisma.user
      .findUnique({
        where: {
          email: email,
        },
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(typeof findUser);
    if (findUser.password == password) {
      res.session.email = email;
      res.session.username = findUser.username;
      res.sendFile(path("../views/index.html"));
      // TODO make session work
    } else {
      res.send("wrong password").status(400);
    }
  } catch (error) {
    res.send(error).status(400);
  }
});

module.exports = route;
