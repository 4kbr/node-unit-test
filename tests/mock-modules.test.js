"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../src/database");
const product_service_1 = require("../src/product-service");
jest.mock("../src/database");
test("mock modules getProductById", () => {
    database_1.getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "Product Mock",
        };
    });
    const product = product_service_1.ProductService.findById(1);
    expect(product).toEqual({
        id: 1,
        name: "Product Mock",
    });
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
