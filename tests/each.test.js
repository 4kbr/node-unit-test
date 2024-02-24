"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../src/sum");
const table = [
    [[], 0],
    [[10], 10],
    [[10, 10, 10], 30],
    [[10, 10, 10, 10, 10], 50],
    [[10, 10, 10, 10, 10, 10, 10], 70],
];
test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
    expect((0, sum_1.sumAll)(numbers)).toBe(expected);
});
