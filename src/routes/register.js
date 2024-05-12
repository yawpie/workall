const express = require("express");
const route = express.Router();
const prisma = require("../database/db");

route.get("/", (req, res) => {
  // try {
  //   res.sendFile(path("../public/register.html"));
  //   res.status(200);
  // } catch (error) {
  //   console.log(error);
  //   res.send(error).status(400);
  // }
  res.render("../views/register.ejs", { pageTitle: "Register" });
});

route.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const { username, password, email, nama_depan, nama_belakang } = req.body;

    const user = await prisma.user.create({
      data: {
        username: nama_belakang,
        nama_depan: nama_depan,
        nama_belakang: nama_belakang,
        email: email,
        password: password,
        status_banned_user: false,
      },
    });

    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
