import { SEARCH_PRODUCTS } from '../actionTypes';

const initialState = '';

export default function searchProducts(state = initialState, action) {
    if(action.type === SEARCH_PRODUCTS) {
        console.log("in reducer", action.payload.searchProducts);
        
        return action.payload.searchProducts
    }
    return state;
};