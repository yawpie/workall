const express = require("express");
const app = express();
const route = require("./src/routes/route.js");
const session = require("express-session");
const ejs = require("ejs");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(
  session({
    secret: "this is secret omg",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
      sameSite: true,
      secure: false,
    },
  })
);
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use("/", route);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
