import { coffeeData } from "../src/data";
import { handleCreateProduct } from "../store/api";

export function seedCoffeeDB() {
  for (let coffee of coffeeData) {
    handleCreateProduct(coffee);
  }
}
