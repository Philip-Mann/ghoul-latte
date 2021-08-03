import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
  }
};

export const productSlice = createSlice({
  name: 'fetchApi',
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.data = action.payload;
    },
  }
});

export const { getProductData } = productSlice.actions;

export const productData = (state) => state.fetchApi;

export default productSlice.reducer;