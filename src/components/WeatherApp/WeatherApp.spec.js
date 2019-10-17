import React from "react";
import { render } from "@testing-library/react";
import WeatherApp from "./WeatherApp";

describe("WeatherApp component", () => {
  it("should successfully render", () => {
    const { container } = render(
      <WeatherApp className="test" type="text" onClick={jest.fn()} />
    );

    expect(container).toBeTruthy();
  });
});
