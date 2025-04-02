import { useParams } from "react-router-dom";

const RecipeDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Recipe Details for {id}</h1>
      {/* Fetch and display recipe details */}
    </div>
  );
};

export default RecipeDetailPage;
