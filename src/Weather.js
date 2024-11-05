import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
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

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <input
            className="enter-city"
            type="search"
            placeholder="Enter a city"
          />
          <input className="search-button" type="submit" value="Search" />
        </form>
        <h3>Showing the current conditions in:</h3>
        <h2>{weatherData.city}</h2>
        <div className="current-weather-container row">
          <div className="col-6">
            <ul>
              <li>Summary: {weatherData.summary}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind speed: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-3">
            <div className="current-weather-icon">☁️</div>
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
    let apiKey = "21f1caaedf3t0e238fc991db4d2f34bo";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <div className="loading">Loading...</div>;
  }
}
