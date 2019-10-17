import React from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";

const WeatherResults = ({ currentWeatherData }) => {
  return (
    <div>
      <CurrentWeather currentWeatherData={currentWeatherData} />
    </div>
  );
};

export default WeatherResults;
