"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../src/database");
const product_service_1 = require("../src/product-service");
jest.mock("../src/database", () => {
    const originalModule = jest.requireActual("../src/database");
    return Object.assign(Object.assign({ __esModule: true }, originalModule), { getAllProducts: jest.fn() });
});
test.failing("mock modules getProductById", () => {
    product_service_1.ProductService.findById(1);
});
test("mock modules getAllProducts", () => {
    const products = [
        {
            id: 1,
            name: "Product Mock",
        },
        {
            id: 2,
            name: "Product Mock",
        },
    ];
    database_1.getAllProducts.mockImplementation(() => {
        return products;
    });
    expect(product_service_1.ProductService.findAll()).toEqual(products);
});
