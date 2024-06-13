const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
const checkShop = require("../utils/checkShop");
const checkAuth = require("../utils/checkAuth");
const path = require("path");

route.get("/", checkShop, checkAuth, (req, res) => {
  // let shop = req.session.shop ? true : false;
  const shop = req.shopExist;

  if (!req.session.shop) {
    res.redirect("/open-shop");
  }
  const shop_data = req.session.shop;
  res.render("../views/dashboard/dashboard.ejs", {
    shop,
    nama_toko: shop_data.nama_toko,
    alamat_toko: shop_data.alamat_toko,
    kontak_toko: shop_data.kontak_toko,
    deskripsi: shop_data.deskripsi,
  });
});

route.get("/get-profile-pic", checkShop, (req, res) => {
  if (!req.shopExist) {
    res.redirect("/open-shop");
  }

  try {
    const img_name = req.session.shop.foto_profil_toko;
    const send_image = path.join(__dirname, "../../uploads/", img_name);
    console.log(send_image);
    res.sendFile(send_image);
  } catch (error) {
    console.log("SENDFILEERROR:", error);
    res.json({
      success: false,
      error: error || "error on the server side :/",
    });
  }
});

module.exports = route;
