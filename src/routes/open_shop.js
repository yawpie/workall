const express = require("express");
const route = express.Router();
const checkAuth = require("../utils/checkAuth");

route.get("/", checkAuth, (req, res) => {
  const loggedInHeader = "../views/component/header_login.ejs";
  const loggedOutHeader = "../views/component/header.ejs";
  let header = loggedOutHeader;
  if (req.session.user) {
    header = loggedInHeader;
  }
  res.render("../views/open_shop.ejs", { header });
});
let shop_data = {
  nama_toko: "",
  deskripsi: "",
  kategori: "",
  no_rekening: 0,
  id_user: 0,
  alamat_toko: "",
  kontak_toko: 0,
};
route.post("/first-part", checkAuth, (req, res) => {
  const { nama_toko, alamat, kontak, deskripsi } = req.body;
  shop_data = {
    ...shop_data,
    nama_toko,
    alamat_toko: alamat,
    kontak_toko: kontak,
    deskripsi,
  };
  console.log("shop data first part:", shop_data);
});

route.post("/second-part", checkAuth, (req, res) => {
  const { kategori, no_rekening } = req.body;
  shop_data = {
    ...shop_data,
    kategori,
    no_rekening,
  };
  console.log("shop data first part:", shop_data);
});

module.exports = route;
