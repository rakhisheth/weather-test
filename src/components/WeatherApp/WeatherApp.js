import React, { useState } from "react";

import Form from "../Form/Form";
import WeatherResults from "../WeatherResults/WeatherResults";

const WeatherApp = () => {
  const [queryString, setQueryString] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  return (
    <div>
      <Form
        queryString={queryString}
        setQueryString={setQueryString}
        currentWeatherData={currentWeatherData}
        setCurrentWeatherData={setCurrentWeatherData}
      />
      {currentWeatherData && (
        <WeatherResults currentWeatherData={currentWeatherData} />
      )}
    </div>
  );
};

export default WeatherApp;
