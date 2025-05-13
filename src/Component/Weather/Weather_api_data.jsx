import React, { useState } from "react";
import SearchBar from "./Searchbar";   
     // update if SearchBar is inside components/
import WeatherInfo from "./WeatherInfo";    // keep only this one
import "./Weather.css";   // update if Weather.css is inside components/

function Weather_api_data() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric"); // metric = Celsius
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const apiKey = process.env.REACT_APP_WEATHER_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      );
      if (!res.ok) {
        throw new Error("City not found");
      }
      const data = await res.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <button className="unit-btn" onClick={toggleUnit}>
        Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
      </button>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherInfo weather={weather} unit={unit} />}
    </div>
  );
}

export default Weather_api_data;
