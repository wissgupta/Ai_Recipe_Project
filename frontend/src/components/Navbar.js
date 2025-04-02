import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-700 text-white">
      <Link to="/" className="text-xl font-bold">Recipe Finder</Link>
      <div>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.displayName}</span>
            <Link to="/home" className="mr-4">Home</Link>
            <Link to="/favorites" className="mr-4">Favorites</Link>
            <Link to="/generate" className="mr-4">Generate Recipe</Link>
            <Link to="/add-recipe" className="mr-4">Add Recipe</Link>
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <Link to="/login" className="mr-4">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
