import { applyMiddleware, compose, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import api from './services/api'
import fetchReducer from '../redux/reducers/fetchApiSlice';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const store = configureStore({
    reducer: {
        fetchApi: fetchReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

// To use Dev Tools in our broswer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Gives us the ability to use Asnyc code
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


