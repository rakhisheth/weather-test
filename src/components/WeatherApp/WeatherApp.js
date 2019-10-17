import React, { useState } from "react";

import Form from "../Form/Form";

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
    </div>
  );
};

export default WeatherApp;
