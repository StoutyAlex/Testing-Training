const { sum, mul, sub, div, sqr } = require("../../server/maths/math");

describe('Math Functions', () => {
    it("Adding 1 + 1 equals 2", () => {
        expect(sum(1, 1)).toBe(2)
    });
    it("Multiplying 1 * 1 equals 1", () => {
        expect(mul(1, 1)).toBe(1)
    })
    it("Subtracting 1 - 1 equals 0", () => {
        expect(sub(1, 1)).toBe(0)
    })
    it("Dividing 1 / 1 equals 1", () => {
        expect(div(1, 1)).toBe(1)
    })
    it("Squaring 2 equals 4", () => {
        expect(sqr(2)).toBe(4)
    })
});