const express = require("express");
const axios = require("axios");

const router = express.Router();
const API_KEY = process.env.SPOONACULAR_API_KEY;

router.get("/search", async (req, res) => {
    const { ingredients } = req.query;
  
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients`,
        {
          params: { ingredients, number: 10, apiKey: API_KEY, },
        }
      );
      res.json(response.data);
    } catch (error) {
      console.error("Error fetching from Spoonacular:", error.response ? error.response.data : error.message);
      res.status(500).json({ error: "Failed to fetch recipes" });
    }
  });  

module.exports = router;
