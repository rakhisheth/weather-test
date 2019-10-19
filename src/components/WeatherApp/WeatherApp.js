import React, { useState } from "react";
import styled from "styled-components";

import Form from "../Form/Form";
import WeatherResults from "../WeatherResults/WeatherResults";

const WeatherApp = () => {
  const [queryString, setQueryString] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [error, setError] = useState(false);

  return (
    <Container>
      <Form
        queryString={queryString}
        setQueryString={setQueryString}
        setCurrentWeatherData={setCurrentWeatherData}
        setError={setError}
      />
      {error && <p>Enter a valid city</p>}
      {currentWeatherData && (
        <WeatherResults currentWeatherData={currentWeatherData} />
      )}
    </Container>
  );
};

export default WeatherApp;

const Container = styled.div`
  text-align: center;
`;
