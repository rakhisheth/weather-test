import React from "react";

import { getCurrentWeather } from "../../../helpers/getWeatherData/index";
import Button from "../Button/Button";

const SubmitButton = ({
  queryString,
  setQueryString,
  setCurrentWeatherData,
  setError
}) => {
  const handleOnSubmit = async event => {
    event.preventDefault();

    const data = await getCurrentWeather(queryString);

    if (!data) {
      setError(true);
    } else {
      setError(false);
    }

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
