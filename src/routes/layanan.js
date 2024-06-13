const express = require("express");
const route = express.Router();
const prisma = require("../database/db");

route.get("/:id_layanan", async (req, res) => {
  const search_this = req.params.id_layanan;
  const layanan = await prisma.layanan.findFirst({
    where: {
      id_layanan: search_this,
    },
  });

  res.render("../views/layanan/layanan.ejs");
});

module.exports = route;
