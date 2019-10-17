import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import ShowThreeDayButton from "./ShowThreeDayButton";

describe("ShowThreeDayButton component", () => {
  it("should successfully render", () => {
    const setShowThreeDays = jest.fn();
    const setThreeDayWeatherData = jest.fn();

    const { container } = render(
      <ShowThreeDayButton
        locationId={1}
        showThreeDays={false}
        setShowThreeDays={setShowThreeDays}
        setThreeDayWeatherData={setThreeDayWeatherData}
      />
    );

    expect(container).toBeTruthy();
  });

  it("should show 5 day forecast when clicked and store weather data", async () => {
    const setShowThreeDays = jest.fn();
    const setThreeDayWeatherData = jest.fn();

    const { queryByText } = render(
      <ShowThreeDayButton
        locationId={1}
        showThreeDays={false}
        setShowThreeDays={setShowThreeDays}
        setThreeDayWeatherData={setThreeDayWeatherData}
      />
    );

    fireEvent.click(queryByText("Show 5 Day Forecast"));

    await wait(() => {
      expect(setShowThreeDays).toHaveBeenCalled();
      expect(setThreeDayWeatherData).toHaveBeenCalled();
    });
  });
});
