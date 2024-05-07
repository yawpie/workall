const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
const path = require("../path");

route.use(express.urlencoded({ extended: true }));
route.use(express.json());

route.get("/", (req, res) => {
  try {
    res.sendFile(path("../public/register.html"));
    res.status(200);
  } catch (error) {
    console.log(error);
    res.send(error).status(400);
  }
});

route.post("/", async (req, res) => {
  // console.log(req.body);

  try {
    const { username, password, email, nama_depan, nama_belakang } = req.body;
    const biodata = await prisma.biodata.create({
      data: {
        email: email,
        nama_depan: nama_depan,
        nama_belakang: nama_belakang,
      },
    });

    const user = await prisma.user.create({
      data: {
        username: username,
        password: password,
        id_biodata: biodata.id_biodata,
      },
    });

    res.sendFile(path("../public/login.html"));
  } catch (error) {}
});

module.exports = route;
