const app = require("express").Router();
const prisma = require("../database/db");
const upload = require("../utils/upload");

app.post("/", upload.single("file"), (req, res) => {
  res.json(req.file).status(200);
  console.log(`file uploaded to ${req.file.path}`);
});

module.exports = app;
