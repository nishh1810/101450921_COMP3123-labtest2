import React, { useState } from "react";
const SearchBar = ({ setCity }) => {
    const [input, setInput] = useState("");
  
    const handleSearch = () => {
      if (!input.trim()) {
        alert("Please enter a city name!");
        return;
      }
      setCity(input);
      setInput(""); // Clear the input field
    };
  
    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
export default SearchBar;  