import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state = action.payload;
    },
  }
});

// export const { getProductData } = emailSlice.actions;

export const productData = (state) => state.email;

export default emailSlice.reducer;