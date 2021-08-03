import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      addToCart: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.item = [{"hello": "world"}];
      },
      removeFromCart: (state, action) => {
        state.item = [{}]
      }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const getCartItems = (state) => state.cart.items;

export default cartSlice.reducer;