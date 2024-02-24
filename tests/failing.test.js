"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sayHello_1 = require("../src/sayHello");
test("sayHello success", () => {
    expect((0, sayHello_1.sayHello)("Eko")).toBe("Hello Eko");
});
test.failing("sayHello error", () => {
    (0, sayHello_1.sayHello)(null);
});
test("sayHello error matchers", () => {
    expect(() => (0, sayHello_1.sayHello)(null)).toThrow();
});
