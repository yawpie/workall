const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
const checkShop = require("../utils/checkShop");
const checkAuth = require("../utils/checkAuth");

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

module.exports = route;
