import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database");

test("mock modules getProductById", () => {
  (getProductById as any).mockImplementation((id: any) => {
    return {
      id: id,
      name: "Product Mock",
    };
  });

  const product = ProductService.findById(1);

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

  (getAllProducts as any).mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});
