import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GenerateRecipePage = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    if (ingredients) {
      const response = await axios.get(`http://localhost:5000/api/recipes/search`, {
        params: { ingredients }
      });
      setRecipes(response.data);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Generate Recipe</h1>

      <div className="search-container flex justify-center">
        <input
          type="text"
          placeholder="Enter ingredients (e.g., tomato, cheese)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="p-3 border rounded-md"
        />
        <button onClick={handleSearch} className="btn">Search</button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2 className="text-blue-600 hover:underline">{recipe.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenerateRecipePage;
