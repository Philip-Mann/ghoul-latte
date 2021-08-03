import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from "./services/api";
import { emailSlice } from './slice/email';
import { cartSlice } from './slice/cart';

export const store = configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      email: emailSlice.reducer,
      cart: cartSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)
