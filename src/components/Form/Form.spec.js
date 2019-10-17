import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Form from "./Form";

describe("Form component", () => {
  it("should successfully render", () => {
    const { container } = render(
      <Form
        queryString="London"
        setQueryString={jest.fn()}
        setCurrentWeatherData={jest.fn()}
      />
    );

    expect(container).toBeTruthy();
  });

  it("should update queryString on change of the input field", () => {
    const setQueryString = jest.fn();
    const { getByPlaceholderText } = render(
      <Form
        queryString="Londo"
        setQueryString={setQueryString}
        setCurrentWeatherData={jest.fn()}
      />
    );

    fireEvent.change(getByPlaceholderText("Location"), {
      target: {
        value: "London"
      }
    });

    expect(setQueryString).toBeCalled();
  });
});
