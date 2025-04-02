const RecipeCard = ({ recipe }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
        <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
        <p className="text-gray-600">Used Ingredients: {recipe.usedIngredientCount}</p>
      </div>
    );
  };
  
  export default RecipeCard;
  