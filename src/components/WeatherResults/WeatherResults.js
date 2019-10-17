import React, { useState } from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ShowThreeDayButton from "../Button/ThreeDay/ShowThreeDayButton";

const WeatherResults = ({ currentWeatherData }) => {
  const [showThreeDays, setShowThreeDays] = useState(false);
  const [threeDayWeatherData, setThreeDayWeatherData] = useState(null);

  return (
    <div>
      <CurrentWeather currentWeatherData={currentWeatherData} />
      <ShowThreeDayButton
        locationId={currentWeatherData.id}
        showThreeDays={showThreeDays}
        setShowThreeDays={setShowThreeDays}
        setThreeDayWeatherData={setThreeDayWeatherData}
      />
    </div>
  );
};

export default WeatherResults;
