import { add } from "./add";

describe("add.ts", () => {
    it("1 + 1 = 2", () => {
        const result = add(1, 1);
        expect(result).toStrictEqual(2);
    });
});