import React from "react";

import WeatherTemplate from "../WeatherTemplate";
const ThreeDayWeather = ({ threeDayWeatherData }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  return threeDayWeatherData.map((weather, i) => {
    const today = new Date().getDay();
    const dayIndex = today + i > 6 ? today + i - 7 : today + i;
    const weatherDay = days[dayIndex];

    return (
      <WeatherTemplate
        component="threeDay"
        title={weatherDay}
        temp={weather.main.temp}
      />
    );
  });
};

export default ThreeDayWeather;
