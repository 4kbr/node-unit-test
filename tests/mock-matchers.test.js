"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../src/sum");
test("test mock matchers", () => {
    const callback = jest.fn();
    (0, sum_1.calculate)([10, 10, 10], callback);
    (0, sum_1.calculate)([10, 10, 10, 10, 10], callback);
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith(30);
    expect(callback).toHaveBeenCalledWith(50);
});
