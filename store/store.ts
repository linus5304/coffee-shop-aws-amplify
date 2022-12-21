import create from "zustand";
import {
  CreateOrderInput,
  CreateProductInput
} from "../src/API";
import { CategoryDto, coffeeData, ProductDto } from "../src/data";
import { getCategoryList, getCoffeeList, getUserOrders } from "./api";



// create store
type Store = {
  total: number;
  coffeeList: ProductDto[];
  categoryList: CategoryDto[];
  coffeeInCart: ProductDto[];
  newCoffee: ProductDto;
  selectedItem: ProductDto;
  cartQuantity: number;
  userOrders: CreateOrderInput[];
  addCoffee: () => void;
  addOrder: (item: CreateOrderInput) => void;
  setCategoryList: (userId?: string) => void;
  setCoffeeList: () => void;
  setTotal: () => void;
  setSelectedItem: (item: ProductDto) => void;
  setNewCoffee: (coffee: CreateProductInput) => void;
  addToCart: () => void;
  addQuantity: (item: ProductDto) => void;
  removeQuantity: (item: ProductDto) => void;
  setCartQuantity: () => void;
  updateCartItem: (id: string, data: ProductDto) => void;
  deleteCartItem: (id: string, cartList: ProductDto[]) => void;
  clearCart: () => void;
  setUserOrder: (userId: string) => void;
};

const addCoffee = (coffeeList: ProductDto[], newCoffee: ProductDto) => {
  return [...coffeeList, newCoffee];
};

const addToCart = (cartList: ProductDto[], newCoffee: ProductDto) => {
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
  cartList: ProductDto[],
  id: string,
  newItem: ProductDto
) => {
  return cartList.map(item => {
    if (item.id === id) return { ...newItem };
    return item;
  });
};

const setSelectedItem = (item: ProductDto) => {
  return item;
};
const setCartQuantity = (cartItems: ProductDto[]) => {
  return cartItems.reduce((a, c) => a + c.quantity!, 0);
};

const deleteItem = (cartItems: ProductDto[], id: string) => {
  return cartItems.filter(item => item.id !== id);
};

const useStore = create<Store>()(set => ({
  coffeeList: coffeeData,
  coffeeInCart: [],
  quantity: 1,
  selectedItem: null!,
  cartQuantity: 0,
  total: 0,
  categoryList: [],
  userOrders: [],
  setCoffeeList: async () => {
    // const data = await getCoffeeList();
    set(state => ({
      ...state,
      coffeeList: coffeeData,
    }));
  },
  setSelectedItem(item: ProductDto) {
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
  setNewCoffee(data: ProductDto | undefined) {
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
  addQuantity(data: ProductDto) {
    set(state => ({
      ...state,
      selectedItem: setSelectedItem({ ...data, quantity: data.quantity! + 1 }),
    }));
  },
  removeQuantity(data: ProductDto) {
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
  updateCartItem(id: string, data: ProductDto) {
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
  setCategoryList: async (userId?: string) => {
    const data = await getCategoryList(userId);
    set(state => ({
      ...state,
      categoryList: data,
    }));
  },
  addOrder: (item: CreateOrderInput) => {
    set(state => ({
      ...state,
      userOrders: [...state.userOrders, item],
    }));
  },
  clearCart: () => {
    set(state => ({
      ...state,
      coffeeInCart: [],
      cartQuantity: 0,
      total: 0,
    }));
  },
  setUserOrder: async (userId: string) => {
    const data = await getUserOrders(userId);
    set(state => ({
      ...state,
      userOrders: data,
    }));
  },
}));
export default useStore;
