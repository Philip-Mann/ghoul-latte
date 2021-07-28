import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

// To use Dev Tools in our broswer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Gives us the ability to use Asnyc code
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
