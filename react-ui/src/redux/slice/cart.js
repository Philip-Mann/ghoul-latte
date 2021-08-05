import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

// ...cartItem

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      // console.log('action', action.payload)
      state.cartItems = [...state.cartItems, action.payload];
    }
  }
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;