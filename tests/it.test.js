"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../src/sum");
describe("when call sumAll()", () => {
    it("should get 30 with parameter [10, 10, 10]", () => {
        expect((0, sum_1.sumAll)([10, 10, 10])).toBe(30);
    });
    it("should get 50 with parameter [10, 10, 10, 10, 10]", () => {
        expect((0, sum_1.sumAll)([10, 10, 10, 10, 10])).toBe(50);
    });
});
