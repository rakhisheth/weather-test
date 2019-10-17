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
});
