import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="forecast-day">
        <h4>Thursday</h4>
        <WeatherIcon summary={"clear sky"} />
        <div>min: 10°C</div>
        <div>max: 13°C</div>
      </div>
      <div className="forecast-day">
        <h4>Friday</h4>
        <WeatherIcon summary={"rain"} />
        <div>min: 8°C</div>
        <div>max: 12°C</div>
      </div>
      <div className="forecast-day">
        <h4>Saturday</h4>
        <WeatherIcon summary={"mist"} />
        <div>min: 10°C</div>
        <div>max: 13°C</div>
      </div>
      <div className="forecast-day">
        <h4>Sunday</h4>
        <WeatherIcon summary={"thunderstorm"} />
        <div>min: 10°C</div>
        <div>max: 13°C</div>
      </div>
      <div className="forecast-day">
        <h4>Monday</h4>
        <WeatherIcon summary={"broken clouds"} />
        <div>min: 10°C</div>
        <div>max: 13°C</div>
      </div>
    </div>
  );
}
