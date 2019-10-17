import React from "react";

const WeatherTemplate = ({ title, temp, temp_min, temp_max }) => {
  const formatTemp = val => `${Math.round(val)}°c`;
  return (
    <div>
      <p>{title}</p>
      <p>Lowest: {formatTemp(temp_min)}</p>
      <p>{formatTemp(temp)}</p>
      <p>Highest: {formatTemp(temp_max)}</p>
    </div>
  );
};

export default WeatherTemplate;
