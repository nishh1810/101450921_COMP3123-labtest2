import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import WeatherCard from './weather';
import SearchBar from './SearchBar';

const App = () => {
  const [city, setCity] = useState("Toronto");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a41b579ddf9ea532f43e4bc2e7473471&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City not found. Please try again!");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar setCity={setCity} />
      {isLoading ? <p>Loading...</p> : weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};


export default App;
