import create from "zustand";
import { Coffee, coffeeData } from "../src/data";
// create store
type Store = {
  total: number;
  setTotal: () => void;
  coffeeList: Coffee[];
  coffeeInCart: Coffee[];
  addCoffee: () => void;
  newCoffee: Coffee;
  selectedItem: Coffee;
  cartQuantity: number;
  setSelectedItem: (item: Coffee) => void;
  setNewCoffee: (coffee: Coffee | undefined) => void;
  addToCart: () => void;
  addQuantity: (item: Coffee) => void;
  removeQuantity: (item: Coffee) => void;
  setCartQuantity: () => void;
  updateCartItem: (id: number, data: Coffee) => void;
  deleteCartItem: (id: number, cartList: Coffee[]) => void;
};

const addCoffee = (coffeeList: Coffee[], newCoffee: Coffee) => {
  return [...coffeeList, newCoffee];
};

const addToCart = (cartList: Coffee[], newCoffee: Coffee) => {
  const data = cartList.find(item => item.id === newCoffee.id);
  if (data) {
    return [
      ...cartList.map(item => {
        if (item.id === data.id)
          return { ...item, quantity: item.quantity + newCoffee.quantity };
        return item;
      }),
    ];
  }
  return [...cartList, newCoffee];
};

const updateCartItem = (cartList: Coffee[], id: number, newItem: Coffee) => {
  return cartList.map(item => {
    if (item.id === id) return { ...newItem };
    return item;
  });
};

const setSelectedItem = (item: Coffee) => {
  return item;
};
const setCartQuantity = (cartItems: Coffee[]) => {
  return cartItems.reduce((a, c) => a + c.quantity, 0);
};

const deleteItem = (cartItems: Coffee[], id: number) => {
  return cartItems.filter(item => item.id !== id);
};

const useStore = create<Store>()(set => ({
  coffeeList: coffeeData,
  coffeeInCart: [],
  quantity: 1,
  selectedItem: null!,
  cartQuantity: 0,
  total: 0,
  setSelectedItem(item: Coffee) {
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
  setNewCoffee(data: Coffee | undefined) {
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
  addQuantity(data: Coffee) {
    set(state => ({
      ...state,
      selectedItem: setSelectedItem({ ...data, quantity: data.quantity + 1 }),
    }));
  },
  removeQuantity(data: Coffee) {
    set(state => ({
      ...state,
      selectedItem: setSelectedItem({
        ...data,
        quantity: data.quantity > 0 ? data.quantity - 1 : data.quantity,
      }),
    }));
  },
  setCartQuantity() {
    set(state => ({
      ...state,
      cartQuantity: setCartQuantity(state.coffeeInCart),
    }));
  },
  updateCartItem(id: number, data: Coffee) {
    set(state => ({
      ...state,
      coffeeInCart: updateCartItem(state.coffeeInCart, id, data),
    }));
  },
  setTotal() {
    set(state => ({
      ...state,
      total: state.coffeeInCart.reduce((a, c) => a + c.price * c.quantity, 0),
    }));
  },
  deleteCartItem(id: number) {
    set(state => ({
      ...state,
      coffeeInCart: deleteItem(state.coffeeInCart, id),
    }));
  },
}));
export default useStore;
