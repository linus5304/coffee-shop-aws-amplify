import { coffeeData } from "../src/data";
import { handleCreateCoffee } from "../store/store";

export function seedCoffeeDB() {
  for (let coffee of coffeeData) {
    handleCreateCoffee(coffee);
  }
}
