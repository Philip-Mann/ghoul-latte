// import { applyMiddleware, compose, createStore } from "redux";
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "../services/api";
import { updateEmail } from '../actions'

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        blah: 'hardcoded string'
    },
    // https://redux-toolkit.js.org/rtk-query/overview
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware)
})

setupListeners(store.dispatch);