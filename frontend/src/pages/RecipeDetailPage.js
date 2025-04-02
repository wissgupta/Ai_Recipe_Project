import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext"; // Ensure AuthContext is used for user info

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useContext(AuthContext); // Get the logged-in user

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        console.log("Fetching details for recipe ID:", id); // Debugging
        const response = await axios.get(`http://localhost:5000/api/recipes/${id}`);
        setRecipe(response.data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
        setError("Recipe not found.");
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const handleAddToFavorites = async () => {
    if (!user) {
      alert("You must be logged in to save favorites!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/favorites", {
        userId: user.uid,
        recipeId: recipe.id,
        title: recipe.title,
        image: recipe.image,
      });
      setIsFavorite(true);
      alert("Recipe added to favorites!");
    } catch (error) {
      console.error("Error adding to favorites:", error);
      alert("Failed to add to favorites.");
    }
  };

  if (error) return <p className="p-4 text-red-600">{error}</p>;
  if (!recipe) return <p className="p-4">Loading recipe details...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover mt-4" />
      <button
        onClick={handleAddToFavorites}
        disabled={isFavorite}
        className={`mt-4 px-6 py-2 rounded ${isFavorite ? "bg-gray-500" : "bg-blue-600 text-white"}`}
      >
        {isFavorite ? "Added to Favorites" : "Add to Favorites"}
      </button>
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailPage;
