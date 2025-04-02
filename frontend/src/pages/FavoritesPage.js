import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const FavoritesPage = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5000/api/favorites/${user.uid}`)
        .then(response => setFavorites(response.data));
    }
  }, [user]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Favorite Recipes</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="border rounded-md p-4">
            <h2 className="font-semibold">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
