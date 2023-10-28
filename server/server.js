const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://mern-app-1-63392f33b62a.herokuapp.com/"
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
