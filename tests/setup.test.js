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
const sum_1 = require("../src/sum");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    console.info("Before All");
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    console.info("After All");
}));
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    console.info("Before Each");
}));
afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
    console.info("After Each");
}));
test("first test", () => __awaiter(void 0, void 0, void 0, function* () {
    expect((0, sum_1.sum)(10, 10)).toBe(20);
    console.info("First Test");
}));
test("second test", () => {
    expect((0, sum_1.sum)(10, 10)).toBe(20);
    console.info("Second Test");
});
