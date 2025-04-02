import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold">Login</h1>
      <button onClick={login} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
