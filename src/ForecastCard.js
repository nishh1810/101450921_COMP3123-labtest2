import React from "react";
import "./forecast.css";

const ForecastCard = ({ forecast }) => {
  const date = new Date(forecast.dt * 1000);

  return (
    <div className="forecast-card">
      <p>{date.toLocaleDateString()}</p>
      <p>{date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt={forecast.weather[0].description}
      />
      <p>{forecast.main.temp}°C</p>
      <p>{forecast.weather[0].description}</p>
    </div>
  );
};

export default ForecastCard;
