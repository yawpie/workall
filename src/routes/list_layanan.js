const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
const checkAuth = require("../utils/checkAuth");
const response = require("../utils/response");

route.get("/:tipe_layanan", (req, res) => {
  const tipe_layanan = req.params.tipe_layanan;
  let header = "../views/component/header_logout.ejs";
  if (req.session.user) {
    header = "../views/component/header_login.ejs";
  }
  res.render("../views/list_layanan.ejs", {
    tipe_layanan,
    header,
  });
});

route.get("/get-layanan/:kategori", async (req, res) => {
  try {
    const layanans = prisma.layanan.findMany({
      where: {
        kategori: req.params.kategori,
      },
    });

    res.json(response(true, "it works!", null, layanans));
  } catch (error) {
    console.log("getlayanan_error:", error);
    res.json(response(false, "something happened"));
  }
});

module.exports = route;
