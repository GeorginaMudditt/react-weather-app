import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.summary);
  const iconMapping = {
    "clear sky": "CLEAR_DAY",
    "few clouds": "PARTLY_CLOUDY_DAY",
    "scattered clouds": "PARTLY_CLOUDY_DAY",
    "overcast clouds": "CLOUDY",
    "broken clouds": "CLOUDY",
    "shower rain": "RAIN",
    "light rain": "RAIN",
    rain: "RAIN",
    thunderstorm: "SLEET",
    snow: "SNOW",
    mist: "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={iconMapping[props.summary]}
      color="#6643b5"
      size={64}
      animate={true}
    />
  );
}
