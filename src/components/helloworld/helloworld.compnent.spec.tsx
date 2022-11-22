import "@testing-library/jest-dom";
import { HelloWorldComponent } from "@components/helloworld/helloworld.component";
import { render, screen } from "@testing-library/react";

describe("HelloWorldComponent tests", () => {
  test("`Hello World`が描画されている", () => {
    render(<HelloWorldComponent />);
    screen.debug();
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
