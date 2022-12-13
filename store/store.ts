import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import create from "zustand";
import { CreateCoffeeInput, ListCategoriesQuery } from "../src/API";
import { CategoryDto, CoffeeDto, coffeeData } from "../src/data";
import {
  getCategory,
  listCategories,
  listCoffees,
} from "../src/graphql/queries";
import { createCoffee } from "../src/graphql/mutations";
// create store
type Store = {
  total: number;
  setTotal: () => void;
  coffeeList: CoffeeDto[];
  categoryList: CategoryDto[];
  setCategoryList: () => void;
  setCoffeeList: () => void;
  coffeeInCart: CoffeeDto[];
  addCoffee: () => void;
  newCoffee: CoffeeDto;
  selectedItem: CoffeeDto;
  cartQuantity: number;
  setSelectedItem: (item: CoffeeDto) => void;
  setNewCoffee: (coffee: CreateCoffeeInput) => void;
  addToCart: () => void;
  addQuantity: (item: CoffeeDto) => void;
  removeQuantity: (item: CoffeeDto) => void;
  setCartQuantity: () => void;
  updateCartItem: (id: string, data: CoffeeDto) => void;
  deleteCartItem: (id: string, cartList: CoffeeDto[]) => void;
};

async function getCategoryList() {
  try {
    const result = await API.graphql<{ data: any }>({
      authMode: "API_KEY",
      query: listCategories,
    });
    console.log("Categories ", result);
    return result["data"].listCategories.items as CategoryDto[];
  } catch (error) {
    console.log("Errors ", error);
  }
}
async function getCoffeeList() {
  try {
    const result = await API.graphql<CategoryDto>({
      authMode: "API_KEY",
      query: listCoffees,
    });
    console.log("Coffee ", result);
    return result["data"].listCoffees.items as CoffeeDto[];
  } catch (error) {
    console.log("Errors ", error);
  }
}

export async function handleCreateCoffee(data: CreateCoffeeInput) {
  try {
    await API.graphql<{ data: any }>({
      authMode: "API_KEY",
      query: createCoffee,
      variables: {
        input: data,
      },
    });
  } catch (error) {
    console.log("Errors ", error);
  }
}

const addCoffee = (coffeeList: CoffeeDto[], newCoffee: CoffeeDto) => {
  return [...coffeeList, newCoffee];
};

const addToCart = (cartList: CoffeeDto[], newCoffee: CoffeeDto) => {
  const data = cartList.find(item => item.id === newCoffee.id);
  if (data) {
    return [
      ...cartList.map(item => {
        if (item.id === data.id)
          return { ...item, quantity: item.quantity! + newCoffee.quantity! };
        return item;
      }),
    ];
  }
  return [...cartList, newCoffee];
};

const updateCartItem = (
  cartList: CoffeeDto[],
  id: string,
  newItem: CoffeeDto
) => {
  return cartList.map(item => {
    if (item.id === id) return { ...newItem };
    return item;
  });
};

const setSelectedItem = (item: CoffeeDto) => {
  return item;
};
const setCartQuantity = (cartItems: CoffeeDto[]) => {
  return cartItems.reduce((a, c) => a + c.quantity!, 0);
};

const deleteItem = (cartItems: CoffeeDto[], id: string) => {
  return cartItems.filter(item => item.id !== id);
};

const useStore = create<Store>()(set => ({
  coffeeList: [],
  coffeeInCart: [],
  quantity: 1,
  selectedItem: null!,
  cartQuantity: 0,
  total: 0,
  categoryList: [],
  setCoffeeList: async () => {
    const data = await getCoffeeList();
    set(state => ({
      ...state,
      coffeeList: data,
    }));
  },
  setSelectedItem(item: CoffeeDto) {
    set(state => ({
      ...state,
      selectedItem: setSelectedItem(item),
    }));
  },
  addCoffee() {
    set(state => ({
      ...state,
      coffeeList: addCoffee(state.coffeeList, state.newCoffee),
      newCoffee: null!,
    }));
  },
  newCoffee: null!,
  setNewCoffee(data: CoffeeDto | undefined) {
    set(state => ({
      ...state,
      newCoffee: data,
    }));
  },
  addToCart() {
    set(state => ({
      ...state,
      coffeeInCart: addToCart(state.coffeeInCart, state.newCoffee),
    }));
  },
  addQuantity(data: CoffeeDto) {
    set(state => ({
      ...state,
      selectedItem: setSelectedItem({ ...data, quantity: data.quantity! + 1 }),
    }));
  },
  removeQuantity(data: CoffeeDto) {
    set(state => ({
      ...state,
      selectedItem: setSelectedItem({
        ...data,
        quantity:
          data.quantity && data.quantity > 0
            ? data.quantity - 1
            : data.quantity,
      }),
    }));
  },
  setCartQuantity() {
    set(state => ({
      ...state,
      cartQuantity: setCartQuantity(state.coffeeInCart),
    }));
  },
  updateCartItem(id: string, data: CoffeeDto) {
    set(state => ({
      ...state,
      coffeeInCart: updateCartItem(state.coffeeInCart, id, data),
    }));
  },
  setTotal() {
    set(state => ({
      ...state,
      total: state.coffeeInCart.reduce((a, c) => a + c.price! * c.quantity!, 0),
    }));
  },
  deleteCartItem(id: string) {
    set(state => ({
      ...state,
      coffeeInCart: deleteItem(state.coffeeInCart, id),
    }));
  },
  setCategoryList: async () => {
    const data = await getCategoryList();
    set(state => ({
      ...state,
      categoryList: data,
    }));
  },
}));
export default useStore;
