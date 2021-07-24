import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

// To use Dev Tools in our broswer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Gives us the ability to use Asnyc code
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));









// import { configureStore } from '@reduxjs/toolkit';
// import cartSlice from './cartSlice';

// export const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });
