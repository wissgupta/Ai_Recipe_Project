import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/home");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Recipe Finder</h1>
      <button onClick={login} className="px-6 py-2 bg-blue-600 text-white rounded">
        Login with Google
      </button>
    </div>
  );
};

export default WelcomePage;
