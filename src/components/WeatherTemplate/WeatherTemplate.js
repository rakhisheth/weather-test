import React from "react";

const WeatherTemplate = ({ component, title, temp, temp_min, temp_max }) => {
  const formatTemp = val => `${Math.round(val)}°c`;
  return (
    <div component={component}>
      <p>{title}</p>
      {component === "current" && <p>Lowest: {formatTemp(temp_min)}</p>}
      <p component={component}>{formatTemp(temp)}</p>
      {component === "current" && <p>Highest: {formatTemp(temp_max)}</p>}
    </div>
  );
};

export default WeatherTemplate;
