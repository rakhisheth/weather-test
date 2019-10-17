import { API_KEY, API_URL } from "../../constants/api";
import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";

import WeatherResults from "./WeatherResults";

let mock = new MockAdapter(axios);

describe("WeatherResults component", () => {
  afterEach(cleanup);

  const currentWeatherData = {
    name: "London",
    main: { temp: "20", temp_min: "15", temp_max: 25 },
    id: 2643743
  };

  it("should successfully render", () => {
    const { container } = render(
      <WeatherResults currentWeatherData={currentWeatherData} />
    );

    expect(container).toBeTruthy();
  });

  it("should set showThreeDays to true and display Three Day Weather results", async () => {
    mock
      .onGet(`${API_URL}forecast?id=2643743&units=metric&appid=${API_KEY}`)
      .reply(200, { list: [] });
    const { queryByTestId, queryByText } = render(
      <WeatherResults currentWeatherData={currentWeatherData}></WeatherResults>
    );

    fireEvent.click(queryByText("Show 3 Day Forecast"));
    await wait(() => {
      expect(queryByTestId("3dw")).not.toBeNull();
    });
  });
});
