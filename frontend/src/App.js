import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import LoginPage from "./pages/LoginPage";
import FavoritesPage from "./pages/FavoritesPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
