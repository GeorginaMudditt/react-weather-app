import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    function search() {
      let apiKey = "21f1caaedf3t0e238fc991db4d2f34bo";
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
      setForecastData({
        minTemp: response.data.daily.temperature.minimum,
        maxTemp: response.data.daily.temperature.maximum,
      });
      setReady(true);
    }

    search();
  }, [props.city]);

  if (!ready) {
    return "Loading forecast ...";
  }
  return (
    <div className="Forecast">
      <div className="forecast-day">
        <h4>Tomorrow</h4>
        <WeatherIcon summary={"clear sky"} size={50} />
        <div>min: {forecastData.minTemp}°C</div>
        <div>max: {forecastData.maxTemp}°C</div>
      </div>
    </div>
  );
}
