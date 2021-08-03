import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
  }
};

export const fetchApiSlice = createSlice({
  name: 'fetchApi',
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.data = action.payload;
    },
  }
});

export const { getProductData } = fetchApiSlice.actions;

export const productData = (state) => state.fetchApi;

export default fetchApiSlice.reducer;