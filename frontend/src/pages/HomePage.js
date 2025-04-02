import { useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const response = await axios.get("http://localhost:5000/api/recipes/search", {
      params: { ingredients: "tomato,cheese" },
    });
    setRecipes(response.data);
  };

  return (
    <div>
      <button onClick={fetchRecipes}>Search Recipes</button>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default HomePage;
