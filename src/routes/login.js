const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
const session = require("express-session");

route.use(express.json());
route.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
route.get("/", (req, res) => {
  res.render("../views/login.ejs", {
    header: "../views/component/header_plain.ejs",
  });
  console.log("login");
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
    // console.log(typeof findUser);
    // console.log(findUser.username);
    if (userdata.password == password) {
      req.session.user = userdata;
      req.session.authenticated = true;
      console.log(req.session.user);
      req.session.save();
      console.log("tes");
      res.redirect("/");
      // TODO make session work
    } else {
      res.send("wrong password");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
