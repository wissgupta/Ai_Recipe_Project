import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark") === "true");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("dark", darkMode);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-700 text-white rounded">
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
