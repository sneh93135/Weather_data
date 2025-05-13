import React from "react";
import "./SearchBar.css";

function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather}>Search</button>
    </div>
  );
}

export default SearchBar;
