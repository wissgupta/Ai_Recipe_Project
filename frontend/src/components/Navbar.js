import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <nav>
      <h1>Recipe Finder</h1>
      {user ? (
        <>
          <span>Welcome, {user.displayName}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
