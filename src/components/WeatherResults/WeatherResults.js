import React, { useState } from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ThreeDayWeather from "../ThreeDayWeather/ThreeDayWeather";
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
      {showThreeDays && (
        <div data-testid="5dw">
          <ThreeDayWeather threeDayWeatherData={threeDayWeatherData} />
        </div>
      )}
    </div>
  );
};

export default WeatherResults;
