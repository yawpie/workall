const app = require("express").Router();
const prisma = require("../database/db");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("file"), (req, res) => {
  res.json(req.file).status(200);
  console.log(`file uploaded to ${req.file.path}`);
});

module.exports = app;
