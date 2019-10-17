import React from "react";
import WeatherTemplate from "../WeatherTemplate";

const CurrentWeather = ({ currentWeatherData }) => {
  const {
    name,
    main: { temp, temp_min, temp_max }
  } = currentWeatherData;

  return (
    <WeatherTemplate
      component="current"
      title={name}
      temp={temp}
      temp_min={temp_min}
      temp_max={temp_max}
    />
  );
};

export default CurrentWeather;
