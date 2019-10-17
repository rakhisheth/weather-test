import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should successfully render", () => {
    const { container } = render(
      <Button className="test" type="text" onClick={jest.fn()} />
    );

    expect(container).toBeTruthy();
  });
});
