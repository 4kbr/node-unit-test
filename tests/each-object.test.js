"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../src/sum");
const table = [
    {
        numbers: [],
        expected: 0,
    },
    {
        numbers: [10],
        expected: 10,
    },
    {
        numbers: [10, 10, 10],
        expected: 30,
    },
    {
        numbers: [10, 10, 10, 10, 10],
        expected: 50,
    },
    {
        numbers: [10, 10, 10, 10, 10, 10, 10],
        expected: 70,
    },
];
test.each(table)("test sumAll($numbers) should result $expected", ({ numbers, expected }) => {
    expect((0, sum_1.sumAll)(numbers)).toBe(expected);
});
