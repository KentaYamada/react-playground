import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter tests", () => {
    const { result } = renderHook(() => useCounter());

    it("increment test", () => {
        expect(result.current.count).toStrictEqual(0);
        act(() => result.current.increment());
        expect(result.current.count).toStrictEqual(1);
    });
});