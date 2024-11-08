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
      if (response.data.daily && response.data.daily.length > 4) {
        setForecastData(
          response.data.daily.slice(1, 6).map((day, index) => ({
            date: moment()
              .add(index + 1, "d")
              .format("dddd"),
            minTemp: day.temperature.minimum,
            maxTemp: day.temperature.maximum,
            forecastSummary: day.condition.description,
          }))
        );
        setReady(true);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    }

    search();
  }, [props.city]);

  if (!ready) {
    return "Loading forecast ...";
  }
  return (
    <div className="Forecast">
      {forecastData.map((day, index) => (
        <div className="forecast-day" key={index}>
          <h4>{day.date}</h4>
          <WeatherIcon summary={day.forecastSummary} size={50} />
          <div>min: {Math.round(day.minTemp)}°C</div>
          <div>max: {Math.round(day.maxTemp)}°C</div>
        </div>
      ))}
    </div>
  );
}
