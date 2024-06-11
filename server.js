const express = require("express");
const app = express();
const route = require("./src/routes/route.js");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
app.use(cors());
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use("/", route);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
