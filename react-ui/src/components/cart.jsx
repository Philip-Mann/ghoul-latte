import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addToCart,
    removeFromCart,
    getCartItems
} from '../store/cartSlice';

export default function Cart() {

    const itemsInCart = useSelector(getCartItems);
    console.log(itemsInCart);
    
    return (
        <h1>Cart</h1>
    )
}
