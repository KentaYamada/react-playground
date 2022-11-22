import "@testing-library/jest-dom";
import PageA from "@pages/pageA";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";

describe("PageA component tests", () => {
  it("should icrement count on click", async () => {
    render(<RecoilRoot><PageA /></RecoilRoot>);
    expect(screen.findByText(/count is 0/i));

    userEvent.click(screen.getByRole("button"));

    expect(await screen.findByText(/count is 1/i)).not.toBeEmptyDOMElement();
    screen.debug();
  });
});