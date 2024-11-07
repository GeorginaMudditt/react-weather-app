import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.city,
      summary: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.temperature.current,
    });
    setReady(true);
  }

  function search() {
    let apiKey = "21f1caaedf3t0e238fc991db4d2f34bo";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            className="enter-city"
            type="search"
            placeholder="Enter a city"
            onChange={handleCityChange}
          />
          <input className="search-button" type="submit" value="Search" />
        </form>
        <h3>Showing the weather conditions for:</h3>
        <h2>{weatherData.city}</h2>
        <div className="current-weather-container row">
          <div className="col-6">
            <ul>
              <li>Summary: {weatherData.summary}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind speed: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-3 current-weather-icon">
            <WeatherIcon
              summary={weatherData.summary}
              alt={weatherData.summary}
            />
          </div>
          <div className="col-3">
            <h2 className="current-temperature">
              {Math.round(weatherData.temperature)}°C
            </h2>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div className="loading">Loading...</div>;
  }
}
