import React from "react";
import { render, cleanup } from "@testing-library/react";
import CurrentWeather from "./CurrentWeather";

describe("CurrentWeather component", () => {
  afterEach(cleanup);

  const currentWeatherData = {
    name: "London",
    main: { temp: "20", temp_min: "15", temp_max: 25 }
  };

  it("should successfully render", () => {
    const { container } = render(
      <CurrentWeather currentWeatherData={currentWeatherData} />
    );

    expect(container).toBeTruthy();
  });

  it("should display correct information from props", () => {
    const { queryByText } = render(
      <CurrentWeather currentWeatherData={currentWeatherData} />
    );

    expect(queryByText("London")).toBeTruthy();
  });
});
