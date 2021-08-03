import React from 'react';
import Container from 'react-bootstrap/Container'
import Data from '../../components/cart/data'
// import { useSelector, useDispatch } from 'react-redux';
// import {
//     addToCart,
//     removeFromCart,
//     getCartItems
// } from '../redux/cartSlice';

export default function Cart() {

    // const itemsInCart = useSelector(getCartItems);
    // console.log(itemsInCart);
    
    return (
        <>
        <Container>
            <h1>Cart</h1>
            <Data />
        </Container>
        </>
    )
}
