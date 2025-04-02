import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-2">
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter ingredients..."
        className="p-2 border rounded-md"
      />
      <button onClick={() => onSearch(query)} className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
