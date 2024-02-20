import { formatMoneys } from "../utils/money.js";

describe("test suite: formatMoney", () => {
    it("converts cents into dollars", () => {
        expect(formatMoneys(2095)).toEqual("20.95");
    });
});
