import { formatMoneys } from "../utils/money.js";

describe("test suite: formatMoney", () => {
    it("converts cents into dollars", () => {
        expect(formatMoneys(2095)).toEqual("20.95");
    });
    it("works with 0 ", () => {
        expect(formatMoneys(0)).toEqual("0.00");
    });
    describe("rounding", () => {
        it("rounds up to the nearest cent", () => {
            expect(formatMoneys(2000.5)).toEqual("20.01");
        });
        it("rounds down to the nearest cent", () => {
            expect(formatMoneys(2000.4)).toEqual("20.00");
        });
    });
});
