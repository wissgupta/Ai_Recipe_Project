const express = require("express");
const router = express.Router();
const axios = require("axios");

// Fetch recipes based on ingredients
router.get("/search", async (req, res) => {
  const { ingredients } = req.query;
  console.log("🔍 Searching for recipes with:", ingredients); // Debugging
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
      params: {
        ingredients,
        apiKey: process.env.SPOONACULAR_API_KEY,
        number: 10
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("❌ Error fetching recipes:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch recipes from Spoonacular API" });
  }
});

// Fetch recipe details by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("📋 Fetching details for recipe ID:", id); // Debugging
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: { apiKey: process.env.SPOONACULAR_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    console.error("❌ Error fetching recipe details:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch recipe details from Spoonacular API" });
  }
});

module.exports = router;
