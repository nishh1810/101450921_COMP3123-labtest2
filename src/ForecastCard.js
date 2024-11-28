import React from "react";
import "./forecast.css";

const ForecastCard = ({ forecast }) => {
    const getFormattedDate = (timestamp) => {
      const date = new Date(timestamp * 1000); // Convert the timestamp to a Date object
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString(undefined, options);
    };
    
    

    return (
        <div className="forecast-card">
        <p>{getFormattedDate(forecast.dt)}</p>
        <p></p>
        <img
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            alt={forecast.weather[0].description}
        />
        <p>{Math.round(forecast.main.temp)}°C</p>
        <p>{forecast.weather[0].description}</p>
        </div>
  );
};

export default ForecastCard;
