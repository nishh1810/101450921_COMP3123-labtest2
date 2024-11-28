import React from "react";
import "./weather.css";

const WeatherCard = ({ weatherData }) => {
  const { name, sys, main, weather, wind } = weatherData;

  const getFormattedDate = () => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString(undefined, options);
  };

  const getFormattedTime = () => {
    return new Date().toLocaleTimeString();
  };

  return (
    <div className="weather-card">
      <h2>{name}, {sys.country}</h2>
      <p>{getFormattedDate()}</p>
      <p>{getFormattedTime()}</p>
      <div className="weather-info">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        <div>
          <h3>{main.temp}°C</h3>
          <p>{weather[0].description}</p>
        </div>
      </div>
      <div className="details">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} m/s</p>
        <p>Pressure: {main.pressure} hPa</p>
      </div>
    </div>
  );
};

export default WeatherCard;
