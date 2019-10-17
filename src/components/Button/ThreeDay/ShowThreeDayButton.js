import React from "react";

import Button from "../Button";
import { getThreeDayWeather } from "../../../helpers/getWeatherData/index";

const ShowThreeDayButton = ({
  locationId,
  showThreeDays,
  setShowThreeDays,
  setThreeDayWeatherData
}) => {
  const handleOnClick = async () => {
    const data = await getThreeDayWeather(locationId);

    setThreeDayWeatherData(data);
    setShowThreeDays(!showThreeDays);
  };

  return (
    <Button type="text" onClick={handleOnClick}>
      Show 3 Day Forecast
    </Button>
  );
};

export default ShowThreeDayButton;
