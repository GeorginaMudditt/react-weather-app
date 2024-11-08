import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";
import moment from "moment";

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
        date: moment().add(1, "d").format("dddd"),
        minTemp: response.data.daily[0].temperature.minimum,
        maxTemp: response.data.daily[0].temperature.maximum,
        forecastSummary: response.data.daily[0].condition.description,
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
        <h4>{forecastData.date}</h4>
        <WeatherIcon summary={forecastData.forecastSummary} size={50} />
        <div>min: {Math.round(forecastData.minTemp)}°C</div>
        <div>max: {Math.round(forecastData.maxTemp)}°C</div>
      </div>
    </div>
  );
}
