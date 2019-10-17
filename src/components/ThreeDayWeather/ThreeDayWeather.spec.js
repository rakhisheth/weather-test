import React from "react";
import { render, cleanup } from "@testing-library/react";
import ThreeDayWeather from "./ThreeDayWeather";

describe("ThreeDayWeather component", () => {
  afterEach(cleanup);

  const threeDayWeatherData = [
    {
      main: {
        temp: "20"
      }
    },
    {
      main: {
        temp: "25"
      }
    }
  ];

  it("should successfully render", () => {
    const { container } = render(
      <ThreeDayWeather threeDayWeatherData={threeDayWeatherData} />
    );

    expect(container).toBeTruthy();
  });

  it("should display the correct information from props", () => {
    const { queryByText } = render(
      <ThreeDayWeather threeDayWeatherData={threeDayWeatherData} />
    );

    expect(queryByText("Monday")).toBeTruthy();
  });
});
