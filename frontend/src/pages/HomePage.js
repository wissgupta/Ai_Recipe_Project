import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello, {user?.displayName}</h1>
      <p className="mt-2">Welcome to Recipe Finder. Explore recipes based on the ingredients you have at home!</p>
    </div>
  );
};

export default HomePage;
