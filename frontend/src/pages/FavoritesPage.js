import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

const FavoritesPage = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5000/api/favorites/${user.uid}`).then((res) => {
        setFavorites(res.data);
      });
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Favorite Recipes</h1>
      <div className="grid grid-cols-2 gap-4">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
