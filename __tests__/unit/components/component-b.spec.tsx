import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { ComponentB } from "../../../src/components/componentB";

describe("src/components/ComponentB ユニットテスト", () => {
  it("`hoge`が描画されていること", () => {
    render(<ComponentB />);
    screen.debug();
    expect(screen.getByText("hoge")).toBeInTheDocument();
  });
});
