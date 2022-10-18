import { describe, expect, it } from "@jest/globals";

describe("jest test sample", () => {
  it("add test", () => {
    expect(1 + 1).toStrictEqual(2);
  });
});
