import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component tests", () => {
  it("should icrement count on click", async () => {
    render(<App />);
    expect(screen.findByText(/count is 0/i));

    userEvent.click(screen.getByRole("button"));

    expect(await screen.findByText(/count is 1/i)).not.toBeEmptyDOMElement();
    screen.debug();
  });
});
