"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("../src/exception");
test("exception", () => {
    expect(() => (0, exception_1.callMe)("Eko")).toThrow();
    expect(() => (0, exception_1.callMe)("Eko")).toThrow(exception_1.MyException);
    expect(() => (0, exception_1.callMe)("Eko")).toThrow("Ups my exceptions happens");
});
test("exception not happens", () => {
    expect((0, exception_1.callMe)("Budi")).toBe("OK");
});
