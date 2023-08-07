import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 323,
  //     name: "Pazza",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = item of cart
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizza id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizza id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizza id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItem,
  clearCart,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce((price, item) => price + item.totalPrice, 0);
}

export function getTotalCartQuantity(state) {
  return state.cart.cart.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );
}

export function getCart(state) {
  return state.cart.cart;
}

// Selector to return quantity in the cart of the pizza with given id
export function getPizzaQuantity(id) {
  return (state) => {
    const pizza = state.cart.cart.find((item) => item.pizzaId === id);
    return pizza?.quantity ?? 0;
  };
}
