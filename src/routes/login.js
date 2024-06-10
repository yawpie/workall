const express = require("express");
const route = express.Router();
const prisma = require("../database/db");

route.use(express.json());

route.get("/", (req, res) => {
  res.render("../views/login.ejs");
  console.log("login");
});

route.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userdata = await prisma.user
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
      req.session.user = {
        username: userdata.username,
        email: userdata.email,
        password: userdata.password,
        status_banned_user: userdata.status_banned_user,
      };
      req.session.authenticated = true;
      console.log(req.session.user);
      req.session.save();
      res.status(200);
      res.redirect("/");
    } else {
      res.send("Wrong Password");
      console.log("Wrong Password");
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
