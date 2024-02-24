"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../src/sum");
test("test sum function 1", () => {
    const result = (0, sum_1.sum)(1, 2);
    expect(result).toBe(3);
});
test("test sum function 2", () => {
    const result = (0, sum_1.sum)(1, 2);
    expect(result).toBe(3);
});
test("test sum function 3", () => {
    const result = (0, sum_1.sum)(1, 2);
    expect(result).toBe(3);
});
test("test sum all", () => {
    const numbers = [1, 1, 1, 1, 1];
    expect((0, sum_1.sumAll)(numbers)).toBe(5);
});
