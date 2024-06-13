const express = require("express");
const route = express.Router();
const checkShop = require("../utils/checkShop");
const { layanan_kategori } = require("@prisma/client");
const prisma = require("../database/db");
const response = require("../utils/response");

route.get("/", checkShop, (req, res) => {
  if (!req.shopExist) {
    res.redirect("/open_shop");
  }
  res.render("../views/open_layanan.ejs", { shop: req.shopExist });
});

route.post("/add-layanan", checkShop, async (req, res) => {
  const layanan = req.body;
  const shop = req.session.shop;

  try {
    await prisma.layanan.create({
      data: {
        kategori: layanan.kategori,
        id_shop: req.session.shop.id_shop,
        nama_layanan: layanan.nama_layanan,
        deskripsi: layanan.deskripsi,
        harga_starting: parseInt(layanan.harga_starting),
      },
    });
    res.json(response(true, "layanan ditambahkan", "/dashboard"));
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "gagal menambahkan layanan",
    });
  }
});

module.exports = route;
