import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HelloWorldComponent } from "./helloworld.component";

describe("HelloWorldComponent tests", () => {
  test("`Hello World`が描画されている", () => {
    render(<HelloWorldComponent />);
    screen.debug();
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
