import React from "react";
import "./WeatherInfo.css";

function WeatherInfo({ weather, unit }) {
  const tempUnit = unit === "metric" ? "°C" : "°F";
  return (
    <div className="weather-info">
      <h2>{weather.name}</h2>
      <p>🌡 Temperature: {weather.main.temp} {tempUnit}</p>
      <p>📋 Condition: {weather.weather[0].description}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬 Wind Speed: {weather.wind.speed} {unit === "metric" ? "m/s" : "mph"}</p>
    </div>
  );
}

export default WeatherInfo;
