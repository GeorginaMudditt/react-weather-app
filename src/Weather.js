import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city" />
        <input type="submit" value="Search" />
      </form>
      <h3>Showing the current conditions in:</h3>
      <h2>London</h2>
      <div className="current-weather-container row">
        <div className="col-6">
          <ul>
            <li>Summary: overcast clouds</li>
            <li>Humidity: 86%</li>
            <li>Wind speed: 2 km/h</li>
          </ul>
        </div>
        <div className="col-3">
          <div>☁️</div>
        </div>
        <div className="col-3">
          <div>11°C</div>
        </div>
      </div>
    </div>
  );
}

// export default function Search() {
//   let [city, setCity] = useState("");
//   let [loaded, setLoaded] = useState(false);
//   let [weather, setWeather] = useState({});

//   function displayWeather(response) {
//     setLoaded(true);
//     setWeather({
//       temperature: response.data.main.temp,
//       description: response.data.weather[0].description,
//       humidity: response.data.main.humidity,
//       wind: response.data.wind.speed,
//       icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     let apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(displayWeather);
//   }

//   function updateCity(event) {
//     setCity(event.target.value);
//   }

//   let form = (
//     <form onSubmit={handleSubmit}>
//       <input type="search" placeholder="Enter a city" onChange={updateCity} />
//       <input type="submit" value="Search" />
//     </form>
//   );

//   if (loaded) {
//     return (
//       <div>
//         {form}
//         <ul>
//           <li>Temperature: {Math.round(weather.temperature)}°C</li>
//           <li>Description: {weather.description}</li>
//           <li>Humidity: {weather.humidity}%</li>
//           <li>Wind speed: {Math.round(weather.wind)} km/h</li>
//           <li>
//             <img src={weather.icon} alt="weather icon" />
//           </li>
//         </ul>
//       </div>
//     );
//   } else {
//     return form;
//   }
// }
