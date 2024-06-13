// code here is template for route files
const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
const checkShop = require("../utils/checkShop");

route.get("/all", checkShop, (req, res) => {
  if (!req.shopExist) {
    res.redirect("/open-shop");
  }
  try {
    const layanan = prisma.layanan.findMany({
      where: {
        id_shop: req.session.shop.id_shop,
      },
      orderBy: {
        id_layanan: "asc",
      },
      select: {
        id_layanan: true,
        nama_layanan: true,
      },
    });
    res.json({ success: true, data: layanan });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error || "error on the server side :/" });
  }
});

route.get("/:id_layanan", checkShop, (req, res) => {
  if (!req.shopExist) {
    res.redirect("/open-shop");
  }
  try {
    const layanan = prisma.layanan.findFirst({
      where: {
        id_layanan: req.params.id_layanan,
      },
    });
    res.json({ success: true, data: layanan });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error || "error on the server side :/" });
  }
});

module.exports = route;
