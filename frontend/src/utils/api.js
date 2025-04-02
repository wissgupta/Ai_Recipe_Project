import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Update if different

export const searchRecipes = async (ingredients) => {
  try {
    const response = await axios.get(`${`https://api.spoonacular.com/recipes/findByIngredients`}/api/recipes/search`, {
      params: { ingredients },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
