import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input component", () => {
  it("should successfully render", () => {
    const { container } = render(
      <Input
        className="className"
        type="text"
        onChange={jest.fn()}
        placeholder="test"
        value="test"
      />
    );

    expect(container).toBeTruthy();
  });
});
