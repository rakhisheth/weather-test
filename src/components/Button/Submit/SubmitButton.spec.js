import React from "react";
import { render } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton component", () => {
  it("should successfully render", () => {
    const setQueryString = jest.fn();

    const { container } = render(
      <SubmitButton queryString="" setQueryString={setQueryString} />
    );

    expect(container).toBeTruthy();
  });
});
