const express = require("express");
const app = express();
const route = require("./src/routes/route.js");

const PORT = process.env.PORT || 5000;

app.use("/", route);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
