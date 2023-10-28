const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes - // Urun rotalarini kullanma
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Routes - // Kullanici rotalarını kullanma
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

module.exports = app;
