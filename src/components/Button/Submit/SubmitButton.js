import React from "react";

import { getCurrentWeather } from "../../../helpers/getWeatherData/index";
import Button from "../Button/Button";

const SubmitButton = ({
  queryString,
  setQueryString,
  setCurrentWeatherData
}) => {
  const handleOnSubmit = async event => {
    event.preventDefault();

    const data = await getCurrentWeather(queryString);
    setCurrentWeatherData(data);
    setQueryString("");
  };

  return (
    <Button type="submit" onClick={handleOnSubmit}>
      SUBMIT
    </Button>
  );
};

export default SubmitButton;
