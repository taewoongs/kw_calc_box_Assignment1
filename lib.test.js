const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3,5,7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([5,-5]) should be 0", () => {
    expect(lib.avg([5, -5])).toBe(0);
});

test("prime([17]) should be prime", () => {
    expect(lib.prime(17)).toBe(true);
});

test("factorial([6]) should be 720", () => {
    expect(lib.fact(6)).toBe(720);
});