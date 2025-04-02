import { createContext, useState } from "react";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
