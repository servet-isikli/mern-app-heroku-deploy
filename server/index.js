// index.js

require("dotenv").config(); // .env dosyasındaki çevresel değişkenleri yükle

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mongoose Bağlantısı
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    // Sunucuyu Başlat
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Routes - Urun rotalarini kullanma
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Routes - Kullanici rotalarını kullanma
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
