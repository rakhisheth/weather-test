import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton component", () => {
  it("should successfully render", () => {
    const setQueryString = jest.fn();
    const setCurrentWeatherData = jest.fn();

    const { container } = render(
      <SubmitButton
        queryString=""
        setQueryString={setQueryString}
        setCurrentWeatherData={setCurrentWeatherData}
      />
    );

    expect(container).toBeTruthy();
  });

  it("should show current weather if query string(location) is valid", async () => {
    const setQueryString = jest.fn();
    const setCurrentWeatherData = jest.fn();

    const { queryByText } = render(
      <SubmitButton
        queryString=""
        setQueryString={setQueryString}
        setCurrentWeatherData={setCurrentWeatherData}
      />
    );

    fireEvent.click(queryByText("SUBMIT"));

    await wait(() => {
      expect(setQueryString).toHaveBeenCalled();
      expect(setCurrentWeatherData).toHaveBeenCalled();
    });
  });
});
