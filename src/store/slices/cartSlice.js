import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const updateItemQuantity = (cartItems, item, amount) => {
  const itemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === item.id
  );
  let isNewItem = false;

  if (itemIndex >= 0) {
    cartItems[itemIndex].quantity += amount;
  } else {
    cartItems.push({ ...item, quantity: amount });
    isNewItem = true;
  }

  return { cartItems, isNewItem };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isCartOpen: false,
    cartAmount: 0,
    cartQuantity: 0,
    cartItems: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
  },
  reducers: {
    toggleCart(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      const { cartItems, isNewItem } = updateItemQuantity(
        state.cartItems,
        action.payload,
        1
      );
      state.cartItems = cartItems;

      if (isNewItem) {
        toast.success(`${action.payload.title} Added To Cart`);
      } else {
        toast.success('Item QTY Increased');
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeItemFromCart(state, action) {
      const updatedItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.cartItems = updatedItems;
      toast.success(`${action.payload.title} Removed From Cart`);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    increaseCartQuantity(state, action) {
      const { cartItems } = updateItemQuantity(
        state.cartItems,
        action.payload,
        1
      );
      state.cartItems = cartItems;

      toast.success('Item QTY Increased');

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    decreaseCartQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        toast.success('item QTY Decreased');
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      toast.success('Cart Cleared');
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    getCartTotal(state, action) {
      let { totalAmount, totalQty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const totalPrice = price * quantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQty += quantity;

          return cartTotal;
        },
        { totalAmount: 0, totalQty: 0 }
      );

      state.cartAmount = totalAmount;
      state.cartQuantity = totalQty;
    },
  },
});

export const {
  toggleCart,
  addItemToCart,
  removeItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  clearCart,
  getCartTotal,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
