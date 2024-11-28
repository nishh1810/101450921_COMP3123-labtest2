import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./weather";
import ForecastCard from "./ForecastCard";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("Toronto");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a41b579ddf9ea532f43e4bc2e7473471&units=metric`
        );
        setWeatherData(weatherResponse.data);

        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a41b579ddf9ea532f43e4bc2e7473471&units=metric`
        );
        setForecastData(forecastResponse.data.list.filter((_, index) => index % 8 === 0));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div className="app">
      <header className="header">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Search city..."
          onKeyDown={(e) => e.key === "Enter" && setCity(e.target.value)}
        />
      </header>

      {weatherData && (
        <div className="content">
          <WeatherCard weatherData={weatherData} />
          <div className="forecast-container">
            {forecastData.map((forecast, index) => (
              <ForecastCard key={index} forecast={forecast} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
