const express = require("express");
const route = express.Router();
const checkAuth = require("../utils/checkAuth");
const prisma = require("../database/db");
const upload = require("../utils/upload");

route.get("/", checkAuth, (req, res) => {
  const loggedInHeader = "../views/component/header_login.ejs";
  const loggedOutHeader = "../views/component/header_logout.ejs";
  let header = loggedOutHeader;
  let shop = false;
  if (req.session.user) {
    header = loggedInHeader;
  }
  if (req.session.shop) {
    shop = true;
  }

  res.render("../views/open_shop.ejs", { header, shop });
});

let uploadedImageName = "";

route.post("/profile-pic", (req, res) => {
  upload.single("foto_profil_toko")(req, res, (err) => {
    if (err) {
      console.log("======== ProfilePicUploadError =======", err);
      res.json({
        success: false,
        error: err,
      });
    } else {
      uploadedImageName = req.file.filename;
      res.json({
        success: true,
        message: "Profile picture uploaded successfully",
      });
    }
  });
});

route.post("/create", async (req, res) => {
  const shop_data = req.body;

  console.log("===== shop data =====:", shop_data);
  const { id_user } = req.session.user;
  try {
    const shop = await prisma.shop
      .create({
        data: {
          nama_toko: shop_data.nama_toko,
          alamat_toko: shop_data.alamat_toko,
          kontak_toko: shop_data.kontak_toko,
          deskripsi: shop_data.deskripsi,
          ketersediaan: true,
          id_user: id_user,
          status_banned_shop: false,
          no_rekening: "0",
          foto_profil_toko: uploadedImageName,
        },
      })
      .catch((error) => {
        console.log("====== InnerCreateShopError ======", error);
        throw new Error(error);
      });

    req.session.shop = shop;
    req.session.save();
    res.json({
      success: true,
      message: "Shop created successfully",
      redirectUrl: "/dashboard",
    });
  } catch (error) {
    console.log("====== CreateShopError ======", error);
    res.json({
      success: false,
      message: error || "Something went wrong",
    });
  }
});

module.exports = route;
