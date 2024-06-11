const express = require("express");
const route = express.Router();
const prisma = require("../database/db");
// const session = require("express-session");

// route.use(express.json());
// route.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
route.get("/", async (req, res) => {
  res.render("../views/tes.ejs");
  // console.log("tes");
  // try {
  //   const userTes = {nama : "tes", email : "tes@gmail.com"} 
  //   res.render("../views/tes.ejs", {nama : "tes", email : "tes@gmail.com"} );
  //   console.log(typeof userTes);
  // } catch (error) {
  //   console.log(error);
  // }
});

module.exports = route;
