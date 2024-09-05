import { configureStore } from '@reduxjs/toolkit';

import {
  clearCart,
  toggleCart,
  cartReducer,
  getCartTotal,
  addItemToCart,
  removeItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
} from './slices/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export {
  store,
  clearCart,
  toggleCart,
  getCartTotal,
  addItemToCart,
  removeItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
};
