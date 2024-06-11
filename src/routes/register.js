const express = require("express");
const route = express.Router();
const prisma = require("../database/db");

route.get("/check-exist", async (req, res, next) => {
  const { email } = req.body;
  const user = await prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  const exist = false;
  if (user) {
    res.send({
      exist,
    });
  }
  res.send({ exist });
});

route.get("/", (req, res) => {
  res.render("../views/register.ejs", {
    header: "../views/component/header_plain.ejs",
  });
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

    const shop = await prisma.shop.create({
      data: {
        id_user: user.id_user,
        nama_toko: "null",
        alamat_toko: "null",
        kontak_toko: 0,
        deskripsi: "null",
        no_rekening: 0,
        ketersediaan: false,
        status_banned_shop: false,
      },
    });

    console.log("user:", user);
    console.log("shop:", shop);
    req.session.user = user;
    req.session.authenticated = true;
    res.json({
      success: true,
      message: "Success",
      redirectUrl: "/",
    });
  } catch (error) {
    console.log(error);
    console.log(error.code);
    res.json({
      success: false,
      message: error.message || "Error :(",
      error: {
        type: error.code,
      },
    });
  }
});

module.exports = route;
