"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_1 = require("../src/async");
test("mock async function", () => __awaiter(void 0, void 0, void 0, function* () {
    const from = jest.fn();
    from.mockResolvedValueOnce(1000);
    yield expect((0, async_1.getBalance)("Eko", from)).resolves.toEqual({
        name: "Eko",
        balance: 1000,
    });
    expect(from.mock.calls.length).toBe(1);
    yield expect(from.mock.results[0].value).resolves.toBe(1000);
}));
test.failing("mock async function rejected", () => __awaiter(void 0, void 0, void 0, function* () {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("Ups"));
    yield (0, async_1.getBalance)("Eko", from);
}));
test("mock async function error matchers", () => __awaiter(void 0, void 0, void 0, function* () {
    const from = jest.fn();
    from.mockRejectedValueOnce("Rejected");
    yield expect((0, async_1.getBalance)("Eko", from)).rejects.toBe("Rejected");
}));
