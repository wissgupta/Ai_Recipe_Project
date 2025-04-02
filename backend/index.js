const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(
    cors({
      origin: "http://localhost:3000", // Allow frontend at localhost:3000
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
    })
  );  
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const favoritesRoutes = require("./routes/favoritesRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/favorites", favoritesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
