import { getAllProducts, getProductById } from "./database";

export class ProductService {
  static findById(id: number) {
    return getProductById(id);
  }

  static findAll() {
    return getAllProducts();
  }
}
