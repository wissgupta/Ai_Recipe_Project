import { useState } from "react";
import axios from "axios";

const AddRecipePage = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");

  const handleAddRecipe = async () => {
    const newRecipe = { title, ingredients, image };
    await axios.post("http://localhost:5000/api/recipes/add", newRecipe);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Add Your Recipe</h1>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded-md mt-4"
      />
      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="p-2 border rounded-md mt-4"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="p-2 border rounded-md mt-4"
      />
      <button onClick={handleAddRecipe} className="mt-4 px-6 py-2 bg-green-600 text-white rounded">
        Add Recipe
      </button>
    </div>
  );
};

export default AddRecipePage;
