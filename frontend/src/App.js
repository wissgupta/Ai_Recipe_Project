import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import GenerateRecipePage from "./pages/GenerateRecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import AddRecipePage from "./pages/AddRecipePage";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/generate" element={<GenerateRecipePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
